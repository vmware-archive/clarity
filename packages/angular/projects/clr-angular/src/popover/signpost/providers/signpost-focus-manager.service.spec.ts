/*
 *  Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { SignpostFocusManager } from './signpost-focus-manager.service';

export default function (): void {
  describe('Signpost Focus Manager', () => {
    let signpostFocusManager: SignpostFocusManager;

    beforeEach(() => {
      signpostFocusManager = new SignpostFocusManager();
    });

    afterEach(() => {
      // clean up appended elements
      document.body.innerHTML = '';
    });

    it('sets focus on the specified element', () => {
      const button = document.createElement('button');
      document.body.appendChild(button);
      signpostFocusManager.triggerEl = button;
      expect(document.activeElement).not.toBe(button);
      signpostFocusManager.focusTrigger();
      expect(document.activeElement).toBe(button);
    });
  });
}
