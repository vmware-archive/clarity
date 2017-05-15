/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-signpost-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./signpost.demo.css"],
    templateUrl: "signpost.demo.html"
})

export class SignpostDemo {

    openState: boolean = false;
    positions: string[] = [ "top-left", "top-middle", "top-right",
        "right-top", "right-middle", "right-bottom",
        "bottom-left", "bottom-middle", "bottom-right",
        "left-top", "left-middle", "left-bottom" ];
    position: string = "right-middle";
}
