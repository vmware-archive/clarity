import {Component} from "@angular/core";

@Component({
    selector: "clr-nav-demo",
    styleUrls: [],
    template: `
        <h2>Navigation</h2>
        <ul>
            <li><a [routerLink]="['./headers']">Headers</a></li>
            <li><a [routerLink]="['./nav-tabs']">Navs/Nav Tabs</a></li>
            <li><a [routerLink]="['./sidenav']">Sidenav</a></li>
            <li><a [routerLink]="['./subnav']">SubNav</a></li>
            <li><a [routerLink]="['./responsive-nav1']">Responsive Nav 1 Code Snippets</a></li>
            <li><a [routerLink]="['./responsive-nav2']">Responsive Nav 2 Code Snippets</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class NavDemo {
}
