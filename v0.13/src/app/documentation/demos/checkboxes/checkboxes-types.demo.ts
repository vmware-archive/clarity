/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Server} from "./data/server";
import {Status} from "./data/status";

const EXAMPLE_CLARITY_CHECKBOX = `
<form>
        <section class="form-block">
            <div class="form-group">
                <label>Angular Checkbox</label>
                <clr-checkbox [clrChecked]="true">
                    Clarity checkbox
                </clr-checkbox>
            </div>
        </section>
    </form>
`;

const EXAMPLE_CLARITY_INDETERMINATE = `
<form>
        <section class="form-block">
            <div class="form-group">
                <label>Indeterminate Checkbox</label>
                <clr-checkbox [(clrIndeterminate)]="indeterminateState">
                    Clarity indeterminate checkbox
                </clr-checkbox>
                <div>
                    <button class="btn btn-sm" (click)="onToggleIndeterminateState($event)" type="button">
                        Toggle Indeterminate State
                    </button>
                </div>
            </div>
        </section>
    </form>
`;

const EXAMPLE_NATIVE_INDETERMINATE = `
<form>
        <section class="form-block">
            <div class="form-group">
                <label>Native Indeterminate Checkbox</label>
                <div class="checkbox">
                    <input type="checkbox"
                           id="checkrads_10"
                           [indeterminate]="nativeIndeterminateState">
                    <label for="checkrads_10">Native indeterminate checkbox</label>
                </div>
            </div>
        </section>
    </form>
`;

const EXAMPLE_NG_FORM = `
<form #form="ngForm" novalidate>
        <section class="form-block">
            <div class="form-group">
                <label>With ngForm & ngModel</label>
                <clr-checkbox
                        name="termsCheckbox"
                        id="checkrads_11"
                        [(ngModel)]="termsAgreement">
                    I agree to the terms and conditions.
                </clr-checkbox>
                <div>
                    Value of termsAgreement: {{termsAgreement}}
                </div>
            </div>
        </section>
    </form>
`;

const EXAMPLE = `
<form>
        <section class="form-block">
            <div class="form-group">
                <label>With a list of objects</label>
                <clr-checkbox *ngFor="let item of list"
                    [(clrChecked)]="item.running"
                    [clrDisabled]="item.disabled">
                    {{ item.name }} @ {{item.ip}} {{ item.disabled ? ' is disabled.' : (item.running ? ' is running.' : 'is off.') }}
                </clr-checkbox>
            </div>
        </section>
    </form>
`;

const EXAMPLE_INLINE = `
<form>
        <section class="form-block">
            <div class="form-group">
                <label>Inline Checkboxes</label>
                <clr-checkbox
                        [clrChecked]="true"
                        [clrInline]="true">
                    Inline checkbox 1
                </clr-checkbox>
                <clr-checkbox
                        [clrChecked]="true"
                        [clrInline]="true">
                    Inline checkbox 2
                </clr-checkbox>
                <clr-checkbox
                        [clrChecked]="true"
                        [clrInline]="true">
                    Inline checkbox 3
                </clr-checkbox>
            </div>
        </section>
    </form>
`;

const EXAMPLE_STATIC = `
<form>
        <section class="form-block">
            <label>Static Checkboxes</label>
            <div class="form-group">
                <label>Default/Stacked checkbox group</label>
                <div class="checkbox">
                    <input type="checkbox" id="checkrads_1">
                    <label for="checkrads_1">Checkbox 1</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="checkrads_2" checked>
                    <label for="checkrads_2">Checkbox 2</label>
                </div>
                <div class="checkbox disabled">
                    <input type="checkbox" id="checkrads_3" disabled>
                    <label for="checkrads_3">A disabled and unchecked checkbox</label>
                </div>
                <div class="checkbox disabled">
                    <input type="checkbox" id="checkrads_4" disabled checked>
                    <label for="checkrads_4">A disabled and checked checkbox</label>
                </div>
            </div>
            <div class="form-group">
                <label>Inline checkbox group</label>
                <div class="checkbox-inline">
                    <input type="checkbox" id="checkrads_5">
                    <label for="checkrads_5">Checkbox 1</label>
                </div>
                <div class="checkbox-inline">
                    <input type="checkbox" id="checkrads_6" checked>
                    <label for="checkrads_6">Checkbox 2</label>
                </div>
                <div class="checkbox-inline disabled">
                    <input type="checkbox" id="checkrads_7" disabled>
                    <label for="checkrads_7">A disabled and unchecked checkbox</label>
                </div>
                <div class="checkbox-inline disabled">
                    <input type="checkbox" id="checkrads_8" disabled checked>
                    <label for="checkrads_8">A disabled and checked checkbox</label>
                </div>
            </div>
        </section>
    </form>
`;

const EXAMPLE_ARIA_LABELLEDBY = `
    <clr-checkbox [clrAriaLabeledBy]="'Your aria-labelledby string here'"></clr-checkbox>
`;


const status = new Status();

@Component({
    selector: "clr-checkboxes-types-demo",
    templateUrl: "./checkboxes-types.demo.html"
})

export class CheckboxesTypesDemo {

    list: Server[] = status.fetch();
    indeterminateState: boolean = true;
    nativeIndeterminateState: boolean = true;
    termsAgreement: boolean = true;

    onToggleIndeterminateState() {
        this.indeterminateState = !this.indeterminateState;
    }

    example_clarity_checkbox = EXAMPLE_CLARITY_CHECKBOX;
    example_indeterminate_checkbox = EXAMPLE_CLARITY_INDETERMINATE;
    example_native_indeterminate = EXAMPLE_NATIVE_INDETERMINATE;
    example_ng_form = EXAMPLE_NG_FORM;
    example = EXAMPLE;
    example_inline = EXAMPLE_INLINE;
    example_static = EXAMPLE_STATIC;
    example_aria_labelledby = EXAMPLE_ARIA_LABELLEDBY;

}
