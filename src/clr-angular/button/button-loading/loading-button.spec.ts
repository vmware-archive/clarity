/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrLoadingState } from '../../utils/loading/loading';
import { ClrLoadingModule } from '../../utils/loading/loading.module';

import { ClrLoadingButton } from './loading-button';
import { ClrLoadingButtonModule } from './loading-button.module';

describe('Loading Buttons', () => {
  let fixture: ComponentFixture<TestLoadingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrLoadingModule, ClrLoadingButtonModule, NoopAnimationsModule],
      declarations: [TestLoadingButtonComponent],
    });

    fixture = TestBed.createComponent(TestLoadingButtonComponent);

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('displays spinner when [(clrButtonState)] value is LOADING', () => {
    fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.LOADING;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.spinner')).toBeTruthy();
  });

  it(
    'sets the state back to DEFAULT when [(clrButtonState)] value is VALIDATED',
    fakeAsync(() => {
      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.SUCCESS;
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.SUCCESS);

      tick(1000);
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.DEFAULT);
    })
  );

  it(
    'sets the disabled state back to value defined in disabled input',
    fakeAsync(() => {
      fixture.componentInstance.disabled = true;
      fixture.detectChanges();

      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.LOADING;
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.LOADING);
      expect(fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.disabled).toBeTruthy();

      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.SUCCESS;
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.SUCCESS);
      expect(fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.disabled).toBeTruthy();

      tick(1000);
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.DEFAULT);
      expect(fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.disabled).toBeTruthy();

      // now the input binding sets the disabled to false
      // it should be disabled while loading, and success, but change back to not disabled when it goes back to DEFAULT
      fixture.componentInstance.disabled = false;
      fixture.detectChanges();

      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.LOADING;
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.LOADING);
      expect(fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.disabled).toBeTruthy();

      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.SUCCESS;
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.SUCCESS);
      expect(fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.disabled).toBeTruthy();

      tick(1000);
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.DEFAULT);
      expect(fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.disabled).toBeFalsy();
    })
  );

  it(
    'sets an explicit width value of the button when [(clrButtonState)] value is set to LOADING or SUCCESS',
    fakeAsync(() => {
      let style = fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.style;
      expect(style).toBeFalsy();

      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.LOADING;
      fixture.detectChanges();
      style = fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.style;
      expect(style).toBeTruthy();
      expect(style.value).toMatch(/width:*/);

      fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.SUCCESS;
      fixture.detectChanges();
      style = fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.style;
      expect(style).toBeTruthy();
      expect(style.value).toMatch(/width:*/);

      tick(1000);
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.DEFAULT);
      style = fixture.componentInstance.loadingButtonInstance.el.nativeElement.attributes.style;
      // here, we check to see if style.value is falsy instead of style, because even though the style is cleared the attribute remains
      expect(style.value).toBeFalsy();
    })
  );

  it('hides spinner when [(clrButtonState)] value is DEFAULT', () => {
    fixture.componentInstance.buttonState = <ClrLoadingState>ClrLoadingState.DEFAULT;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.spinner')).toBeFalsy();
  });
});

@Component({
  template: `
        <button [(clrLoading)]="buttonState" id="testBtn" [disabled]="disabled">Test 1</button>
    `,
})
class TestLoadingButtonComponent {
  @ViewChild(ClrLoadingButton) loadingButtonInstance: ClrLoadingButton;

  buttonState: ClrLoadingState = <ClrLoadingState>ClrLoadingState.DEFAULT;
  disabled: boolean = false;
}
