/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-codehighlight-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./code-highlight.demo.css"],
    template: `
        <h2>CodeHighlight</h2>
        <ul>
            <li><a [routerLink]="['./code-highlight-imports']">Imports</a></li>
            <li><a [routerLink]="['./code-highlight-snippet']">Code Snippet</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class CodeHighlightDemo {

}
