/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import https, {RequestOptions} from 'https';
import createHttpsProxyAgent, {HttpsProxyAgentOptions} from 'https-proxy-agent';
import {join} from 'path';
import ProgressBar from 'progress';
import {getProxyForUrl} from 'proxy-from-env';
import {BrowserFetcher} from 'puppeteer-core';
import {PUPPETEER_REVISIONS} from 'puppeteer-core/internal/revisions.js';
import URL from 'url';
import {getConfiguration} from '../getConfiguration.js';

/**
 * @internal
 */
const supportedProducts = {
  chrome: 'Chromium',
  firefox: 'Firefox Nightly',
} as const;

/**
 * @internal
 */
export async function downloadBrowser(): Promise<void> {
  const configuration = getConfiguration();
  if (configuration.skipDownload) {
    logPolitely('**INFO** Skipping browser download as instructed.');
  }

  const product = configuration.defaultProduct!;
  const browserFetcher = new BrowserFetcher({
    product,
    host: configuration.downloadHost,
    path:
      configuration.downloadPath ??
      join(configuration.cacheDirectory!, product),
  });

  let revision = configuration.browserRevision;

  if (!revision) {
    switch (product) {
      case 'chrome':
        revision = PUPPETEER_REVISIONS.chromium;
        break;
      case 'firefox':
        revision = PUPPETEER_REVISIONS.firefox;
        revision = await getFirefoxNightlyVersion();
        break;
    }
  }

  await fetchBinary(revision);

  function fetchBinary(revision: string) {
    const revisionInfo = browserFetcher.revisionInfo(revision);

    // Do nothing if the revision is already downloaded.
    if (revisionInfo.local) {
      logPolitely(
        `${supportedProducts[product]} is already in ${revisionInfo.folderPath}; skipping download.`
      );
      return;
    }

    // Override current environment proxy settings with npm configuration, if any.
    const NPM_HTTPS_PROXY =
      process.env['npm_config_https_proxy'] || process.env['npm_config_proxy'];
    const NPM_HTTP_PROXY =
      process.env['npm_config_http_proxy'] || process.env['npm_config_proxy'];
    const NPM_NO_PROXY = process.env['npm_config_no_proxy'];

    if (NPM_HTTPS_PROXY) {
      process.env['HTTPS_PROXY'] = NPM_HTTPS_PROXY;
    }
    if (NPM_HTTP_PROXY) {
      process.env['HTTP_PROXY'] = NPM_HTTP_PROXY;
    }
    if (NPM_NO_PROXY) {
      process.env['NO_PROXY'] = NPM_NO_PROXY;
    }

    function onSuccess(localRevisions: string[]): void {
      logPolitely(
        `${supportedProducts[product]} (${revisionInfo.revision}) downloaded to ${revisionInfo.folderPath}`
      );
      localRevisions = localRevisions.filter(revision => {
        return revision !== revisionInfo.revision;
      });
      const cleanupOldVersions = localRevisions.map(revision => {
        return browserFetcher.remove(revision);
      });
      Promise.all([...cleanupOldVersions]);
    }

    function onError(error: Error) {
      console.error(
        `ERROR: Failed to set up ${supportedProducts[product]} r${revision}! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download.`
      );
      console.error(error);
      process.exit(1);
    }

    let progressBar: ProgressBar | null = null;
    let lastDownloadedBytes = 0;
    function onProgress(downloadedBytes: number, totalBytes: number) {
      if (!progressBar) {
        progressBar = new ProgressBar(
          `Downloading ${
            supportedProducts[product]
          } r${revision} - ${toMegabytes(totalBytes)} [:bar] :percent :etas `,
          {
            complete: '=',
            incomplete: ' ',
            width: 20,
            total: totalBytes,
          }
        );
      }
      const delta = downloadedBytes - lastDownloadedBytes;
      lastDownloadedBytes = downloadedBytes;
      progressBar.tick(delta);
    }

    return browserFetcher
      .download(revisionInfo.revision, onProgress)
      .then(() => {
        return browserFetcher.localRevisions();
      })
      .then(onSuccess)
      .catch(onError);
  }

  function toMegabytes(bytes: number) {
    const mb = bytes / 1024 / 1024;
    return `${Math.round(mb * 10) / 10} Mb`;
  }

  async function getFirefoxNightlyVersion(): Promise<string> {
    const firefoxVersionsUrl =
      'https://product-details.mozilla.org/1.0/firefox_versions.json';

    const proxyURL = getProxyForUrl(firefoxVersionsUrl);

    const requestOptions: RequestOptions = {};

    if (proxyURL) {
      const parsedProxyURL = URL.parse(proxyURL);

      const proxyOptions = {
        ...parsedProxyURL,
        secureProxy: parsedProxyURL.protocol === 'https:',
      } as HttpsProxyAgentOptions;

      requestOptions.agent = createHttpsProxyAgent(proxyOptions);
      requestOptions.rejectUnauthorized = false;
    }

    const promise = new Promise<string>((resolve, reject) => {
      let data = '';
      logPolitely(
        `Requesting latest Firefox Nightly version from ${firefoxVersionsUrl}`
      );
      https
        .get(firefoxVersionsUrl, requestOptions, r => {
          if (r.statusCode && r.statusCode >= 400) {
            return reject(new Error(`Got status code ${r.statusCode}`));
          }
          r.on('data', chunk => {
            data += chunk;
          });
          r.on('end', () => {
            try {
              const versions = JSON.parse(data);
              return resolve(versions.FIREFOX_NIGHTLY);
            } catch {
              return reject(new Error('Firefox version not found'));
            }
          });
        })
        .on('error', reject);
    });
    return promise;
  }
}

/**
 * @internal
 */
function logPolitely(toBeLogged: unknown): void {
  const logLevel = process.env['npm_config_loglevel'] || '';
  const logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;

  // eslint-disable-next-line no-console
  if (!logLevelDisplay) {
    console.log(toBeLogged);
  }
}
