/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ElementRef, EventEmitter, NgZone, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DatepickerFocusService } from './datepicker-focus.service';

export default function() {
  describe('Calendar View Service', () => {
    let fixture: ComponentFixture<any>;
    let mockNgZone: MockNgZone;

    beforeEach(() => {
      mockNgZone = new MockNgZone();
      TestBed.configureTestingModule({ declarations: [TestComponent] });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it(
      'Focuses on the button if the button has a tabindex of 0',
      inject([PLATFORM_ID], platformId => {
        const datepickerViewService: DatepickerFocusService = new DatepickerFocusService(mockNgZone, platformId);
        const compInstance = fixture.debugElement.componentInstance;

        datepickerViewService.focusCell(compInstance.elementRef);

        mockNgZone.stabilizeZone();

        expect(document.activeElement.innerHTML).toBe('Test Button');
        expect(document.activeElement.id).toBe('1');
      })
    );

    it(
      'Does not focus on the button if the button does not have a tab index of 0',
      inject([PLATFORM_ID], platformId => {
        const datepickerViewService: DatepickerFocusService = new DatepickerFocusService(mockNgZone, platformId);
        const compInstance = fixture.debugElement.componentInstance;
        compInstance.tabIndex = '-1';

        fixture.detectChanges();

        datepickerViewService.focusCell(compInstance.elementRef);

        mockNgZone.stabilizeZone();

        expect(document.activeElement.innerHTML).not.toBe('Test Button');
        expect(document.activeElement.id).not.toBe('1');
      })
    );
  });
}

class MockNgZone extends NgZone {
  onStable: EventEmitter<any> = new EventEmitter<any>(false);

  constructor() {
    super({ enableLongStackTrace: false });
  }

  runOutsideAngular(fn: Function): any {
    return fn();
  }

  stabilizeZone(): void {
    this.onStable.emit(null);
  }
}

@Component({
  template: `
        <button id="1" [attr.tabindex]="tabIndex">Test Button</button>
    `,
})
class TestComponent {
  constructor(public elementRef: ElementRef) {}

  tabIndex: string = '0';
}
