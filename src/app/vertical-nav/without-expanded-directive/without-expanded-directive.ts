/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {VerticalNavCases} from "../vertical-nav-cases";

@Component({
    moduleId: module.id,
    selector: "clr-without-expanded-directive-demo",
    templateUrl: "./without-expanded-directive.html",
    styleUrls: ["../vertical-nav.demo.css"]
})
export class WithoutExpandedDirectiveDemo {
    case: any;

    option: string = "text";

    groupExpand: boolean = true;

    updateGroupExpand(event: any) {
        this.groupExpand = event;
    }

    navCollapsed: boolean = false;

    updateNavCollapsed(val: boolean): void {
        this.navCollapsed = val;
    }

    toggleNav(): void {
        this.navCollapsed = !this.navCollapsed;
    }

    toggleGroup(): void {
        this.groupExpand = !this.groupExpand;
    }

    constructor(public verticalNavCases: VerticalNavCases) {
        this.case = this.verticalNavCases.allNestedIconMenu;
    }
}
