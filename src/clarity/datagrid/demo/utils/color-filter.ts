import {Component, EventEmitter} from "@angular/core";

import {Filter} from "../../index";
import {User} from "../inventory/user";
import {COLORS} from "../inventory/values";

@Component({
    selector: "clr-datagrid-color-filter-demo",
    template: `
        <span *ngFor="let color of allColors" class="color-square color-selectable"
            (click)="toggleColor(color)" 
            [style.backgroundColor]="color"
            [class.color-selected]="selectedColors[color]"></span>`,
    styleUrls: ["../datagrid.demo.scss"]
})
export class ColorFilter implements Filter<User> {
    allColors = COLORS;
    selectedColors: {[color: string]: boolean} = {};
    nbColors = 0;

    changes: EventEmitter<any> = new EventEmitter<any>(false);

    listSelected(): string[] {
        let list: string[] = [];
        for (let color in this.selectedColors) {
            if (this.selectedColors[color]) {
                list.push(color);
            }
        }
        return list;
    }

    toggleColor(color: string) {
        this.selectedColors[color] = !this.selectedColors[color];
        this.selectedColors[color] ? this.nbColors++ : this.nbColors--;
        this.changes.emit(true);
    }

    accepts(user: User) {
        return this.nbColors === 0 || this.selectedColors[user.color];
    }

    isActive(): boolean {
        return this.nbColors > 0;
    }
}