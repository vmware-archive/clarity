/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: Offer a a way to customize the value displayed, plain value may be unreadable.
 */

import {Component} from "@angular/core";
import {StackControl} from "./stack-control";
import {StackView} from "./stack-view";

@Component({
    selector: "clr-stack-select",
    inputs: ["model: clrModel"],
    outputs: ["modelChange: clrModelChange"],
    template: `
        <span *ngIf="!stackView.editing">{{model}}</span>
        <div class="select" *ngIf="stackView.editing" >
            <select [(ngModel)]="model">
                <ng-content></ng-content>
            </select>
        </div>
    `
})
export class StackSelect extends StackControl {

    constructor(stackView: StackView) {
        super(stackView);
    }
}