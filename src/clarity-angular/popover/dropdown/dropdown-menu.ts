import {Component} from "@angular/core";

@Component({
    selector: "clr-dropdown-menu",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.dropdown-menu]" : "true"
    }
})
export class DropdownMenu {
}