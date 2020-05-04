/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const theo = require('theo');

const relativeValueStore = {};

function getId() {
  return Math.random().toString(36).substr(2, 9);
}

function getRemValue(prop, base) {
  return `${(parseInt(prop.value.slice(0, -2)) / base).toFixed(base === 20 ? 2 : 4)}rem`;
}

function isRelativePxValue(prop) {
  return prop.type === 'px' && !prop['absolute-value'];
}

function getPropValue(prop, base = 20) {
  return isRelativePxValue(prop) ? getRemValue(prop, base) : prop.value;
}

function getPropString(prop, base = 20) {
  // if the token is private but a relative value we generate a unique css custom prop
  // to be able dynamically adjust it for apps using base 16px font size
  if (prop.private && isRelativePxValue(prop)) {
    relativeValueStore[prop.value] = relativeValueStore[prop.value] ? relativeValueStore[prop.value] : getId();
    return `    --cds_${relativeValueStore[prop.value]}: ${getPropValue(prop, base)};\n`;
  } else {
    return `    --cds-token-${prop.category}-${prop.name}: ${getPropValue(prop, base)};\n`;
  }
}

theo.registerFormat('core-tokens-public', result => {
  const tokens = result
    .get('props')
    .map(prop => prop.toJS())
    .filter(prop => !prop.legacy);

  const properties = tokens
    .filter(prop => !prop.private)
    .map(prop => getPropString(prop))
    .sort()
    .reduce((props, next) => `${props}${next}`, '');

  const base16Properties = tokens
    .filter(prop => isRelativePxValue(prop))
    .map(prop => getPropString(prop, 16))
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
    .map(prop => prop.toJS())
    .map(prop => {
      const value = getPropValue(prop);
      const sassVariable = `$cds-token-${prop.category}-${prop.name}`;
      const propName =
        prop.private && isRelativePxValue(prop)
          ? `--cds_${relativeValueStore[prop.value]}`
          : `--cds-token-${prop.category}-${prop.name}`;
      const cssProp = `var(${propName}, ${value})`;
      const dynamicVariable =
        !prop.private || (prop.private && isRelativePxValue(prop))
          ? `${sassVariable}: ${cssProp};\n`
          : `${sassVariable}: ${value};\n`;
      const staticVariable = `${sassVariable}-static: ${value};`;

      return `${dynamicVariable}${staticVariable}`;
    })
    .sort()
    .reduce((props, next) => `${props}\n${next}`, '')}`;
});

fs.mkdir('./src/styles/tokens/generated', { recursive: true }, () => {});

theo
  .convert({
    format: { type: 'core-tokens-public' },
    transform: {
      type: 'web',
      file: './tokens.yml',
    },
  })
  .then(scss => fs.writeFileSync('./src/styles/tokens/generated/_public.scss', scss));

theo
  .convert({
    format: { type: 'core-tokens-scss' },
    transform: {
      type: 'web',
      file: './tokens.yml',
    },
  })
  .then(scss => fs.writeFileSync('./src/styles/tokens/generated/_index.scss', scss));

theo
  .convert({
    format: { type: 'raw.json' },
    transform: {
      type: 'web',
      file: './tokens.yml',
    },
  })
  .then(json => {
    const data = JSON.parse(json);
    Object.keys(data.props)
      .filter(propName => data.props[propName].type === 'px')
      .map(propName => {
        data.props[propName].base20Rem = getPropValue(data.props[propName]);
      });

    fs.writeFileSync('./src/styles/tokens/generated/index.json', JSON.stringify(data, {}, 2));
  });
