/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-basic-button-group-demo",
    templateUrl: "./basic-button-group.html",
    styleUrls: ["../../button-group.demo.css"]
})
export class BasicButtonGroupDemo {

    handleClick(id: number): void {
        console.log(`Button ${id} clicked!`);
    }
}
