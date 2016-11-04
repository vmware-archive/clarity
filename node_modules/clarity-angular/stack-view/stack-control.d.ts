/**
 * Undocumented experimental feature: inline editing.
 */
import { EventEmitter } from "@angular/core";
import { StackView } from "./stack-view";
export declare class StackControl {
    protected stackView: StackView;
    model: any;
    modelChange: EventEmitter<any>;
    constructor(stackView: StackView);
}
