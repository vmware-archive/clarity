/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-hide-overflow-menu-demo",
    templateUrl: "hide-overflow-menu.html",
    styleUrls: ["./button-group.demo.css"]
})
export class HideOverflowMenuDemo {
    hide: boolean = false;

    toggleHide() {
        this.hide = !this.hide;
    }
}
