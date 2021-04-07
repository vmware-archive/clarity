/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/internal-components/panel/register.js';
import { getElementStorybookArgTypes } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../../dist/core/custom-elements.json';

const placeholder = 'Placeholder';
const longerContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent volutpat tortor eget quam auctor, quis sagittis libero auctor.
    Nulla augue ante, tincidunt sit amet semper vitae, tempus at ipsum.
    Vestibulum elementum, turpis quis ullamcorper fermentum, elit turpis placerat ipsum, quis convallis ex nisi sit amet lacus.
    Ut enim ipsum, tincidunt nec luctus id, pharetra id velit. Aliquam nec elit ut neque lacinia mattis id ac lorem.
    Vivamus egestas massa nulla, ac elementum purus pretium eu. Duis ultrices nec tortor varius consectetur.
    Maecenas convallis bibendum urna, et aliquam quam tincidunt in.
    Nam viverra, leo vitae imperdiet ultrices, ante mi facilisis mi, ac vehicula erat nulla sed nibh.
    Nam euismod gravida est, convallis placerat nunc pharetra sed. Nullam scelerisque dui augue, eu porta erat tempus in.

    Integer egestas massa orci, id scelerisque libero lobortis vitae.
    Vivamus aliquet sem massa, eget sodales sapien dictum eu.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Suspendisse non interdum sem, nec egestas nulla.
    Duis vitae leo justo. Fusce ante enim, tincidunt nec faucibus sed, fringilla et ipsum.
    Proin quis diam elit. Cras nec finibus libero. Sed bibendum lectus eget magna ultricies eleifend.
    Duis ut molestie urna. Proin cursus dolor ac ex rutrum, eu condimentum elit tincidunt.
    In a dolor faucibus, vehicula ipsum eu, viverra lorem. Aenean congue fermentum commodo.
    Sed ex purus, consectetur mollis urna eget, vestibulum mollis dolor.
    Donec sodales, felis sit amet gravida ornare, magna dolor ullamcorper turpis, vel facilisis odio ipsum semper sem.
  `;

export default {
  title: 'Internal Stories /Panel',
  component: 'cds-internal-panel',
  argTypes: getElementStorybookArgTypes('cds-internal-panel', customElements),
  parameters: {
    options: { showPanel: true },
  },
};

export function Basic() {
  return html`<cds-internal-panel> ${placeholder} </cds-internal-panel>`;
}

export function WithContainer() {
  return html`
    <div style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${placeholder}
      </cds-internal-panel>
    </div>
  `;
}

export function LongerContent() {
  return html`
    <div style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${longerContent}
      </cds-internal-panel>
    </div>
  `;
}

export function LongerContentScroll() {
  return html`
    <style>
      #panel-with-longer-content-scroll cds-internal-panel {
        --width: auto;
        --height: auto;
        --overflow: auto;
      }
    </style>
    <div id="panel-with-longer-content-scroll" style="overflow: auto; height: 100px; width: 100px;">
      <cds-internal-panel>
        ${longerContent}
      </cds-internal-panel>
    </div>
  `;
}

export function WithBorder() {
  return html`
    <style>
      #panel-with-border > cds-internal-panel {
        --border: 1px solid var(--cds-alias-object-border-color-shade);
      }
    </style>
    <div id="panel-with-border" style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${placeholder}
      </cds-internal-panel>
    </div>
  `;
}

export function WithBoxShadow() {
  return html`
    <style>
      #panel-with-boxShadow > cds-internal-panel {
        --box-shadow: var(--cds-alias-object-shadow-100);
      }
    </style>
    <div id="panel-with-boxShadow" style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${placeholder}
      </cds-internal-panel>
    </div>
  `;
}

export function WithBackground() {
  return html`
    <style>
      #panel-with-background > cds-internal-panel {
        --background: var(--cds-alias-object-interaction-background-highlight);
      }
    </style>
    <div id="panel-with-background" style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${placeholder}
      </cds-internal-panel>
    </div>
  `;
}

export function WithTextColor() {
  return html`
    <style>
      #panel-with-textColor > cds-internal-panel {
        --color: var(--cds-alias-object-interaction-background-highlight);
      }
    </style>
    <div id="panel-with-textColor" style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${placeholder}
      </cds-internal-panel>
    </div>
  `;
}

export function WithPadding() {
  return html`
    <style>
      #panel-with-padding > cds-internal-panel {
        --padding: var(--cds-global-space-10);
      }
    </style>
    <div id="panel-with-padding" style="height: 100px; width: 100px;">
      <cds-internal-panel>
        ${placeholder}
      </cds-internal-panel>
    </div>
  `;
}

export function WithDefaultLayout() {
  return html`
    <div id="panel-with-padding" style="height: 100px; width: 100%;">
      <cds-internal-panel>
        <div>${placeholder}</div>
        <div>${placeholder}</div>
        <div>${placeholder}</div>
      </cds-internal-panel>
    </div>
  `;
}

export function WithDifferentLayout() {
  return html`
    <div id="panel-with-padding" style="height: 100px; width: 100%;">
      <cds-internal-panel>
        <div class="container" cds-layout="horizontal gap:md">
          <div>${placeholder}</div>
          <div>${placeholder}</div>
          <div>${placeholder}</div>
        </div>
      </cds-internal-panel>
    </div>
  `;
}
