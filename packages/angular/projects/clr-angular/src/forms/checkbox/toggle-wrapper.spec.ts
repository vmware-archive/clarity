/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';

import { WrapperFullSpec, WrapperNoLabelSpec, WrapperContainerSpec } from '../tests/wrapper.spec';
import { ClrCheckbox } from './checkbox';
import { ClrCheckboxWrapper } from './checkbox-wrapper';
import { ClrCheckboxContainer } from './checkbox-container';

@Component({
  template: `
    <clr-toggle-wrapper>
      <label>Hello World</label>
      <input type="checkbox" clrToggle name="model" [(ngModel)]="model" />
    </clr-toggle-wrapper>
  `,
})
class FullTest {
  model = '';
}

@Component({
  template: ` <clr-toggle-wrapper>
    <input type="checkbox" clrToggle name="model" [(ngModel)]="model" />
  </clr-toggle-wrapper>`,
})
class NoLabelTest {
  model = '';
}

@Component({
  template: `<clr-toggle-container>
    <clr-toggle-wrapper>
      <input type="checkbox" clrToggle name="model" [(ngModel)]="model" />
    </clr-toggle-wrapper>
  </clr-toggle-container>`,
})
class ContainerTest {
  model = '';
}

export default function (): void {
  describe('ClrCheckboxWrapper', () => {
    WrapperNoLabelSpec(ClrCheckboxWrapper, ClrCheckbox, NoLabelTest);
    WrapperFullSpec(ClrCheckboxWrapper, ClrCheckbox, FullTest, 'clr-toggle-wrapper');
    WrapperContainerSpec(ClrCheckboxContainer, ClrCheckboxWrapper, ClrCheckbox, ContainerTest, 'clr-toggle-wrapper');

    describe('toggle class', () => {
      let fixture, containerDE, containerEl;
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
          declarations: [ClrCheckboxWrapper, ClrCheckbox, FullTest],
          providers: [NgControl, NgControlService, IfErrorService, LayoutService],
        });
        fixture = TestBed.createComponent(FullTest);

        containerDE = fixture.debugElement.query(By.directive(ClrCheckboxWrapper));
        containerEl = containerDE.nativeElement;
        fixture.detectChanges();
      });

      it('adds the toggle class', () => {
        expect(containerEl.className).toContain('clr-toggle-wrapper');
        expect(containerEl.className).not.toContain('clr-checkbox-wrapper');
      });
    });
  });
}
