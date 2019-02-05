/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, NgControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';

import { ClrCheckbox } from './checkbox';
import { ClrCheckboxContainer } from './checkbox-container';
import { ClrCheckboxWrapper } from './checkbox-wrapper';

import { ContainerNoLabelSpec, TemplateDrivenSpec, ReactiveSpec } from '../tests/container.spec';

@Component({
  template: `
    <clr-toggle-container></clr-toggle-container>
  `,
})
class NoLabelTest {}

@Component({
  template: `
    <clr-toggle-container [clrInline]="inline">
      <label>Hello World</label>
      <clr-toggle-wrapper>
        <label>One</label>
        <input type="checkbox" clrToggle name="model" required [(ngModel)]="model" value="one" />
      </clr-toggle-wrapper>
      <clr-toggle-wrapper>
        <label>Two</label>
        <input type="checkbox" clrToggle name="model" required [(ngModel)]="model" value="two" [disabled]="disabled" />
      </clr-toggle-wrapper>
      <clr-control-error>There was an error</clr-control-error>
      <clr-control-helper>Helper text</clr-control-helper>
    </clr-toggle-container>
    `,
})
class TemplateDrivenTest {
  inline = false;
  disabled = false;
  model = '';
}

@Component({
  template: `
  <form [formGroup]="form">
    <clr-toggle-container>
      <label>Hello World</label>
      <clr-toggle-wrapper>
        <label>One</label>
        <input clrToggle type="checkbox" formControlName="model" value="one" />
      </clr-toggle-wrapper>
      <clr-toggle-wrapper>
        <label>Two</label>
        <input clrToggle type="checkbox" formControlName="model" value="two" />
      </clr-toggle-wrapper>
      <clr-control-error>There was an error</clr-control-error>
      <clr-control-helper>Helper text</clr-control-helper>
    </clr-toggle-container>
  </form>`,
})
class ReactiveTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

export default function(): void {
  describe('ClrCheckboxContainer', () => {
    ContainerNoLabelSpec(ClrCheckboxContainer, [ClrCheckboxWrapper, ClrCheckbox], NoLabelTest);
    TemplateDrivenSpec(
      ClrCheckboxContainer,
      [ClrCheckboxWrapper, ClrCheckbox],
      TemplateDrivenTest,
      '.clr-toggle-wrapper [clrToggle]'
    );
    ReactiveSpec(
      ClrCheckboxContainer,
      [ClrCheckboxWrapper, ClrCheckbox],
      ReactiveTest,
      '.clr-toggle-wrapper [clrToggle]'
    );

    describe('inline buttons', () => {
      let fixture, containerDE, containerEl;
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
          declarations: [ClrCheckboxContainer, ClrCheckboxWrapper, ClrCheckbox, TemplateDrivenTest],
          providers: [NgControl, NgControlService, IfErrorService, LayoutService],
        });
        fixture = TestBed.createComponent(TemplateDrivenTest);

        containerDE = fixture.debugElement.query(By.directive(ClrCheckboxContainer));
        containerEl = containerDE.nativeElement;
        fixture.detectChanges();
      });

      it('sets the inline class', () => {
        expect(containerEl.querySelector('.clr-control-container').className).not.toContain('clr-control-inline');
        fixture.debugElement.componentInstance.inline = true;
        fixture.detectChanges();
        expect(containerEl.querySelector('.clr-control-container').className).toContain('clr-control-inline');
      });
    });
  });
}
