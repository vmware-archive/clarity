/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrSpinnerModule } from './spinner.module';
import { ClrSpinner } from './spinner';

const SPINNER_BASE_CLASS = 'spinner';

const SPINNER_INVERSE = 'spinner-inverse';
const SPINNER_INLINE = 'spinner-inline';

const SPINNER_SMALL_SIZE = 'spinner-sm';
const SPINNER_MEDIUM_SIZE = 'spinner-md';

@Component({
  template: `<clr-spinner small medium inline>Loading ...</clr-spinner>`,
})
class TestComponent {}

@Component({
  template: `<clr-spinner small inverse off>Loading ...</clr-spinner>`,
})
class TestSmallComponent {}

@Component({
  template: `<clr-spinner medium assertive>Loading ...</clr-spinner>`,
})
class TestMediumComponent {}

describe('ClrSpinner component', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;
    let clrSpinner;

    beforeEach(function() {
      TestBed.configureTestingModule({
        declarations: [TestComponent, TestSmallComponent, TestMediumComponent],
        imports: [ClrSpinnerModule],
      });
    });

    it('expect to project content', () => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
      expect(fixture.nativeElement.textContent.trim()).toBe('Loading ...');
    });

    describe('AriaLive', () => {
      it('expect to add aria-live="polite", aria-busy="true"', () => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        expect(clrSpinner.getAttribute('aria-live')).toBe('polite');
        expect(clrSpinner.getAttribute('aria-busy')).toBe('true');
      });

      it('expect to be able to set aria-live to "off"', () => {
        fixture = TestBed.createComponent(TestSmallComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        expect(clrSpinner.getAttribute('aria-live')).toBe('off');
      });

      it('expect to set aria-live to "assertive"', () => {
        fixture = TestBed.createComponent(TestMediumComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        expect(clrSpinner.getAttribute('aria-live')).toBe('assertive');
      });
    });

    describe('Modifiers', () => {
      it(`should add class .${SPINNER_INLINE} when inline is set`, () => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_BASE_CLASS);
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_INLINE);
      });

      it(`should add class .${SPINNER_INVERSE} when inverse is set`, () => {
        fixture = TestBed.createComponent(TestSmallComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_BASE_CLASS);
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_INVERSE);
      });
    });

    describe('Sizes', () => {
      it(`should add .${SPINNER_SMALL_SIZE}`, () => {
        fixture = TestBed.createComponent(TestSmallComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_BASE_CLASS);
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_SMALL_SIZE);
      });

      it(`should add .${SPINNER_MEDIUM_SIZE}`, () => {
        fixture = TestBed.createComponent(TestMediumComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_BASE_CLASS);
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_MEDIUM_SIZE);
      });

      it(`when two sizes are passed use the .${SPINNER_SMALL_SIZE} size only`, () => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_BASE_CLASS);
        expect(clrSpinner.getAttribute('class')).toContain(SPINNER_SMALL_SIZE);
        expect(clrSpinner.getAttribute('class')).not.toContain(SPINNER_MEDIUM_SIZE);
      });
    });
  });
});
