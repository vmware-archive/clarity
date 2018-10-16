/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Type, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClrFormsDeprecatedModule } from '../forms.module';

import { ClrCheckboxDeprecated } from './checkbox';

abstract class CheckboxTest {
  @ViewChild(ClrCheckboxDeprecated) checkboxInstance: ClrCheckboxDeprecated;

  checked = false;
  indeterminate = false;
  ariaLabeledById = 'clr-id-0';
}

@Component({
  template: `
        <clr-checkbox [(clrChecked)]="checked"></clr-checkbox>
    `,
})
class BasicCheckbox extends CheckboxTest {}

@Component({
  template: `
        <clr-checkbox [(ngModel)]="checked"></clr-checkbox>
    `,
})
class CheckboxWithNgModel extends CheckboxTest {}

@Component({
  template: `
        <clr-checkbox [(clrChecked)]="checked">Hello world</clr-checkbox>
    `,
})
class CheckboxWithLabel extends CheckboxTest {}

@Component({
  template: `
        <clr-checkbox [(clrChecked)]="checked" name="hello"></clr-checkbox>
    `,
})
class CheckboxWithName extends CheckboxTest {}

@Component({
  template: `
        <clr-checkbox [(clrChecked)]="checked" [clrInline]="true"></clr-checkbox>
    `,
})
class InlineCheckbox extends CheckboxTest {}

@Component({
  template: `
        <clr-checkbox [(clrIndeterminate)]="indeterminate" [(clrChecked)]="checked"></clr-checkbox>
    `,
})
class IndeterminateCheckbox extends CheckboxTest {}

@Component({
  template: `
        <clr-checkbox [clrAriaLabeledBy]="ariaLabeledById"></clr-checkbox>
    `,
})
class AriaLabeledByCheckbox extends CheckboxTest {}

describe('Checkbox', () => {
  let fixture: ComponentFixture<CheckboxTest>;
  let testInstance: CheckboxTest;
  let checkboxInstance: ClrCheckboxDeprecated;
  let checkboxElement: HTMLInputElement;
  let labelElement: HTMLLabelElement;

  function createTestComponent(component: Type<CheckboxTest>) {
    fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    testInstance = fixture.componentInstance;
    checkboxInstance = testInstance.checkboxInstance;
    checkboxElement = <HTMLInputElement>fixture.nativeElement.querySelector('input');
    labelElement = <HTMLLabelElement>fixture.nativeElement.querySelector('label');
  }

  function assertChecked(checked: boolean) {
    fixture.detectChanges();
    expect(testInstance.checked).toBe(checked);
    expect(checkboxInstance.checked).toBe(checked);
    expect(checkboxElement.checked).toBe(checked);
  }

  function assertIndeterminate(indeterminate: boolean) {
    fixture.detectChanges();
    expect(testInstance.indeterminate).toBe(indeterminate);
    expect(checkboxInstance.indeterminate).toBe(indeterminate);
    expect(checkboxElement.indeterminate).toBe(indeterminate);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrFormsDeprecatedModule, FormsModule],
      declarations: [
        BasicCheckbox,
        CheckboxWithNgModel,
        CheckboxWithLabel,
        CheckboxWithName,
        InlineCheckbox,
        IndeterminateCheckbox,
        AriaLabeledByCheckbox,
      ],
    });
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('displays a native checkbox and label', () => {
    createTestComponent(BasicCheckbox);
    expect(checkboxElement).not.toBeNull();
    expect(labelElement).not.toBeNull();
    expect(labelElement.htmlFor).toBe(checkboxElement.id);
  });

  it('projects into the label', () => {
    createTestComponent(CheckboxWithLabel);
    expect(labelElement.textContent.trim()).toBe('Hello world');
  });

  it('toggles the checked state based on [clrChecked] input', () => {
    createTestComponent(BasicCheckbox);
    assertChecked(false);
    assertIndeterminate(false);
    fixture.componentInstance.checked = true;
    assertChecked(true);
    assertIndeterminate(false);
    fixture.componentInstance.checked = false;
    assertChecked(false);
    assertIndeterminate(false);
  });

  it('toggles the checked state based on user actions', () => {
    createTestComponent(BasicCheckbox);
    assertChecked(false);
    assertIndeterminate(false);
    labelElement.click();
    assertChecked(true);
    assertIndeterminate(false);
    labelElement.click();
    assertChecked(false);
    assertIndeterminate(false);
  });

  it('applies the given name attribute to the native input', () => {
    createTestComponent(CheckboxWithName);
    expect(checkboxElement.getAttribute('name')).toBe('hello');
  });

  it('supports inline checkboxes', () => {
    createTestComponent(InlineCheckbox);
    expect(fixture.nativeElement.querySelector('.checkbox-inline')).not.toBeNull();
  });

  it('supports indeterminate state', () => {
    createTestComponent(IndeterminateCheckbox);
    fixture.componentInstance.indeterminate = true;
    assertIndeterminate(true);
    fixture.componentInstance.indeterminate = false;
    assertIndeterminate(false);
    assertChecked(false);
  });

  it('supports aria-labelledby on checkboxElements', () => {
    createTestComponent(AriaLabeledByCheckbox);
    expect(checkboxElement.getAttribute('aria-labelledby')).toEqual('clr-id-0');
  });

  it('sets indeterminate state to false when the checked state is toggled by user actions', () => {
    createTestComponent(IndeterminateCheckbox);
    fixture.componentInstance.indeterminate = true;
    assertIndeterminate(true);
    assertChecked(false);
    labelElement.click();
    assertChecked(true);
    assertIndeterminate(false);
    labelElement.click();
    assertChecked(false);
    assertIndeterminate(false);
  });

  describe('ngModel support', () => {
    function flushAndAssertChecked(checked: boolean) {
      fixture.detectChanges();
      tick();
      assertChecked(checked);
    }

    it(
      'toggles the checked state based on [ngModel] input',
      fakeAsync(() => {
        createTestComponent(CheckboxWithNgModel);
        flushAndAssertChecked(false);
        fixture.componentInstance.checked = true;
        flushAndAssertChecked(true);
        fixture.componentInstance.checked = false;
        flushAndAssertChecked(false);
      })
    );

    it(
      'emits changes to (NgModelChange) based on user actions',
      fakeAsync(() => {
        createTestComponent(CheckboxWithNgModel);
        flushAndAssertChecked(false);
        labelElement.click();
        flushAndAssertChecked(true);
        labelElement.click();
        flushAndAssertChecked(false);
      })
    );
  });
});
