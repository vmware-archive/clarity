import {Component} from "@angular/core";

@Component({
    selector: "clr-alert-demo-angular",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../alert.demo.css"],
    template: `
        <h4>Angular</h4>
        <ul>
            <li><a [routerLink]="['./not-closable']">Not Dismissible</a></li>
            <li><a [routerLink]="['./small']">Instantiate as Small</a></li>
            <li><a [routerLink]="['./close-events']">Invoking Callbacks on Close</a></li>
            <li><a [routerLink]="['./success']">Set Alert Type</a></li>
            <li><a [routerLink]="['./app-level']">Instantiate as App Level Alert</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class AlertAngularDemo {
}
