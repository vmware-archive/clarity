/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  styles: [
    `.orange-accent { height: 2px; background-color: #ff7e29; }`
  ],
  template: `
  <div cds-layout="horizontal gap:md align:horizontal-center">
    <h1 cds-text="display" cds-layout="m-t:xl">Clarity Core Adoption Guide</h1>

    <img src="/assets/landing-page.svg" alt="A hand holding icons for Angular, Vue and React web frameworks." cds-layout="fill" />

    <p cds-text="section center">
      A simple, intuitive guide for helping teams adopt and migrate from Clarity Angular to Clarity Core.
    </p>
  </div>

  <section cds-layout="horizontal align:horizontal-center m-t:xl">
    <a href="/getting-started" class="btn btn-primary">Get started</a>
    <a href="/introduction" class="btn">Learn more</a>
  </section>
  `,
})
export class LandingPage {}
