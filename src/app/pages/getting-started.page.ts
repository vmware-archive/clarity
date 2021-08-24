/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { StackblitzService } from '../components/stackblitz/stackblitz.service';
import { SupportedTemplates } from '../templates';

@Component({
  selector: 'app-home',
  providers: [StackblitzService],
  template: `
  <h2 cds-text="title" cds-layout="m-t:lg">Getting Started</h2>

    <h3 cds-text="subtitle" cds-layout="m-t:lg">Who is this guide for?</h3>

    <p>
      This guide is for everyone that want and needs to adopt our new Core components into there existing Clarity
      Angular application. It's designed to help you rework and adopt in the best way and still get the same result as
      before. Developers will find this most useful, but we hope to also incorporate any details that might be useful
      for designers as necessary.
    </p>

    <h3 cds-text="subtitle" cds-layout="m-t:lg">How to use this guide?</h3>
    <p>
      The guide is structured into sections, every section will provide examples based on our Angular components and
      their Core counterparts. Into the form of guides, snippets and corner cases that will help you with the adoption
      of the new components and workflows. It will help to start by reviewing the <a routerLink="/differences">differences</a>
      and <a routerLink="/approaches">approaches</a> to adopting Clarity Core.
    </p>

    <h3 cds-text="subtitle" cds-layout="m-t:lg">Where to find more information?</h3>
    <p>
      This guide is updated regularly but won't have every detail about the Clarity Angular or Clarity Core APIs. Therefore you
      should also be ready to reference both the <a href="https://angular.clarity.design" target="_blank">Clarity Angular documentation</a> and 
      <a href="https://clarity.design/" target="_blank">Clarity Core documentation</a>
    </p>

    <h3 cds-text="subtitle" cds-layout="m-t:lg">Project starters</h3>
    <p>Below are few templates that could be used to start running Angular or Core based application.</p>

    <ul>
      <li><a href="#" (click)="openStackblitz('angular', $event)">Clarity Angular starter</a></li>
      <li><a href="#" (click)="openStackblitz('core', $event)">Clarity Core starter</a></li>
      <li><a href="#" (click)="openStackblitz('hybrid', $event)">Clarity Core & Angular starter</a></li>
    </ul>
  `,
})
export class GettingStartedPage {
  constructor(private stackblitz: StackblitzService) {}

  openStackblitz(template: SupportedTemplates, event: MouseEvent): void {
    this.stackblitz.open(template);

    if (event) {
      event.preventDefault();
    }
  }
}
