/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon/register.js';
import '@clr/core/progress-circle/register.js';
import { ClarityIcons, homeIcon, nodesIcon, stopIcon, warningStandardIcon } from '@clr/core/icon';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@clr/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

ClarityIcons.addIcons(homeIcon, nodesIcon, stopIcon, warningStandardIcon);

export default {
  title: 'Components (Preview)/Circular Progress/Stories',
  component: 'cds-progress-circle',
  argTypes: getElementStorybookArgTypes('cds-progress-circle', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = (args: any) => {
  return html` <cds-progress-circle ...="${spreadProps(getElementStorybookArgs(args))}"></cds-progress-circle> `;
};

export const spinner = () => {
  return html`
    <cds-progress-circle
      size="xl"
      aria-label="Demonstration of indeterminate progress circle spinning to show work is in progress"
    ></cds-progress-circle>
  `;
};

export const status = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-progress-circle size="xl" value="0"></cds-progress-circle>
      <cds-progress-circle size="xl" value="12"></cds-progress-circle>
      <cds-progress-circle size="xl" value="100"></cds-progress-circle>
      <cds-progress-circle size="xl" status="info" value="48"></cds-progress-circle>
      <cds-progress-circle size="xl" status="success" value="72"></cds-progress-circle>
      <cds-progress-circle size="xl" status="warning" value="36"></cds-progress-circle>
      <cds-progress-circle size="xl" status="danger" value="84"></cds-progress-circle>
      <cds-progress-circle size="xl" status="unknown" value="60"></cds-progress-circle>
      <div style="background: #313131">
        <cds-progress-circle size="xl" inverse value="24"></cds-progress-circle>
      </div>
    </div>
  `;
};

// this is kept here so we can verify the animation when we need to.
// to test in screen reader, need to have a long interval.
// note for future dev, throttle dynamic progress updates so as not to spam the screen reader.
export const chaos = () => {
  return html`
    <span id="progress-announce" cds-layout="display:screen-reader-only" aria-live="polite"
      >Circular progress example: 12% complete</span
    >
    <cds-progress-circle value="12" size="xl" id="pureChaos"></cds-progress-circle>
    <br />
    <button
      @click=${() => {
        setInterval(() => {
          const el = document.getElementById('pureChaos');
          const a11yEl = document.getElementById('progress-announce');
          const newValue = Math.floor(Math.random() * (100 - 1)).toString();
          el.setAttribute('value', newValue);
          a11yEl.innerText = `Circular progress example: ${newValue}% complete`;
        }, 3200);
      }}
    >
      Start Me Up!
    </button>
  `;
};

export const custom = () => {
  return html`
    <style>
      cds-progress-circle.app-custom {
        --fill-color: fuchsia;
      }

      cds-progress-circle.app-custom-2 {
        --ring-color: #313131;
        --fill-color: #ff7700;
      }

      cds-progress-circle.app-custom-3 {
        --fill-color: limegreen;
        --ring-opacity: 0;
      }
    </style>
    <div cds-layout="horizontal gap:md">
      <cds-progress-circle class="app-custom" value="66" size="64"></cds-progress-circle>
      <cds-progress-circle class="app-custom-2" value="49" line="10" size="64"></cds-progress-circle>
      <cds-progress-circle class="app-custom-3" size="64" line="6"></cds-progress-circle>
    </div>
  `;
};
