import {Component, Input} from "@angular/core";

const COMPONENTS = require("../../settings/componentlist.json");

@Component({
    selector: "documentation-nav-links",
    template: `
        <ng-container *ngFor="let component of components">
            <li *ngIf="component.url && !component.noDemo && component.type == type">
                <a class="nav-link" [routerLink]="['/', component.url]" routerLinkActive="active">
                    {{component.text}}
                    <span *ngIf="component.isNew" class="new nav-link-tag">New!</span>
                    <span *ngIf="component.isUpdated" class="updated nav-link-tag">Updated</span>
                </a>
            </li>
        </ng-container>
    `,
})
export class DocumentationNavLinksComponent {
    components = COMPONENTS.list;

    @Input() type: string;
}
