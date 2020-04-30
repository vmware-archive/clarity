/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrProgressBarModule } from './progress-bar.module';
import { ClrProgressBar } from './progress-bar';
import { ClrAriaLiveService, ClrAriaLivePoliteness } from '../../utils/a11y/aria-live.service';

@Component({
  template: `<clr-progress-bar id="randomId" [clrValue]="progressValue"></clr-progress-bar>`,
})
class TestComponent {}

@Component({
  template: `<clr-progress-bar
    [clrValue]="progressValue"
    [clrMax]="maxValue"
    [clrDisplayval]="displayValue"
  ></clr-progress-bar>`,
})
class TestDisplayValueComponent {}

@Component({
  template: `<clr-progress-bar
    clrLabeled
    clrFade
    clrLoop
    clrSuccess
    clrDanger
    clrFlash
    clrFlashDanger
    class="random"
  ></clr-progress-bar>`,
})
class TestStylesComponent {}

describe('ClrProgressBar component', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;
    let clrProgressBar;

    beforeEach(function () {
      TestBed.configureTestingModule({
        declarations: [TestComponent, TestDisplayValueComponent, TestStylesComponent],
        imports: [ClrProgressBarModule],
      });
    });

    describe('basic', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.progressValue = 20;
        fixture.detectChanges();
      });

      it('expect to project content', () => {
        clrProgressBar = fixture.debugElement.query(By.directive(ClrProgressBar)).nativeElement;

        expect(clrProgressBar.querySelector('progress').getAttribute('id')).toBe('randomId');
        expect(clrProgressBar.getAttribute('class')).toBe('progress');
      });

      it('expect to add class and aria-live', () => {
        fixture = TestBed.createComponent(TestDisplayValueComponent);
        fixture.componentInstance.progressValue = 20;
        const ariaLiveService = fixture.debugElement
          .query(By.directive(ClrProgressBar))
          .injector.get(ClrAriaLiveService);
        const announceSpyOn = spyOn(ariaLiveService, 'announce');

        fixture.detectChanges();

        clrProgressBar = fixture.debugElement.query(By.directive(ClrProgressBar)).nativeElement;

        expect(clrProgressBar.querySelector('span').innerText).toBe('20%');
        expect(announceSpyOn).toHaveBeenCalledWith('20%', ClrAriaLivePoliteness.polite);
      });

      it('expect to remove aria-live when progress finish, test also auto max value', () => {
        fixture.componentInstance.progressValue = 100;
        fixture.detectChanges();
        clrProgressBar = fixture.debugElement.query(By.directive(ClrProgressBar)).nativeElement;

        expect(clrProgressBar.querySelector('span')).toBe(null);
      });
    });

    it('expect to pass custom displayValue', () => {
      fixture = TestBed.createComponent(TestDisplayValueComponent);
      fixture.componentInstance.progressValue = 40;
      fixture.componentInstance.displayValue = 'Uploading';
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.directive(ClrProgressBar)).nativeElement.querySelector('span').innerText
      ).toBe(fixture.componentInstance.displayValue);
    });

    it('expect to be able to change max value', () => {
      fixture = TestBed.createComponent(TestDisplayValueComponent);
      clrProgressBar = fixture.debugElement.query(By.directive(ClrProgressBar)).nativeElement;

      fixture.componentInstance.progressValue = 100;
      fixture.componentInstance.displayValue = undefined;
      fixture.componentInstance.maxValue = 105;

      fixture.detectChanges();
      expect(clrProgressBar.querySelector('span').innerText).toBe('100%');

      fixture.componentInstance.progressValue = 105;
      fixture.detectChanges();

      expect(clrProgressBar.querySelector('span')).toBe(null);
    });

    describe('Style & Animations', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TestStylesComponent);
        fixture.detectChanges();
        clrProgressBar = fixture.debugElement.query(By.directive(ClrProgressBar)).nativeElement;
      });

      it('should add classes based on attributes "labeled fade loop success danger flash flash-danger"', () => {
        const klasses = clrProgressBar
          .getAttribute('class')
          .split(' ')
          .sort((a, b) => (a > b ? 1 : -1))
          .join(' ');
        expect(klasses).toContain('danger flash flash-danger labeled loop progress progress-fade random success');
      });

      it('should be able to add custom class if needed', () => {
        expect(clrProgressBar.getAttribute('class')).toContain('random');
      });

      it('if no "id" attribute is set - auto add one', () => {
        expect(clrProgressBar.querySelector('progress').getAttribute('id')).not.toBe(null);
      });
    });
  });
});
