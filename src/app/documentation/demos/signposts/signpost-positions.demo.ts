/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { ClarityDocComponent } from "../clarity-doc";

@Component({
    selector: "clr-signpost-positions-demo",
    templateUrl: "./signpost-positions.demo.html",
    styleUrls: [ "./signpost.demo.scss" ],
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class SignpostPositionsDemo extends ClarityDocComponent {
    constructor() {
        super("signposts");
    }

    positions: string[] = [ "top-left", "top-middle", "top-right",
                            "right-top", "right-middle", "right-bottom",
                            "bottom-left", "bottom-middle", "bottom-right",
                            "left-top", "left-middle", "left-bottom" ];
    position: string = "right-middle";
    html: string = `
<select id="position_selector" [(ngModel)]="position" name="position" id="position">
    <option *ngFor="let position of positions" [ngValue]="position">{{ position }}</option>
</select>
<clr-signpost>
    <clr-signpost-content [clrPosition]="position" *clrIfOpen>
        <h3 style="margin-top: 0">Position</h3>
        <p><code class="clr-code">{{ position }}</code></p>
    </clr-signpost-content>
</clr-signpost>
    `;
    code: string = `
@Component({
    ...
})
export class MyClass {
    positions: string[] = [ "top-left", "top-middle", "top-right",
                            "right-top", "right-middle", "right-bottom",
                            "bottom-left", "bottom-middle", "bottom-right",
                            "left-top", "left-middle", "left-bottom" ];
    position: string = "right-middle";
}
`;
}
