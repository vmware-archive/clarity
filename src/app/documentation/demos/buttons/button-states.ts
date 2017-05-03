/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<button class="btn btn-info-outline">Info</button>
<button class="btn btn-success-outline">Success</button>
<button class="btn btn-danger-outline">Danger</button>

<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
`

@Component({
    selector: "clr-buttons-demo-button-states",
    templateUrl: "./button-states.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class ButtonStatesDemo {
    htmlExample = HTML_EXAMPLE;
}
