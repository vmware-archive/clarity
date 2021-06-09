/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { readFileSync } = require('fs');
const { resolve } = require('path');

const getJsonData = path => {
  const json = readFileSync(path, 'utf8');

  try {
    return JSON.parse(json);
  } catch {
    throw new Error(`${path} has invalid syntax`);
  }
};

const generateCommitLintScopes = projects => {
  let _scopes = [];

  Object.entries(projects).forEach(([project, scopes]) => {
    const projectScopes = scopes.map(scope => `${project}/${scope}`);
    _scopes = _scopes.concat([project, ...projectScopes]);
  });

  return _scopes;
};

const getScopes = path => {
  if (!path) {
    path = resolve(process.cwd(), './scripts/commitlint/customScopes.json');
  }

  const scopes = getJsonData(path);

  if (scopes) {
    return new Set(generateCommitLintScopes(scopes));
  }

  return new Set([]);
};

module.exports = {
  getScopes,
};
