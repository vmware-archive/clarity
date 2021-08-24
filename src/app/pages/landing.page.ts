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
    <h2 cds-text="display" cds-layout="m-t:xl">Clarity Core Adoption Guide</h2>

    <div cds-layout="grid cols:12 cols@sm:6 m-t:xl">
      <p cds-text="section">
          A simple, intuitive guide for helping teams adopt and migrate from Clarity Angular to Clarity Core.
      </p>
    </div>

    <section cds-layout="container:xl">
      <div cds-layout="grid cols@sm:12 cols@md:6 gap:xl align:vertical-center" class="home-section section-column-wrapper alternated">
      <div cds-layout="vertical" cds-layout="display:block display@md:none">
          <img src="/assets/img_build_framework.svg" alt="A hand holding icons for Angular, Vue and React web frameworks." cds-layout="fill" />
        </div>
        <div cds-layout="vertical align:vertical-center">
          <div aria-hidden="true" cds-layout="grid gap:md" class="accent-wrapper">
            <div cds-layout="col:3" class="orange-accent"></div>
          </div>
          <h1 cds-text="subsection uppercase" cds-layout="m-t:lg">
            Why Clarity Core
          </h1>
          <h2 cds-text="heading" cds-layout="m-t:lg">Clarity for 2050</h2>
          <p cds-text="section" cds-layout="m-t:xl">
            Clarity was started with the goal of bringing high quality and consistency to applications through a design system. We've evolved the approach and quality with Clarity Core. Using web standards, our components are designed to remain stable for decades so you can depend upon it for as long as your application needs.
          </p>
          <a routerLink="/introduction" cds-layout="m-t:lg" cds-text="subsection">Read the reasons behind Clarity Core</a>
          <a routerLink="/differences" cds-layout="m-t:md" cds-text="subsection">Understand differences in Clarity Core</a>
          <a routerLink="/differences" cds-layout="m-t:md" cds-text="subsection">Look at approaches to adoption</a>
        </div>
        <div cds-layout="vertical" cds-layout="display:none display@md:block">
          <img src="/assets/img_build_framework.svg" alt="A hand holding icons for Angular, Vue and React web frameworks." cds-layout="fill" />
        </div>
      </div>
    </section>

    <section cds-layout="container:xl">
      <div cds-layout="grid cols@sm:12 cols@md:6 gap:xl align:vertical-center" class="home-section section-column-wrapper alternated">
        <div cds-layout="vertical m-t:lg m-b:lg">
          <img src="/assets/img_hero.svg" alt="A man riding a singled wheeled skateboard surrounded by Clarity components and tools." cds-layout="fill" />
        </div>
        <div cds-layout="vertical align:vertical-center">
          <div aria-hidden="true" cds-layout="grid gap:md" class="accent-wrapper">
            <div cds-layout="col:3" class="orange-accent"></div>
          </div>
          <h1 cds-text="subsection uppercase" cds-layout="m-t:lg">
            How we support you
          </h1>
          <h2 cds-text="heading" cds-layout="m-t:lg">Automation, documentation, support</h2>
          <p cds-text="section" cds-layout="m-t:xl">
            We know that using Clarity Core is an investment in the future, and may take some time to bring Clarity Core fully into your applications. We plan to support you in that journey with automation to help detect and rewire existing code, document samples of how Clarity Angular and Clarity Core are used, and continue to support both Clarity Angular and Clarity Core libraries.
          </p>
          <a routerLink="/introduction" cds-layout="m-t:lg" cds-text="subsection">Review the components</a>
          <a routerLink="/differences" cds-layout="m-t:md" cds-text="subsection">Incorporate our automation tooling</a>
          <a href="https://github.com/vmware/clarity/discussions" cds-layout="m-t:md" cds-text="subsection">Ask questions or share feedback</a>
        </div>
      </div>
    </section>
  `,
})
export class LandingPage {}
