import { Component } from "@angular/core";
import { CoreShapes } from "clarity-icons/shapes/core-shapes";
import { EssentialShapes } from "clarity-icons/shapes/essential-shapes";
import { SocialShapes } from "clarity-icons/shapes/social-shapes";
import { TechnologyShapes } from "clarity-icons/shapes/technology-shapes";


let coreShapes = Object.keys(CoreShapes);
let essentialShapes = Object.keys(EssentialShapes);
let socialShapes = Object.keys(SocialShapes);
let technologyShapes = Object.keys(TechnologyShapes);


@Component({
    selector: "clr-icon-selection-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: [ "./iconography.demo.scss" ],
    templateUrl: "./icon-selection.demo.html"
})
export class IconSelectionDemo {

    commonPath = "assets/images/icons-svg-downloadable/";
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


    hideShapesFromCore: string[] = [ "vm-bug" ];

    coreShapes: string[] = coreShapes.filter((shape) => {
        return this.hideShapesFromCore.indexOf(shape) === -1;
    });

    essentialShapes: string[] = essentialShapes;

    socialShapes: string[] = socialShapes;

    technologyShapes: string[] = technologyShapes;


}
