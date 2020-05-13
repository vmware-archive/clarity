/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/badge';
import '@clr/core/button';
import { ClrLoadingState } from '@clr/core/button';
import '@clr/core/icon';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Components/Button/Stories',
  component: 'cds-button',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
    },
  },
};

export const API = () => {
  const slot = text('slot', 'Hello World', propertiesGroup);
  const actionType = select(
    'action',
    { 'solid (default)': 'solid', outline: 'outline', flat: 'flat' },
    undefined,
    propertiesGroup
  );
  const buttonStatus = select(
    'status',
    { 'primary (default)': 'primary', success: 'success', danger: 'danger', inverse: 'inverse' },
    undefined,
    propertiesGroup
  );
  const size = select('size', { 'medium (default)': 'md', sm: 'sm' }, undefined, propertiesGroup);
  const disabled = boolean('disabled', false, propertiesGroup);
  const loadingState = select(
    'loadingState',
    {
      default: ClrLoadingState.DEFAULT,
      error: ClrLoadingState.ERROR,
      loading: ClrLoadingState.LOADING,
      success: ClrLoadingState.SUCCESS,
    },
    ClrLoadingState.DEFAULT,
    propertiesGroup
  );

  const buttonColor = color('--color', undefined, cssGroup);
  const background = color('--background', undefined, cssGroup);
  const boxShadowColor = color('--box-shadow-color', undefined, cssGroup);
  const borderColor = color('--border-color', undefined, cssGroup);
  const borderWidth = text('--border-width', undefined, cssGroup);
  const borderRadius = text('--border-radius', undefined, cssGroup);
  const fontSize = text('--font-size', undefined, cssGroup);
  const fontWeight = text('--font-weight', undefined, cssGroup);
  const fontFamily = text('--font-family', undefined, cssGroup);
  const textTransform = text('--text-transform', undefined, cssGroup);
  const letterSpacing = text('--letter-spacing', undefined, cssGroup);
  const padding = text('--padding', undefined, cssGroup);
  const height = text('--height', undefined, cssGroup);

  return html`
    <cds-demo ?inverse=${buttonStatus === 'inverse'} inline-block>
      <style>
        cds-button {
          ${setStyles({
          '--color': buttonColor,
          '--background': background,
          '--box-shadow-color': boxShadowColor,
          '--border-color': borderColor,
          '--border-width': borderWidth,
          '--border-radius': borderRadius,
          '--font-size': fontSize,
          '--font-weight': fontWeight,
          '--font-family': fontFamily,
          '--text-transform': textTransform,
          '--letter-spacing': letterSpacing,
          '--padding': padding,
          '--height': height,
        })}
      </style>
      <cds-button
        .action=${actionType}
        .status=${buttonStatus}
        .size=${size}
        .loadingState=${loadingState}
        .disabled=${disabled}
        @click=${action('click')}
      >
        ${slot}
      </cds-button>
    </cds-demo>
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
      <cds-button action="flat">link</cds-button>
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
        <cds-button><cds-icon shape="user"></cds-icon> user account</cds-button>
        <cds-button action="outline"><cds-icon shape="user"></cds-icon> user account</cds-button>
        <cds-button action="flat"><cds-icon shape="user"></cds-icon> user account</cds-button>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-button size="sm"><cds-icon shape="user"></cds-icon> user account</cds-button>
        <cds-button size="sm" action="outline"><cds-icon shape="user"></cds-icon> user account</cds-button>
        <cds-button size="sm" action="flat"><cds-icon shape="user"></cds-icon> user account</cds-button>
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
      <div cds-layout="horizontal gap:sm p-b:xs" style="background: #313131">
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
        <a href="javascript:void(0)">link</a>
      </cds-button>

      <cds-button>
        <a href="javascript:void(0)">this is a long link</a>
      </cds-button>

      <cds-button size="sm">
        <a href="javascript:void(0)">small link</a>
      </cds-button>
      <br />
      <cds-button action="outline">
        <a href="javascript:void(0)">link</a>
      </cds-button>

      <cds-button action="outline">
        <a href="javascript:void(0)">this is a long link</a>
      </cds-button>

      <cds-button action="outline" size="sm">
        <a href="javascript:void(0)">small link</a>
      </cds-button>
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
