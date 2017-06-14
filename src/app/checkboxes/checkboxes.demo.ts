/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Status} from "./data/status";
import {Server} from "./data/server";

@Component({
    moduleId: module.id,
    selector: "clr-checkboxes-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./checkboxes.demo.css"],
    templateUrl: "./checkboxes.demo.html"
})

export class CheckboxesDemo {
    list: Server[];
    indeterminateState: boolean = true;
    nativeIndeterminateState: boolean = true;
    termsAgreement: boolean = true;

    constructor(private status: Status) {
        this.list = status.fetch();
    }

    onToggleIndeterminateState() {
        this.indeterminateState = !this.indeterminateState;
    }

    active: boolean = false;
}
