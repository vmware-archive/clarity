/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  template: `
  <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Additional Learning</h1>

  <h3 cds-text="title" cds-layout="m-t:lg">Key Differences in Clarity Angular and Clarity Core</h3>

  <p>
    We designed Clarity Angular to try and leverage many of the capabilities of Angular, and it was aimed at
    solving problems by using guard rails for developers to avoid common pitfalls. Unfortunately, what we learned
    was those same guard rails acted like brick walls for certain valid use cases. And it made it harder to
    maintain. With Clarity Core, we've taken the learnings from our Clarity Angular architecture, blended in
    modern web standards, and crafted a consistent architecture that avoids the previous pitfalls and makes
    things easier to work with.
  </p>

  <table cds-table="border:all" cds-layout="m-t:lg">
    <thead>
      <tr>
        <th>Concept</th>
        <th>Clarity Angular</th>
        <th>Clarity Core</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>API Design</td>
        <td>Our Clarity Angular APIs evolved over time to reflect the best practices and capabilities of Angular itself. As a declarative API it was at times verbose but still fairly clear. However, some things were difficult to implement or use in host apps because of the advanced Angular templating syntax required and we also had occassional issues with how to maintain these APIs when Angular or TypeScript behaviors evolved.</td>
        <td>Clarity Core APIs are more consistent and do not depend on framework specific features to consume. This naturally makes them simpler and information flows into components through properties (attributes) and information flows back out through events.</td>
      </tr>
      <tr>
        <td>Customizations</td>
        <td>Clarity Angular wasn't developed with a consistent approach to customizations. It was possible to customize parts of Clarity Angular components that were not intended to be customized as well. It was difficult to encapsulate all of the logic and details of a component, and this led to applications having issues with upgrades when they hooked into private APIs. We also didn't have a consistent story for how to customize components and it was also possible to change CSS through the ::host pseudo selector that also caused conflicts.</td>
        <td>Given the nature of the Core architecture, customizations are more consistent. Core uses the Shadow DOM and encapsulation to make the internals truly private, so we can make better guarantees about our API and easier updates. It is also easier to customize things through our theming and using composition of multiple components together rather than mega-components.</td>
      </tr>
      <tr>
        <td>Theming</td>
        <td>Originally, Clarity Angular didn't have any theming and we later built a dark theme for it after a large effort. Since theming wasn't part of the original scope, it was always subpar and inconvenient to implement. Since it was introduced later, we know that some applications didn't benefit from the limited theming options.</td>
        <td>Core has supported theming from the start as part of its underlying architecture and we took it to a new level by properly addressing some of the inconsistency and visual issues from Clarity Angular in our use of design tokens. By leaning on design tokens and CSS custom properties, we have a simple theming approach that allows you to simply customize the whole system quickly and in only a few lines of CSS.</td>
      </tr>
      <tr>
        <td>Bindings</td>
        <td>Angular uses its binding syntax to manage the inflow of data across the application. This is powerful and we built Clarity Angular to leverage it extensively. However, it also could be cumbersome at times, such as in the Datagrid which could use a dozen different bindings to control behaviors.</td>
        <td>Clarity Core will feel familiar to Angular developers because Angular actually designed their binding system to mimic the web standards that Core uses. The main difference is not in how bindings work, but in how we've architected the API which simplifies the bindings and doesn't depend on any of Angular's custom binding abilities (like structural directives).</td>
      </tr>
      <tr>
        <td>Event Handling</td>
        <td>Events are found in Clarity Angular, but they are not always available in places that you might want. That is often connected to the statefulness of Angular components, but also the design of many components didn't always expose all possible events in an effort to keep things simple.</td>
        <td>Events work the same in Clarity Core, you can bind to the click event in the exact same way. The difference in Core is similar to the differences in bindings above. Events can be easily subscribed to and unlike Clarity Angular, Clarity Core has them in all of the places you need or we'll consider adding it if it isn't.</td>
      </tr>
      <tr>
        <td>Statefulness</td>
        <td>Clarity Angular incorporates statefulness in several places where Clarity tries to track and remember the current values of a component. The Datagrid is a good example of this, and many of the bugs and limitations from Clarity Angular come from the internal statefulness of the components and how difficult it is to keep that in sync with the host app.</td>
        <td>Clarity Core is minimally stateful by design. This means that Clarity Core components are not going to try and keep track of their own values, such as keeping track if a form field is valid or not, because a host app will have to supply that information. This is essential for helping us work with all frameworks, and actually gives host apps more flexibility and control over the state. For example, apps will be able to retain the current state of the Datagrid if they wish, which was impossible with Clarity Angular.</td>
      </tr>
    </tbody>
  </table>

  <a cds-layout="m-t:lg" href="https://clarity.design" target="_blank" class="btn btn-primary">Get started with Clarity Core</a>

  <h3 cds-text="subtitle" cds-layout="m-t:lg">Additional reading</h3>

  <p>
    We have written more content in our blog about the differences and architectural choices with Clarity Core.
    We encourage you to familiarize yourself with them, as they are useful also to learn from to apply to your
    own applications.
  </p>

  <ul cds-layout="m-t:lg">
    <li><a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc">Clarity Core - Our design system’s journey to framework independence.</a></li>
    <li><a href="https://medium.com/claritydesignsystem/claritys-future-user-focused-framework-independent-accessible-enterprise-ready-and-open-61a3f62eac93">Clarity’s future: user-focused, framework-independent, accessible, enterprise-ready, and open source.</a></li>
    <li><a href="https://medium.com/claritydesignsystem/level-up-your-application-by-adopting-clarity-core-8a5f3f863139">Level Up Your Application by Adopting Clarity Core</a></li>
    <li><a href="https://medium.com/claritydesignsystem/design-system-performance-with-clarity-core-web-components-fbab56516f30">Design System Performance with Clarity Web Components</a></li>
    <li><a href="https://medium.com/claritydesignsystem/clarity-design-architecture-part-one-95ef0adcd30c">Clarity Core Design Architecture Part 1</a></li>
    <li><a href="https://medium.com/claritydesignsystem/clarity-design-architecture-part-two-bf9df8ed7a6f">Clarity Core Design Architecture Part 2</a></li>
    <li><a href="https://medium.com/claritydesignsystem/clarity-5-0-jump-start-with-core-web-components-dcb22a51222e">Clarity v5 - Jump Start with Core Web Components</a></li>
  </ul>

  `,
})
export class AdditionalLearningPage {}
