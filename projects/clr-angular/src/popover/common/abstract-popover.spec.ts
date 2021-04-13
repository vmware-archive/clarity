/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ElementRef, Injector, Optional, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { AbstractPopover } from './abstract-popover';
import { POPOVER_HOST_ANCHOR } from './popover-host-anchor.token';

@Component({
  selector: 'test-popover',
  template: ` <div class="test-popover">Popover</div> `,
})
class TestPopover extends AbstractPopover {
  constructor(injector: Injector, @Optional() parent: ElementRef) {
    super(injector, parent);
  }
}

@Component({
  template: ` <test-popover *clrIfOpen></test-popover> `,
})
class TestPopoverWithIfOpenDirective {
  @ViewChild(TestPopover) testPopover: TestPopover;
}

@Component({
  template: `
    <input type="text" #ignoreInput (focus)="onFocus($event)" />
    <test-popover-ignore #ignoreElement *clrIfOpen></test-popover-ignore>
  `,
  providers: [ClrPopoverToggleService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
class InputFocusPopover {
  @ViewChild('ignoreInput') ignore: ElementRef;
  @ViewChild('ignoreElement') popover: any; // cant use TestPopoverIgnoreElement as type since it will refer to class before declaration in es2015+

  constructor(private toggleService: ClrPopoverToggleService) {}

  onFocus(event: FocusEvent) {
    this.toggleService.toggleWithEvent(event);
  }
}

@Component({
  selector: 'test-popover-ignore',
  template: ` <div class="test-popover">Popover</div> `,
})
class TestPopoverIgnoreElement extends AbstractPopover {
  constructor(injector: Injector, @Optional() parent: ElementRef, parentHost: InputFocusPopover) {
    super(injector, parent);
    if (parentHost && parentHost.ignore) {
      this.ignoredElement = parentHost.ignore.nativeElement;
    }
  }
}

describe('Abstract Popover', function () {
  let fixture: ComponentFixture<any>;
  let toggleService: ClrPopoverToggleService;

  describe('Keyboard Events', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ declarations: [TestPopover], providers: [ClrPopoverToggleService] });
      toggleService = TestBed.get(ClrPopoverToggleService);
      toggleService.open = true;
      fixture = TestBed.createComponent(TestPopover);
      fixture.detectChanges();
    });

    it('closes the popover when ESC is pressed', () => {
      const event: KeyboardEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      document.dispatchEvent(event);

      expect(toggleService.open).toBe(false);
    });
  });

  describe('Popover with clrIfOpen Directive', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestPopover, TestPopoverWithIfOpenDirective],
        imports: [ClrConditionalModule],
        providers: [ClrPopoverToggleService],
      });
      toggleService = TestBed.get(ClrPopoverToggleService);
      fixture = TestBed.createComponent(TestPopoverWithIfOpenDirective);
      fixture.detectChanges();
    });

    it('opens the abstract popover only after ClrPopoverToggleService is in open state', () => {
      expect(toggleService.open).toBe(false);
      expect(fixture.componentInstance.testPopover).toBeUndefined();

      toggleService.open = true;
      fixture.detectChanges();

      expect(fixture.componentInstance.testPopover).not.toBeUndefined();
    });
  });

  describe('Open popover on focus', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestPopoverIgnoreElement, InputFocusPopover],
        imports: [ClrConditionalModule],
      });
      fixture = TestBed.createComponent(InputFocusPopover);
      fixture.detectChanges();
    });

    it('keeps the popover open when the input is focused', () => {
      const input = fixture.debugElement.query(By.css('input'));

      input.triggerEventHandler('focus', {});
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.test-popover'))).not.toBeNull();
    });

    // Cannot test a protected property
    // it("initializes the ignored element", () => {
    //     const input = fixture.debugElement.query(By.css("input"));

    //     input.triggerEventHandler("focus", {});
    //     fixture.detectChanges();

    //     const popover: TestPopoverIgnoreElement = fixture.componentInstance.popover;

    //     expect(popover.ignoredElement).toBeDefined();
    // });
  });
});
