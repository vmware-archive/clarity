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
  title: 'Components|Button',
  component: 'cwc-button',
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
  const block = boolean('block', false, propertiesGroup);
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
  const lineHeight = text('--line-height', undefined, cssGroup);
  const letterSpacing = text('--letter-spacing', undefined, cssGroup);

  return html`
    <div class=${buttonStatus === 'inverse' ? 'demo-inverse' : ''}>
      <style>
        cwc-button {
          ${setStyles({
            '--color': buttonColor,
            '--background': background,
            '--box-shadow-color': boxShadowColor,
            '--border-color': borderColor,
            '--border-width': borderWidth,
            '--border-radius': borderRadius,
            '--font-size': fontSize,
            '--font-weight': fontWeight,
            '--line-height': lineHeight,
            '--letter-spacing': letterSpacing,
          })}
      </style>
      <cwc-button
        .action=${actionType}
        .status=${buttonStatus}
        .size=${size}
        .loadingState=${loadingState}
        .disabled=${disabled}
        .block=${block}
        @click=${action('click')}>
        ${size === 'icon' ? html`<cwc-icon></cwc-icon>` : slot}
      </cwc-button>
    </div>
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
      <cwc-button type="submit">submit</cwc-button>
    </form>
  `;
};

export const actions = () => {
  return html`
    <h1>Actions</h1>
    <cwc-button>solid</cwc-button>
    <cwc-button action="outline">outline</cwc-button>
    <cwc-button action="flat">link</cwc-button>
  `;
};

export const status = () => {
  return html`
    <section>
      <h2>Solid Status</h2>
      <cwc-button>primary</cwc-button>
      <cwc-button status="success">success</cwc-button>
      <cwc-button status="danger">danger</cwc-button>
      <cwc-button status="danger" disabled>disabled</cwc-button>
    </section>

    <section>
      <h2>Outline Status</h2>
      <cwc-button action="outline">primary</cwc-button>
      <cwc-button action="outline" status="success">success</cwc-button>
      <cwc-button action="outline" status="danger">danger</cwc-button>
      <cwc-button action="outline" disabled>disabled</cwc-button>
    </section>
  `;
};

export const icons = () => {
  return html`
    <h2>Icon Solid</h2>
    <cwc-button aria-label="user account" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button aria-label="user account" disabled size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button aria-label="user account" status="success" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button aria-label="user account" status="danger" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>

    <h2>Icon Outline</h2>
    <cwc-button aria-label="user account" action="outline" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button aria-label="user account" action="outline" disabled size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button aria-label="user account" action="outline" status="success" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button aria-label="user account" action="outline" status="danger" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>

    <h2>Icon with text</h2>
    <cwc-button><cwc-icon shape="user"></cwc-icon> user account</cwc-button>
    <cwc-button action="outline"><cwc-icon shape="user"></cwc-icon> user account</cwc-button>
    <cwc-button action="flat"><cwc-icon shape="user"></cwc-icon> user account</cwc-button>
  `;
};

export const links = () => {
  return html`
    <h1>Solid Links</h1>
    <cwc-button>
      <a href="#">link</a>
    </cwc-button>

    <cwc-button>
      <a href="#">this is a long link</a>
    </cwc-button>

    <cwc-button size="sm">
      <a routerLink="/i18n">small link</a>
    </cwc-button>

    <h2>Outline Links</h2>
    <cwc-button action="outline">
      <a href="#">link</a>
    </cwc-button>

    <cwc-button action="outline">
      <a href="#">this is a long link</a>
    </cwc-button>

    <cwc-button action="outline" size="sm">
      <a routerLink="/i18n">small link</a>
    </cwc-button>
  `;
};

export const sizes = () => {
  return html`
    <h1>Sizes</h1>

    <h2>Solid</h2>
    <cwc-button>default</cwc-button>
    <cwc-button size="sm">small</cwc-button>
    <cwc-button aria-label="user account" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>

    <h2>Outline</h2>
    <cwc-button action="outline">default</cwc-button>
    <cwc-button action="outline" size="sm">small</cwc-button>
    <cwc-button action="outline" aria-label="user account" size="icon"><cwc-icon shape="user"></cwc-icon></cwc-button>
  `;
};

export const loading = () => {
  return html`
    <h1>Loading</h1>
    <cwc-button .loadingState="${ClrLoadingState.LOADING}">solid</cwc-button>
    <cwc-button action="outline" .loadingState="${ClrLoadingState.LOADING}">outline</cwc-button>
    <cwc-button size="sm" .loadingState="${ClrLoadingState.LOADING}">small</cwc-button>
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
    <cwc-button class="btn-branding">button</cwc-button>
  `;
};
