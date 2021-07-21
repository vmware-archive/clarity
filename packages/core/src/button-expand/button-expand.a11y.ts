/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsButtonExpand } from '@cds/core/button-expand';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/button-expand/register.js';

describe('cds-button-expand a11y', () => {
  let component: CdsButtonExpand;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-button-expand aria-label="open"></cds-button-expand>
        <cds-button-expand aria-label="close" expanded></cds-button-expand>
      </div>
    `);
    component = element.querySelector<CdsButtonExpand>('cds-button-expand');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'open collapsed button');
    test.queue(Commands.right, 'close expanded button');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});
