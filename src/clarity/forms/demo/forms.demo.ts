import {Component} from "@angular/core";

@Component({
    selector: "clr-forms-demo",
    styleUrls: [],
    template: `
        <h2>Forms</h2>
        <ul>
            <li><a [routerLink]="['./form-fields']">Form Fields</a></li>
            <li><a [routerLink]="['./form-test']">Test Form</a></li>
            <li><a [routerLink]="['./form-validation']">Form Validation</a></li>
            <li><a [routerLink]="['./form-compact']">Compact Form</a></li>
            <li><a [routerLink]="['./form-grid']">Forms in a Grid</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class FormsDemo {
}
