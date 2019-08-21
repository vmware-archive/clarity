/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ClrFocusOnViewInit } from './focus-on-view-init';
import { ClrFocusOnViewInitModule } from './focus-on-view-init.module';

@Component({
  template: `
    <button #dummyButton>dummy button</button>
    <div *ngIf="displayNoExistingTabindex">
      <h1 clrFocusOnViewInit>Title</h1>
    </div>
    <div *ngIf="displayExistingTabindex">
      <h1 clrFocusOnViewInit tabindex="5">Title</h1>
    </div>
  `,
})
class TestComponent {
  displayNoExistingTabindex = false;
  displayExistingTabindex = false;
  @ViewChild('dummyButton', { static: true })
  buttonElRef: ElementRef;

  @ViewChild(ClrFocusOnViewInit, { static: false, read: ElementRef })
  focusOnItElRef: ElementRef;
}

let fixture: ComponentFixture<any>;
let component: TestComponent;

describe('ClrFocusOnViewInit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrFocusOnViewInitModule],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets negative tabindex if no tabindex', () => {
    component.displayNoExistingTabindex = true;
    fixture.detectChanges();
    expect(component.focusOnItElRef.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  it('should use existing tabindex', () => {
    component.displayExistingTabindex = true;
    fixture.detectChanges();
    expect(component.focusOnItElRef.nativeElement.getAttribute('tabindex')).toBe('5');
  });

  it('sets focus on the directive element on view intialization', () => {
    component.buttonElRef.nativeElement.focus();
    expect(document.activeElement).toBe(component.buttonElRef.nativeElement);
    component.displayNoExistingTabindex = true;
    fixture.detectChanges();
    expect(document.activeElement).toBe(component.focusOnItElRef.nativeElement);
  });

  it('removes tabindex on focusout event', () => {
    component.displayNoExistingTabindex = true;
    fixture.detectChanges();
    expect(component.focusOnItElRef.nativeElement.getAttribute('tabindex')).toBe('-1');
    component.buttonElRef.nativeElement.focus();
    fixture.detectChanges();
    expect(component.focusOnItElRef.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  it('should not remove tabindex if it was pre-existing tabindex', () => {
    component.displayExistingTabindex = true;
    fixture.detectChanges();
    expect(component.focusOnItElRef.nativeElement.getAttribute('tabindex')).toBe('5');
    component.buttonElRef.nativeElement.focus();
    fixture.detectChanges();
    expect(component.focusOnItElRef.nativeElement.getAttribute('tabindex')).toBe('5');
  });
});
