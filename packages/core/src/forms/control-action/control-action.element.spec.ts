/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { CdsControlAction } from '@cds/core/forms';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { LogService } from '@cds/core/internal';

describe('cds-control-action', () => {
  let controlAction: CdsControlAction;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html` <cds-control-action>test</cds-control-action>`);
    controlAction = element.querySelector<CdsControlAction>('cds-control-action');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set the proper host attribute slot from action type', async () => {
    expect(controlAction.getAttribute('slot')).toBe(null);

    controlAction.action = 'suffix';
    await componentIsStable(controlAction);
    expect(controlAction.getAttribute('slot')).toBe('suffix');
  });

  it('should warn when a aria-label is missing and interactive', async () => {
    spyOn(LogService, 'warn');

    controlAction.readonly = true;
    await componentIsStable(controlAction);
    controlAction.readonly = false;
    await componentIsStable(controlAction);
    expect(LogService.warn).toHaveBeenCalled();
  });

  describe('syncAria: ', () => {
    it('should set aria-hidden on read-only', async () => {
      const testElement = await createTestElement(html` <cds-control-action readonly>test</cds-control-action>`);
      const testControlAction = testElement.querySelector<CdsControlAction>('cds-control-action');
      expect(testControlAction.getAttribute('aria-hidden')).toBe('true');
      removeTestElement(testElement);
    });

    it('should not set aria-hidden when aria-label is present', async () => {
      const testElement = await createTestElement(
        html` <cds-control-action aria-label="ohai">test</cds-control-action>`
      );
      const testControlAction = testElement.querySelector<CdsControlAction>('cds-control-action');
      expect(testControlAction.hasAttribute('aria-hidden')).toBe(false);
      removeTestElement(testElement);
    });

    it('should not set aria-hidden when aria-label is present, even if read-only', async () => {
      const testElement = await createTestElement(
        html` <cds-control-action readonly aria-label="ohai">test</cds-control-action>`
      );
      const testControlAction = testElement.querySelector<CdsControlAction>('cds-control-action');
      expect(testControlAction.hasAttribute('aria-hidden')).toBe(false);
      removeTestElement(testElement);
    });
  });
});
