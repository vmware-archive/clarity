/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getElementStorybookArgs, getElementStorybookArgTypes } from './metadata.js';

const customElementsData = {
  version: 'experimental',
  tags: [
    {
      name: 'cds-badge',
      path: './badge/badge.element.d.ts',
      description: '',
      properties: [
        {
          name: 'status',
          description:
            "Sets the color of the badge from the following predefined list of statuses:\n'info', 'success', 'warning', 'danger'",
          type: '"info" | "success" | "warning" | "danger"',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content slot for inside the badge',
        },
      ],
      cssProperties: [
        {
          name: '--background',
        },
        {
          name: '--border',
        },
      ],
    },
  ],
};

describe('metadata utils', () => {
  it('getElementStorybookArgs', () => {
    const storybookMockArgs = { id: 1, '--color': 'red', disabled: false };
    const props = getElementStorybookArgs(storybookMockArgs);

    expect(props.id).toBe(1);
    expect(props.style).toBe('--color:red;');
  });

  it('getElementStorybookArgTypes', () => {
    const badgeMeta = getElementStorybookArgTypes('cds-badge', customElementsData);
    expect(badgeMeta.status.control.type).toBe('select');
    expect(badgeMeta['--background'].control.type).toBe('color');
    expect(badgeMeta['--border'].control.type).toBe('text');
  });
});
