/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { CoreShapes } from "../../clarity-icons/shapes/core-shapes";
import { CommerceShapes } from "../../clarity-icons/shapes/commerce-shapes";
import { MediaShapes } from "../../clarity-icons/shapes/media-shapes";
import { EssentialShapes } from "../../clarity-icons/shapes/essential-shapes";
import { SocialShapes } from "../../clarity-icons/shapes/social-shapes";
import { TravelShapes } from "../../clarity-icons/shapes/travel-shapes";
import { TechnologyShapes } from "../../clarity-icons/shapes/technology-shapes";


let coreShapes = Object.keys(CoreShapes);
let commerceShapes = Object.keys(CommerceShapes);
let essentialShapes = Object.keys(EssentialShapes);
let mediaShapes = Object.keys(MediaShapes);
let socialShapes = Object.keys(SocialShapes);
let travelShapes = Object.keys(TravelShapes);
let technologyShapes = Object.keys(TechnologyShapes);


@Component({
    moduleId: module.id,
    selector: "clr-icon-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./iconography.demo.css"],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {

    commonPath = "clarity-icons/shapes/svg-source/";
    // coreSetLink = this.commonPath + "core-shapes.zip";
    // commerceSetLink = this.commonPath + "commerce-shapes.zip";
    // mediaSetLink = this.commonPath + "media-shapes.zip";
    // essentialSetLink = this.commonPath + "essential-shapes.zip";
    // socialSetLink = this.commonPath + "social-shapes.zip";
    // travelSetLink = this.commonPath + "travel-shapes.zip";
    // technologySetLink = this.commonPath + "technology-shapes.zip";
    allSetsLink = this.commonPath + "all-shapes.zip";


    previewClasses: any = {
        "is-solid": false,
        "has-alert": false,
        "has-badge": false
    };


    onChangeSolid(event: any): void {

        this.previewClasses["is-solid"] = event.target.checked;
    }

    onChangeStatus(event: any): void {

        let radioId = event.target.getAttribute("id");

        if (radioId === "alertRadio") {

            this.previewClasses["has-badge"] = false;
            this.previewClasses["has-alert"] = true;

        } else if ((radioId === "badgeRadio")) {

            this.previewClasses["has-alert"] = false;
            this.previewClasses["has-badge"] = true;

        } else {

            this.previewClasses["has-alert"] = false;
            this.previewClasses["has-badge"] = false;

        }
    }


    hideShapesFromCore: string[] = [
        "vm-bug",
        "ellipses-horizontal",
        "ellipses-vertical"
    ];

    coreShapes: string[] = coreShapes.filter((shape) => {
        return this.hideShapesFromCore.indexOf(shape) === -1;
    });

    commerceShapes: string[] = commerceShapes;

    hideShapesFromEssential: string[] = [
        "ellipses-horizontal",
        "ellipses-vertical",
        "network"
    ];

    essentialShapes: string[] = essentialShapes.filter((shape) => {
        return this.hideShapesFromEssential.indexOf(shape) === -1;
    });

    mediaShapes: string[] = mediaShapes;

    socialShapes: string[] = socialShapes;

    hideShapesFromTechnology: string[] = ["app"];

    travelShapes: string[] = travelShapes;

    technologyShapes: string[] = technologyShapes.filter((shape) => {
        return this.hideShapesFromTechnology.indexOf(shape) === -1;
    });


}
