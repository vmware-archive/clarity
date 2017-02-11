/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, EventEmitter, HostListener,
        Input, forwardRef, Output, Renderer} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

import {Mask} from "./interfaces/mask";
import {DataMask} from "./mask/data-mask";
import {DefaultMaskDefinition} from "./interfaces/mask-definition";

export const INPUT_MASK_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMask),
    multi: true
};

@Directive({
    selector: "[clr-mask]",
    providers: [INPUT_MASK_CONTROL_VALUE_ACCESSOR]
})
export class InputMask implements ControlValueAccessor {
    @Input("clr-mask") clrInputMask: string;

    @Input("definition") mask: Mask = new DataMask<DefaultMaskDefinition>(
                                              new DefaultMaskDefinition());

    @Output("error") error = new EventEmitter<string>();

    private _value: any = "";

    private _selectionStart: number;

    private _selectionEnd: number;

    private _originalValue: string;

    onTouched = (value: any) => {};

    onChange = (value: any) => {};

    constructor(private _inputFieldRef: ElementRef, private renderer: Renderer) {}

    @HostListener("input", ["$event"]) onInput($event: any): void {
        this.applyMask();
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
        }
    }

    writeValue(value: any) {
        let maskedValue: string = this.getMaskedValue(value);
        this._value = maskedValue;
        this.setMaskedValue(maskedValue);
        if (!this.mask.isValid) {
            this.throwError();
        }
        this.onChange(maskedValue);
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    private applyMask(): void {
        //store selection range internally
        this.setSelectionRange();
        //get the mask value and set it to the input field
        let maskedValue: string = this.getMaskedValue();
        //set the masked value on the input field
        this.setMaskedValue(maskedValue);
        //reset the selection range if required
        this.resetSelectionRange(maskedValue);
        //throw error if any
        if (!this.mask.isValid) {
            this.throwError();
        }
    }

    private getMaskedValue(value?: string): string {
        if (value) {
            this._originalValue = value;
        } else {
            this._originalValue = this._inputFieldRef.nativeElement.value;
        }
        let maskedVal: string = this.mask.applyMask(this.clrInputMask, this._originalValue);

        return maskedVal;
    }

    private setMaskedValue(value: string): void {
        this.renderer.setElementProperty(this._inputFieldRef.nativeElement, "value", value);
    }

    private setSelectionRange(): void {
        //get the selection start and end pointers
        let element = this._inputFieldRef.nativeElement;
        this._selectionStart = element.selectionStart;
        this._selectionEnd = element.selectionEnd;
    }

    private resetSelectionRange(maskedValue: string): void {
        //reset the selection range if required
        let maskedValueLength: number = maskedValue.length;
        let inputValueLength: number = this._originalValue.length;
        if (this._selectionEnd < maskedValueLength - 1 &&
            maskedValueLength <= inputValueLength) {
            this._inputFieldRef.nativeElement.
                                setSelectionRange(this._selectionStart, this._selectionEnd);
        }
    }

    private throwError(): void {
        console.log(this.mask.validationMessage);
        this.error.emit(this.mask.validationMessage);
    }
}