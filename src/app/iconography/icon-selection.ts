/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import {CommerceShapes} from "../../clr-icons/shapes/commerce-shapes";
import {CoreShapes} from "../../clr-icons/shapes/core-shapes";
import {EssentialShapes} from "../../clr-icons/shapes/essential-shapes";
import {MediaShapes} from "../../clr-icons/shapes/media-shapes";
import {SocialShapes} from "../../clr-icons/shapes/social-shapes";
import {TechnologyShapes} from "../../clr-icons/shapes/technology-shapes";
import {TravelShapes} from "../../clr-icons/shapes/travel-shapes";


const coreShapes = Object.keys(CoreShapes);
const commerceShapes = Object.keys(CommerceShapes);
const essentialShapes = Object.keys(EssentialShapes);
const mediaShapes = Object.keys(MediaShapes);
const socialShapes = Object.keys(SocialShapes);
const travelShapes = Object.keys(TravelShapes);
const technologyShapes = Object.keys(TechnologyShapes);


@Component({
    selector: "clr-icon-selection-demo",
    styleUrls: ["./iconography.demo.scss"],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {
    commonPath = "clr-icons/shapes/svg-source/";
    // coreSetLink = this.commonPath + "core-shapes.zip";
    // commerceSetLink = this.commonPath + "commerce-shapes.zip";
    // mediaSetLink = this.commonPath + "media-shapes.zip";
    // essentialSetLink = this.commonPath + "essential-shapes.zip";
    // socialSetLink = this.commonPath + "social-shapes.zip";
    // travelSetLink = this.commonPath + "travel-shapes.zip";
    // technologySetLink = this.commonPath + "technology-shapes.zip";
    allSetsLink = this.commonPath + "all-shapes.zip";


    previewClasses: any = {"is-solid": false, "has-alert": false, "has-badge": false};


    onChangeSolid(event: any): void {
        this.previewClasses["is-solid"] = event.target.checked;
    }

    onChangeStatus(event: any): void {
        const radioId = event.target.getAttribute("id");

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


    hideShapesFromCore: string[] = ["vm-bug", "ellipses-horizontal", "ellipses-vertical"];

    coreShapes: string[] = coreShapes.filter((shape) => {
        return this.hideShapesFromCore.indexOf(shape) === -1;
    });

    commerceShapes: string[] = commerceShapes;

    hideShapesFromEssential: string[] = ["ellipses-horizontal", "ellipses-vertical", "network"];

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
