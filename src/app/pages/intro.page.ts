/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  template: `
    <h1 cds-text="title" cds-layout="m-t:lg">Introduction</h1>
    <p>
      Clarity began in 2016 as a design system built specifically for Angular, which we will call Clarity Angular. It is used by many of VMware's largest applications, and by other companies and applications outside of VMware. As Clarity's popularity and usage grew, so did requirements for Clarity to work well with other frameworks to help unify applications that don't use Angular. That led us to envision a new implementation of Clarity built on top of web components that can be utilized by any application.
    </p>

    <p>
      This new version of Clarity is called Clarity Core, and it gave us the opportunity to reflect upon the successes of Clarity Angular and to improve areas that had been recurring challenges. When we built Clarity Angular originally, Angular was still in beta and best practices were yet to be defined for Angular. That led us to evolve some of our technical architecture over time, but it was challenging to bring the lessons we had learned along the way into some parts of Clarity Angular without causing major pain on applications who expected things to behave in certain ways. We wanted to condense all that we had learned with Clarity Angular and ensure that we carefully set forth a more consistent architecutre, address common pitfalls and gaps in capabilities, and simplify the implementations for easier integration. And in those goals, we believe we are delivering all of that and more with Clarity Core and are excited to help you get the most from Clarity with our CLarity Core components and patterns.
    </p>

    <p>
      So what about Clarity Angular? As you can imagine, two implementations of Clarity comes with significant investments in development and support. When we released Clarity v5, we announced that we've frozen Clarity Angular feature development. This has a number of benefits. First, we're committing to no breaking changes in Clarity Angular, so you can expect the components you are using today not to conflict with your usage of them. Second, we're continuing to bugfix and support issues with Clarity Angular, which means you'll still get the same (or perhaps even better) quality of support and stability you've come to expect with Clarity. Finally, we're going to continue to update as necessary to align with major Angular releases, so you aren't stuck on an older version of Angular due to compiler or TypeScript incompatibilities. All of this is to give applications confidence in using Clarity Angular for as long as they need to.
    </p>

    <p>
      As great as Clarity Angular is, we are excited about what Clarity Core can allow you to accomplish. For example, there are new features in the Clarity Core datagrid that were previously impossible with Clarity Angular. We're adding new components like the pagination and breadcrumb components as well. And finally, it's fully independent of frameworks and systematically built to maximize the lifetime of the components. We are building Clarity Core on top of web standards, which means that they will continue to work even if your frameworks of choice change over time. In the life of the web web standards are not removed just deprecated in favor of better choices. (Even the original Space Jam movie website works perfectly fine today as it did in the 1990s). This means we can confidently say that Clarity Core is future facing, with no expiration date.
    </p>

    <p>
      Our objective with Clarity Core and this website specifically is to help you benefit from the improvements in quality, consistency, and framework independence that we've built in this modern implementation. We aim to support you with this interactive guide showing details about the way components are used in Clarity Angular and Clarity Core. We have also built tooling, such as our ESLint rules to help identify where you are using Clarity Angular and in some cases also to help automate the upgrade process. We will also be adding some case studies and expanding this guide with more stories about how applications have approached incorporating Clarity Core.
    </p>

    <p>
      We're proud of both Clarity Angular and Clarity Core, and know that teams depend upon one or both of these in their daily work. Our community has been active in engaging with suggesting features, reporting and fixing issues, and advocating for us. We thank you for that and know we wouldn't be where we are today without the open source community. If you have questions or insights relatd to this guide or adopting Clarity Core, we'd love to see you join us in GitHub Discussions and sharing your notes. We can improve and expand with your inputs and together move forward with Clarity!
    </p>

  `,
})
export class IntroPage {

}
