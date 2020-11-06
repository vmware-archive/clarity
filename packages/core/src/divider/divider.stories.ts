/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/divider/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Divider',
  component: 'cds-divider',
  argTypes: getElementStorybookArgTypes('cds-divider', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-divider ...="${spreadProps(getElementStorybookArgs(args))}">
      ${args.default}
    </cds-divider>
  `;
};

export const horizontal = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="body disable-lhe">It is often preferable to use dividers inside of layouts.</p>
      <cds-divider></cds-divider>
      <p cds-text="body disable-lhe">This allows them to span the dimensions of their containers as expected.</p>
    </div>
  `;
};

export const vertical = () => {
  return html`
    <div
      cds-layout="horizontal gap:md align:vertical-center p-x:md"
      style="background: var(--cds-alias-app-background-color)"
    >
      <cds-button size="sm" action="outline">Demo Button 1</cds-button>
      <cds-button size="sm" action="outline">Demo Button 1</cds-button>
      <cds-divider orientation="vertical"></cds-divider>
      <cds-button size="sm" action="outline">Demo Button 2</cds-button>
      <cds-divider orientation="vertical"></cds-divider>
      <p cds-text="body disable-lhe">Vertical dividers should be used inside horizontal layouts.</p>
    </div>
    <p cds-text="body" cds-layout="m-y:lg">
      A background color has been applied to the section above to demonstrate the divider taking the full height of its
      container.
    </p>
  `;
};

export const verticalFill = () => {
  return html`
    <div style="background: var(--cds-alias-app-background-color); width: 100%; height: 80px; padding: 0 49%">
      <cds-divider orientation="vertical"></cds-divider>
    </div>
    <p cds-text="body" cds-layout="m-y:lg">
      If not using a layout, the vertical divider should still be able to fill the known height of a container. But the
      container needs to have a height defined on it. Layouts, however, are preferred and recommended.
    </p>
  `;
};

export const custom = () => {
  return html`
    <style>
      cds-divider.app-custom {
        --color: red;
        --size: 0.1rem;
      }

      cds-divider.app-custom-2 {
        --color: purple;
        --size: 0.15rem;
        --padding: 0.3rem 0.2rem;
      }

      cds-divider.app-custom-3 {
        --color: green;
      }

      .old-style-float::after {
        clear: both;
        content: '';
        display: block;
        height: 0;
        visibility: hidden;
      }

      .old-style-float > * {
        float: left;
        height: 100%;
      }
    </style>
    <div cds-layout="vertical gap:lg">
      <div cds-layout="horizontal gap:md align:vertical-center">
        <cds-button size="sm">Demo Button 1</cds-button>
        <cds-divider class="app-custom-2" orientation="vertical"></cds-divider>
        <cds-button size="sm" action="outline">Demo Button 2</cds-button>
        <cds-button size="sm" action="outline">Demo Button 3</cds-button>
      </div>
      <cds-divider class="app-custom"></cds-divider>
      <div cds-layout="align:stretch">
        <p cds-text="body disable-lhe">The thickness (size) and color of dividers can be customized.</p>
      </div>
    </div>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-layout="vertical gap:md" cds-theme="dark">
      <p cds-text="body">It is often preferable to use dividers inside of layouts.</p>
      <cds-divider></cds-divider>
      <p cds-text="body">This allows them to span the dimensions of their containers as expected.</p>
    </div>
  `;
};
