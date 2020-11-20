/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, TemplateResult } from 'lit-html';
import { default as tokenData } from '../tokens/generated/tokens.json';

export default {
  title: 'Stories/Themes',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

interface Token {
  name: string;
  value: string | number | number[];
  formattedValue: string | TemplateResult;
}

function getTokens(val: string) {
  return Object.entries(tokenData)
    .filter(([key]) => key.includes(val))
    .map(token => {
      return getTokenValue({
        name: `--cds-${token[0].replace(/([A-Z]|\d+)/g, '-$1').toLocaleLowerCase()}`,
        value: token[1].value,
        formattedValue: '',
      });
    });
}

function getTokenValue(token: Token) {
  if (Array.isArray(token.value) && token.value.length === 3) {
    const hsl = `hsl(${token.value[0]}, ${token.value[1]}%, ${token.value[2]}%)`;
    token.value = hsl;
    token.formattedValue = html`<span cds-text="code">${hsl}</span>
      <div style="background: ${hsl}; width: 10px; height: 10px; display: inline-block;"></div>`;
  } else if (typeof token.value === 'number') {
    token.formattedValue = html`<span cds-text="code">${(token.value / 20).toFixed(2)}rem (${token.value}px)</span>`;
  } else {
    token.formattedValue = html`<span cds-text="code">${token.value}</span>`;
  }

  return token;
}

export const lightTheme = () => {
  return html`
    <section cds-layout="vertical gap:lg">
      <cds-input layout="vertical" control-width="shrink">
        <label>text label</label>
        <input placeholder="placeholder text" />
        <cds-control-message>message</cds-control-message>
      </cds-input>

      <cds-checkbox-group layout="vertical-inline">
        <label>checkbox group label</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>
      </cds-checkbox-group>

      <cds-button><cds-icon shape="user"></cds-icon>primary<cds-badge>10</cds-badge></cds-button>

      <div cds-layout="horizontal gap:lg align:vertical-center">
        <cds-progress-circle size="xl"></cds-progress-circle>

        <cds-tag status="info">
          <cds-icon shape="info-standard"></cds-icon>Info <cds-badge status="info">10</cds-badge>
        </cds-tag>

        <cds-icon shape="user" size="lg" badge="info"></cds-icon>
      </div>
    </section>
  `;
};

export const darkTheme = () => {
  return html`
    <section cds-theme="dark" cds-layout="vertical gap:lg">
      <cds-input layout="vertical" control-width="shrink">
        <label>text label</label>
        <input placeholder="placeholder text" />
        <cds-control-message>message</cds-control-message>
      </cds-input>

      <cds-checkbox-group layout="vertical-inline">
        <label>checkbox group label</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>
      </cds-checkbox-group>

      <cds-button><cds-icon shape="user"></cds-icon>primary<cds-badge>10</cds-badge></cds-button>

      <div cds-layout="horizontal gap:lg align:vertical-center">
        <cds-progress-circle size="xl"></cds-progress-circle>

        <cds-tag status="info">
          <cds-icon shape="info-standard"></cds-icon>Info <cds-badge status="info">10</cds-badge>
        </cds-tag>

        <cds-icon shape="user" size="lg" badge="info"></cds-icon>
      </div>
    </section>
  `;
};

export const dynamicTheme = () => {
  const dynamicTokens: { [key: string]: number | string } = {
    '--cds-alias-status-info': null,
    '--cds-alias-status-info-tint': null,
    '--cds-alias-status-info-shade': null,
    '--cds-alias-status-secondary-info': null,
    '--cds-alias-status-secondary-info-tint': null,
    '--cds-alias-status-secondary-info-shade': null,
    '--cds-global-layout-space-xxs': null,
    '--cds-global-layout-space-xs': null,
    '--cds-global-layout-space-sm': null,
    '--cds-global-layout-space-md': null,
    '--cds-global-layout-space-lg': null,
    '--cds-global-layout-space-xl': null,
    '--cds-global-layout-space-xxl': null,
    '--cds-alias-object-border-width-100': null,
    '--cds-alias-object-border-width-200': null,
    '--cds-alias-object-border-width-300': null,
    '--cds-alias-object-border-width-400': null,
    '--cds-alias-object-border-radius-100': null,
    '--cds-alias-object-border-radius-200': null,
    '--cds-global-typography-base-font-size': null,
  };

  function renderTokens() {
    const demo = document.querySelector<HTMLElement>('#dynamic-theme-demo');
    Object.keys(dynamicTokens)
      .filter(token => dynamicTokens[token])
      .forEach(token => demo.style.setProperty(token, `${dynamicTokens[token]}`));
  }

  function hexToHSL(hex: string) {
    let r: any = 0;
    let g: any = 0;
    let b: any = 0;
    if (hex.length === 4) {
      r = '0x' + hex[1] + hex[1];
      g = '0x' + hex[2] + hex[2];
      b = '0x' + hex[3] + hex[3];
    } else if (hex.length === 7) {
      r = '0x' + hex[1] + hex[2];
      g = '0x' + hex[3] + hex[4];
      b = '0x' + hex[5] + hex[6];
    }

    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
  }

  function updateColor(event: Event) {
    const primary = hexToHSL((event.target as HTMLInputElement).value);
    dynamicTokens['--cds-alias-status-info'] = `hsl(${primary[0]}, ${primary[1]}%, ${primary[2]}%)`;
    dynamicTokens['--cds-alias-status-info-tint'] = `hsl(${primary[0]}, ${primary[1]}%, ${primary[2] + 59}%)`;
    dynamicTokens['--cds-alias-status-info-shade'] = `hsl(${primary[0]}, ${primary[1]}%, ${primary[2] - 10}%)`;
    dynamicTokens['--cds-alias-status-secondary-info'] = `hsl(${primary[0]}, ${primary[1]}%, ${primary[2]}%)`;
    dynamicTokens['--cds-alias-status-secondary-info-tint'] = `hsl(${primary[0]}, ${primary[1]}%, ${primary[2] + 60}%)`;
    dynamicTokens['--cds-alias-status-secondary-info-shade'] = `hsl(${primary[0]}, ${primary[1]}%, ${
      primary[2] + 50
    }%)`;
    renderTokens();
  }

  function updateDensity(event: Event) {
    getTokens('globalLayoutSpace').forEach((space: any) => {
      const value = space.value * (parseInt((event.target as HTMLInputElement).value) / 100);
      dynamicTokens[space.name] = `${value / 20}rem`;
      dynamicTokens[`--c${space.name.split('-').pop()}`] = `${value / 20}rem`; // alias optimization
    });
    document.querySelector<HTMLElement>('.density-label').innerHTML = `Density: ${
      (event.target as HTMLInputElement).value
    }%`;
    renderTokens();
  }

  function updateBorderWidth(e: Event) {
    const value = parseInt((e.target as HTMLInputElement).value) / 100;
    dynamicTokens['--cds-alias-object-border-width-100'] = `${
      tokenData.aliasObjectBorderWidth100.value + tokenData.aliasObjectBorderWidth100.value * value * 3
    }px`;
    dynamicTokens['--cds-alias-object-border-width-300'] = `${
      tokenData.aliasObjectBorderWidth300.value + tokenData.aliasObjectBorderWidth300.value * value
    }px`;
    dynamicTokens['--cds-alias-object-border-width-400'] = `${
      tokenData.aliasObjectBorderWidth400.value + tokenData.aliasObjectBorderWidth400.value * value
    }px`;
    renderTokens();
  }

  function updateScale(event: Event) {
    document.documentElement.style.setProperty(
      '--cds-global-typography-base-font-size',
      `${(parseInt((event.target as HTMLInputElement).value) / 100) * 125}%`
    );
    document.querySelector<HTMLElement>('.scale-label').innerHTML = `Scale: ${
      (event.target as HTMLInputElement).value
    }%`;
  }

  function updateRadius(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value);
    dynamicTokens['--cds-alias-object-border-radius-100'] = `${value}px`;
    dynamicTokens['--cds-alias-object-border-radius-200'] = `${value * 4}px`;
    renderTokens();
  }

  return html`
    <section id="dynamic-theme-demo" cds-layout="grid align:stretch gap:md">
      <div cds-layout="vertical gap:lg col:7">
        <cds-input layout="vertical">
          <label>Text Input</label>
          <input type="text" value="hello world" />
          <cds-control-message>message text</cds-control-message>
        </cds-input>

        <cds-range layout="vertical">
          <label>label</label>
          <input type="range" />
          <cds-control-message>message text</cds-control-message>
        </cds-range>

        <cds-checkbox-group layout="vertical-inline">
          <label>Checkbox Group</label>
          <cds-checkbox>
            <label>checkbox 1</label>
            <input type="checkbox" checked />
          </cds-checkbox>

          <cds-checkbox>
            <label>checkbox 2</label>
            <input type="checkbox" />
          </cds-checkbox>

          <cds-checkbox>
            <label>checkbox 3</label>
            <input type="checkbox" />
          </cds-checkbox>

          <cds-control-message>message text</cds-control-message>
        </cds-checkbox-group>

        <cds-radio-group layout="vertical-inline">
          <label>Radio Group</label>
          <cds-radio>
            <label>radio 1</label>
            <input type="radio" checked />
          </cds-radio>

          <cds-radio>
            <label>radio 2</label>
            <input type="radio" />
          </cds-radio>

          <cds-radio>
            <label>radio 3</label>
            <input type="radio" />
          </cds-radio>

          <cds-control-message>message text</cds-control-message>
        </cds-radio-group>

        <div>
          <div cds-layout="horizontal gap:lg align:vertical-center">
            <cds-progress-circle size="xl"></cds-progress-circle>

            <cds-button status="primary">button</cds-button>

            <cds-tag readonly status="info">
              <cds-icon shape="info-standard"></cds-icon>Info <cds-badge status="info">1</cds-badge>
            </cds-tag>

            <cds-icon shape="user" size="lg" badge="info"></cds-icon>
          </div>
        </div>

        <cds-alert-group status="info">
          <cds-alert closable>
            This example is a closable banner alert inside a banner alert group.
          </cds-alert>
        </cds-alert-group>
      </div>
      <div cds-layout="col:1 horizontal align:center">
        <cds-divider orientation="vertical" style="height: 100%"></cds-divider>
      </div>
      <div cds-layout="col:4">
        <cds-form-group layout="vertical-inline">
          <cds-input layout="vertical">
            <label>Select a Primary Info Color</label>
            <input type="color" value="#0079ad" @input=${updateColor} />
          </cds-input>

          <cds-range layout="vertical">
            <label>Adjust scale</label>
            <input type="range" value="100" @input=${updateScale} min="90" max="120" />
            <cds-control-message class="scale-label">Scale: 100%</cds-control-message>
          </cds-range>

          <cds-range layout="vertical">
            <label>Adjust Density</label>
            <input type="range" value="100" @input=${updateDensity} min="70" max="150" />
            <cds-control-message class="density-label">Density: 100%</cds-control-message>
          </cds-range>

          <cds-range layout="vertical">
            <label>Adjust Border Width</label>
            <input type="range" value="1" @input=${updateBorderWidth} min="1" max="100" />
          </cds-range>

          <cds-range layout="vertical">
            <label>Adjust Border Radius</label>
            <input type="range" value="3" @input=${updateRadius} min="0" max="20" />
          </cds-range>
        </cds-form-group>
      </div>
      <pre id="dynamic-props" cds-layout="col:12"></pre>
    </section>
  `;
};
