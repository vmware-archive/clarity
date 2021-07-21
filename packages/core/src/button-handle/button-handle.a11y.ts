/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsButtonHandle } from '@cds/core/button-handle';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/button-handle/register.js';

describe('cds-button-handle a11y', () => {
  let component: CdsButtonHandle;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-button-handle aria-label="move"></cds-button-handle>
      </div>
    `);
    component = element.querySelector<CdsButtonHandle>('cds-button-handle');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'move toggle button');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});
