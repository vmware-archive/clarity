/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Documentation|Color',
  decorators: [withDesign],
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=290%3A0',
    },
  },
};

const colors = [
  {
    name: 'neutral',
    weights: [
      { weight: 0, hsl: 'hsl(198, 0%, 100%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 50, hsl: 'hsl(198, 0%, 98%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 100, hsl: 'hsl(198, 0%, 95%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 200, hsl: 'hsl(198, 0%, 91%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 300, hsl: 'hsl(198, 0%, 87%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 400, hsl: 'hsl(198, 0%, 80%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 500, hsl: 'hsl(198, 0%, 70%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 600, hsl: 'hsl(198, 0%, 55%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 700, hsl: 'hsl(198, 0%, 40%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 800, hsl: 'hsl(198, 0%, 27%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 900, hsl: 'hsl(198, 0%, 20%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 1000, hsl: 'hsl(198, 0%, 0%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
    ],
  },
  {
    name: 'action',
    weights: [
      { weight: 50, hsl: 'hsl(198, 83%, 94%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 100, hsl: 'hsl(198, 81%, 88%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 200, hsl: 'hsl(198, 78%, 78%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 300, hsl: 'hsl(198, 69%, 69%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 400, hsl: 'hsl(198, 66%, 57%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 500, hsl: 'hsl(198, 80%, 46%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 600, hsl: 'hsl(198, 100%, 32%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 700, hsl: 'hsl(198, 100%, 28%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 800, hsl: 'hsl(198, 100%, 24%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 900, hsl: 'hsl(198, 100%, 21%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 1000, hsl: 'hsl(198, 100%, 15%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
    ],
  },
  {
    name: 'secondary-action',
    weights: [
      { weight: 50, hsl: 'hsl(282, 100%, 95%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 100, hsl: 'hsl(282, 59%, 87%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 200, hsl: 'hsl(282, 51%, 78%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 300, hsl: 'hsl(282, 45%, 70%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 400, hsl: 'hsl(282, 44%, 62%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 500, hsl: 'hsl(282, 43%, 54%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 600, hsl: 'hsl(282, 50%, 45%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 700, hsl: 'hsl(282, 69%, 37%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 800, hsl: 'hsl(282, 100%, 29%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 900, hsl: 'hsl(282, 100%, 22%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 1000, hsl: 'hsl(282, 100%, 14%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
    ],
  },
  {
    name: 'danger',
    weights: [
      { weight: 50, hsl: 'hsl(9, 100%, 97%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 100, hsl: 'hsl(9, 95%, 92%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 200, hsl: 'hsl(9, 91%, 86%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 300, hsl: 'hsl(9, 83%, 76%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 400, hsl: 'hsl(9, 85%, 67%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 500, hsl: 'hsl(9, 88%, 61%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 600, hsl: 'hsl(9, 92%, 50%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 700, hsl: 'hsl(9, 100%, 43%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 800, hsl: 'hsl(9, 100%, 38%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 900, hsl: 'hsl(9, 100%, 30%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 1000, hsl: 'hsl(9, 100%, 20%)', on: 'hsl(198, 0%, 100%)' },
    ],
  },
  {
    name: 'warning',
    weights: [
      { weight: 50, hsl: 'hsl(48, 100%, 95%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 100, hsl: 'hsl(48, 100%, 89%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 200, hsl: 'hsl(48, 100%, 83%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 300, hsl: 'hsl(48, 98%, 72%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 400, hsl: 'hsl(48, 94%, 57%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 500, hsl: 'hsl(48, 95%, 48%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 600, hsl: 'hsl(46, 100%, 45%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 700, hsl: 'hsl(43, 100%, 42%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 800, hsl: 'hsl(41, 100%, 36%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 900, hsl: 'hsl(38, 100%, 28%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 1000, hsl: 'hsl(31, 100%, 19%)', on: 'hsl(198, 0%, 100%)' },
    ],
  },
  {
    name: 'success',
    weights: [
      { weight: 50, hsl: 'hsl(93, 52%, 88%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 100, hsl: 'hsl(93, 58%, 75%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 200, hsl: 'hsl(93, 76%, 49%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 300, hsl: 'hsl(93, 77%, 44%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 400, hsl: 'hsl(93, 79%, 40%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 500, hsl: 'hsl(93, 67%, 38%)', on: 'hsl(198, 0%, 0%)', baseColor: true },
      { weight: 600, hsl: 'hsl(93, 85%, 32%)', on: 'hsl(198, 0%, 0%)' },
      { weight: 700, hsl: 'hsl(93, 100%, 26%)', on: 'hsl(198, 0%, 100%)', baseColor: true },
      { weight: 800, hsl: 'hsl(93, 100%, 21%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 900, hsl: 'hsl(93, 100%, 16%)', on: 'hsl(198, 0%, 100%)' },
      { weight: 1000, hsl: 'hsl(93, 100%, 13%)', on: 'hsl(198, 0%, 100%)' },
    ],
  },
];

export const API = () => {
  return html`
    <style>
      .color {
        padding: 2rem 1rem;
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        margin-bottom: 1rem;
      }

      .color-list {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(3,1fr);
      }
    </style>
    <h1>Color</h1>
    
    ${colors.map(
      palette => html`
      <h3>${palette.name} color</h3>
      <div class="color-list">
      ${palette.weights.map(
        color => html`
        <div class="color" style="background: ${color.hsl}; color: ${color.on}">
          ${color.hsl}
          <!-- --clr-color-${palette.name}-${color.weight} -->
        </div>
      `
      )}
      </div>
    `
    )}

    <h2>Color On</h2>
    ${colors.map(
      palette => html`
      <h3>${palette.name} color</h3>
      <div class="color-list">
      ${palette.weights.map(
        color => html`
        <div class="color" style="background: ${color.on}; color: ${color.hsl}">
          ${color.hsl}
          <!-- --clr-color-${palette.name}-${color.weight} -->
        </div>
      `
      )}
      </div>
    `
    )}
  `;
};
