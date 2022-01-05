/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { ClarityIcons, popOutIcon } from '@cds/core/icon';

ClarityIcons.addIcons(popOutIcon);

@Component({
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Clarity Core for 2050</h1>

    <p>
      We started Clarity to bring high quality and consistency to applications through a design system.
      We've evolved the approach and quality with Clarity Core. Our components are designed to remain stable
      for decades using web standards so that you can depend upon it for as long as your application needs.
    </p>

    <ul class="list" cds-layout="m-t:lg">
      <li><a href="/additional-learning">Differences in Clarity Core</a></li>
      <li><a href="/additional-strategies">Approaches to adoption</a></li>
    </ul>


    <h3 cds-text="heading" cds-layout="m-t:lg">We support your adoption process</h3>
    <h4 cds-text="title" cds-layout="m-t:lg">Automation, documentation, support</h4>

    <p>
      Using Clarity Core is an investment in the future. It may take some time to bring Clarity Core
      fully into your applications. We understand. We support you in that journey with automation to
      help detect and rewire existing code, document samples of how Clarity Angular and Clarity Core
       are used, and continue to support both Clarity Angular and Clarity Core libraries.
    </p>

    <ul class="list" cds-layout="m-t:lg">
      <li><a href="/overview">Review the components</a></li>
      <li><a href="/adoption-tooling">Incorporate our automation tooling</a></li>
      <li><a href="https://clarity.design/get-started/#reporting-an-issue" target="_blank">Ask questions or share feedback <cds-icon shape="pop-out" size="12"></cds-icon></a></li>
    </ul>

    <h3 cds-text="heading" cds-layout="m-t:lg">Clarity Documentation</h3>

    <div cds-layout="m-t:lg">
      <a href="https://clarity.design/" class="btn" target="_blank"><cds-icon shape="pop-out"></cds-icon> Core Documentation</a>
      <a href="https://angular.clarity.design/" class="btn" target="_blank"><cds-icon shape="pop-out"></cds-icon> Angular Documentation</a>
    </div>
  `,
})
export class IntroPage {

}
