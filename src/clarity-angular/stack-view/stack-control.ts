/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 */

import {EventEmitter} from "@angular/core";
import {StackView} from "./stack-view";

export class StackControl {
    model: any;
    modelChange: EventEmitter<any> = new EventEmitter<any>(false);

    constructor(protected stackView: StackView) {
        // Make the StackView editable, since it contains a StackControl
        this.stackView.editable = true;
        this.stackView.editingChange.subscribe((editing: boolean) => {
            // Edit mode was closed
            if (!editing) {
                this.modelChange.emit(this.model);
            }
        });
    }
}