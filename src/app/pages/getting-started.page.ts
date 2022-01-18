/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2 cds-text="display" cds-layout="m-t:lg">Get Started</h2>

    <h3 cds-text="heading" cds-layout="m-t:lg">Adoption strategy</h3>

    <p>
      Clarity supports you and your team during the adoption of Clarity Core. A part of our mutual success hinges on outlining
      an adoption strategy alongside understanding how the Clarity team can assist. By adopting Clarity Core, with an adoption
      strategy in place, coupled with the support we provide, we, together, can minimize duplication efforts and break-fix issues.
    </p>

    <p>
      There are multiple ways that you can incorporate Clarity Core into your application. There are tradeoffs between each of them,
      and the best choice may vary from application to application. We want to emphasize that Clarity Angular and Clarity Core are fully
      independent implementations and can be used side by side. No matter what approach you take, we support Clarity Angular as long as
      there is widespread use.
    </p>

    <h3 cds-text="heading" cds-layout="m-t:lg">Page by Page Adoption: Recommended and supported</h3>

    <p>
      We recommend incorporating Clarity Core into your applications page by page as you are doing other work. For example, if your
       application has 100 pages or routes, then each time you make a new page or modify an existing one, you can also incorporate
       some time to update the page to use Clarity Core fully.
    </p>

    <p>
      Advantages <br/>
      This allows applications to rework page by page and keep the scope of changes isolated.
      Full support of the Clarity team, specifically - having an engineer embedded to provide guidance.
    </p>

    <div cds-layout="m-t:lg">
      <a href="/adoption-tooling" class="btn">Adoption Tooling</a>
      <a href="/overview" class="btn">Components</a>
    </div>
  `,
})
export class GettingStartedPage {}
