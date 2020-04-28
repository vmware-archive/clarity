/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: Offer a a way to customize the value displayed, plain value may be unreadable.
 */

import { Component } from '@angular/core';
import { StackControl } from './stack-control';
import { ClrStackView } from './stack-view';

@Component({
  selector: 'clr-stack-select',
  inputs: ['model: clrModel'],
  outputs: ['modelChange: clrModelChange'],
  template: `
        <span *ngIf="!stackView.editing">{{model}}</span>
        <div class="select" *ngIf="stackView.editing" >
            <select [(ngModel)]="model">
                <ng-content></ng-content>
            </select>
        </div>
    `,
})
export class ClrStackSelect extends StackControl {
  constructor(public stackView: ClrStackView) {
    super(stackView);
  }
}
