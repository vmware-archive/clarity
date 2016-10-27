import {Component} from "@angular/core";

@Component({
    selector: "clr-spinner-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./spinner.demo.css"],
    template: `
        <h2>Spinners</h2>
        <ul>
            <li><a [routerLink]="['./spinner-types']">Types of spinners</a></li>
            <li><a [routerLink]="['./spinner-sizes']">Spinner sizes</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class SpinnerDemo {
}
