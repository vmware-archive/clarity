/**
 * Sandbox Web Dev Server
 *
 * Provides a sandbox dev env in ./sandbox
 */

import baseConfig from './web-dev-server.config.mjs';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  ...baseConfig,
  open: './sandbox/',
});
