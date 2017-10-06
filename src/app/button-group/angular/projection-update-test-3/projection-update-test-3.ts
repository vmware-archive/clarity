/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-button-group-projection-update-test-3-demo",
    templateUrl: "./projection-update-test-3.html",
    styleUrls: ["../../button-group.demo.scss"]
})
export class ProjectionUpdateTest3Demo {
    show: boolean = true;

    toggleShow(): void {
        this.show = !this.show;
    }
}
