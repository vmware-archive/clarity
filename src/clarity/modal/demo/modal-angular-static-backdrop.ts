/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-modal-angular-static-backdrop-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./modal.demo.css"],
    templateUrl: "./modal-angular-static-backdrop.demo.html"
})
export class ModalAngularStaticBackdropDemo {
    // Booleans to open each example modal
    public static: boolean = false;
}
