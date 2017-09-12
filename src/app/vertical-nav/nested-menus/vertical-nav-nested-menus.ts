/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {VerticalNavCases} from "../vertical-nav-cases";

@Component({
    moduleId: module.id,
    selector: "clr-vertical-nav-nested-menus-demo",
    templateUrl: "./vertical-nav-nested-menus.demo.html",
    styleUrls: ["../vertical-nav.demo.css"]
})
export class VerticalNavNestedMenusDemo {
    case: any;

    constructor(public verticalNavCases: VerticalNavCases) {
        this.case = this.verticalNavCases.allNestedMenu;
    }

    private _collapse: boolean = false;

    get collapse(): boolean {
        return this._collapse;
    }

    set collapse(value: boolean) {
        this._collapse = value;
    }
}
