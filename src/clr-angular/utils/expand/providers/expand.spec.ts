/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrLoadingState } from '../../loading/loading';

import { Expand } from './expand';

export default function(): void {
  describe('Expand provider', function() {
    beforeEach(function() {
      this.expand = new Expand();
    });

    it('starts with the correct default settings', function() {
      let doesReplace = null;
      this.expand.replace.subscribe(expandChange => {
        doesReplace = expandChange;
      });
      expect(this.expand.expandable).toBe(0, 'not expandable');
      expect(doesReplace).toBe(false, 'not replacing the row');
      expect(this.expand.loading).toBe(false, 'already loaded');
      expect(this.expand.expanded).toBe(false, 'collapsed');
    });

    it('notifies when cells are replaced', function() {
      let isReplaced = null;
      this.expand.replace.subscribe(replaceChange => {
        isReplaced = replaceChange;
      });
      expect(isReplaced).toBe(false);
      this.expand.setReplace(true);
      expect(isReplaced).toBe(true);
    });

    it('implements LoadingListener', function() {
      this.expand.loadingStateChange(ClrLoadingState.LOADING);
      expect(this.expand.loading).toBe(true);
      this.expand.loadingStateChange(ClrLoadingState.DEFAULT);
      expect(this.expand.loading).toBe(false);
    });

    it('prepares the animation before requesting to expand', function() {
      const listeners: string[] = [];
      this.expand.animate.subscribe(() => listeners.push('animate'));
      this.expand.expandChange.subscribe(() => listeners.push('expand'));
      this.expand.expanded = true;
      expect(listeners).toEqual(['animate', 'expand']);
    });

    it('re-triggers animation when done loading', function() {
      let animates = 0;
      this.expand.animate.subscribe(() => animates++);
      this.expand.loadingStateChange(ClrLoadingState.LOADING);
      this.expand.expanded = true;
      expect(animates).toBe(1);
      this.expand.loadingStateChange(ClrLoadingState.DEFAULT);
      expect(animates).toBe(2);
    });
  });
}
