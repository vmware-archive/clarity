/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ArrowKeyDirection } from '../arrow-key-direction.enum';
import { FocusableItem } from './focusable-item';
import { MockFocusableItem } from './focusable-item.mock';
import { Linkers } from './linkers';

export default function (): void {
  describe('linkParent()', function () {
    it('links the list of items to the parent according to the given direction', function () {
      const parent = new MockFocusableItem('parent');
      const children: FocusableItem[] = new Array(5).fill(0).map((_, i) => new MockFocusableItem(`${i}`));
      Linkers.linkParent(children, parent, ArrowKeyDirection.RIGHT);
      for (const child of children) {
        expect(child.right).toBe(parent);
      }
    });
  });

  describe('linkVertical()', function () {
    type TestContext = {
      first: FocusableItem;
      second: FocusableItem;
      third: FocusableItem;
    };

    beforeEach(function (this: TestContext) {
      this.first = new MockFocusableItem('0');
      this.second = new MockFocusableItem('1');
      this.third = new MockFocusableItem('2');
    });

    it('links the items vertically both ways', function (this: TestContext) {
      Linkers.linkVertical([this.first, this.second, this.third]);
      expect(this.second.up).toBe(this.first);
      expect(this.second.down).toBe(this.third);
    });

    it('loops by default', function (this: TestContext) {
      Linkers.linkVertical([this.first, this.second, this.third]);
      expect(this.first.up).toBe(this.third);
      expect(this.third.down).toBe(this.first);
    });

    it('offer the option to not loop', function (this: TestContext) {
      Linkers.linkVertical([this.first, this.second, this.third], false);
      expect(this.first.up).toBeUndefined();
      expect(this.third.down).toBeUndefined();
    });
  });
}
