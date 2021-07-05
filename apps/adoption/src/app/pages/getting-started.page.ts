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
    <h1>Getting Started</h1>

    <h3>Who is this guide for?</h3>
    <p>
      This guide is for everyone that want and needs to adopt our new Core components into there existing Clarity
      Angular application. It's designed to help you rework and adopt in the best way and still get the same result as
      before.
    </p>

    <h3>How to use this guide?</h3>
    <p>
      The guide is structured into sections, every section will provide examples based on our Angular components and
      their Core counterparts. Into the form of guides, snippets and corner cases that will help you with the adoption
      of the new components and workflows.
    </p>

    <h3>Where to find more information?</h3>
    <p>
      The guide won't always reflect the latest API changes inside the components so if you want to know more on
      specific section you could go and check the
      <a href="https://clarity.design/" target="_blank">official documentation</a>
    </p>

    <h3>Project starters</h3>
    <p>
      Below are few templates that could be used to start running Angular or Core based application.
    </p>

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
