/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, TemplateResult } from 'lit';
import { default as tokenData } from '@cds/core/tokens/tokens.json';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { homeIcon } from '@cds/core/icon/shapes/home.js';
import { plusIcon } from '@cds/core/icon/shapes/plus.js';
import { trashIcon } from '@cds/core/icon/shapes/trash.js';
import { downloadIcon } from '@cds/core/icon/shapes/download.js';
import { hslToRgb, rgbToHex } from '@cds/core/internal';

import '@cds/core/navigation/register.js';

ClarityIcons.addIcons(homeIcon, plusIcon, trashIcon, downloadIcon);

export default {
  title: 'Stories/Design Tokens',
  parameters: {
    options: { showPanel: true },
  },
};

interface Token {
  name: string;
  alias: string;
  value: string | number | number[];
  formattedValue?: string | TemplateResult;
  computedValue?: string;
  demo?: string | TemplateResult;
}

function getTokenTable(key: string, globals: any = {}) {
  return html` <table
      cds-layout="display@sm:none"
      class="token-table"
      cds-table="border:row border:outside"
      cds-text="left"
    >
      <thead>
        <tr cds-layout="grid cols:12">
          <th cds-layout="p-y:md p-x:lg display:block display@md:none">Token/Value/Demo</th>
        </tr>
      </thead>
      <tbody>
        ${getTokens(key, globals).map((token: any) => {
          return html`<tr cds-layout="grid cols:12 align:stretch">
            <td cds-layout="p:lg display:block display@md:none">
              <div cds-layout="vertical gap:lg">
                <div cds-text="body">${token.name}</div>
                <div>${token.formattedValue}</div>
                <div>${token.demo}</div>
              </div>
            </td>
          </tr>`;
        })}
      </tbody>
    </table>
    <div cds-layout="display:none display@sm:block">
      <table
        class="token-table"
        cds-table="border:row border:outside"
        cds-text="left"
        style="--cell-padding: var(--cds-global-space-7)"
      >
        <thead>
          <tr cds-layout="grid cols:4">
            <th>Token</th>
            <th>Value</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          ${getTokens(key, globals).map((token: any) => {
            return html`<tr cds-layout="grid cols:4 align:stretch">
              <td>
                <span cds-text="body">${token.name}</span>
              </td>
              <td>${token.formattedValue}</td>
              <td>${token.demo}</td>
            </tr>`;
          })}
        </tbody>
      </table>
    </div>`;
}

let currentTheme = getThemeStyleMap(':root');
const priorTheme = ':root';

function getTokens(val: string, globals: any) {
  if (priorTheme !== globals.theme) {
    currentTheme = getThemeStyleMap(globals.theme ? `[cds-theme~="${globals.theme}"]` : ':root');
  }

  return Object.entries(tokenData)
    .filter(([key]) => key.includes(val))
    .map((token: [string, any]) => {
      return createToken(
        {
          name: tokenToCssProp(token[0]),
          alias: token[1].alias ? tokenToCssProp(token[1].alias) : '',
          value: token[1].value,
        },
        globals,
        currentTheme
      );
    });
}

function getComputedTokenValue(token: Token, globals: any) {
  const el = document.createElement('div');
  el.setAttribute('cds-theme', globals.theme);
  document.body.appendChild(el);
  const value = getComputedStyle(el).getPropertyValue(token.name);
  document.body.removeChild(el);
  return value;
}

function getThemeStyleMap(themeSelector: string) {
  const sheet = Array.from(document.styleSheets)
    .filter(sheet => sheet.href === null || sheet.href.startsWith(window.location.origin))
    .filter(sheet => Array.from(sheet.cssRules).find((rule: any) => rule.selectorText === themeSelector))[0];

  return sheet
    ? sheet.cssRules[0].cssText
        .replace(`${themeSelector} {`, '')
        .replace('}', '')
        .split(';')
        .filter((r: any) => r.length > 1)
        .reduce((prev: any, next: string) => {
          const rule = next.split(':');
          return { ...prev, [rule[0].trim()]: rule[1] ? rule[1].trim() : rule[0].trim() };
        }, {})
    : '';
}

function createToken(token: Token, globals: any, currentTheme: any) {
  token.computedValue = getComputedTokenValue(token, globals);
  token.formattedValue = html`<span cds-text="code">${token.computedValue}</span>`;
  token.alias = token.alias ? currentTheme[token.name] : undefined;

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
  } else if (isAnimationToken(token)) {
    setAnimationToken(token);
  }

  return token;
}

function tokenToCssProp(name: string) {
  return `--cds-${name.replace(/([A-Z]|\d+)/g, '-$1').toLocaleLowerCase()}`;
}

function isAnimationToken(token: Token) {
  return token.name.includes('global-animation');
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
    <p cds-text="secondary">Web: <span cds-text="code">${(token.value as any) / 20}rem</span></p>
    <p cds-text="secondary">Android: <span cds-text="code">${token.value}dp</span></p>
    <p cds-text="secondary">iOS: <span cds-text="code">${token.value}pt</span></p>
  </div>`;
}

function setAnimationToken(token: Token) {
  token.demo = html`
    <div
      class="animation-demo"
      style="${token.name.includes('duration') ? '--duration' : '--easing'}: var(${token.name}); ${token.name.includes(
        'easing'
      )
        ? '--duration: var(--cds-global-animation-duration-slower)'
        : ''}"
    >
      <div class="animation"></div>
    </div>
  `;
}

function setColorToken(token: Token) {
  const hsl =
    /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g
      ?.exec(token.computedValue)
      ?.slice(1)
      ?.map(v => parseInt(v.replace('%', ''))) ?? [];
  const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  token.formattedValue = html` <div cds-layout="vertical gap:md">
    ${token.alias ? html`<p cds-text="secondary">${token.alias}</p>` : ''}
    <p cds-text="secondary">Web: <span cds-text="code">hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)</span></p>
    <p cds-text="secondary">iOS: <span cds-text="code">rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})</span></p>
    <p cds-text="secondary">Android: <span cds-text="code">${hex}</span></p>
  </div>`;

  token.demo = html`<div
    style="background: var(${token.name}); width: 200px; height: 50px; display: block; border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color)"
  ></div>`;
}

function setSpaceToken(token: Token) {
  setNumberToken(token);
  token.demo = html`<div
    style="height: 20px; background: var(--cds-global-typography-color-200); width: var(${token.name})"
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

export const objectBorderColor = (_args: any, { globals }: any) => getTokenTable('aliasObjectBorderColor', globals);

export const objectShadow = () => getTokenTable('aliasObjectShadow');

export const objectOpacity = () => getTokenTable('aliasObjectOpacity');

export const objectTransparency = () => getTokenTable('aliasObjectTransparency');

export const objectContainerBackground = () => getTokenTable('aliasObjectContainerBackground');

export const statusColor = (_args: any, { globals }: any) => getTokenTable('aliasStatus', globals);

export const aliases = () => getTokenTable('alias');

export const layout = () => getTokenTable('globalLayout');

export const layoutSpacing = () => getTokenTable('globalLayoutSpace');

export const spacing = () => getTokenTable('globalSpace');

export const typography = () => getTokenTable('globalTypography');

export const color = (_args: any, { globals }: any) => getTokenTable('globalColor', globals);

export const animationDuration = () => getTokenTable('globalAnimationDuration');

export const animationEasing = () => getTokenTable('globalAnimationEasing');

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

    <div class="cds-object-app-demo" cds-layout="vertical gap:lg align:stretch p:lg">
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
  // for cds-menu api used within inline and dropdown menus
  return html`
    <style>
      .cds-menu-mock {
        display: block;
        width: 100%;
      }

      .cds-menu-mock button {
        display: flex;
        align-items: center;
        align-content: center;
        justify-items: center;
        gap: var(--cds-global-space-6);
        padding: 0 var(--cds-global-space-5);
        min-height: var(--cds-alias-object-interaction-touch-target);
        border: 0;
        width: 100%;
        cursor: pointer;
        color: var(--cds-alias-object-interaction-color);
        outline-offset: var(--cds-alias-object-interaction-outline-offset);
        background: none;
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
        color: var(--cds-alias-object-interaction-color-selected);
        cursor: pointer;
      }

      .cds-menu-mock button:active,
      .cds-menu-mock button[active] {
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-menu-mock button:active cds-icon,
      .cds-menu-mock button[active] cds-icon {
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-menu-mock button[selected] {
        background: var(--cds-alias-object-interaction-background-selected);
        color: var(--cds-alias-object-interaction-color-selected);
        box-shadow: inset var(--cds-alias-object-border-width-300) 0 0 0
          var(--cds-alias-object-interaction-background-highlight);
      }

      .cds-menu-mock button[selected] cds-icon {
        --color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
      .cds-menu-mock button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }

      .cds-menu-mock button[selected] cds-icon {
        --color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[focused] {
        outline: var(--cds-alias-object-interaction-outline);
        outline-offset: calc(var(--cds-alias-object-interaction-outline-offset) * -1);
      }

      @media (-webkit-min-device-pixel-ratio: 0) {
        .cds-menu-mock button[focused] {
          outline: var(--cds-alias-object-interaction-outline-webkit);
        }
      }
    </style>

    <div cds-layout="grid cols@sm:6 cols@md:4 cols@lg:2 gap:md">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Focused</h3>
        <nav class="cds-menu-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button focused><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
      </div>
    </div>
  `;
}

export function interactionDropdownMenuDemo() {
  // for cds-menu api used within inline and dropdown menus
  return html`
    <style>
      .cds-dropdown-mock {
        display: block;
        width: 100%;
        background: var(--cds-alias-object-container-background);
        box-shadow: var(--cds-alias-object-shadow-100);
      }

      .cds-menu-mock {
        display: block;
        width: 100%;
      }

      .cds-menu-mock button {
        display: flex;
        align-items: center;
        align-content: center;
        justify-items: center;
        gap: var(--cds-global-space-6);
        padding: 0 var(--cds-global-space-5);
        min-height: var(--cds-alias-object-interaction-touch-target);
        border: 0;
        width: 100%;
        cursor: pointer;
        color: var(--cds-alias-object-interaction-color);
        outline-offset: var(--cds-alias-object-interaction-outline-offset);
        background: none;
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
        color: var(--cds-alias-object-interaction-color-selected);
        cursor: pointer;
      }

      .cds-menu-mock button:active,
      .cds-menu-mock button[active] {
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-menu-mock button:active cds-icon,
      .cds-menu-mock button[active] cds-icon {
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-menu-mock button[selected] {
        background: var(--cds-alias-object-interaction-background-selected);
        color: var(--cds-alias-object-interaction-color-selected);
        box-shadow: inset var(--cds-alias-object-border-width-300) 0 0 0
          var(--cds-alias-object-interaction-background-highlight);
      }

      .cds-menu-mock button[selected] cds-icon {
        --color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }
      .cds-menu-mock button[disabled] cds-icon {
        --color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }

      .cds-menu-mock button[selected] cds-icon {
        --color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-menu-mock button[focused] {
        outline: var(--cds-alias-object-interaction-outline);
        outline-offset: calc(var(--cds-alias-object-interaction-outline-offset) * -1);
      }

      @media (-webkit-min-device-pixel-ratio: 0) {
        .cds-menu-mock button[focused] {
          outline: var(--cds-alias-object-interaction-outline-webkit);
        }
      }
    </style>

    <div cds-layout="grid cols@sm:6 cols@md:4 cols@lg:2 gap:md">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <div class="cds-dropdown-mock">
          <nav class="cds-menu-mock">
            <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
            <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
            <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
          </nav>
        </div>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <div class="cds-dropdown-mock">
          <nav class="cds-menu-mock">
            <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
            <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
            <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
          </nav>
        </div>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <div class="cds-dropdown-mock">
          <nav class="cds-menu-mock">
            <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
            <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
            <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
          </nav>
        </div>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <div class="cds-dropdown-mock">
          <nav class="cds-menu-mock">
            <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
            <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
            <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
          </nav>
        </div>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <div class="cds-dropdown-mock">
          <nav class="cds-menu-mock">
            <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
            <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
            <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
          </nav>
        </div>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Focused</h3>
        <div class="cds-dropdown-mock">
          <nav class="cds-menu-mock">
            <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
            <button focused><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
            <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
          </nav>
        </div>
      </div>
    </div>
  `;
}

/** @website */
export function interactionVerticalNavigationDemo() {
  return html`
    <style>
      cds-navigation {
        --expanded-width: 100%;
        min-height: 300px;
      }

      .active {
        --background: var(--cds-alias-object-interaction-background-active);
      }

      .hover {
        --background: var(--cds-alias-object-interaction-background-hover);
      }
    </style>
    <div cds-layout="grid cols@sm:4 cols@md:3 cols@lg:2 gap:md align:stretch">
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Default</h3>
        <cds-navigation expanded>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="home" size="sm"></cds-icon> Item 1</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="download" size="sm"></cds-icon> Item 2</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="plus" size="sm"></cds-icon> Item 3</a>
          </cds-navigation-item>
          </cds-navigation-item>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="trash" size="sm"></cds-icon> Item 4</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Hover</h3>
        <cds-navigation expanded>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="home" size="sm"></cds-icon> Item 1</a>
          </cds-navigation-item>
          <cds-navigation-item class="hover">
            <a href="#"><cds-icon shape="download" size="sm"></cds-icon> Item 2</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="plus" size="sm"></cds-icon> Item 3</a>
          </cds-navigation-item>
          </cds-navigation-item>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="trash" size="sm"></cds-icon> Item 4</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Active</h3>
        <cds-navigation expanded>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="home" size="sm"></cds-icon> Item 1</a>
          </cds-navigation-item>
          <cds-navigation-item class="active">
            <a href="#"><cds-icon shape="download" size="sm"></cds-icon> Item 2</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="plus" size="sm"></cds-icon> Item 3</a>
          </cds-navigation-item>
          </cds-navigation-item>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="trash" size="sm"></cds-icon> Item 4</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Selected</h3>
        <cds-navigation expanded>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="home" size="sm"></cds-icon> Item 1</a>
          </cds-navigation-item>
          <cds-navigation-item active>
            <a href="#"><cds-icon shape="download" size="sm"></cds-icon> Item 2</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="plus" size="sm"></cds-icon> Item 3</a>
          </cds-navigation-item>
          </cds-navigation-item>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="trash" size="sm"></cds-icon> Item 4</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Disabled</h3>
        <cds-navigation expanded>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="home" size="sm"></cds-icon> Item 1</a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#"><cds-icon shape="download" size="sm"></cds-icon> Item 2</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a><cds-icon shape="plus" size="sm"></cds-icon> Item 3</a>
          </cds-navigation-item>
          </cds-navigation-item>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="trash" size="sm"></cds-icon> Item 4</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Focused</h3>
        <cds-navigation expanded>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="home" size="sm"></cds-icon> Item 1</a>
          </cds-navigation-item>
          <cds-navigation-item _has-focus>
            <a href="#"><cds-icon shape="download" size="sm"></cds-icon> Item 2</a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="plus" size="sm"></cds-icon> Item 3</a>
          </cds-navigation-item>
          </cds-navigation-item>
          <cds-divider cds-layout="align:bottom"></cds-divider>
          <cds-navigation-item>
            <a href="#"><cds-icon shape="trash" size="sm"></cds-icon> Item 4</a>
          </cds-navigation-item>
        </cds-navigation>
      </div>
    </div>
  `;
}

/** @website */
export function interactionHorizontalNavigationDemo() {
  return html`
    <style>
      .cds-horizontal-nav-mock {
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-100) * -1) 0 0 var(--cds-alias-object-border-color);
        background: var(--cds-alias-object-container-background);
        display: flex;
        width: 100%;
      }

      .cds-horizontal-nav-mock button {
        display: flex;
        align-items: center;
        align-content: center;
        justify-items: center;
        gap: var(--cds-global-space-5);
        background: transparent;
        border: 0;
        color: var(--cds-alias-object-interaction-color);
        padding: 0 var(--cds-global-space-6);
        min-height: var(--cds-alias-object-interaction-touch-target);
        cursor: pointer;
      }

      .cds-horizontal-nav-mock button cds-icon {
        margin-top: -1px;
      }

      .cds-horizontal-nav-mock button:hover,
      .cds-horizontal-nav-mock button[hover] {
        color: var(--cds-alias-object-interaction-color-hover);
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-300) * -1) 0 0
          var(--cds-alias-object-interaction-background-highlight);
      }

      .cds-horizontal-nav-mock button:hover cds-icon,
      .cds-horizontal-nav-mock button[hover] cds-icon,
      .cds-horizontal-nav-mock button cds-icon:hover {
        color: var(--cds-alias-object-interaction-color-hover);
        cursor: pointer;
      }

      .cds-horizontal-nav-mock button:active,
      .cds-horizontal-nav-mock button[active] {
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-horizontal-nav-mock button:active cds-icon,
      .cds-horizontal-nav-mock button[active] cds-icon {
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-horizontal-nav-mock button[selected] {
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-300) * -1) 0 0
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-selected);
      }

      .cds-horizontal-nav-mock button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-100) * -1) 0 0 var(--cds-alias-object-border-color);
        cursor: not-allowed;
      }

      .cds-horizontal-nav-mock button[disabled] cds-icon {
        color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }

      .cds-horizontal-nav-mock button[focused] {
        outline: var(--cds-alias-object-interaction-outline);
        outline-offset: calc(var(--cds-alias-object-interaction-outline-offset) * -1);
      }

      @media (-webkit-min-device-pixel-ratio: 0) {
        .cds-horizontal-nav-mock button[focused] {
          outline: var(--cds-alias-object-interaction-outline-webkit);
        }
      }
    </style>
    <div cds-layout="grid cols@md:4 gap:md">
      <div cds-layout="vertical gap:md">
        <nav class="cds-horizontal-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Default</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-horizontal-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Hover</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-horizontal-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Active</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-horizontal-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Selected</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-horizontal-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Disabled</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-horizontal-nav-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button focused><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Focused</p>
      </div>
    </div>
  `;
}

/** @website */
export function interactionTabsDemo() {
  return html`
    <style>
      .cds-tabs-mock {
        display: flex;
        width: 100%;
      }

      .cds-tabs-mock button {
        display: flex;
        align-items: center;
        align-content: center;
        justify-items: center;
        gap: var(--cds-global-space-5);
        background: transparent;
        border: 0;
        color: var(--cds-alias-object-interaction-color);
        padding: var(--cds-global-space-5) var(--cds-global-space-6) var(--cds-global-space-4) var(--cds-global-space-6);
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-100) * -1) 0 0 var(--cds-alias-object-border-color);
        min-height: var(--cds-alias-object-interaction-touch-target);
        cursor: pointer;
      }

      .cds-tabs-mock button cds-icon {
        margin-top: -1px;
      }

      .cds-tabs-mock button:hover,
      .cds-tabs-mock button[hover] {
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-300) * -1) 0 0
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-tabs-mock button:hover cds-icon,
      .cds-tabs-mock button[hover] cds-icon,
      .cds-tabs-mock button cds-icon:hover {
        color: var(--cds-alias-object-interaction-color-hover);
        cursor: pointer;
      }

      .cds-tabs-mock button:active,
      .cds-tabs-mock button[active] {
        color: var(--cds-alias-object-interaction-color-active);
        background: var(--cds-alias-object-interaction-background-active);
      }

      .cds-tabs-mock button:active cds-icon,
      .cds-tabs-mock button[active] cds-icon {
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-tabs-mock button[selected] {
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-300) * -1) 0 0
          var(--cds-alias-object-interaction-background-highlight);
        color: var(--cds-alias-object-interaction-selected);
      }

      .cds-tabs-mock button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        box-shadow: inset 0 calc(var(--cds-alias-object-border-width-100) * -1) 0 0 var(--cds-alias-object-border-color);
        cursor: not-allowed;
      }

      .cds-tabs-mock button[disabled] cds-icon {
        color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }

      .cds-tabs-mock button[focused] {
        outline: var(--cds-alias-object-interaction-outline);
        outline-offset: calc(var(--cds-alias-object-interaction-outline-offset) * -1);
      }

      @media (-webkit-min-device-pixel-ratio: 0) {
        .cds-tabs-mock button[focused] {
          outline: var(--cds-alias-object-interaction-outline-webkit);
        }
      }
    </style>
    <div cds-layout="grid cols@md:4" style="gap: 48px 36px">
      <div cds-layout="vertical gap:md">
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Default</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Hover</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Active</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Selected</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Disabled</p>
      </div>
      <div cds-layout="vertical gap:md">
        <nav class="cds-tabs-mock">
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button focused><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <p cds-text="body">Focused</p>
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
        max-width: 135px;
      }

      .cds-tabs-mock[vertical] button {
        border: 0;
        color: var(--cds-alias-object-interaction-color);
        padding: var(--cds-global-space-6) var(--cds-global-space-5) var(--cds-global-space-6) var(--cds-global-space-4);
        margin-bottom: var(--cds-global-space-1);
        display: flex;
        gap: var(--cds-global-space-5);
        background: transparent;
        min-height: var(--cds-alias-object-interaction-touch-target);
        cursor: pointer;
        box-shadow: none;
      }

      .cds-tabs-mock[vertical] button cds-icon {
        margin-top: -1px;
        cursor: pointer;
      }

      .cds-tabs-mock[vertical] button:hover,
      .cds-tabs-mock[vertical] button[hover] {
        background: var(--cds-alias-object-interaction-background-hover);
        color: var(--cds-alias-object-interaction-color-hover);
      }

      .cds-tabs-mock[vertical] button:active,
      .cds-tabs-mock[vertical] button[active] {
        background: var(--cds-alias-object-interaction-background-active);
        color: var(--cds-alias-object-interaction-color-active);
      }

      .cds-tabs-mock[vertical] button[selected] {
        box-shadow: inset var(--cds-alias-object-border-width-300) 0 0 0
          var(--cds-alias-object-interaction-background-highlight);
        background: var(--cds-alias-object-interaction-background-selected);
        color: var(--cds-alias-object-interaction-color-selected);
      }

      .cds-tabs-mock[vertical] button[disabled] {
        color: var(--cds-alias-object-interaction-color-disabled);
        background: transparent;
        cursor: not-allowed;
      }

      .cds-tabs-mock[vertical] button[disabled] cds-icon {
        color: var(--cds-alias-object-interaction-color-disabled);
        cursor: not-allowed;
      }

      .cds-tabs-mock button[focused] {
        outline: var(--cds-alias-object-interaction-outline);
        outline-offset: calc(var(--cds-alias-object-interaction-outline-offset) * -1);
      }

      @media (-webkit-min-device-pixel-ratio: 0) {
        .cds-tabs-mock button[focused] {
          outline: var(--cds-alias-object-interaction-outline-webkit);
        }
      }
    </style>
    <div cds-layout="grid cols:6@sm cols@md:4 align:stretch" style="gap: 48px 36px">
      <div cds-layout="horizontal gap:sm">
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <div cds-layout="vertical gap:md p-y:md">
          <h3 cds-text="subsection">Default</h3>
        </div>
      </div>
      <div cds-layout="horizontal gap:sm">
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <div cds-layout="vertical gap:md p-y:md">
          <h3 cds-text="subsection">Hover</h3>
        </div>
      </div>
      <div cds-layout="horizontal gap:sm">
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button active><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <div cds-layout="vertical gap:md p-y:md">
          <h3 cds-text="subsection">Active</h3>
        </div>
      </div>
      <div cds-layout="horizontal gap:sm">
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <div cds-layout="vertical gap:md p-y:md">
          <h3 cds-text="subsection">Selected</h3>
        </div>
      </div>
      <div cds-layout="horizontal gap:sm">
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <div cds-layout="vertical gap:md p-y:md">
          <h3 cds-text="subsection">Disabled</h3>
        </div>
      </div>
      <div cds-layout="horizontal gap:sm">
        <nav class="cds-tabs-mock" vertical>
          <button><cds-icon shape="home" size="sm"></cds-icon> Item 1</button>
          <button focused><cds-icon shape="download" size="sm"></cds-icon> Item 2</button>
          <button><cds-icon shape="plus" size="sm"></cds-icon> Item 3</button>
        </nav>
        <div cds-layout="vertical gap:md p-y:md">
          <h3 cds-text="subsection">Focused</h3>
        </div>
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
              <p cds-text="body">Item 2</p>
              <p cds-text="body">content</p>
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
      <div cds-layout="vertical gap:md">
        <h3 cds-text="subsection">Focused</h3>
        <cds-accordion>
          <cds-accordion-panel>
            <cds-accordion-header>Item 1</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Item 1 content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel _focused>
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
        <cds-button status="warning">warning</cds-button>
        <cds-button status="danger">danger</cds-button>
        <cds-button status="neutral">neutral</cds-button>
        <cds-button disabled>disabled</cds-button>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-button action="outline">primary</cds-button>
        <cds-button status="success" action="outline">success</cds-button>
        <cds-button status="warning" action="outline">warning</cds-button>
        <cds-button status="danger" action="outline">danger</cds-button>
        <cds-button status="neutral" action="outline">neutral</cds-button>
        <cds-button action="outline" disabled>disabled</cds-button>
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
        <cds-button status="warning">warning</cds-button>
        <cds-button status="danger">danger</cds-button>
        <cds-button status="neutral">neutral</cds-button>
        <cds-button disabled>disabled</cds-button>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-button action="outline">primary</cds-button>
        <cds-button status="success" action="outline">success</cds-button>
        <cds-button status="warning" action="outline">warning</cds-button>
        <cds-button status="danger" action="outline">danger</cds-button>
        <cds-button status="neutral" action="outline">neutral</cds-button>
        <cds-button action="outline" disabled>disabled</cds-button>
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
