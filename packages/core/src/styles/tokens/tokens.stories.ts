/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import * as tokenData from './generated/index.json';

export default {
  title: 'Experimental/Design Tokens/Stories',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

interface Token {
  value: string;
  type: string;
  category: string;
  originalValue: string;
  name: string;
  publicName: string;
  cssProp: string;
  private: boolean;
  base20Rem?: string;
  'absolute-value': string;
  'value-on'?: string;
}

function getTokens(): Token[] {
  const tokens: { [key: string]: Token } = (tokenData as any).props;
  return Object.keys(tokens)
    .filter(tokenName => tokens[tokenName].private !== true)
    .map(tokenName => tokens[tokenName])
    .map(t => {
      const publicName = `cds-token-${t.category}-${t.name}`;
      return {
        ...t,
        publicName,
        cssProp: `--${publicName}`,
      };
    });
}

function getTokensByCategory(category = '') {
  return getTokens().filter(token => token.category === category);
}

function getTokenPxValueTemplate(token: Token) {
  const value = token.base20Rem && !token['absolute-value'] ? `${token.value} (${token.base20Rem})` : token.value;
  return html`<span cds-text="code">${value}</span>`;
}

export const global = () => {
  return html`
    <div cds-layout="horizontal gap:xl">
      ${getTokensByCategory('global').map(
        token => html`<p cds-text="subsection">${token.cssProp}: ${getTokenPxValueTemplate(token)}</p>`
      )}
    </div>
  `;
};

export const space = () => {
  return html`
    <div cds-layout="vertical gap:xl">
      ${getTokensByCategory('space').map(
        token => html`
          <div cds-text="message">
            <span class="space-demo" style="width: ${token.value}"></span>
            <span>${token.cssProp}: ${getTokenPxValueTemplate(token)}</span>
          </div>
        `
      )}
    </div>
  `;
};

export const layoutSpace = () => {
  return html`
    <div cds-layout="vertical gap:xl">
      ${getTokensByCategory('layout-space').map(
        token => html`
          <div cds-text="message">
            <span class="space-demo" style="width: ${token.value}"></span>
            <span>${token.cssProp}: ${getTokenPxValueTemplate(token)}</span>
          </div>
        `
      )}
    </div>
  `;
};

export const layout = () => {
  return html`
    <div cds-layout="horizontal gap:xl">
      ${getTokensByCategory('layout').map(
        token => html`<p cds-text="subsection">${token.cssProp}: ${getTokenPxValueTemplate(token)}</p>`
      )}
    </div>
  `;
};

export const typography = () => {
  return html`
    <div cds-layout="horizontal gap:xl">
      ${getTokensByCategory('typography').map(
        token => html`<p cds-text="subsection">${token.cssProp}: ${getTokenPxValueTemplate(token)}</p>`
      )}
    </div>
  `;
};

function getColorGroup(group: string) {
  const colors = getTokensByCategory('color');
  return html`
    <div cds-layout="container:fill">
      ${colors
        .filter(token => token.cssProp.includes(group))
        .map(
          token => html`
            <div
              style="background: ${token.value}; color: ${token['value-on']}"
              cds-layout="p:md display:flex"
              cds-text="body"
            >
              ${token.cssProp}<br />${token.value};
            </div>
          `
        )}
    </div>
  `;
}

export const color = () => {
  return html`
    <div cds-layout="grid cols@sm:6 cols@md:4 gap:xl">
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Neutral</h2>
        ${getColorGroup('neutral')}
      </div>
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Action</h2>
        ${getColorGroup('color-action')}
      </div>
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Secondary Action</h2>
        ${getColorGroup('secondary')}
      </div>
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Danger</h2>
        ${getColorGroup('danger')}
      </div>
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Warning</h2>
        ${getColorGroup('warning')}
      </div>
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Success</h2>
        ${getColorGroup('success')}
      </div>
    </div>
  `;
};
