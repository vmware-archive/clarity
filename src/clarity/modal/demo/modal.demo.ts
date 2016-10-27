import {Component} from "@angular/core";

@Component({
    selector: "clr-modal-demo",
    styleUrls: ["./modal.demo.css"],
    template: `
        <h2>Modal</h2>

        <ul>
            <li><a [routerLink]="['./static']">Modal Styles</a></li>
            <li><a [routerLink]="['./sizes']">Modal Sizes</a></li>
            <li><a [routerLink]="['./backdrop']">Modal Backdrop</a></li>
            <li><a [routerLink]="['./animation']">Animation</a></li>
            <li><a [routerLink]="['./dynamic-show']">Hide and Show Dynamically</a></li>
            <li><a [routerLink]="['./dynamic-sizing']">Dynamically Change Sizes</a></li>
            <li><a [routerLink]="['./static-backdrop']">Keep Open When Clicking Backdrop</a></li>
            <li><a [routerLink]="['./not-closable']">Force User Action</a></li>
        </ul>

        <router-outlet></router-outlet>
    `
})
export class ModalDemo {
}
