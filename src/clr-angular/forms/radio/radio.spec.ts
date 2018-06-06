/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ControlIdService } from '../common/providers/control-id.service';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrRadio } from './radio';
import { ClrRadioContainer } from './radio-container';

@Component({
  template: `
       <input type="radio" clrRadio />
    `,
})
class SimpleTest {}

export default function(): void {
  describe('Radio directive', () => {
    it('correctly extends WrappedFormControl<ClrRadioContainer>', function() {
      spyOn(WrappedFormControl.prototype, 'ngOnInit');
      TestBed.configureTestingModule({ declarations: [ClrRadio, SimpleTest], providers: [ControlIdService] });
      this.fixture = TestBed.createComponent(SimpleTest);
      this.fixture.detectChanges();
      expect(this.fixture.debugElement.query(By.directive(ClrRadio)).injector.get(ClrRadio).wrapperType).toBe(
        ClrRadioContainer
      );
      expect(WrappedFormControl.prototype.ngOnInit).toHaveBeenCalledTimes(1);
    });
  });
}
