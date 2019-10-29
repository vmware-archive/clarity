/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrDatalist } from './datalist';
import { ClrDatalistContainer } from './datalist-container';
import { ReactiveSpec, TemplateDrivenSpec } from '../tests/control.spec';
import { TestBed } from '@angular/core/testing';
import { LayoutService } from '../common/providers/layout.service';
import { ClrIconModule } from '../../icon/icon.module';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ClrCommonFormsModule } from '../common/common.module';
import { NgControlService } from '../common/providers/ng-control.service';

@Component({
  template: `
    <input clrDatalist />
  `,
})
class InvalidUseTest {}

@Component({
  template: `
    <clr-datalist-container>
      <input clrDatalist list="clr-datalist-1" class="test-class" name="Option" />
      <datalist id="clr-datalist-1">
        <option [value]="'item1'"></option>
        <option [value]="'item2'"></option>
        <option [value]="'item3'"></option>
      </datalist>
    </clr-datalist-container>
  `,
})
class TemplateDrivenTest {}

@Component({
  template: `
    <div [formGroup]="example">
      <clr-datalist-container>
       <input clrDatalist list="clr-datalist-1" name="Option" class="test-class" formControlName="model" />
       <datalist id="clr-datalist-1">
         <option [value]="'item1'"></option>
         <option [value]="'item2'"></option>
         <option [value]="'item3'"></option>
       </datalist>
      </clr-datalist-container>
    </div>
    `,
})
class ReactiveTest {
  example = new FormGroup({
    model: new FormControl('', Validators.required),
  });
}

export default function(): void {
  describe('ClrDatalist', () => {
    describe('invalid use', () => {
      it('should throw an error when used without a datalist container', () => {
        TestBed.configureTestingModule({
          imports: [ClrDatalist],
          declarations: [InvalidUseTest],
        });
        expect(() => {
          const fixture = TestBed.createComponent(InvalidUseTest);
          fixture.detectChanges();
        }).toThrow();
      });
    });
    TemplateDrivenSpec(ClrDatalistContainer, ClrDatalist, TemplateDrivenTest, 'clr-input');
    ReactiveSpec(ClrDatalistContainer, ClrDatalist, ReactiveTest, 'clr-input');

    describe('set datalist type', () => {
      let fixture, containerDE, containerEl;
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
          declarations: [ClrDatalistContainer, ClrDatalist, TemplateDrivenTest],
          providers: [NgControl, NgControlService, IfErrorService, LayoutService],
        });
        fixture = TestBed.createComponent(TemplateDrivenTest);
        containerDE = fixture.debugElement.query(By.directive(ClrDatalistContainer));
        containerEl = containerDE.nativeElement;
        fixture.detectChanges();
      });
    });
  });
}
