/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrLoadingState } from '../loading/loading';

import { IfExpandService } from './if-expanded.service';

export default function (): void {
  describe('Expand provider', function () {
    beforeEach(function () {
      this.expand = new IfExpandService();
    });

    it('starts with the correct default settings', function () {
      expect(this.expand.expandable).toBe(0, 'not expandable');
      expect(this.expand.loading).toBe(false, 'already loaded');
      expect(this.expand.expanded).toBe(false, 'collapsed');
    });

    it('implements LoadingListener', function () {
      this.expand.loadingStateChange(ClrLoadingState.LOADING);
      expect(this.expand.loading).toBe(true);
      this.expand.loadingStateChange(ClrLoadingState.DEFAULT);
      expect(this.expand.loading).toBe(false);
    });
  });
}
