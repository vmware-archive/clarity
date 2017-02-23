/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-modal-size-design-demo",
    templateUrl: "./modal-size-design.demo.html"
})
export class ModalSizeDesignDemo {
    // Booleans to open each example modal
    public small: boolean = false;
    public medium: boolean = false;
    public large: boolean = false;
    public extraLarge: boolean = false;
}
