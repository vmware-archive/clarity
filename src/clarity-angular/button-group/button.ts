/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, ViewChild, TemplateRef, Input, SkipSelf, Optional, EventEmitter, Output} from "@angular/core";
import {ButtonInGroupService} from "./providers/buttonInGroup.service";

@Component({
    selector: "clr-button",
    template: `
        <ng-template #buttonProjectedRef>
            <button [class]="classNames" (click)="emitClick()">
                <ng-content></ng-content>
            </button>
        </ng-template>
    `
})
export class Button {

    private _enableService: boolean = false;

    @ViewChild("buttonProjectedRef") templateRef: TemplateRef<Button>;

    constructor(@SkipSelf() @Optional() public buttonInGroupService: ButtonInGroupService) {}

    private _inMenu: boolean = false;

    get inMenu(): boolean {
        return this._inMenu;
    }

    @Input("clrInMenu")
    set inMenu(value: boolean) {
        value = !!value;
        if (this._inMenu !== value) {
            this._inMenu = value;
            //We check if the service flag is enabled
            //and if the service exists because the service is optional
            if (this._enableService && this.buttonInGroupService) {
                this.buttonInGroupService.updateButtonGroup(this);
            }
        }
    }

    private _classNames: string = "btn";

    get classNames(): string {
        return this._classNames;
    }

    @Input("class")
    set classNames(value: string) {
        if (value) {
            this._classNames = value;
        }
    }

    @Output("click") _click: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    emitClick(): void {
        this._click.emit(true);
    }

    ngAfterViewInit() {
        this._enableService = true;
    }
}

