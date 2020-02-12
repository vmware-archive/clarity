/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/button';
import { ClrLoadingState } from '@clr/core/button';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/common';
import '@clr/core/icon';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Components/Button',
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
  const size = select('size', { 'medium (default)': 'md', sm: 'sm', icon: 'icon' }, undefined, propertiesGroup);
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
          })}
      </style>
      <cds-button
        .action=${actionType}
        .status=${buttonStatus}
        .size=${size}
        .loadingState=${loadingState}
        .disabled=${disabled}
        @click=${action('click')}>
        ${size === 'icon' ? html`<cds-icon></cds-icon>` : slot}
      </cds-button>
        </cds-demo>
  `;
};

export const form = () => {
  return html`
    <h1>Form Demo (see actions)</h1>
    <form @submit="${(e: Event) => {
      e.preventDefault();
      action('submit')(e);
    }}">
      <label for="name">Name</label><br />
      <input id="name" /><br />
      <cds-button type="submit">submit</cds-button>
    </form>
  `;
};

export const actions = () => {
  return html`
    <h1>Actions</h1>
    <cds-button>solid</cds-button>
    <cds-button action="outline">outline</cds-button>
    <cds-button action="flat">link</cds-button>
  `;
};

export const status = () => {
  return html`
    <section>
      <h2>Solid Status</h2>
      <cds-button>primary</cds-button>
      <cds-button status="success">success</cds-button>
      <cds-button status="danger">danger</cds-button>
      <cds-button status="danger" disabled>disabled</cds-button>
    </section>

    <section>
      <h2>Outline Status</h2>
      <cds-button action="outline">primary</cds-button>
      <cds-button action="outline" status="success">success</cds-button>
      <cds-button action="outline" status="danger">danger</cds-button>
      <cds-button action="outline" disabled>disabled</cds-button>
    </section>
  `;
};

export const icons = () => {
  return html`
    <h2>Icon Solid</h2>
    <cds-button aria-label="user account" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    <cds-button aria-label="user account" disabled size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    <cds-button aria-label="user account" status="success" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    <cds-button aria-label="user account" status="danger" size="icon"><cds-icon shape="user"></cds-icon></cds-button>

    <h2>Icon Outline</h2>
    <cds-button aria-label="user account" action="outline" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    <cds-button aria-label="user account" action="outline" disabled size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    <cds-button aria-label="user account" action="outline" status="success" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    <cds-button aria-label="user account" action="outline" status="danger" size="icon"><cds-icon shape="user"></cds-icon></cds-button>

    <h2>Icon with text</h2>
    <cds-button><cds-icon shape="user"></cds-icon> user account</cds-button>
    <cds-button action="outline"><cds-icon shape="user"></cds-icon> user account</cds-button>
    <cds-button action="flat"><cds-icon shape="user"></cds-icon> user account</cds-button>
  `;
};

export const links = () => {
  return html`
    <h1>Solid Links</h1>
    <cds-button>
      <a href="#">link</a>
    </cds-button>

    <cds-button>
      <a href="#">this is a long link</a>
    </cds-button>

    <cds-button size="sm">
      <a href="#">small link</a>
    </cds-button>

    <h2>Outline Links</h2>
    <cds-button action="outline">
      <a href="#">link</a>
    </cds-button>

    <cds-button action="outline">
      <a href="#">this is a long link</a>
    </cds-button>

    <cds-button action="outline" size="sm">
      <a href="#">small link</a>
    </cds-button>
  `;
};

export const sizes = () => {
  return html`
    <h1>Sizes</h1>

    <h2>Solid</h2>
    <cds-button>default</cds-button>
    <cds-button size="sm">small</cds-button>
    <cds-button aria-label="user account" size="icon"><cds-icon shape="user"></cds-icon></cds-button>

    <h2>Outline</h2>
    <cds-button action="outline">default</cds-button>
    <cds-button action="outline" size="sm">small</cds-button>
    <cds-button action="outline" aria-label="user account" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
  `;
};

export const loading = () => {
  return html`
    <h1>Loading</h1>
    <cds-button .loadingState="${ClrLoadingState.LOADING}">solid</cds-button>
    <cds-button action="outline" .loadingState="${ClrLoadingState.LOADING}">outline</cds-button>
    <cds-button size="sm" .loadingState="${ClrLoadingState.LOADING}">small</cds-button>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .btn-branding {
        --background: #a447bb;
        --border-color: #a447bb;
      }

      .btn-branding:hover {
        --background: #9136a8;
      }
    </style>
    <h1>Custom CSS</h1>
    <cds-button class="btn-branding">button</cds-button>
  `;
};
