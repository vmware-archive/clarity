/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, TemplateResult } from 'lit-html';
import { default as tokenData } from './generated/tokens.json';

export default {
  title: 'Stories/Design Tokens',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

interface Token {
  name: string;
  alias: string;
  value: string | number | number[];
  formattedValue?: string | TemplateResult;
  demo?: string | TemplateResult;
}

function getTokenTable(key: string) {
  return html` <style>
      .token-table {
        width: 100%;
      }

      .token-table tr {
        border-bottom: 1px solid #ccc;
        line-height: 0;
        min-height: 45px;
        width: 100%;
      }

      .token-table td {
        padding: 0;
      }
    </style>
    <table class="token-table">
      <tr cds-layout="grid gap:lg p-y:md align:horizontal-stretch align:vertical-center" cds-text="left">
        <th cds-layout="col:5">Token</th>
        <th cds-layout="col:3">Value</th>
        <th cds-layout="col:4">Demo</th>
      </tr>
      ${getTokens(key).map(token => {
        return html`<tr cds-layout="grid gap:md p:md align:horizontal-stretch align:vertical-center">
          <td cds-layout="col:5">
            <span cds-text="body">${token.name}</span>
          </td>
          <td cds-layout="col:4 vertical gap:lg">
            ${token.formattedValue}
          </td>
          <td cds-layout="col:3">${token.demo}</td>
        </tr>`;
      })}
    </table>`;
}

function getTokens(val: string) {
  return Object.entries(tokenData)
    .filter(([key]) => key.includes(val))
    .map((token: [string, any]) => {
      return createToken({
        name: tokenToCssProp(token[0]),
        alias: token[1].alias ? tokenToCssProp(token[1].alias) : '',
        value: token[1].value,
      });
    });
}

function createToken(token: Token) {
  token.formattedValue = html`<span cds-text="code">${token.value}</span>`;

  if (isColorToken(token)) {
    setColorToken(token);
  } else if (isSpaceToken(token)) {
    setSpaceToken(token);
  } else if (token.name.includes('alias-object-shadow')) {
    setShadowToken(token);
  } else if (token.name.includes('alias-object-opacity')) {
    setOpacityToken(token);
  } else if (token.name.includes('alias-object-border-radius')) {
    setBorderRadiusToken(token);
  } else if (token.name.includes('alias-object-border-width')) {
    setBorderWidthToken(token);
  } else if (token.name.includes('font-weight')) {
    setFontWeightToken(token);
  } else if (token.name.includes('font-size')) {
    setFontSizeToken(token);
  } else if (typeof token.value === 'number') {
    setNumberToken(token);
  }

  return token;
}

function tokenToCssProp(name: string) {
  return `--cds-${name.replace(/([A-Z]|\d+)/g, '-$1').toLocaleLowerCase()}`;
}

function hslToRgb(h: number, s: number, l: number) {
  s = s / 100;
  l = l / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: any, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function rgbToHex(red: number, green: number, blue: number) {
  let r = red.toString(16);
  let g = green.toString(16);
  let b = blue.toString(16);

  if (r.length === 1) {
    r = '0' + r;
  }

  if (g.length === 1) {
    g = '0' + g;
  }

  if (b.length === 1) {
    b = '0' + b;
  }

  return `#${r}${g}${b}`;
}

function isColorToken(token: Token) {
  return Array.isArray(token.value) && token.value.length === 3;
}

function isSpaceToken(token: Token) {
  return (
    (token.name.includes('global-layout-space') || token.name.includes('global-space')) &&
    typeof token.value === 'number'
  );
}

function setNumberToken(token: Token) {
  token.formattedValue = html` <div cds-layout="vertical gap:md">
    ${token.alias ? html`<p cds-text="secondary">${token.alias}</p>` : ''}
    <p cds-text="secondary">Web: <span cds-text="code">${((token.value as number) / 20).toFixed(2)}rem</span></p>
    <p cds-text="secondary">Android: <span cds-text="code">${token.value}dp</span></p>
    <p cds-text="secondary">iOS: <span cds-text="code">${token.value}pt</span></p>
  </div>`;
}

function setColorToken(token: Token) {
  const value = token.value as number[];
  const hsl = `hsl(${value[0]}, ${value[1]}%, ${value[2]}%)`;
  const rgb = hslToRgb(value[0], value[1], value[2]);
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  token.formattedValue = html` <div cds-layout="vertical gap:md">
    ${token.alias ? html`<p cds-text="secondary">${token.alias}</p>` : ''}
    <p cds-text="secondary">Web: <span cds-text="code">${hsl}</span></p>
    <p cds-text="secondary">iOS: <span cds-text="code">rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})</span></p>
    <p cds-text="secondary">Android: <span cds-text="code">${hex}</span></p>
  </div>`;

  token.demo = html`<div
    style="background: var(${token.name}); width: 200px; height: 50px; display: inline-block; border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color)"
  ></div>`;
}

function setSpaceToken(token: Token) {
  setNumberToken(token);
  token.demo = html`<div
    style="height: 20px; background: var(--cds-global-color-cool-gray-900); width: ${token.value}px"
  ></div>`;
}

function setShadowToken(token: Token) {
  token.demo = html`<div style="width: 200px; height: 50px; box-shadow: var(${token.name})"></div>`;
}

function setOpacityToken(token: Token) {
  token.demo = html`
    <div cds-layout="horizontal align:center" style="width: 200px; height: 50px; position: relative;">
      <div style="position: absolute; top: 0; right: 0; left: 0; bottom: 0; background: var(${token.name})"></div>
      <p cds-text="body">text content</p>
    </div>
  `;
}

function setBorderRadiusToken(token: Token) {
  if (token.value !== '50%') {
    setNumberToken(token);
  }

  token.demo = html`<div
    style="width: 50px; height: 50px; border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color); border-radius: var(${token.name})"
  ></div>`;
}

function setBorderWidthToken(token: Token) {
  setNumberToken(token);
  token.demo = html`<div
    style="width: 200px; height: 50px; border: var(${token.name}) solid var(--cds-alias-object-border-color)"
  ></div>`;
}

function setFontWeightToken(token: Token) {
  token.demo = html`<div style="font-weight: var(${token.name})">font weight</div>`;
}

function setFontSizeToken(token: Token) {
  setNumberToken(token);
  token.demo = html`<div style="font-size: var(${token.name})">font size</div>`;
}

export const interactions = () => getTokenTable('aliasObjectInteraction');

export const objects = () => getTokenTable('aliasObject');

export const objectBorderRadius = () => getTokenTable('aliasObjectBorderRadius');

export const objectBorderWidth = () => getTokenTable('aliasObjectBorderWidth');

export const objectBorderColor = () => getTokenTable('aliasObjectBorderColor');

export const objectShadow = () => getTokenTable('aliasObjectShadow');

export const objectOpacity = () => getTokenTable('aliasObjectOpacity');

export const objectTransparency = () => getTokenTable('aliasObjectTransparency');

export const statusColor = () => getTokenTable('aliasStatus');

export const aliases = () => getTokenTable('alias');

export const layout = () => getTokenTable('globalLayout');

export const layoutSpacing = () => getTokenTable('globalLayoutSpace');

export const spacing = () => getTokenTable('globalSpace');

export const typography = () => getTokenTable('globalTypography');

export const color = () => getTokenTable('globalColor');

export function objectLayers() {
  return html`
    <style>
      .cds-object-app-demo {
        background: var(--cds-alias-object-app-background);
      }

      .cds-object-container-demo {
        background: var(--cds-alias-object-container-background);
        border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-container-border-color);
      }

      .cds-object-overlay-demo {
        position: relative;
      }

      .cds-object-overlay {
        background: var(--cds-alias-object-overlay-backdrop-background);
        opacity: var(--cds-alias-object-opacity-300);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
      }

      .cds-object-overlay-content {
        position: relative;
        background: var(--cds-alias-object-overlay-background);
      }
    </style>

    <div class="cds-object-app-demo" cds-layout="vertical gap:lg align:stretch">
      <h3 cds-text="section">App</h3>
      <p cds-text="body">--cds-alias-object-app-background</p>
      <div class="cds-object-container-demo" cds-layout="vertical gap:lg p:lg">
        <h3 cds-text="section">Container</h3>
        <p cds-text="body">--cds-alias-object-container-background</p>
        <p cds-text="body">--cds-alias-object-container-border-color</p>
      </div>
      <div cds-layout="p:lg" class="cds-object-overlay-demo">
        <div class="cds-object-overlay"></div>
        <div cds-layout="vertical gap:lg p:lg" class="cds-object-overlay-content">
          <h3 cds-text="section">Overlay</h3>
          <p cds-text="body">--cds-alias-object-overlay-background</p>
          <p cds-text="body">--cds-alias-object-overlay-backdrop-background</p>
          <p cds-text="body">--cds-alias-object-opacity-300</p>
        </div>
      </div>
    </div>
  `;
}

export function objectDemo() {
  return html`
    <style>
      .cds-card-mock {
        background: var(--cds-alias-object-container-background);
        border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-container-border-color);
        border-radius: var(--cds-alias-object-border-radius-100);
        box-shadow: var(--cds-alias-object-shadow-100);
        padding: var(--cds-global-space-8);
        color: var(--cds-global-typography-color-500);
        max-width: 350px;
      }
    </style>
    <div class="cds-card-mock" cds-layout="vertical gap:lg">
      <h3 cds-text="section">Mock Card Component</h3>
      <p cds-text="body">This is a mock card component made with Object tokens.</p>
      <cds-button action="outline" cds-layout="align:right">Save</cds-button>
    </div>
  `;
}

/** @website */
export function interactionMenuDemo() {
  return html`
    <style>
      .cds-menu-mock {
        display: block;
        width: 160px;
        box-shadow: var(--cds-alias-object-shadow-100);
        background: var(--cds-alias-object-interaction-background);
      }

      .cds-menu-mock button {
        display: flex;
        align-items: center;
        align-content: center;
        justify-items: center;
        gap: var(--cds-global-space-6);
        padding: var(--cds-global-space-7) var(--cds-global-space-6);
        border: 0;
        width: 100%;
        cursor: pointer;
        color: var(--cds-alias-object-interaction-color);
        background: var(--cds-alias-object-interaction-background);
      }

      .cds-menu-mock button cds-icon {
        --color: var(--cds-alias-object-interaction-color);
        margin-top: calc(-1 * var(--cds-global-space-3));
      }

      .cds-menu-mock button:hover,
      .cds-menu-mock button[hover] {
        background: var(--cds-alias-object-interaction-background-hover);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-menu-mock button:hover cds-icon,
      .cds-menu-mock button[hover] cds-icon,
      .cds-tabs-mock button cds-icon:hover {
        --color: var(--cds-alias-object-interaction-color-selected);
        cursor: pointer;
      }

      .cds-menu-mock button:active,
      .cds-menu-mock button[active] {
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-menu-mock button:active cds-icon,
      .cds-menu-mock button[active] cds-icon {
        --color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[selected] {
        background: var(--cds-alias-object-interaction-background-selected);
        color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[selected] cds-icon {
        --color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[disabled] {
        background: var(--cds-alias-object-interaction-background-disabled);
        color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }

      .cds-menu-mock button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
    </style>

    <div cds-layout="horizontal gap:lg">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>

      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>

      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>

      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>

      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
    </div>
  `;
}

/** @website */
export function interactionVerticalNavigationDemo() {
  return html`
    <style>
      .cds-vertical-nav-mock {
        border: 0;
        max-width: 240px;
        min-height: 300px;
        width: 100%;
        background: var(--cds-alias-object-interaction-background);
        box-shadow: var(--cds-alias-object-shadow-100);
      }

      .cds-vertical-nav-mock button {
        border: 0;
        width: 100%;
        padding: var(--cds-global-space-7) var(--cds-global-space-8);
        margin-bottom: var(--cds-global-space-1);
        display: flex;
        gap: var(--cds-global-space-5);
        background: transparent;
        cursor: pointer;
        color: var(--cds-alias-object-interaction-color);
      }

      .cds-vertical-nav-mock button cds-icon {
        margin-top: -1px;
        cursor: pointer;
      }

      .cds-vertical-nav-mock button:hover,
      .cds-vertical-nav-mock button[hover] {
        background: var(--cds-alias-object-interaction-background-hover);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-vertical-nav-mock button:active,
      .cds-vertical-nav-mock button[active] {
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-vertical-nav-mock button[selected] {
        background: var(--cds-alias-object-interaction-background-selected);
        color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-vertical-nav-mock button[disabled] {
        background: transparent;
        cursor: not-allowed;
        color: var(--cds-alias-object-interaction-color-disabled);
      }

      .cds-vertical-nav-mock button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
    </style>
    <div cds-layout="horizontal gap:md align:stretch">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <nav class="cds-vertical-nav-mock" cds-layout="vertical">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <nav class="cds-vertical-nav-mock" cds-layout="vertical">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <nav class="cds-vertical-nav-mock" cds-layout="vertical">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <nav class="cds-vertical-nav-mock" cds-layout="vertical">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <nav class="cds-vertical-nav-mock" cds-layout="vertical">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
    </div>
  `;
}

/** @website */
export function interactionSubNavigationDemo() {
  return html`
    <style>
      .cds-sub-nav-mock {
        border-bottom: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color);
        background: var(--cds-alias-object-container-background);
        display: flex;
        width: 100%;
      }

      .cds-sub-nav-mock button {
        display: flex;
        gap: var(--cds-global-space-5);
        background: transparent;
        border: 0;
        color: var(--cds-alias-object-interaction-color);
        padding: var(--cds-global-space-6) var(--cds-global-space-6) var(--cds-global-space-4) var(--cds-global-space-6);
        border-bottom: var(--cds-alias-object-border-width-300) solid transparent;
        cursor: pointer;
        margin-right: var(--cds-global-space-6);
      }

      .cds-sub-nav-mock button cds-icon {
        margin-top: -1px;
      }

      .cds-sub-nav-mock button:hover,
      .cds-sub-nav-mock button[hover] {
        border-bottom: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-sub-nav-mock button:hover cds-icon,
      .cds-sub-nav-mock button[hover] cds-icon,
      .cds-sub-nav-mock button cds-icon:hover {
        --color: var(--cds-alias-object-interaction-color-hover);
        cursor: pointer;
      }

      .cds-sub-nav-mock button:active,
      .cds-sub-nav-mock button[active] {
        border-bottom: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-sub-nav-mock button:active cds-icon,
      .cds-sub-nav-mock button[active] cds-icon {
        --color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-sub-nav-mock button[selected] {
        border-bottom: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-selected);
      }

      .cds-sub-nav-mock button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        border-bottom: var(--cds-alias-object-border-width-300) solid transparent;
        cursor: not-allowed;
      }

      .cds-sub-nav-mock button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
    </style>
    <div cds-layout="grid cols@md:6 gap:lg">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <nav class="cds-sub-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <nav class="cds-sub-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <nav class="cds-sub-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <nav class="cds-sub-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <nav class="cds-sub-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
          <button><cds-icon shape="trash" size="sm"></cds-icon> Item 4</button>
        </nav>
      </div>
    </div>
  `;
}

/** @website */
export function interactionTabsDemo() {
  return html`
    <style>
      .cds-tabs-mock {
        border-bottom: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color);
        display: flex;
        width: 100%;
      }

      .cds-tabs-mock button {
        display: flex;
        gap: var(--cds-global-space-5);
        background: transparent;
        border: 0;
        color: var(--cds-alias-object-interaction-color);
        padding: var(--cds-global-space-5) var(--cds-global-space-6) var(--cds-global-space-4) var(--cds-global-space-6);
        border-bottom: var(--cds-alias-object-border-width-300) solid transparent;
        cursor: pointer;
        margin-right: var(--cds-global-space-5);
      }

      .cds-tabs-mock button cds-icon {
        margin-top: -1px;
      }

      .cds-tabs-mock button:hover,
      .cds-tabs-mock button[hover] {
        border-bottom: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-tabs-mock button:hover cds-icon,
      .cds-tabs-mock button[hover] cds-icon,
      .cds-tabs-mock button cds-icon:hover {
        --color: var(--cds-alias-object-interaction-color-hover);
        cursor: pointer;
      }

      .cds-tabs-mock button:active,
      .cds-tabs-mock button[active] {
        border-bottom: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-tabs-mock button:active cds-icon,
      .cds-tabs-mock button[active] cds-icon {
        --color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-tabs-mock button[selected] {
        border-bottom: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-selected);
      }

      .cds-tabs-mock button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        border-bottom: var(--cds-alias-object-border-width-300) solid transparent;
        cursor: not-allowed;
      }

      .cds-tabs-mock button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
    </style>
    <div cds-layout="grid cols@md:4 gap:lg">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
    </div>
  `;
}

/** @website */
export function interactionVerticalTabsDemo() {
  return html`
    <style>
      .cds-tabs-mock[vertical] {
        display: flex;
        width: 100%;
        flex-direction: column;
        border: 0;
        max-width: 180px;
      }

      .cds-tabs-mock[vertical] button {
        border: 0;
        color: var(--cds-alias-object-interaction-color);
        border-left: var(--cds-alias-object-border-width-300) solid transparent;
        padding: var(--cds-global-space-6) var(--cds-global-space-5) var(--cds-global-space-6) var(--cds-global-space-4);
        margin-bottom: var(--cds-global-space-1);
        display: flex;
        gap: var(--cds-global-space-5);
        background: transparent;
        cursor: pointer;
      }

      .cds-tabs-mock[vertical] button cds-icon {
        margin-top: -1px;
        cursor: pointer;
      }

      .cds-tabs-mock[vertical] button:hover,
      .cds-tabs-mock[vertical] button[hover] {
        border-left: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        background: var(--cds-alias-object-interaction-background-hover);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-tabs-mock[vertical] button:active,
      .cds-tabs-mock[vertical] button[active] {
        border-left: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-tabs-mock[vertical] button[selected] {
        border-left: var(--cds-alias-object-border-width-300) solid
          var(--cds-alias-object-interaction-background-highlight);
        background: var(--cds-alias-object-interaction-background-selected);
        color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-tabs-mock[vertical] button[disabled] {
        border-left: var(--cds-alias-object-border-width-300) solid transparent;
        color: var(--cds-alias-object-interaction-color-disabled);
        background: transparent;
        cursor: not-allowed;
      }

      .cds-tabs-mock[vertical] button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
    </style>
    <div cds-layout="horizontal gap:md align:stretch">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="add" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
    </div>
  `;
}

/** @website */
export function interactionAccordionDemo() {
  return html`
    <div cds-layout="grid cols@md:4 gap:lg">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <cds-accordion>
          <cds-accordion-panel>
            <cds-accordion-header>Item 1</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 1 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Item 2</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 2 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Item 3</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 3 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
        </cds-accordion>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <cds-accordion>
          <cds-accordion-panel>
            <cds-accordion-header>Item 1</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 1 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header style="--background: var(--cds-alias-object-interaction-background-hover)"
              >Item 2</cds-accordion-header
            >
            <cds-accordion-content>
              <p cds-text="body">Item 2 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Item 3</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 3 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
        </cds-accordion>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <cds-accordion>
          <cds-accordion-panel>
            <cds-accordion-header>Item 1</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 1 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header style="--background: var(--cds-alias-object-interaction-background-active)"
              >Item 2</cds-accordion-header
            >
            <cds-accordion-content>
              <p cds-text="body">Item 2 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Item 3</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 3 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
        </cds-accordion>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <cds-accordion>
          <cds-accordion-panel>
            <cds-accordion-header>Item 1</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 1 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel expanded>
            <cds-accordion-header>Item 2</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 2 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Item 3</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 3 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
        </cds-accordion>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <cds-accordion>
          <cds-accordion-panel>
            <cds-accordion-header>Item 1</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 1 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel disabled>
            <cds-accordion-header>Item 2</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 2 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Item 3</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 3 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
        </cds-accordion>
      </div>
    </div>
  `;
}

export const statusColors = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <div cds-layout="horizontal gap:sm">
        <cds-badge>10<span cds-layout="display:screen-reader-only"> items in a dark theme default badge.</span></cds-badge></cds-badge>
        <cds-badge status="info">20<span cds-layout="display:screen-reader-only"> items in a dark theme info badge.</span></cds-badge></cds-badge>
        <cds-badge status="success">30<span cds-layout="display:screen-reader-only"> items in a dark theme success badge.</span></cds-badge></cds-badge>
        <cds-badge status="warning">40<span cds-layout="display:screen-reader-only"> items in a dark theme warning badge.</span></cds-badge></cds-badge>
        <cds-badge status="danger">50<span cds-layout="display:screen-reader-only"> items in a dark theme danger badge.</span></cds-badge></cds-badge>
      </div>

      <div cds-layout="horizontal gap:md">
        <cds-icon
          shape="user"
          size="lg"
          badge="info"
          aria-label="This is an example of an icon of a user with a blue informational badge"
        ></cds-icon>
        <cds-icon
          shape="user"
          size="lg"
          badge="success"
          aria-label="This is an example of an icon of a user with a green badge indicating success"
        ></cds-icon>
        <cds-icon
          shape="user"
          size="lg"
          badge="danger"
          aria-label="This is an example of an icon of a user with a red badge indicating danger or an error"
        ></cds-icon>
        <cds-icon
          shape="user"
          size="lg"
          badge="warning"
          aria-label="This is an example of an icon of a user with a dark orange badge indicating a warning"
        ></cds-icon>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-tag status="info" aria-label="Clickable example of a tag with the info status">Info <cds-badge status="info">1</cds-badge></cds-tag>
        <cds-tag status="success" aria-label="Clickable example of a tag with the success status">Success <cds-badge status="success">2</cds-badge></cds-tag>
        <cds-tag status="warning" aria-label="Clickable example of a tag with the warning status">Warning <cds-badge status="warning">3</cds-badge> </cds-tag>
        <cds-tag status="danger" aria-label="Clickable example of a tag with the danger status">Danger <cds-badge status="danger">12</cds-badge></cds-tag>
        <cds-tag status="neutral" aria-label="Clickable example of a tag with the neutral status">Neutral <cds-badge status="danger">12</cds-badge></cds-tag>
        <cds-tag disabled status="info" aria-label="Clickable example of a tag with the disabled status">Disabled <cds-badge>12</cds-badge></cds-tag>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-button>primary</cds-button>
        <cds-button status="success">success</cds-button>
        <cds-button status="danger">danger</cds-button>
        <cds-button status="danger" disabled>disabled</cds-button>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-button action="outline">primary</cds-button>
        <cds-button status="success" action="outline">success</cds-button>
        <cds-button status="danger" action="outline">danger</cds-button>
        <cds-button status="danger" action="outline" disabled>disabled</cds-button>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-progress-circle size="xl" status="info"></cds-progress-circle>
        <cds-progress-circle size="xl" status="success"></cds-progress-circle>
        <cds-progress-circle size="xl" status="warning"></cds-progress-circle>
        <cds-progress-circle size="xl" status="danger"></cds-progress-circle>
        <cds-progress-circle size="xl" status="neutral"></cds-progress-circle>
      </div>

      <cds-form-group layout="horizontal" control-width="shrink">
        <cds-input layout="horizontal">
          <label>Default</label>
          <input placeholder="name" />
          <cds-control-message>message text</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal">
          <label>disabled</label>
          <input placeholder="name" disabled />
          <cds-control-message>disabled message</cds-control-message>
        </cds-input>

        <cds-input focused layout="horizontal">
          <label>Focused</label>
          <input placeholder="name" />
          <cds-control-message>message text</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal" status="error">
          <label>error</label>
          <input placeholder="name" />
          <cds-control-message status="error">error message</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal" status="success">
          <label>success</label>
          <input placeholder="name" />
          <cds-control-message status="success">success message</cds-control-message>
        </cds-input>
      </cds-form-group>

      <cds-alert-group type="light">
        <cds-alert status="info">This is an alert with a status of "info"</cds-alert>
        <cds-alert status="success">This is an alert with a status of "success"</cds-alert>
        <cds-alert status="warning">This is an alert with a status of "warning"</cds-alert>
        <cds-alert status="danger">This is an alert with a status of "danger"</cds-alert>
        <cds-alert status="neutral">This is an alert with a status of "neutral"</cds-alert>
      </cds-alert-group>

      <div cds-layout="vertical gap:sm">
        <cds-alert-group status="info" aria-label="This is an example info alert group">
          <cds-alert
            closable
            aria-label="This is an example info alert group"
            cds-i18n='{ "closeButtonAriaLabel": "close my example alert"}'
          >
            This example is a closable alert inside an alert group with a status of "info".
          </cds-alert>
          <cds-alert closable>
            <cds-icon shape="node-group" aria-label="Custom icon of a node group" role="img"></cds-icon>
            This example is an alert a user may be able to close with a custom icon shape inside an alert group with a
            status of "info".
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="success" aria-label="This is an example success alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "success".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "success".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="warning" aria-label="This is an example warning alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "warning".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "warning".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="danger" aria-label="This is an example error or danger alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "danger".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "danger".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="neutral" aria-label="This is an example neutral alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "neutral".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "neutral".
          </cds-alert>
        </cds-alert-group>
      </div>

      <div cds-layout="vertical gap:sm">
        <cds-alert-group type="banner" status="info">
          <cds-alert closable>
            This example is a closable banner alert inside a banner alert group with a status of "info".
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="success">
          <cds-alert closable>
            This example is a closable alert with a status of "success" inside a banner alert group.
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="warning">
          <cds-alert closable>
            This example is a alert with action buttons and a status of "warning".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="danger">
          <cds-alert closable>
            This example is a closable alert with a status of "danger" inside a banner alert group.
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="neutral">
          <cds-alert closable>
            This example is a closable alert with a status of "neutral" inside a banner alert group.
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
      </div>
    </div>
  `;
};

export const statusColorsDarkTheme = () => {
  return html`
    <div cds-theme="dark" cds-layout="vertical gap:lg">
      <div cds-layout="horizontal gap:sm">
        <cds-badge>10<span cds-layout="display:screen-reader-only"> items in a dark theme default badge.</span></cds-badge></cds-badge>
        <cds-badge status="info">20<span cds-layout="display:screen-reader-only"> items in a dark theme info badge.</span></cds-badge></cds-badge>
        <cds-badge status="success">30<span cds-layout="display:screen-reader-only"> items in a dark theme success badge.</span></cds-badge></cds-badge>
        <cds-badge status="warning">40<span cds-layout="display:screen-reader-only"> items in a dark theme warning badge.</span></cds-badge></cds-badge>
        <cds-badge status="danger">50<span cds-layout="display:screen-reader-only"> items in a dark theme danger badge.</span></cds-badge></cds-badge>
      </div>

      <div cds-layout="horizontal gap:md">
        <cds-icon
          shape="user"
          size="lg"
          badge="info"
          aria-label="This is an example of an icon of a user with a blue informational badge"
        ></cds-icon>
        <cds-icon
          shape="user"
          size="lg"
          badge="success"
          aria-label="This is an example of an icon of a user with a green badge indicating success"
        ></cds-icon>
        <cds-icon
          shape="user"
          size="lg"
          badge="danger"
          aria-label="This is an example of an icon of a user with a red badge indicating danger or an error"
        ></cds-icon>
        <cds-icon
          shape="user"
          size="lg"
          badge="warning"
          aria-label="This is an example of an icon of a user with a dark orange badge indicating a warning"
        ></cds-icon>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-tag status="info" aria-label="Clickable example of a tag with the info status">Info <cds-badge status="info">1</cds-badge></cds-tag>
        <cds-tag status="success" aria-label="Clickable example of a tag with the success status">Success <cds-badge status="success">2</cds-badge></cds-tag>
        <cds-tag status="warning" aria-label="Clickable example of a tag with the warning status">Warning <cds-badge status="warning">3</cds-badge> </cds-tag>
        <cds-tag status="danger" aria-label="Clickable example of a tag with the danger status">Danger <cds-badge status="danger">12</cds-badge></cds-tag>
        <cds-tag status="neutral" aria-label="Clickable example of a tag with the neutral status">Neutral <cds-badge status="danger">12</cds-badge></cds-tag>
        <cds-tag disabled status="info" aria-label="Clickable example of a tag with the disabled status">Disabled <cds-badge>12</cds-badge></cds-tag>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-button>primary</cds-button>
        <cds-button status="success">success</cds-button>
        <cds-button status="danger">danger</cds-button>
        <cds-button status="danger" disabled>disabled</cds-button>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-button action="outline">primary</cds-button>
        <cds-button status="success" action="outline">success</cds-button>
        <cds-button status="danger" action="outline">danger</cds-button>
        <cds-button status="danger" action="outline" disabled>disabled</cds-button>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-progress-circle size="xl" status="info"></cds-progress-circle>
        <cds-progress-circle size="xl" status="success"></cds-progress-circle>
        <cds-progress-circle size="xl" status="warning"></cds-progress-circle>
        <cds-progress-circle size="xl" status="danger"></cds-progress-circle>
        <cds-progress-circle size="xl" status="neutral"></cds-progress-circle>
      </div>

      <cds-form-group layout="horizontal" control-width="shrink">
        <cds-input layout="horizontal">
          <label>Default</label>
          <input placeholder="name" />
          <cds-control-message>message text</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal">
          <label>disabled</label>
          <input placeholder="name" disabled />
          <cds-control-message>disabled message</cds-control-message>
        </cds-input>

        <cds-input focused layout="horizontal">
          <label>Focused</label>
          <input placeholder="name" />
          <cds-control-message>message text</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal" status="error">
          <label>error</label>
          <input placeholder="name" />
          <cds-control-message status="error">error message</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal" status="success">
          <label>success</label>
          <input placeholder="name" />
          <cds-control-message status="success">success message</cds-control-message>
        </cds-input>
      </cds-form-group>

      <cds-alert-group type="light">
        <cds-alert status="info">This is an alert with a status of "info"</cds-alert>
        <cds-alert status="success">This is an alert with a status of "success"</cds-alert>
        <cds-alert status="warning">This is an alert with a status of "warning"</cds-alert>
        <cds-alert status="danger">This is an alert with a status of "danger"</cds-alert>
        <cds-alert status="neutral">This is an alert with a status of "neutral"</cds-alert>
      </cds-alert-group>

      <div cds-layout="vertical gap:sm">
        <cds-alert-group status="info" aria-label="This is an example info alert group">
          <cds-alert
            closable
            aria-label="This is an example info alert group"
            cds-i18n='{ "closeButtonAriaLabel": "close my example alert"}'
          >
            This example is a closable alert inside an alert group with a status of "info".
          </cds-alert>
          <cds-alert closable>
            <cds-icon shape="node-group" aria-label="Custom icon of a node group" role="img"></cds-icon>
            This example is an alert a user may be able to close with a custom icon shape inside an alert group with a
            status of "info".
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="success" aria-label="This is an example success alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "success".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "success".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="warning" aria-label="This is an example warning alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "warning".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "warning".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="danger" aria-label="This is an example error or danger alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "danger".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "danger".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="neutral" aria-label="This is an example neutral alert group">
          <cds-alert closable>
            This example is an alert a user may be able to close inside an alert group with a status of "neutral".
          </cds-alert>
          <cds-alert closable>
            This example is an alert a user may be able to close with alert action buttons inside an alert group with a
            status of "neutral".
          </cds-alert>
        </cds-alert-group>
      </div>

      <div cds-layout="vertical gap:sm">
        <cds-alert-group type="banner" status="info">
          <cds-alert closable>
            This example is a closable banner alert inside a banner alert group with a status of "info".
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="success">
          <cds-alert closable>
            This example is a closable alert with a status of "success" inside a banner alert group.
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="warning">
          <cds-alert closable>
            This example is a alert with action buttons and a status of "warning".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="danger">
          <cds-alert closable>
            This example is a closable alert with a status of "danger" inside a banner alert group.
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" status="neutral">
          <cds-alert closable>
            This example is a closable alert with a status of "neutral" inside a banner alert group.
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
      </div>
    </div>
  `;
};
