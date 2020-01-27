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

export const API = () => {
  return html`
    <h1>Color Coming Soon</h1>
  `;
};
