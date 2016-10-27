import {Component} from "@angular/core";

@Component({
    selector: "clr-color-demo",
    styleUrls: [],
    template: `
        <h2>Color</h2>
        <ul>
            <li><a [routerLink]="['./color-palette-base']">Base Color Palette</a></li>
            <li><a [routerLink]="['./color-palette-stoplight']">Stoplight Colors</a></li>
            <li><a [routerLink]="['./color-palette-highlight']">Highlight Colors</a></li>
            <li><a [routerLink]="['./color-luminance']">Luminance Test</a></li>
            <li><a [routerLink]="['./color-contrast']">Contrast Checker</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class ColorsDemo {
}
