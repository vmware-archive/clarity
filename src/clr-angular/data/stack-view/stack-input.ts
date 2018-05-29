/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: support more types of inputs: checkbox, radio, ...
 * TODO: Mirror input attributes from the host to the actual input: size, min, max, placeholder, ...
 */

import { Component } from '@angular/core';
import { StackControl } from './stack-control';
import { ClrStackView } from './stack-view';

@Component({
  selector: 'clr-stack-input',
  inputs: ['model: clrModel', 'type'],
  outputs: ['modelChange: clrModelChange'],
  template: `
        <span *ngIf="!stackView.editing">{{model}}</span>
        <input [type]="type" *ngIf="stackView.editing" [(ngModel)]="model"/>
    `,
})
export class ClrStackInput extends StackControl {
  type: string = 'text';

  constructor(public stackView: ClrStackView) {
    super(stackView);
  }
}
