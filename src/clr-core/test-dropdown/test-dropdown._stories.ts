/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/test-dropdown';
import { action } from '@storybook/addon-actions';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  title: '_Dropdown',
  decorators: [withKnobs],
  component: 'cwc-test-dropdown',
};

export const API = () => {
  const slot = text('slot', 'Hello World');
  const title = text('title', 'Open Dropdown');
  const open = boolean('open', false);

  return html`
    <style>
      cwc-test-dropdown {
        --border-color: ${color('--border-color', 'hsl(0, 0%, 80%)')};
        --background: ${color('--background', 'hsl(0, 0%, 80%)')};
        --color: ${color('--color', 'hsl(0, 0%, 18%)')};
      }
    </style>
    <cwc-test-dropdown
      .title=${title}
      .open=${open}
      @openChange="${(e: any) => action('openChange')(e.detail)}">
      ${slot}
    </cwc-test-dropdown>
  `;
};
