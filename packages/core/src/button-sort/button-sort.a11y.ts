/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsButtonSort } from '@cds/core/button-sort';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/button-sort/register.js';

describe('cds-button-sort a11y', () => {
  let component: CdsButtonSort;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-button-sort sort="none" aria-label="sort"></cds-button-sort>
        <cds-button-sort sort="ascending" aria-label="sort"></cds-button-sort>
        <cds-button-sort sort="descending" aria-label="sort"></cds-button-sort>
      </div>
    `);
    component = element.querySelector<CdsButtonSort>('cds-button-sort');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, 'sort button');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});
