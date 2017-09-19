/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { FocusTrapTracker } from "clarity-angular/utils/focus-trap/focus-trap-tracker.service";
import { DisableFocusTrap } from "../../utils/disable-focus-trap";


@Component({
    selector: "clr-modal-style-design-demo",
    templateUrl: "./modal-style-design.demo.html",
    host: {
        "[class.in-place-takeover]": "true"
    },
    providers: [{provide: FocusTrapTracker, useClass: DisableFocusTrap}]
})
export class ModalStyleDesignDemo {
    public basic: boolean = true;
}
