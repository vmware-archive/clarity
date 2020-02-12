/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const theo = require('theo');

function getRemValue(prop, base = 20) {
  return `${(parseInt(prop.value.slice(0, -2)) / base).toFixed(base === 20 ? 2 : 4)}rem`;
}

function isRelativePxValue(prop) {
  return prop.type === 'px' && !prop['absolute-value'];
}

function getPropValue(prop) {
  return isRelativePxValue(prop) ? getRemValue(prop) : prop.value;
}

theo.registerFormat('core-tokens-public', result => {
  const publicTokens = result
    .get('props')
    .map(prop => prop.toJS())
    .filter(prop => prop.private !== true);

  const properties = publicTokens
    .map(prop => `    --cds-token-${prop.category}-${prop.name}: ${getPropValue(prop)};\n`)
    .sort()
    .reduce((props, next) => `${props}${next}`, '');

  const base16Properties = publicTokens
    .filter(prop => isRelativePxValue(prop))
    .map(prop => `    --cds-token-${prop.category}-${prop.name}: ${getRemValue(prop, 16)};\n`)
    .sort()
    .reduce((props, next) => `${props}${next}`, '');

  return `
  :root {
${properties}
  }
  
  [cds-base-font='16'] {
    --cds-token-global-base-font-size: 100%;
${base16Properties}
  }
  `;
});

theo.registerFormat('core-tokens-scss', result => {
  return `${result
    .get('props')
    .map(prop => {
      const value = getPropValue(prop.toJS());
      const name = `$cds-token-${prop.get('category')}-${prop.get('name')}`;
      const staticVariableName = `${name}-static`;
      const staticVariable = `${staticVariableName}: ${value};`;
      const cssProp = `var(--cds-token-${prop.get('category')}-${prop.get('name')}, ${value});`;
      const variable = prop.get('private') !== true ? `${name}: ${cssProp}` : `${name}: ${value};`;

      return `${staticVariable}\n${variable}`;
    })
    .toJS()
    .sort()
    .reduce((props, next) => `${props}\n${next}`, '')}`;
});

fs.mkdir('./src/clr-core/styles/tokens/generated', { recursive: true }, () => {});

theo
  .convert({
    transform: {
      type: 'web',
      file: './src/clr-core/styles/tokens/tokens.yml',
    },
    format: {
      type: 'core-tokens-public',
    },
  })
  .then(scss => fs.writeFileSync('./src/clr-core/styles/tokens/generated/_public.scss', scss));

theo
  .convert({
    transform: {
      type: 'web',
      file: './src/clr-core/styles/tokens/tokens.yml',
    },
    format: {
      type: 'core-tokens-scss',
    },
  })
  .then(scss => fs.writeFileSync('./src/clr-core/styles/tokens/generated/_index.scss', scss));

theo
  .convert({
    transform: {
      type: 'web',
      file: './src/clr-core/styles/tokens/tokens.yml',
    },
    format: {
      type: 'raw.json',
    },
  })
  .then(json => {
    const data = JSON.parse(json);
    Object.keys(data.props)
      .filter(propName => data.props[propName].type === 'px')
      .map(propName => {
        data.props[propName].base20Rem = getPropValue(data.props[propName]);
      });

    fs.writeFileSync('./src/clr-core/styles/tokens/generated/index.json', JSON.stringify(data, {}, 2));
  });
