/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-icon-selection-demo",
    styleUrls: ["./iconography.demo.scss"],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {
}

/* 

--- TODO: When we have things been imported as expected, reinstate the dynamic rendering of icons...

import { Component } from "@angular/core";
import { SVG_ICON_TEMPLATES } from "../../clarity-icons/svg-icon-templates";

let iconShapes = Object.keys(SVG_ICON_TEMPLATES);
let nonAllowedShapes = ["vm-bug"];
iconShapes = iconShapes.filter(shape => nonAllowedShapes.indexOf(shape) === -1);


@Component({
    moduleId: module.id,
    selector: "clr-icon-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./iconography.demo.css"],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {

    shapes: string[] = iconShapes;

}

*/