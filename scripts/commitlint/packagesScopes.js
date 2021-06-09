/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { findScopes } = require('./common');

module.exports = {
  getScopes: path => {
    const websiteScopes = findScopes(path, () => true, true);
    return new Set(websiteScopes);
  },
};
