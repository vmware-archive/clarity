/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsButtonAction } from '@cds/core/button-action';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/button-action/register.js';

describe('cds-button-action a11y', () => {
  let component: CdsButtonAction;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-button-action aria-label="action"></cds-button-action>
        <cds-button-action shape="close" aria-label="close"></cds-button-action>
      </div>
    `);
    component = element.querySelector<CdsButtonAction>('cds-button-action');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'action button');
    test.queue(Commands.right, 'close button');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});
