import {Component} from "@angular/core";
import {StackView} from "./stack-view";

@Component({
    selector: "clr-stack-header",
    template: `
        <h4 class="stack-header">
            <span class="stack-title"><ng-content></ng-content></span>
            
            <span class="stack-actions">
                <ng-content select=".stack-action"></ng-content>
                <!-- Undocumented experimental feature: inline editing. -->
                <a *ngIf="stackView.editable" class="stack-action btn btn-sm btn-link" 
                   (click)="stackView.editing = !stackView.editing">
                    Edit
                </a>
                <!-- End of undocumented experimental feature. -->
            </span>
        </h4>
    `,
    // Custom elements are inline by default
    styles: [`
        :host { display: block; }
    `]
})
export class StackHeader {

    constructor(private stackView: StackView) {
    }

}
