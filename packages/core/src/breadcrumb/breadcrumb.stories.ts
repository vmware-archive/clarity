/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/breadcrumb/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit';

export default {
  title: 'Stories/Breadcrumb',
  component: 'cds-breadcrumb',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lyq8iK32X3nlbHXTb0z9Bk/Breadcrumb?node-id=0%3A1',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-breadcrumb ...="${spreadProps(getElementStorybookArgs(args))}">
      <a href="#" cds-text="link">link</a>
      <span aria-current="page">Current page</span>
    </cds-breadcrumb>
  `;
}

/** @website */
export function standard() {
  return html`
    <cds-breadcrumb aria-label="breadcrumb">
      <a href="#" cds-text="link">Home</a>
      <a href="#" cds-text="link">Parent page</a>
      <a href="#" cds-text="link" aria-current="page">Current page</a>
    </cds-breadcrumb>
  `;
}

/** @website */
export function separator() {
  return html`
    <cds-breadcrumb aria-label="breadcrumb">
      <cds-icon slot="cds-separator" shape="angle" direction="right" aria-hidden="true"></cds-icon>
      <a href="#" cds-text="link">Home</a>
      <a href="#" cds-text="link">Parent page</a>
      <span aria-current="page">Current page</span>
    </cds-breadcrumb>
  `;
}

/** @website */
export function gap() {
  return html`
    <cds-breadcrumb aria-label="breadcrumb" class="custom-gap">
      <span cds-layout="p-x:lg" slot="cds-separator">🚘</span>
      <a href="#" cds-text="link">Home</a>
      <a href="#" cds-text="link">Parent page</a>
      <span aria-current="page">Current page</span>
    </cds-breadcrumb>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <div cds-theme="dark">
      <cds-breadcrumb aria-label="breadcrumb">
        <a href="#" cds-text="link">Home</a>
        <a href="#" cds-text="link">Parent page</a>
        <span aria-current="page">Current page</span>
      </cds-breadcrumb>
    </div>
  `;
}
