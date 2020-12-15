import { baseTheme } from './tokens';
import { Token, CdsTheme } from './token-utils';
import * as fs from 'fs';

fs.mkdir('../src/styles/tokens/generated', { recursive: true }, () => console.log('Building Tokens...'));
fs.writeFileSync('../src/styles/tokens/generated/tokens.json', JSON.stringify(flattenTheme(baseTheme), null, 2));
fs.writeFileSync('../src/styles/tokens/generated/_index.scss', buildSassTokens(baseTheme));
fs.writeFileSync('../src/styles/tokens/generated/_public.scss', buildCSSTokens(baseTheme));

function buildSassTokens(theme: CdsTheme) {
  return Object.entries(flattenTheme(theme))
    .map(tokenEntry => `${tokenToSass(tokenEntry[1])}\n`)
    .join('')
    .trim();
}

function buildCSSTokens(theme: CdsTheme) {
  const tokens = Object.entries(flattenTheme(theme));
  return `
:root {
  ${tokens
    .map(tokenEntry => `  --cds-${camelCaseToKebab(tokenEntry[1].name)}: ${convertCSSValue(tokenEntry[1])};\n`)
    .join('')
    .trim()}
}

[cds-base-font='16'] {
  --cds-global-typography-base-font-size: 100%;
  ${tokens
    .filter(tokenEntry => typeof tokenEntry[1].value === 'number')
    .map(tokenEntry => `  --cds-${camelCaseToKebab(tokenEntry[1].name)}: ${convertCSSValue(tokenEntry[1], 16)};\n`)
    .join('')
    .trim()}
}`;
}

function tokenToSass(token: Token) {
  const propName = camelCaseToKebab(token.name);
  let staticValue;

  if (typeof token.value === 'number') {
    staticValue = convertCSSValue(token);
  } else if (typeof token.value === 'string' && token.value.slice(-2) === 'em') {
    staticValue = token.value;
  }

  const staticVar = staticValue ? `\n$cds-${propName}-static: ${staticValue};` : '';
  const dynamicVar = `$cds-${propName}: var(--cds-${camelCaseToKebab(token.name)}, ${convertCSSValue(token)});`;

  return `${dynamicVar}${staticVar}`;
}

function flattenTheme(theme: any) {
  function flatten(config: any, parent = ''): { [key: string]: Token } {
    return Object.entries(config)
      .map(([key, value]: [string, any]) => {
        if (typeof value === 'object' && !(value instanceof Token)) {
          return flatten(value, `${parent}${key[0].toUpperCase() + key.slice(1)}`);
        }

        value.name = `${parent[0].toLowerCase() + parent.slice(1)}${key[0].toUpperCase() + key.slice(1)}`
          .replace('aliases', 'alias')
          .replace('Value', '');
        return { [value.name]: value };
      })
      .reduce((prev, next) => ({ ...prev, ...next }), {});
  }

  return flatten(theme);
}

function convertCSSValue(token: Token, base = 20) {
  let value = token.value;

  if (token.config.absolute) {
    value = token.value;
  } else if (typeof token.value === 'number') {
    value = `${(token.value / base).toFixed(base === 20 ? 2 : 4)}rem`;
  } else if (Array.isArray(token.value) && token.value.length === 3) {
    // hsl
    value = `hsl(${token.value[0]}, ${token.value[1]}%, ${token.value[2]}%)`;
  } else if (token.value instanceof Token) {
    value = `var(--cds-${camelCaseToKebab(token.value.name)}, ${convertCSSValue(token.value)})`; // reference
  }

  return value;
}

function camelCaseToKebab(val: string) {
  return val.replace(/([A-Z]|\d+)/g, '-$1').toLocaleLowerCase();
}
