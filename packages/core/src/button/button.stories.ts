/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, popOutIcon, downloadCloudIcon } from '@cds/core/icon';
import { spreadProps, getElementStorybookArgs, getElementStorybookArgTypes } from '@cds/core/internal';
import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

ClarityIcons.addIcons(downloadCloudIcon, popOutIcon, userIcon);

export default {
  title: 'Stories/Button',
  component: 'cds-button',
  argTypes: getElementStorybookArgTypes('cds-button', customElements),
  parameters: {
    controls: { expanded: true },
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-button ...="${spreadProps(getElementStorybookArgs(args))}">
      ${args.default}
    </cds-button>
  `;
};

export const form = () => {
  return html`
    <form
      cds-layout="vertical gap:md"
      @submit="${(e: Event) => {
        e.preventDefault();
        action('submit')(e);
      }}"
    >
      <div cds-layout="vertical gap:sm">
        <label for="name" cds-text="caption">Name</label>
        <input id="name" />
      </div>
      <cds-button type="submit">submit</cds-button>
    </form>
  `;
};

export const actions = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-button>solid</cds-button>
      <cds-button action="outline">outline</cds-button>
      <cds-button action="flat">flat</cds-button>
    </div>
  `;
};

export const status = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-button>primary</cds-button>
      <cds-button status="success">success</cds-button>
      <cds-button status="danger">danger</cds-button>
      <cds-button status="danger" disabled>disabled</cds-button>
      <div style="background: var(--cds-global-typography-color-500)" cds-layout="p:sm">
        <cds-button status="inverse">inverse</cds-button>
      </div>
    </div>
  `;
};

export const statusOutline = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-button action="outline">primary</cds-button>
      <cds-button action="outline" status="success">success</cds-button>
      <cds-button action="outline" status="danger">danger</cds-button>
      <cds-button action="outline" disabled>disabled</cds-button>
    </div>
  `;
};

export const iconWithText = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal gap:sm">
        <cds-button><cds-icon shape="user"></cds-icon>user account</cds-button>
        <cds-button action="outline"><cds-icon shape="user"></cds-icon>user account</cds-button>
        <cds-button action="flat"><cds-icon shape="user"></cds-icon>user account</cds-button>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button size="sm"><cds-icon shape="user"></cds-icon>user account</cds-button>
        <cds-button size="sm" action="outline"><cds-icon shape="user"></cds-icon>user account</cds-button>
        <cds-button size="sm" action="flat"><cds-icon shape="user"></cds-icon>user account</cds-button>
      </div>
      <div>
        <cds-button>new window <cds-icon shape="pop-out"></cds-icon></cds-button>
        <cds-button action="outline">download<cds-icon shape="download-cloud"></cds-icon></cds-button>
      </div>
    </div>
  `;
};

export const iconWithTextAndBadge = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal gap:sm">
        <cds-button><cds-icon shape="user"></cds-icon> click <cds-badge color="blue">10</cds-badge></cds-button>
        <cds-button action="outline"
          ><cds-icon shape="user"></cds-icon> click <cds-badge color="blue">10</cds-badge></cds-button
        >
        <cds-button action="flat"
          ><cds-icon shape="user"></cds-icon> click <cds-badge color="blue">10</cds-badge></cds-button
        >
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button size="sm"
          ><cds-icon shape="user"></cds-icon> click <cds-badge color="blue">10</cds-badge></cds-button
        >
        <cds-button size="sm" action="outline"
          ><cds-icon shape="user"></cds-icon> click <cds-badge color="blue">10</cds-badge></cds-button
        >
        <cds-button size="sm" action="flat"
          ><cds-icon shape="user"></cds-icon> click <cds-badge color="blue">10</cds-badge></cds-button
        >
      </div>
    </div>
  `;
};

export const textAndBadge = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal gap:sm">
        <cds-button>Click Me <cds-badge>10</cds-badge></cds-button>
        <cds-button action="outline">Click Me <cds-badge>10</cds-badge></cds-button>
        <cds-button action="flat">Click Me <cds-badge>10</cds-badge></cds-button>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button status="danger">Click Me <cds-badge>10</cds-badge></cds-button>
        <cds-button status="danger" action="outline">Click Me <cds-badge>10</cds-badge></cds-button>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button status="success">Click Me <cds-badge>10</cds-badge></cds-button>
        <cds-button status="success" action="outline">Click Me <cds-badge>10</cds-badge></cds-button>
      </div>
      <div cds-layout="horizontal gap:sm p:xs p-b:none" style="background: #313131">
        <cds-button status="inverse">Click Me <cds-badge>10</cds-badge></cds-button>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button size="sm">Click Me <cds-badge>10</cds-badge></cds-button>
        <cds-button size="sm" action="outline">Click Me <cds-badge>10</cds-badge></cds-button>
        <cds-button size="sm" action="flat">Click Me <cds-badge>10</cds-badge></cds-button>
      </div>
    </div>
  `;
};

export const links = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-button>
        button
      </cds-button>

      <a href="javascript:void(0)">
        <cds-button>link</cds-button>
      </a>

      <a href="javascript:void(0)">
        <cds-button>this is a long link</cds-button>
      </a>

      <a href="javascript:void(0)">
        <cds-button size="sm">small link</cds-button>
      </a>

      <br />
      <a href="javascript:void(0)">
        <cds-button action="outline">link</cds-button>
      </a>

      <a href="javascript:void(0)">
        <cds-button action="outline">this is a long link</cds-button>
      </a>

      <a href="javascript:void(0)">
        <cds-button action="outline" size="sm">small link</cds-button>
      </a>
    </div>
  `;
};

export const sizes = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal align-items:left gap:sm">
        <cds-button>Default ('md')</cds-button>
        <cds-button action="outline">Default ('md')</cds-button>
      </div>
      <div cds-layout="horizontal align-items:left gap:sm">
        <cds-button size="sm">Compact ('sm')</cds-button>
        <cds-button action="outline" size="sm">Compact ('sm')</cds-button>
      </div>
    </div>
  `;
};

export const block = () => {
  return html`
    <div cds-layout="vertical gap:sm align:horizontal-stretch">
      <cds-button block>Default ('md')</cds-button>
      <cds-button block action="outline">Default ('md')</cds-button>
      <cds-button block size="sm">Compact ('sm')</cds-button>
      <cds-button block action="outline" size="sm">Compact ('sm')</cds-button>
    </div>
  `;
};

export const loading = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal gap:sm align-items:bottom">
        <cds-button loading-state="default">default</cds-button>
        <cds-button loading-state="loading">default</cds-button>
        <cds-button loading-state="success">default</cds-button>
        <cds-button loading-state="error">default</cds-button>
      </div>
      <div cds-layout="horizontal gap:sm align-items:bottom">
        <cds-button size="sm" loading-state="default">default</cds-button>
        <cds-button size="sm" loading-state="loading">default</cds-button>
        <cds-button size="sm" loading-state="success">default</cds-button>
        <cds-button size="sm" loading-state="error">default</cds-button>
      </div>
    </div>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-layout="vertical gap:sm" cds-theme="dark">
      <div cds-layout="horizontal gap:sm">
        <cds-button><cds-icon shape="user"></cds-icon>primary<cds-badge>10</cds-badge></cds-button>
        <cds-button status="success"><cds-icon shape="user"></cds-icon>success<cds-badge>10</cds-badge></cds-button>
        <cds-button status="danger"><cds-icon shape="user"></cds-icon>danger<cds-badge>10</cds-badge></cds-button>
        <cds-button status="danger" disabled
          ><cds-icon shape="user"></cds-icon>disabled<cds-badge>10</cds-badge></cds-button
        >
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button action="outline"><cds-icon shape="user"></cds-icon>primary<cds-badge>10</cds-badge></cds-button>
        <cds-button action="outline" status="success"
          ><cds-icon shape="user"></cds-icon>success<cds-badge>10</cds-badge></cds-button
        >
        <cds-button action="outline" status="danger"
          ><cds-icon shape="user"></cds-icon>danger<cds-badge>10</cds-badge></cds-button
        >
        <cds-button action="outline" status="danger" disabled
          ><cds-icon shape="user"></cds-icon>disabled<cds-badge>10</cds-badge></cds-button
        >
        <cds-button action="flat"><cds-icon shape="user"></cds-icon>flat<cds-badge>10</cds-badge></cds-button>
      </div>
    </div>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .btn-branding {
        --background: #a447bb;
        --border-color: #74178b;
        --border-width: 0.15rem;
        --border-radius: 0.4rem;
        --text-transform: capitalize;
        --padding-vertical: 0.9rem;
        --padding-horizontal: 1rem;
        --font-size: 0.9rem;
        --font-weight: bolder;
        --font-family: 'Courier New', monospace;
        --height: 2.4rem;
      }

      .btn-branding:hover {
        --background: #74178b;
      }

      .btn-branding:active {
        --border-color: #44005b;
        --box-shadow-color: #44005b;
      }
    </style>
    <cds-button class="btn-branding">button</cds-button>
  `;
};
