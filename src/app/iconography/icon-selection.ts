/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { CoreShapes } from "../../clarity-icons/shapes/core-shapes";
import { EssentialShapes } from "../../clarity-icons/shapes/essential-shapes";
import { SocialShapes } from "../../clarity-icons/shapes/social-shapes";
import { TechnologyShapes } from "../../clarity-icons/shapes/technology-shapes";


let coreShapes = Object.keys(CoreShapes);
let essentialShapes = Object.keys(EssentialShapes);
let socialShapes = Object.keys(SocialShapes);
let technologyShapes = Object.keys(TechnologyShapes);


@Component({
    moduleId: module.id,
    selector: "clr-icon-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: [ "./iconography.demo.css" ],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {

    hideShapesFromCore: string[] = [ "vm-bug" ];

    coreShapes: string[] = coreShapes.filter((shape) => {
        return this.hideShapesFromCore.indexOf(shape) === -1;
    });

    essentialShapes: string[] = essentialShapes;

    socialShapes: string[] = socialShapes;

    technologyShapes: string[] = technologyShapes;


}
