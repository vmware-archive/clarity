/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatagridRenderOrganizer } from './render-organizer';

/**
 * Having a little fun with Typescript just to see how it goes.
 */
interface UserContext {
  organizer: DatagridRenderOrganizer;
}

export default function(): void {
  describe('DatagridRenderOrganizer', function() {
    beforeEach(function(this: UserContext) {
      this.organizer = new DatagridRenderOrganizer();
    });

    it("doesn't clear widths on the first rendering", function(this: UserContext) {
      let clearedWidths = false;
      this.organizer.clearWidths.subscribe(() => (clearedWidths = true));
      this.organizer.resize();
      expect(clearedWidths).toBe(false);
      this.organizer.resize();
      expect(clearedWidths).toBe(true);
    });

    it('follows the correct rendering order', function(this: UserContext) {
      // Initial sizing to make sure clearWidths is included in the next one.
      this.organizer.resize();
      let step = 0;
      this.organizer.noLayout.subscribe(on => expect(step++).toBe(on ? 0 : 7));
      this.organizer.clearWidths.subscribe(() => expect(step++).toBe(1));
      this.organizer.detectStrictWidths.subscribe(() => expect(step++).toBe(2));
      this.organizer.tableMode.subscribe(on => expect(step++).toBe(on ? 3 : 5));
      this.organizer.computeWidths.subscribe(() => expect(step++).toBe(4));
      this.organizer.alignColumns.subscribe(() => expect(step++).toBe(6));
      this.organizer.scrollbar.subscribe(() => expect(step++).toBe(8));
      this.organizer.resize();
    });

    it('clears the widths when when resizing', function(this: UserContext) {
      this.organizer.widths = [{ px: 1, strict: false }, { px: 2, strict: true }];
      this.organizer.resize();
      expect(this.organizer.widths).toEqual([]);
    });
  });
}
