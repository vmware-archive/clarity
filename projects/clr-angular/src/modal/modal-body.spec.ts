/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, ElementRef, ApplicationRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ClrModalBody } from './modal-body';

describe('ClrModalBody Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let modalBodyEl: HTMLElement;

  beforeEach(function () {
    TestBed.configureTestingModule({
      declarations: [ClrModalBody, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    modalBodyEl = fixture.componentInstance.testElement.nativeElement;
  });

  it('adds tabindex="0" to modal body to make content focusable and scrollable with keyboards', () => {
    expect(modalBodyEl.getAttribute('tabindex')).toBe('0');
  });

  it('toggles tabindex="0" on mousedown and mouseup events', () => {
    modalBodyEl.dispatchEvent(new Event('mousedown'));
    expect(modalBodyEl.getAttribute('tabindex')).toBeNull();
    modalBodyEl.dispatchEvent(new Event('mouseup'));
    expect(modalBodyEl.getAttribute('tabindex')).toBe('0');
  });

  // https://github.com/vmware/clarity/issues/3424
  // https://github.com/vmware/clarity/issues/3642
  it('focuses modal body on tab only, does not focus parent on inner content click', () => {
    fixture.componentInstance.testLabel.nativeElement.click();
    expect(fixture.componentInstance.testElement.nativeElement === document.activeElement).toBe(false);
  });

  it('should not run change detection when the mouseup or mousedown event occurs', () => {
    const appRef = TestBed.inject(ApplicationRef);
    const spy = spyOn(appRef, 'tick');

    modalBodyEl.dispatchEvent(new Event('mousedown'));
    modalBodyEl.dispatchEvent(new Event('mouseup'));
    modalBodyEl.dispatchEvent(new Event('mousedown'));
    modalBodyEl.dispatchEvent(new Event('mouseup'));

    expect(spy.calls.count()).toEqual(0);
  });
});

@Component({
  template: `
    <div class="modal-body" #testElement>
      <label #testLabel>test label</label>
    </div>
  `,
})
class TestComponent {
  @ViewChild('testLabel') testLabel: ElementRef<HTMLElement>;

  @ViewChild('testElement') testElement: ElementRef<HTMLElement>;
}
