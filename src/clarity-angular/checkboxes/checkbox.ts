/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, Output, forwardRef, EventEmitter} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

/**
 * Private counter to generate unique IDs for the checkboxes, to bind the labels to them.
 */
let latestId = 0;

@Component({
    selector: "clr-checkbox",
    template: `
        <input type="checkbox" [id]="id" [name]="name" [checked]="checked" [indeterminate]="indeterminate" 
               (change)="toggle()" (blur)="touch()">
        <label [attr.for]="id"><ng-content></ng-content></label>
    `,
    host: {
        "[class.checkbox]": "!inline",
        "[class.checkbox-inline]": "inline"
    },
    /*
     * This provider lets us declare our checkbox as a ControlValueAccessor,
     * which allows us to use [(ngModel)] directly on our component,
     * with all the automatic features wiring that come with it.
     */
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Checkbox),
        multi: true
    }]
})
export class Checkbox implements ControlValueAccessor {
    // If our host has an ID attribute, we use this instead of our index.
    @Input("id")
    private _id: string = (latestId++).toString();

    public get id() {
        return `clr-checkbox-${this._id}`;
    }

    // If our host has a name attribute, we apply it to the checkbox.
    @Input("name")
    public name: string = null;

    // Support for inline checkboxes, adds the necessary class to the host
    @Input("clrInline") public inline = false;

    @Input("clrChecked")
    private _checked = false;

    public get checked() {
        return this._checked;
    }

    public set checked(value: boolean) {
        if (value !== this._checked) {
            this.indeterminate = false;
            this._checked = value;
            this.change.emit(this.checked);
        }
    }

    private _indeterminate: boolean = false;

    public get indeterminate () {
        return this._indeterminate;
    }

    @Input("clrIndeterminate")
    public set indeterminate(value: boolean) {
        if (this._indeterminate !== value) {
            this.checked = false;
            this._indeterminate = value;
            this.indeterminateChange.emit(this._indeterminate);
        }
    }

    @Output("clrIndeterminateChange")
    public indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Output("clrCheckedChange")
    public change = new EventEmitter<boolean>(false);

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
}