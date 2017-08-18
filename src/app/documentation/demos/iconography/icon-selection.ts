import { Component } from "@angular/core";
import { CoreShapes } from "clarity-icons/shapes/core-shapes";
import { CommerceShapes } from "clarity-icons/shapes/commerce-shapes";
import { EssentialShapes } from "clarity-icons/shapes/essential-shapes";
import { MediaShapes } from "clarity-icons/shapes/media-shapes";
import { SocialShapes } from "clarity-icons/shapes/social-shapes";
import { TravelShapes } from "clarity-icons/shapes/travel-shapes";
import { TechnologyShapes } from "clarity-icons/shapes/technology-shapes";


let coreShapes = Object.keys(CoreShapes);
let commerceShapes = Object.keys(CommerceShapes);
let essentialShapes = Object.keys(EssentialShapes);
let mediaShapes = Object.keys(MediaShapes);
let socialShapes = Object.keys(SocialShapes);
let travelShapes = Object.keys(TravelShapes);
let technologyShapes = Object.keys(TechnologyShapes);


@Component({
    selector: "clr-icon-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: [ "./iconography.demo.scss" ],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {

    commonPath = "assets/images/";
    allSetsLink = this.commonPath + "all-shapes.zip";

    previewClasses: any = {
        "is-solid": false,
        "has-alert": false,
        "has-badge": false
    };


    onChangeSolid(event: any): void {
        this.previewClasses[ "is-solid" ] = event.target.checked;
    }

    onChangeStatus(event: any): void {

        let radioId = event.target.getAttribute("id");

        if (radioId === "alertRadio") {

            this.previewClasses[ "has-badge" ] = false;
            this.previewClasses[ "has-alert" ] = true;

        } else if ((radioId === "badgeRadio")) {

            this.previewClasses[ "has-alert" ] = false;
            this.previewClasses[ "has-badge" ] = true;

        } else {

            this.previewClasses[ "has-alert" ] = false;
            this.previewClasses[ "has-badge" ] = false;

        }
    }


    hideShapesFromCore: string[] = [
        "vm-bug"
    ];

    coreShapes: string[] = coreShapes.filter((shape) => {
        return this.hideShapesFromCore.indexOf(shape) === -1;
    });

    commerceShapes: string[] = commerceShapes;

    essentialShapes: string[] = essentialShapes;

    mediaShapes: string[] = mediaShapes;

    socialShapes: string[] = socialShapes;

    travelShapes: string[] = travelShapes;

    technologyShapes: string[] = technologyShapes;

}
