/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-spinner *ngIf="fetchingUserInformation">Loading data</clr-spinner>
`;

const EXAMPLE1 = `
<div *ngIf="downloadingFile">
  <clr-spinner  inline>
    Downloading
  </clr-spinner>
  <span>
      Downloading
  </span>
</div>
`;

const EXAMPLE2 = `
<clr-spinner *ngIf="downloadinInvoice" medium assertive>Downloading</clr-spinner>
`;

@Component({
  selector: 'clr-spinner-component',
  templateUrl: './spinner-component.html',
  styleUrls: ['./spinner.demo.scss'],
})
export class SpinnerComponentDemo {
  example = EXAMPLE;
  example1 = EXAMPLE1;
  example2 = EXAMPLE2;

  props = [
    {
      name: '[inline]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Create an inline spinner',
    },
    {
      name: '[inverse]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Create spinner for dark background',
    },
    {
      name: '[small]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Make the spinner small 18x18 pixels',
    },
    {
      name: '[medium]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Medium spinners 36x36 pixels',
    },
    {
      name: '[assertive]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Set aria-live to "assertive", default is "polite"',
    },
    {
      name: '[off]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Set aria-live to "off", no event will be broadcasted to screen readers',
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
