/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

@Component({
    selector: "clr-signpost-paragraph-demo",
    templateUrl: "./signpost-paragraph.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class SignpostParagraphDemo extends ClarityDocComponent {
    constructor() {
        super("signposts");
    }

    openState: boolean = false;

    code: string = `
import {Component} from "@angular/core";

@Component({
    ...
})

export class MyClass {
    // Use *clrIfOpen directive to manage hide/show with the openState property.
    public openState: boolean = false;
}
    `;
    html: string = `
<p>Signposts should be used when you want to show a small amount of contextual help
    of information without taking the user out of the current context.
     Use sparingly as a supplemental element and not as a primary method of adding detail.
    <clr-signpost>
        <clr-signpost-content *clrIfOpen="openState">
            <h3 style="margin-top: 0">Inline signpost</h3>
            <p>Position: <code class="clr-code">right-middle</code></p>
        </clr-signpost-content>
    </clr-signpost>
</p>
    `;
}
