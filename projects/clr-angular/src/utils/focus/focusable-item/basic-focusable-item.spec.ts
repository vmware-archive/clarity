/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UNIQUE_ID } from '../../id-generator/id-generator.service';
import { BASIC_FOCUSABLE_ITEM_PROVIDER } from './basic-focusable-item.service';
import { FocusableItem } from './focusable-item';

@Component({
  template: '',
  providers: [BASIC_FOCUSABLE_ITEM_PROVIDER],
})
class SimpleHost {}

interface TestContext {
  el: HTMLElement;
  item: FocusableItem;
  id: string;
}

export default function (): void {
  describe('Basic focusable item', function () {
    beforeEach(function (this: TestContext) {
      // Because the "service" uses ElementRef and Renderer (it's not really a service),
      // we need to use Angular's testing tools to run this spec.
      TestBed.configureTestingModule({ declarations: [SimpleHost] });
      const fixture = TestBed.createComponent(SimpleHost);
      this.el = fixture.debugElement.nativeElement;
      this.item = fixture.debugElement.injector.get(FocusableItem, null);
      this.id = fixture.debugElement.injector.get(UNIQUE_ID, 'not_found');
    });

    it('declares a UNIQUE_ID provider', function (this: TestContext) {
      expect(this.id).not.toBe('not_found');
    });

    it('declares itself as a FocusableItem provider', function (this: TestContext) {
      expect(this.item).toBeTruthy();
    });

    it('sets the id attribute of the host', function (this: TestContext) {
      expect(this.el.getAttribute('id')).toBe(this.id);
    });

    it('removes the host from tab order', function (this: TestContext) {
      expect(this.el.getAttribute('tabindex')).toBe('-1');
    });

    it('removes the .clr-focus class from the host when not focused', function (this: TestContext) {
      this.item.focus();
      this.item.blur();
      expect(this.el.classList).not.toContain('clr-focus');
    });

    it('triggers a click on the host when activated', function (this: TestContext) {
      let clicks = 0;
      this.el.addEventListener('click', () => clicks++);
      expect(clicks).toBe(0);
      this.item.activate();
      expect(clicks).toBe(1);
      this.item.activate();
      expect(clicks).toBe(2);
    });
  });
}
