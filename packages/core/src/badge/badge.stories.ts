/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/badge/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Badge',
  component: 'cds-badge',
  argTypes: getElementStorybookArgTypes('cds-badge', customElements),
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
    <cds-badge ...="${spreadProps(getElementStorybookArgs(args))}">
      ${args.default}
    </cds-badge>
  `;
};

export const status = () => {
  return html`
    <cds-badge status="info"
      >2<span cds-layout="display:screen-reader-only"> items in an informational badge.</span></cds-badge
    >
    <cds-badge status="success"
      >3<span cds-layout="display:screen-reader-only"> items in a badge indicating success.</span></cds-badge
    >
    <cds-badge status="warning"
      >12<span cds-layout="display:screen-reader-only"> items in a badge indicating a warning.</span></cds-badge
    >
    <cds-badge status="danger"
      >15<span cds-layout="display:screen-reader-only"> items in a badge indicating an error.</span></cds-badge
    >
  `;
};

export const color = () => {
  return html`
    <cds-badge>5</cds-badge>
    <cds-badge color="gray"
      >1<span cds-layout="display:screen-reader-only">
        item. Item text for screen-readers should be added to badges in elements that will only be read in a
        screen-reader.</span
      ></cds-badge
    >
    <cds-badge color="purple"
      >1<span cds-layout="display:screen-reader-only">
        item. Item text for screen-readers should be added to badges in elements that will only be read in a
        screen-reader.</span
      ></cds-badge
    >
    <cds-badge color="blue"
      >15<span cds-layout="display:screen-reader-only">
        items. Item text for screen-readers should be added to badges in elements that will only be read in a
        screen-reader.</span
      ></cds-badge
    >
    <cds-badge color="orange"
      >2<span cds-layout="display:screen-reader-only">
        items. Item text for screen-readers should be added to badges in elements that will only be read in a
        screen-reader.</span
      ></cds-badge
    >
    <cds-badge color="light-blue"
      >3<span cds-layout="display:screen-reader-only">
        items. Item text for screen-readers should be added to badges in elements that will only be read in a
        screen-reader.</span
      ></cds-badge
    >
  `;
};

export const colorCustom = () => {
  return html`
    <style>
      cds-badge.app-custom {
        --background: darkblue;
        --color: snow;
      }

      cds-badge.app-custom-2 {
        --background: fuchsia;
        --color: snow;
        --border-color: rgba(255, 255, 255, 0.7);
        --border-width: 0.1rem;
        --font-size: 0.7rem;
        --font-weight: bold;
        --size: 1.4rem;
        --padding: 0.1rem 0.3rem;
      }

      cds-badge.app-custom-3 {
        --background: limegreen;
        --color: darkgreen;
        --border-color: darkgreen;
        --border-width: 0.1rem;
        --font-size: 0.7rem;
        --font-weight: bolder;
        --size: 1.4rem;
        --padding: 0.1rem 0.3rem;
      }
    </style>
    <p>
      <cds-badge class="app-custom"
        >2300+<span cds-layout="display:screen-reader-only">
          items. Item text for screen-readers should be added to badges in elements that will only be read in a
          screen-reader.</span
        ></cds-badge
      >
    </p>
    <p>
      <cds-badge class="app-custom-2"
        >3<span cds-layout="display:screen-reader-only">
          items. Item text for screen-readers should be added to badges in elements that will only be read in a
          screen-reader.</span
        ></cds-badge
      >
    </p>
    <p>
      <cds-badge class="app-custom-3"
        >34,000+<span cds-layout="display:screen-reader-only">
          items. Item text for screen-readers should be added to badges in elements that will only be read in a
          screen-reader.</span
        ></cds-badge
      >
    </p>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-layout="horizontal gap:sm" cds-theme="dark">
      <cds-badge>10<span cds-layout="display:screen-reader-only"> items in a dark theme default badge.</span></cds-badge></cds-badge>
      <cds-badge status="info">20<span cds-layout="display:screen-reader-only"> items in a dark theme info badge.</span></cds-badge></cds-badge>
      <cds-badge status="success">30<span cds-layout="display:screen-reader-only"> items in a dark theme success badge.</span></cds-badge></cds-badge>
      <cds-badge status="warning">40<span cds-layout="display:screen-reader-only"> items in a dark theme warning badge.</span></cds-badge></cds-badge>
      <cds-badge status="danger">50<span cds-layout="display:screen-reader-only"> items in a dark theme danger badge.</span></cds-badge></cds-badge>
    </div>
  `;
};
