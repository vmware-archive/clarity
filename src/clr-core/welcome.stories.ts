/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '@clr/core/icon-shapes';
import { betaIcon } from '@clr/core/icon-shapes/';
import { html } from 'lit-html';

ClarityIcons.addIcons(betaIcon);

// todo: use mdx format (peer dep on React) or install code example formatter

export default {
  title: 'Documentation|Welcome',
  parameters: {
    options: { showPanel: false },
    a11y: { disable: true }, // disabled for welcome doc to prevent page jump
  },
};

export const clarityCore = () => {
  return html`
    <style> 
      .welcome {
        margin: 0 auto;
        max-width: 34rem;
        text-align: center;
        padding-top: 11vh;
      }

      .welcome h1 {
        font-size: 3rem;
        font-weight: 200;
        margin: 0 0 1.3rem 0;
      }

      .welcome h2 {
        font-size: 1rem;
        margin: 0 0 1.4rem 0;
      }

      .welcome img {
        width: 100%;
        max-width: 5rem;
        margin: 0 auto 1rem auto;
        display: block;
      }

      .welcome p {
        text-align: left;
        line-height: 1.1rem;
        max-width: 550px;
        margin: 0 auto 0.9rem auto;
      }
    </style>
    <section class="welcome">
      <img src="./assets/images/clarity-logo.svg" alt="Clarity Core" />
      <h1>Clarity Core <clr-icon shape="beta" size="xl" solid status="info" style="transform: translate3d(-0.3em, -0.4em, 0)"></clr-icon></h1>
      <h2>Web Component Implementation of the Clarity Design System</h2>

      <p>
        Clarity Core is a Web Component implementation of the <a href="https://clarity.design">Clarity Design System</a>.
        Clarity Core provides a set of reusable UI components that work in any JavaScript framework or no framework at all.
      </p>

      <p>
        Core is currently in a beta state but is ready to try out.
        We are actively looking for <a href="https://github.com/vmware/clarity/issues/new/choose">feedback</a>
        from teams on their experiences. You can read more about Core and its goals
        in our <a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc" target="_blank" rel="noopener">Medium blog post</a>.
      </p>
      <br />

      <cds-button status="primary">
        <a href="./?path=/story/documentation-welcome--getting-started">Get Started</a>
      </cds-button>
      <cds-button action="outline">
        <a href="https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc" target="_blank" rel="noopener">Learn More</a>
      </cds-button>
    </section>
    <section>
      
    </section>
  `;
};

export const gettingStarted = () => {
  return html`
    <style>
      .frameworks {
        text-align: center;
      }

      .frameworks cds-button {
        margin: 1rem 0.2rem 0 0; /* todo: replace with layout system */
      }
    </style>
    <section class="doc">
      <h1>Installing</h1>

      <ul>
        <li>
          <h3>1. Install the Clarity Core package from npm.</h3>
          <pre><code>npm install @clr/core @clr/city --save</code></pre>
        </li>
        <li>
          <h3>2. Global Styles</h3>
          <p>
            Clarity Core includes a global stylesheet that provides a global CSS
            reset and the required base 20px font-size.
            To load the default font, <a href="https://github.com/vmware/clarity-city">Clarity City</a>
            import the provided font CSS file from the Clarity City package. You
            can import the styles via a CSS Preprocessor like Sass or reference
            the CSS directly in your HTML.
          </p>

          <pre><code>
          ${`
// import in Sass
@import '~@clr/core/global.min';
@import '~@clr/city/css/bundles/default.min';

<!-- or use CSS directly -->
<link href="/node_modules/@clr/core/global.min.css" rel="stylesheet">
<link href="/node_modules/@clr/city/css/bundles/default.min.css" rel="stylesheet">
          `}
          </code></pre>

          Then add the font family to your CSS.

          <pre><code>
          ${`
body {
  font-family: 'Clarity City', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
}
          `}
          </code></pre>
        </li>
        <li>
          <h3>3. Use Web Component with JavaScript or framework of choice.</h3>

          <p>
            Currently Core requires a JavaScript bundler import the required dependencies.
            Core is compatible with tools such as Webpack, RollupJS, Parcel as well
            as most Framework CLIs. Additional documentation and examples will be added
            soon for no build step prototyping.
          </p>

          <p>
            To use a component import the component into your JavaScript or TypeScript.
          </p>

          <pre><code>import '@clr/core/button';</code></pre>

          <p>
            Once imported, the component is automatically registered and ready to use in your HTML.
          </p>

          <cds-button status="success">Hello World</cds-button>

          <pre><code>
          ${`
<cds-button>Hello World</cds-button>
<script>
  const button = document.querySelector('cds-button');
  button.status = 'success';
</script>
          `}
          </code></pre>
        </li>
        <li>
          <h3>4. Frameworks</h3>
          <p>
            Core works in most JavaScript frameworks. For detailed install steps
            for your framework see our guides below. More framework guides and
            demos will be added in the near future.
          </p>

          <div class="frameworks">
            <cds-button action="outline">
              <a href="./?path=/story/documentation-welcome--angular">Angular</a>
            </cds-button>
            <cds-button action="outline">
              <a href="./?path=/story/documentation-welcome--vue">Vue</a>
            </cds-button>
            <cds-button action="outline">
              <a href="./?path=/story/documentation-welcome--react">React</a>
            </cds-button>
          </div>
        </li>
      </ul>
    </section>
  `;
};

export const changelog = () => {
  return html`
    <section class="doc">
      <h1>Changelog</h1>
      <hr />

      <h2>3.0 beta</h2>

      <p>
        3.0 beta is the first release for Clarity Core which includes the following:
      </p>

      <ul class="link-list">
        <li>
          <a href="./?path=/story/components-alert--api">Alert Component</a>
        </li>
        <li>
          <a href="./?path=/story/components-app-alert--api">App Alert Component</a>
        </li>
        <li>
          <a href="./?path=/story/components-badge--api">Badge Component</a>
        </li>
        <li>
          <a href="./?path=/story/components-button--api">Button Component</a>
        </li>
        <li>
          <a href="./?path=/story/components-icon--api">Icon Component</a>
        </li>
        <li>
          <a href="./?path=/story/components-tag--api">Tag Component</a>
        </li>
      </ul>
    </section>
  `;
};

export const browserSupport = () => {
  return html`
    <style>
      img {
        max-width: 30rem;
        margin: 0 auto;
        display: block;
      }
    </style>
    <section class="doc">
      <h1>Browser Support</h1>

      <p>
        Core currently works across all modern browsers.
      </p>

      <img alt="Device and Browser Support" src="https://clarity.design/assets/images/get-started/device_support.png">

      <h2>IE11 Support</h2>
      <p>
        To support ES5 browsers such as IE11 there are two steps that must be followed.
      </p>

      <ol>
        <li>
          <h3>1. Polyfills</h3>
          <p>
            To support Custom Elements and CSS Custom Properties a set of Polyfills
            must be loaded into IE11.
          </p>
          <pre><code>
npm install @webcomponents/webcomponentsjs
          </code></pre>

          <pre><code>
          ${`
<script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script src="/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
          `}
          </code></pre>
        </li>
        <li>
          <h3>2. CSS Custom Properties</h3>
          <p>
            Clarity uses CSS Custom Properties to theme and style components.
            To support IE you will need to run a polyfill and function Core provides
            for IE11.
          </p>

          <pre><code>
import { runCssVarsPolyfill } from '@clr/core';

runCssVarsPolyfill(); // run at application start up or any time after a theme swap
          </code></pre>
        </li>
        <li>
          <h3>3. Transpile to ES5</h3>
          <p>
            Lastly all application code and dependencies must be targeted to transpile
            down to ES5 code for IE11. Clarity and many other libraries only ship
            ES2015+ compatible code and allow the consumer to choose their compilation
            target of choice.
          </p>
          <p>
            Many tools support this out of the box.Please refer to your build system
            documentation to find out how to target for ES5 clients.
          </p>
          <ul>
            <li><a href="https://angular.io/guide/deployment#differential-loading" target="_blank">angular.io/guide/deployment#differential-loading</a></li>
            <li><a href="https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode" target="_blank">cli.vuejs.org/guide/browser-compatibility.html#modern-mode</a></li>
            <li><a href="https://cli.vuejs.org/config/#transpiledependencies" target="_blank">cli.vuejs.org/config/#transpiledependencies</a></li>
            <li><a href="https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md" target="_blank">github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md</a></li>
          </ul>
        </li>
      </ol>
    </section>
  `;
};

export const angular = () => {
  return html`
    <section class="doc">
      <h1>Angular</h1>

      <p>
        Clarity Core is compatible will most JavaScript frameworks including Angular.
        You can try out Core in Angular today. To get the best experience building
        with Clarity we recommend using <a href="https://clarity.design/documentation/get-started">Clarity Angular</a>
        which provides a suite of feature rich native Angular components.
      </p>

      <p>
        To use Clarity Core with Angular follow the package <a href="./?path=/story/welcome--getting-started">installation instructions</a>.
        Once installed add <code>CUSTOM_ELEMENTS_SCHEMA</code> to your application
        module.
      </p>

<pre><code>
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import '@clr/core/alert';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
</code></pre>

      <p>
        To set properties on a Web Component use the Angular <code>[property]</code> binding syntax.
        To listen to events use the Angular <code>(event)</code> binding syntax.
      </p>

      <pre><code>
      ${`
<!--
- status - attribute style hook
- [closable] - setting the 'closable' property on the element
- (closeChange) - listen for the 'closeChange' custom event
-->

<cds-alert status="info" [closable]="true" (closeChange)="log($event.detail)">
  Hello World
</cds-alert>
        `}
      </code></pre>
    </section>
  `;
};

export const vue = () => {
  return html`
    <section class="doc">
      <h1>Vue</h1>

      <p>
        To use Clarity Core with Vue follow the package <a href="./?path=/story/welcome--getting-started">installation instructions</a>.
        Once installed import the component into your JavaScript file.
      </p>

<pre><code>
import '@clr/core/alert';
</code></pre>

      <p>
        To set properties on a Web Component use the Vue <code>:property</code> binding syntax.
        To listen to events use the Vue <code>@event</code> binding syntax.
      </p>

      <pre><code>
      ${`
<!--
Example of a alert web component in Vue
- status - attribute style hook
- :closable - setting the 'closable' property on the element
- @closeChange - listen for the 'closeChange' custom event
-->

<cds-alert status="info" :closable="true" @closeChange="log">
  Hello World
</cds-alert>`}
      </code></pre>
    </section>
  `;
};

export const react = () => {
  return html`
    <section class="doc">
      <h1>Preact</h1>

      <p>
        To use Clarity Core with Preact follow the package <a href="./?path=/story/welcome--getting-started">installation instructions</a>.
        Once installed import the component into your JavaScript file.
      </p>

<pre><code>
import '@clr/core/alert';
</code></pre>

      <pre><code>
      ${`
/*
Example of a alert web component in Preact
- status - attribute style hook
- closable - setting the 'closable' property on the element
- onCloseChange - listen for the 'closeChange' custom event
*/

<cds-alert status="info" closable={this.state.closable} onCloseChange={this.log}>
  Hello World
</cds-alert>
      `}
      </code></pre>

      <h2>React</h2>
      <p>
      A shim layer <em>(a.k.a wrapper)</em> must be used for web components to work in React applications. This is due to React not being compatible with Web Standards such as <a href="https://custom-elements-everywhere.com">custom elements</a>. You can try out a <a href="https://stackblitz.com/edit/react-ts-drskpx">early work in progress prototype here</a>.
      </p>
    </section>
  `;
};
