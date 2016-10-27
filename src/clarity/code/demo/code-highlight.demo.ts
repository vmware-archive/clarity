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
