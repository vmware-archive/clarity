/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component, EventEmitter, Input, Optional, Output, SkipSelf, TemplateRef, ViewChild} from "@angular/core";

import {ButtonInGroupService} from "../providers/buttonInGroup.service";

@Component({
    selector: "clr-button",
    template: `
        <ng-template #buttonProjectedRef>
            <button 
                [class]="classNames" 
                (click)="emitClick()"
                [attr.type]="type"
                [attr.name]="name"
                [attr.disabled]="disabled">
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
            // We check if the service flag is enabled
            // and if the service exists because the service is optional
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
        if (typeof value === "string") {
            const classNames: string[] = value.split(" ");
            if (classNames.indexOf("btn") === -1) {
                classNames.push("btn");
            }
            this._classNames = classNames.join(" ");
        }
    }

    private _name: string = null;

    get name(): string {
        return this._name;
    }

    @Input("name")
    set name(value: string) {
        if (typeof value === "string") {
            this._name = value;
        }
    }

    private _type: string = null;

    get type(): string {
        return this._type;
    }

    @Input("type")
    set type(value: string) {
        if (typeof value === "string") {
            this._type = value;
        }
    }

    private _disabled: any = null;

    get disabled(): any {
        return this._disabled;
    }

    @Input("disabled")
    set disabled(value: any) {
        if (value !== null && value !== false) {
            this._disabled = "";
        } else {
            this._disabled = null;
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
