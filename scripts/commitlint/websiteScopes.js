/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { readdirSync } = require('fs');
const { findScopes } = require('./common');

const isScopeDirectory = directory => {
  const dir = readdirSync(directory, { withFileTypes: true });

  const isScope = dir.find(el => el.isFile() && el.name === 'README.md');

  if (isScope) {
    return true;
  }

  return false;
};

module.exports = {
  getScopes: websiteProjectPath => {
    const projectName = 'website';
    const websiteScopes = findScopes(websiteProjectPath, isScopeDirectory)
      .map(x => `${projectName}/${x}`)
      .concat([projectName]);
    return new Set(websiteScopes);
  },
};
