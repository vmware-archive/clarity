/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  template: `
    <h2 cds-text="title" cds-layout="m-t:lg">Approaches for Adopting Clarity Core</h2>

    <p>
      There are multiple ways that you can incorporate Clarity Core into your application. There are tradeoffs between each of them and the best choice may vary from application to application. We want to emphasize that Clarity Angular and Clarity Core are fully independent implementations and can be used side by side. No matter what approach you take, we are supporting Clarity Angular as long as there is widespread use.
    </p>

    <p>
      This page provides a list of common adoption patterns that you can use to determine what approaches might work for you. In many cases, it will be best to blend several options or to forge your own path. If you find a new path that is not defined here, we'd be happy to share it if you can submit it in our <a href="https://github.com/vmware/clarity/discussions">GitHub Discussions</a>. 
    </p>

    

    <h3 cds-text="subtitle" cds-layout="m-t:lg">Option 1 - Page by Page</h3>

    <p>
      In this pattern, the recommendation is that you'd incorporate Clarity Core into your applications page by page as you are doing other work. If your application has 100 pages or routes, then each time you make a new page or modify an existing one you can also incorporate some time to update the page to fully use Clarity Core. 
    </p>

    <dl cds-list>
      <dt cds-layout="m-t:md">Advantages</dt>
      <dd>This allows applications to rework page by page and keep the scope of changes isolated. </dd>

      <dt cds-layout="m-t:md">Disadvantages</dt>
      <dd>Applications may find it challenging to add the additional time to incorporate Clarity Core as they work.</dd>
    </dl>

    <h3 cds-text="subtitle" cds-layout="m-t:lg">Option 2 - Component by Component</h3>

    <p>
      Component by component means you'll start by replacing all copies of a Clarity Angular component with its Clarity Core counterpart. This might be the default option for most applications, especially in cases where you can do search and replace actions to update. Our adoption tooling is built to help identify uses of individual components and in cases we can automatically migrate them for you, so this can be appealing. 
    </p>

    <dl cds-list>
      <dt cds-layout="m-t:md">Advantages</dt>
      <dd>When you batch changes of a single component, you can more easily see how a single component is utilized across the application and ensure consistency.</dd>

      <dt cds-layout="m-t:md">Disadvantages</dt>
      <dd>Some components cannot be migrated in complete isolation when they are used in combination with others, such as in forms or buttons in a wizard.</dd>
    </dl>
    
    <h3 cds-text="subtitle" cds-layout="m-t:lg">Option 3 - Single Rewrite</h3>

    <p>
      Some applications may find it worthwhile to do a single rewrite session where they replace everything at once. Smaller applications can be more successful here and it can help ensure that you have a consistent implementation. This may be a larger one time investment, but it can simplify your application by avoiding the need to think about both Clarity Angular and Clarity Core.
    </p>

    <dl cds-list>
      <dt cds-layout="m-t:md">Advantages</dt>
      <dd>Gives you all of the power of Clarity Core, better control and optimization of your code, and can unblock the way to faster development.</dd>

      <dt cds-layout="m-t:md">Disadvantages</dt>
      <dd>This can be a major investment depending on the size and complexity of your application.</dd>
    </dl>
    
    <h3 cds-text="subtitle" cds-layout="m-t:lg">Option 4 - App Library</h3>

    <p>
      Some applications have already incorporated a library into their application(s) that wrap Clarity (and other dependencies). This may be done for a number of reasons, such as standardizing or extending customizations, incorporating components into a larger workflow, or to have control for easy updates in the future. If you have a library, it is likely that you'd want to start by incorporating Clarity Core into it first before putting it into your application. If you don't have a library yet, you might want to consider it for some of the more complex components.
    </p>

    <dl cds-list>
      <dt cds-layout="m-t:md">Advantages</dt>
      <dd>Gives you a single place to standardize and control Clarity across your application, and can better support preferred customizations and implementations.</dd>

      <dt cds-layout="m-t:md">Disadvantages</dt>
      <dd>This can be a big investment if you don't have a large enough application, or can add bloat to your application.</dd>
    </dl>

    <h3 cds-text="subtitle" cds-layout="m-t:lg">Handling app customizations of Clarity</h3>

    <p>
      We know from supporting Clarity Angular over the past 5+ years that applications have found interesting ways to extend it and customize it for various needs and use cases. Clarity Angular was unable to use Shadow DOM when it was first created (since browser support wasn't widespread), and our Clarity UI styling was developed to intentionally allow teams access to the styling for cases where they could use Angular. The result is that flexiblity allowed applications to make progress while also opening the door to customizations and tweaks that Clarity could not anticipate. We have seen bug reports appear after we refactored some internal HTML or CSS within components when we didn't expect to impact applications but the nature of Angular allows teams to modify things that we considered internal.
    </p>

    <p>
      To that end, if you have made customizations to Clarity components there are a few things to consider to help minimize friction and impact.
    </p>

    <ol cds-list>
      <li><b>Evaluate customizations</b> - Do you really need to set a custom color or override the default behaviors in Clarity? Given the ability to modify Clarity Angular is largely unstandardized, it may help if you can simplify by using Clarity as it was intended as much as possible to limit the number of changes you have to worry about with migration and updates.</li>
      <li><b>Use proper theming</b> - Clarity theming is different between Clarity Angular and Clarity Core, and if you are customizing the theme in a single manner you'll find it much easier to migrate. It might be worth investing some time to standardize theme adjustments and to follow our guidance about how to properly theme Clarity Angular before migration.</li>
      <li><b>Review design customizations before coding</b> - In cases where you've customized Clarity, ensure you audit the changes with your designers so everybody understands reasons they were made. In large applications it can be hard to understand why some things are the way they are, and reviewing before digging into things can help you prepare.</li>
    </ol>
    

  `,
})
export class ApproachesPage {
  
}
