/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-spinner *ngIf="fetchingUserInformation">Loading data</clr-spinner>
`;

const EXAMPLE1 = `
<div *ngIf="downloadingFile">
  <clr-spinner clrInline>
    Downloading
  </clr-spinner>
  <span>
      Downloading
  </span>
</div>
`;

@Component({
  selector: 'clr-spinner-component',
  templateUrl: './spinner-component.html',
  styleUrls: ['./spinner.demo.scss'],
})
export class SpinnerComponentDemo {
  example = EXAMPLE;
  example1 = EXAMPLE1;

  props = [
    {
      name: '[clrInline]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Create an inline spinner',
    },
    {
      name: '[clrInverse]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Create spinner for dark background',
    },
    {
      name: '[clrSmall]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Make the spinner small 18x18 pixels',
    },
    {
      name: '[clrMedium]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Medium spinners 36x36 pixels',
    },
  ];

  // Triggers
  fetchingUserInformation: boolean = false;
  downloadingFile: boolean = false;
  downloadinInvoice: boolean = false;

  public toggleProgressBar(name: string) {
    return (this[name] = !this[name]);
  }
}
