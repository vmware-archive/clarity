/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import 'lib/component-status/register.js';
import { html } from 'lit';

export default {
  title: 'Stories/Component-Status',
  component: 'doc-component-status',
};

export const basic = () => {
  return html`<doc-component-status name="accordion"></doc-component-status>`;
};

export const basicDescription = () => {
  return html`
    <doc-component-status name="accordion" description="My own version of description.">
      Additional content at the bottom
    </doc-component-status>
  `;
};

console.log('Code');
