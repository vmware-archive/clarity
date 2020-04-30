/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrSpinnerModule } from './spinner.module';
import { ClrSpinner } from './spinner';

import { ClrAriaLiveService, ClrAriaLivePoliteness } from '../../utils/a11y/aria-live.service';

const SPINNER_BASE_CLASS = 'spinner';

const SPINNER_INVERSE = 'spinner-inverse';
const SPINNER_INLINE = 'spinner-inline';

const SPINNER_SMALL_SIZE = 'spinner-sm';
const SPINNER_MEDIUM_SIZE = 'spinner-md';
const SPINNER_LARGE_SIZE = 'spinner-lg';

@Component({
  template: `<clr-spinner clrSmall clrMedium clrInline>Loading ...</clr-spinner>`,
})
class TestComponent {}

@Component({
  template: `<clr-spinner clrSmall clrInverse clrOff>Loading ...</clr-spinner>`,
})
class TestSmallComponent {}

@Component({
  template: `<clr-spinner clrMedium clrAssertive>Loading ...</clr-spinner>`,
})
class TestMediumComponent {}

@Component({
  template: `<clr-spinner>Loading ...</clr-spinner>`,
})
class TestLargeComponent {}

describe('ClrSpinner component', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;
    let clrSpinner;

    beforeEach(function () {
      TestBed.configureTestingModule({
        declarations: [TestComponent, TestSmallComponent, TestMediumComponent, TestLargeComponent],
        imports: [ClrSpinnerModule],
      });
    });

    it('should project content', () => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
      expect(fixture.nativeElement.textContent.trim()).toBe('Loading ...');
    });

    describe('AriaLive', () => {
      it('should call ClrAriaLiveService.announce', () => {
        fixture = TestBed.createComponent(TestMediumComponent);
        const ariaLiveService = fixture.debugElement.query(By.directive(ClrSpinner)).injector.get(ClrAriaLiveService);
        const announceSpyOn = spyOn(ariaLiveService, 'announce');
        fixture.detectChanges();
        expect(announceSpyOn).toHaveBeenCalledWith(
          fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement,
          ClrAriaLivePoliteness.assertive
        );
      });

      it('should add aria-live="polite", aria-busy="true"', () => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        const component = fixture.debugElement.query(By.directive(ClrSpinner)).injector.get(ClrSpinner);
        expect(component.ariaLive).toBe(ClrAriaLivePoliteness.polite);
        expect(clrSpinner.getAttribute('aria-busy')).toBe('true');
      });

      it('should be able to set aria-live to "off"', () => {
        fixture = TestBed.createComponent(TestSmallComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        const component = fixture.debugElement.query(By.directive(ClrSpinner)).injector.get(ClrSpinner);
        expect(component.ariaLive).toBe(ClrAriaLivePoliteness.off);
      });

      it('should set aria-live to "assertive"', () => {
        fixture = TestBed.createComponent(TestMediumComponent);
        clrSpinner = fixture.debugElement.query(By.directive(ClrSpinner)).nativeElement;
        fixture.detectChanges();
        const component = fixture.debugElement.query(By.directive(ClrSpinner)).injector.get(ClrSpinner);
        expect(component.ariaLive).toBe(ClrAriaLivePoliteness.assertive);
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
      function componentWidth(fix): number {
        return Math.floor(fix.debugElement.query(By.directive(ClrSpinner)).nativeElement.getBoundingClientRect().width);
      }

      function componentHeight(fix): number {
        return Math.floor(
          fix.debugElement.query(By.directive(ClrSpinner)).nativeElement.getBoundingClientRect().height
        );
      }
      it(`.${SPINNER_SMALL_SIZE} should have the size ot 18x18`, () => {
        const fixtureSmall = TestBed.createComponent(TestSmallComponent);
        fixtureSmall.detectChanges();

        expect(componentHeight(fixtureSmall)).toBe(18);
        expect(componentWidth(fixtureSmall)).toBe(18);
      });

      it(`.${SPINNER_MEDIUM_SIZE} should have the size ot 36x36`, () => {
        const fixtureMedium = TestBed.createComponent(TestMediumComponent);
        fixtureMedium.detectChanges();

        expect(componentHeight(fixtureMedium)).toBe(36);
        expect(componentWidth(fixtureMedium)).toBe(36);
      });

      it(`.${SPINNER_LARGE_SIZE} should have the size ot 72x72`, () => {
        const fixtureLarge = TestBed.createComponent(TestLargeComponent);
        fixtureLarge.detectChanges();

        expect(componentHeight(fixtureLarge)).toBe(72);
        expect(componentWidth(fixtureLarge)).toBe(72);
      });

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
