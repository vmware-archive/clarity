/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {menuPositions} from "../../../../clr-angular/popover/dropdown/menu-positions";

@Component({
    selector: "clr-menu-directions-demo",
    templateUrl: "./menu-directions.html",
    styleUrls: ["../../button-group.demo.scss"]
})
export class MenuDirectionsDemo {
    menuPosition: string = menuPositions[0];

    flipDirection(): void {
        const direction: string = this.menuPosition;
        while (direction === this.menuPosition) {
            this.menuPosition = menuPositions[Math.floor(Math.random() * menuPositions.length)];
        }
    }
}
