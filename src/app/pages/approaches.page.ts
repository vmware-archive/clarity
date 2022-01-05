/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import {
  checkIcon,
  ClarityIcons,
} from '@cds/core/icon';

ClarityIcons.addIcons(checkIcon);

@Component({
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Additional Strategies</h1>

    <h3 cds-text="title" cds-layout="m-t:lg">Adopting Clarity Core</h3>

    <p>
      There are multiple ways that you can incorporate Clarity Core into your application. There are
      tradeoffs between each of them and the best choice may vary from application to application. We
      want to emphasize that Clarity Angular and Clarity Core are fully independent implementations and
      can be used side by side. No matter what approach you take, we are supporting Clarity Angular as
      long as there is widespread use.
    </p>

    <p>
      This page provides a list of common adoption patterns that you can use to determine what approaches
      might work for you. In many cases, it will be best to blend several options or to forge your own path.
      If you find a new path that is not defined here, we'd be happy to share it if you can submit it in
      our GitHub Discussions.
    </p>

    <h3 cds-text="title" cds-layout="m-t:xl">Adoption strategy support</h3>

    <table cds-table="border:all" cds-layout="m-t:lg">
      <thead>
        <tr>
          <th>Support method</th>
          <th>Page by Page</th>
          <th>Component by Component</th>
          <th>Single Rewrite</th>
          <th>Application Library</th>
        </tr>
      </thead>
      <tbody>
        <tr cds-text="center">
          <td cds-text="left">Embedded engineering support</td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="times" size="md" status="danger" solid></cds-icon></td>
          <td><cds-icon shape="times" size="md" status="danger" solid></cds-icon></td>
          <td><cds-icon shape="times" size="md" status="danger" solid></cds-icon></td>
        </tr>
        <tr cds-text="center">
          <td cds-text="left">Slack Channels</td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
        </tr>
        <tr cds-text="center">
          <td cds-text="left">Automation Tooling</td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
        </tr>
        <tr cds-text="center">
          <td cds-text="left">Office Hours</td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
        </tr>
        <tr cds-text="center">
          <td cds-text="left">Github Discussions</td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
          <td><cds-icon shape="check" size="md" status="success" solid></cds-icon></td>
        </tr>
      </tbody>
    </table>

    <h3 cds-text="title" cds-layout="m-t:xl">Page by Page Adoption: Recommended and supported</h3>

    <div cds-layout="horizontal gap:sm align:fill">
      <p cds-layout="col:6">
        We recommend incorporating Clarity Core into your applications page by page as you are doing other work.
        If your application has 100 pages or routes, then each time you make a new page or modify an existing one
        you can also incorporate some time to update the page to fully use Clarity Core.
        <br />
        <br />
        Advantages <br/>
        This allows applications to rework page by page and keep the scope of changes isolated.
        Full support of the Clarity team, specifically - having an engineer embedded to provide guidance
      </p>

      <div cds-layout="col:6 horizontal align:center align:top">
        <img style="max-width: 200px" src="/assets/strategy-page-by-page.svg" alt="Page by Page Adoption: Recommended and supported" />
      </div>

    </div>

    <section cds-layout="horizontal m-t:xl">
      <a href="/adoption-tooling" class="btn">Adoption Tooling</a>
      <a href="/overview" class="btn">Components</a>
    </section>

    <p>
      Clarity recognizes that a perfect path to adoption of Clarity Core does not exist. Each product using Clarity
      is unique in of its own right, which is why we encourage adopting Clarity Core by using a page by page adoption
      strategy, we also support various other adoption strategies. Each comes with its own set of various support avenues.
    </p>

    <h3 cds-text="title" cds-layout="m-t:xl">Component by Component Adoption</h3>

    <div cds-layout="horizontal gap:sm align:fill">
      <p cds-layout="col:10">
        Component by component means you'll start by replacing all copies of a Clarity Angular component with its
        Clarity Core counterpart. This might be the default option for most applications, especially in cases
        where you can do search and replace actions to update. Our adoption tooling is built to help identify
         uses of individual components and in cases we can automatically migrate them for you, so this can be
         appealing.
        <br />
        <br/>
        Advantages <br />
        When you batch changes of a single component, you can more easily see how a single component is utilized
        across the application and ensure consistency.
        <br />
        Disadvantages<br/>
        Some components cannot be migrated in complete isolation when they are used in combination with others,
        such as in forms or buttons in a wizard.
      </p>

      <div cds-layout="col:6 horizontal align:center align:top">
        <img style="max-width: 200px" src="/assets/strategy-component-by-component.svg" alt="Component by Component Adoption" />
      </div>
    </div>

    <h3 cds-text="title" cds-layout="m-t:xl">Single Rewrite Adoption</h3>

      <div cds-layout="horizontal gap:sm align:fill">
      <p cds-layout="col:10">
        Some applications may find it worthwhile to do a single rewrite session where they replace everything at once.
         Smaller applications can be more successful here and it can help ensure that you have a consistent
         implementation. This may be a larger one time investment, but it can simplify your application by avoiding
         the need to think about both Clarity Angular and Clarity Core.
        <br/>
        <br />
        Advantages  <br/>
        Gives you all of the power of Clarity Core, better control and optimization of your code, and can unblock
        the way to faster development.
        <br/>
        Disadvantages <br/>
        This can be a major investment depending on the size and complexity of your application.
      </p>

      <div cds-layout="col:6 horizontal align:center align:top">
        <img style="max-width: 200px" src="/assets/strategy-single-rewrite.svg" alt="Single Rewrite Adoption" />
      </div>

    </div>

    <h3 cds-text="title" cds-layout="m-t:xl">App Library Adoption</h3>

    <div cds-layout="horizontal gap:sm align:fill">
      <p cds-layout="col:10">
        Some applications have already incorporated a library into their application(s) that wrap Clarity (and other
        dependencies). This may be done for a number of reasons, such as standardizing or extending customizations,
        incorporating components into a larger workflow, or to have control for easy updates in the future. If you have a library, it is likely that you'd want to start by incorporating Clarity Core into it first before putting it into your application. If you don't have a library yet, you might want to consider it for some of the more complex components.
        <br/>
        <br/>
        Advantages  <br/>
        Gives you a single place to standardize and control Clarity across your application, and can better support
         preferred customizations and implementations.

        <br />
        Disadvantages  <br/>
        This can be a big investment if you don't have a large enough application, or can add bloat to your application.
      </p>

      <div cds-layout="col:6 horizontal align:center align:top">
        <img style="max-width: 200px" src="/assets/strategy-library.svg" alt="App Library Adoption" />
      </div>
    </div>

    <h3 cds-text="title" cds-layout="m-t:xl">Adoption strategy support</h3>

    <p>
      Some applications have already incorporated a library into their application(s) that wrap Clarity (and other
      dependencies). This may be done for a number of reasons, such as standardizing or extending customizations,
      incorporating components into a larger workflow, or to have control for easy updates in the future. If you have a
      library, it is likely that you'd want to start by incorporating Clarity Core into it first before putting it into
      your application. If you don't have a library yet, you might want to consider it for some of the more complex
      components.
    </p>
    <p>
      Advantages <br/>
      Gives you a single place to standardize and control Clarity across your application, and can better support
      preferred customizations and implementations.
      <br />
      Disadvantages <br/>
      This can be a big investment if you don't have a large enough application, or can add bloat to your application.
    </p>

    <section cds-layout="horizontal m-t:xl">
      <a href="/getting-started" class="btn btn-primary">Lets get started</a>
      <a href="/introduction" class="btn">Additional Learning</a>
    </section>


  `,
})
export class ApproachesPage {

}
