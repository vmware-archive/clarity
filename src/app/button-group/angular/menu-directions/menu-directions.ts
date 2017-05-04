/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {menuPositions} from "../../../../clarity-angular/popover/dropdown/menu-positions";

@Component({
    moduleId: module.id,
    selector: "clr-menu-directions-demo",
    templateUrl: "./menu-directions.html",
    styleUrls: ["../../button-group.demo.css"]
})
export class MenuDirectionsDemo {

    menuPosition: string = menuPositions[0];

    flipDirection(): void {
        let direction: string = this.menuPosition;
        while (direction === this.menuPosition) {
            this.menuPosition = menuPositions[Math.floor(Math.random() * menuPositions.length)];
        }
    }
}
