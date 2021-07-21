/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsAction } from '@cds/core/actions';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/actions/register.js';

describe('cds-action a11y', () => {
  let component: CdsAction;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-action aria-label="action"></cds-action>
        <cds-action shape="close" aria-label="close"></cds-action>
        <cds-action-sort sort="none" aria-label="sort"></cds-action-sort>
        <cds-action-sort sort="ascending" aria-label="sort"></cds-action-sort>
        <cds-action-sort sort="descending" aria-label="sort"></cds-action-sort>
        <cds-action-handle aria-label="move"></cds-action-handle>
        <cds-action-expand aria-label="open"></cds-action-expand>
        <cds-action-expand aria-label="open" pressed></cds-action-expand>
        <cds-action-resize direction="vertical">
          <input type="range" value="50" aria-label="resize" />
        </cds-action-resize>
      </div>
    `);
    component = element.querySelector<CdsAction>('cds-action');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'action button');
    test.queue(Commands.right, 'close button');
    test.queue(Commands.right, 'sort button');
    test.queue(Commands.right, 'sort button');
    test.queue(Commands.right, 'sort button');
    test.queue(Commands.right, 'move toggle button');
    test.queue(Commands.right, 'open toggle button');
    test.queue(Commands.right, 'open selected toggle button');
    test.queue(Commands.right, '50 resize slider');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});
