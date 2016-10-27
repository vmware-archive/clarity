/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: support more types of inputs: checkbox, radio, ...
 * TODO: Mirror input attributes from the host to the actual input: size, min, max, placeholder, ...
 */

import {Component} from "@angular/core";
import {StackControl} from "./stack-control";
import {StackView} from "./stack-view";

@Component({
    selector: "clr-stack-input",
    inputs: ["model: clrModel", "type"],
    outputs: ["modelChange: clrModelChange"],
    template: `
        <span *ngIf="!stackView.editing">{{model}}</span>
        <input [type]="type" *ngIf="stackView.editing" [(ngModel)]="model"/>
    `
})
export class StackInput extends StackControl {
    type: string = "text";

    constructor(stackView: StackView) {
        super(stackView);
    }
}