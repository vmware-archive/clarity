/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsInternalSplitHandle } from '@cds/core/internal-components/split-handle';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/internal-components/split-handle/register.js';

describe('cds-internal-split-handle a11y', () => {
  let component: CdsInternalSplitHandle;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-internal-split-handle direction="vertical">
          <input type="range" value="50" aria-label="resize" />
        </cds-internal-split-handle>
      </div>
    `);
    component = element.querySelector<CdsInternalSplitHandle>('cds-internal-split-handle');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, '50 resize slider');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});
