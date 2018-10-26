/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "clipboard-input",
    styleUrls: ["./clipboard-input.scss"],
    template: `<input #inputToCopy *ngIf="copyContent" type="text"/>`
})
export class ClipboardInput {

    @Output("clrCopyStatus") copyStatus: EventEmitter<boolean> = new EventEmitter();

    private _copyContent: string = "";

    get copyContent(): string {
        return this._copyContent;
    }

    @Input("clrCopyContent") set copyContent(value: string) {
        this._copyContent = value;
    }

    @ViewChild('inputToCopy') set input(inputRef: ElementRef) {
        if (inputRef) {
            let input = inputRef.nativeElement;
            input.value = this.copyContent;
            input.select();
            
            try {
                document.execCommand('copy');
                this.copyStatus.emit(true);
                setTimeout(() => {
                    this.copyContent = "";
                });
            } catch (err) {
                console.error(err);
                this.copyStatus.emit(false);
            }
        }
    }

}
