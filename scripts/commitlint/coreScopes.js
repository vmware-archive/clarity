/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { readdirSync } = require('fs');
const { findScopes, delimiter } = require('./common');

const isScopeDirectory = directory => {
  const dir = readdirSync(directory, { withFileTypes: true });

  const isScope = dir.find(el => el.isFile() && el.name.includes('.element.ts'));

  if (isScope) {
    return true;
  }

  return false;
};

module.exports = {
  getScopes: coreProjectPath => {
    const elements = findScopes(`${coreProjectPath}/src`, isScopeDirectory);

    const core = elements.map(x => `core${delimiter}${x}`);
    const react = elements.map(x => `react${delimiter}${x}`);

    const design = findScopes(`${coreProjectPath}/src/styles`, () => true).map(x => `core${delimiter}${x}`);

    return new Set([...core, ...react, ...design, 'core', 'react']);
  },
};
