/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild} from "@angular/core";
import {StackViewNgDemo} from "./stack-view-ng-demo";
import {StackBlock} from "clarity-angular/stack-view/stack-block";

@Component({
    selector: "clr-stack-view-angular-lazyload-demo",
    templateUrl: "./stack-view-angular-lazyload.html",
    styleUrls: ["./stack-view.demo.scss"]
})
export class StackViewAngularLazyloadDemo extends StackViewNgDemo {
    @ViewChild("lazyBlock") lazyBlock: StackBlock;

    resetChildren(): void {
        this.lazyBlock.expanded = false;
        this.children = [];
    }
};
