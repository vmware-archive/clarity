/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrLoadingState } from '../../utils/loading';
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
    fixture.componentInstance.buttonState = ClrLoadingState.LOADING;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.spinner')).toBeTruthy();
  });

  it(
    'sets the state back to DEFAULT when [(clrButtonState)] value is VALIDATED',
    fakeAsync(() => {
      fixture.componentInstance.buttonState = ClrLoadingState.SUCCESS;
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.SUCCESS);

      tick(2000);
      fixture.detectChanges();
      expect(fixture.componentInstance.buttonState).toEqual(ClrLoadingState.DEFAULT);
    })
  );

  it('hides spinner when [(clrButtonState)] value is DEFAULT', () => {
    fixture.componentInstance.buttonState = ClrLoadingState.DEFAULT;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.spinner')).toBeFalsy();
  });
});

@Component({
  template: `
        <button [(clrLoading)]="buttonState" id="testBtn">Test 1</button>
    `,
})
class TestLoadingButtonComponent {
  @ViewChild(ClrLoadingButton) loadingButtonInstance: ClrLoadingButton;

  buttonState: ClrLoadingState = ClrLoadingState.DEFAULT;
}
