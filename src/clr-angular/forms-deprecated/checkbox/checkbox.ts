/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Private counter to generate unique IDs for the checkboxes, to bind the labels to them.
 */
let latestId = 0;

/**
 * @deprecated ClrCheckbox will be renamed to ClrCheckboxDeprecated in 0.12, and will be replaced with a new
 * implementation in 0.13, so if you import it you will need to update your references.
 */
@Component({
  selector: 'clr-checkbox',
  template: `
        <!--
            FIXME: We are not subscribed to the change event but the click event here.
            The reason for that is because checkboxes behave differently on IE & Edge.
            https://stackoverflow.com/a/19447939
            
            To fix that, we listen to every click event and then toggle the checkbox manually
            to make it behave the same way across the browsers we support.
            
            This works for cases when users toggle the checkbox using the keyboard too:
            https://stackoverflow.com/questions/27878940/spacebar-triggering-click-event-on-checkbox
        -->
        <input type="checkbox" [attr.aria-labelledby]="clrAriaLabeledBy"
               [id]="id" [name]="name" [checked]="checked"
               [indeterminate]="indeterminate" [disabled]="disabled"
               (blur)="touch()" (click)="checkIndeterminateState()">
        <label [attr.for]="id">
            <ng-content></ng-content>
        </label>
    `,
  host: { '[class.checkbox]': '!inline', '[class.checkbox-inline]': 'inline', '[class.disabled]': 'disabled' },
  /*
     * This provider lets us declare our checkbox as a ControlValueAccessor,
     * which allows us to use [(ngModel)] directly on our component,
     * with all the automatic features wiring that come with it.
     */
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ClrCheckboxDeprecated), multi: true }],
})
export class ClrCheckboxDeprecated implements ControlValueAccessor {
  // If our host has an ID attribute, we use this instead of our index.
  @Input('id') _id: string = (latestId++).toString();

  public get id() {
    return `clr-checkbox-${this._id}`;
  }

  // If host provides an clrAriaLabeledBy input, we apply it to the checkbox
  @Input('clrAriaLabeledBy') public clrAriaLabeledBy: string = null;

  // If our host has a name attribute, we apply it to the checkbox.
  @Input('name') public name: string = null;

  // If the host is disabled we apply it to the checkbox
  @Input('clrDisabled') public disabled: boolean = false;

  // Support for inline checkboxes, adds the necessary class to the host
  @Input('clrInline') public inline = false;

  private _checked = false;

  public get checked() {
    return this._checked;
  }

  @Input('clrChecked')
  public set checked(value: boolean) {
    if (value !== this._checked) {
      if (this._indeterminate) {
        this.setIndeterminate(false);
      }
      this.setChecked(value);
    }
  }

  private _indeterminate: boolean = false;

  public get indeterminate() {
    return this._indeterminate;
  }

  @Input('clrIndeterminate')
  public set indeterminate(value: boolean) {
    if (this._indeterminate !== value) {
      if (this._checked) {
        this.setChecked(false);
      }
      this.setIndeterminate(value);
    }
  }

  @Output('clrIndeterminateChange')
  public indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  private setIndeterminate(value: boolean) {
    this._indeterminate = value;
    this.indeterminateChange.emit(this._indeterminate);
  }

  private setChecked(value: boolean) {
    this._checked = value;
    this.change.emit(this._checked);
  }

  @Output('clrCheckedChange') public change = new EventEmitter<boolean>(false);

  public toggle() {
    this.checked = !this.checked;
    this.onChangeCallback(this.checked);
  }

  writeValue(value: any): void {
    if (value === null) {
      value = false;
    }
    if (value !== this.checked) {
      this.checked = value;
    }
  }

  /*
     * These callbacks will be given to us through the ControlValueAccessor interface,
     * and we need to call them when the user interacts with the checkbox.
     */
  private onChangeCallback = (_: any) => {};

  registerOnChange(onChange: any): void {
    this.onChangeCallback = onChange;
  }

  private onTouchedCallback = () => {};

  registerOnTouched(onTouched: any): void {
    this.onTouchedCallback = onTouched;
  }

  public touch() {
    this.onTouchedCallback();
  }

  checkIndeterminateState(): void {
    if (!this.disabled) {
      this.toggle();
    }
  }
}
