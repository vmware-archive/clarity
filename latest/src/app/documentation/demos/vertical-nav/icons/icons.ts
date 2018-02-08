/*
* Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import {Component, Input} from "@angular/core";

@Component({
    selector: "clr-vertical-nav-icons-demo",
    templateUrl: "./icons.html",
    styleUrls: ["../vertical-nav.demo.scss"]
})
export class VerticalNavIconsDemo {

    @Input() demoHideIcons: boolean = false;
    @Input() demoLongLabel: boolean = false;
}
