/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

@Component({
    selector: "clr-tooltips-demo",
    templateUrl: "./signpost.demo.html",
    styleUrls: ["./signpost.demo.scss"],
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class SignpostDemo extends ClarityDocComponent {
    constructor() {
        super("signposts");
    }

    openState: boolean = false;

    html: string = `
<clr-signpost>
    <clr-signpost-content *clrIfOpen>
        <h3>Default Signpost</h3>
        <p>Position: <code class="clr-code">right-middle</code></p>
    </clr-signpost-content>
</clr-signpost>
    `;
}
