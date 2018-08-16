/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter } from '@angular/core';
import { ClrDatagridFilterInterface } from '@clr/angular';
import { User } from '../inventory/user';
import { COLORS } from '../inventory/values';

@Component({
  selector: 'clr-datagrid-color-filter-demo',
  template: `
        <span *ngFor="let color of allColors" class="color-square color-selectable"
            (click)="toggleColor(color)" 
            [style.backgroundColor]="color"
            [class.color-selected]="selectedColors[color]"></span>`,
  styleUrls: ['../datagrid.demo.scss'],
})
export class ColorFilter implements ClrDatagridFilterInterface<User> {
  allColors = COLORS;
  selectedColors: { [color: string]: boolean } = {};
  nbColors = 0;

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  listSelected(): string[] {
    const list: string[] = [];
    for (const color in this.selectedColors) {
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
