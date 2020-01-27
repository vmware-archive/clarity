/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';

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
        text-align: center;
        position: relative;
        padding-top: 11vh;
      }

      .welcome h1 {
        font-size: 3rem;
        font-weight: 200;
      }

      .welcome h2 {
        font-size: 1rem;
      }

      .welcome img {
        width: 100%;
        max-width: 8rem;
      }

      .welcome cwc-button {
        margin-top: 1rem;
      }
    </style>
    <section class="welcome">
      <img src="./assets/images/clarity-logo.svg" alt="Clarity Core" />
      <h1>Clarity Core</h1>
      <h2>Web Component Implementation of the Clarity Design System</h2>

      <cwc-button status="primary">
        <a href="./?path=/story/documentation-welcome--getting-started">Get Started</a>
      </cwc-button>
    </section>
  `;
};

export const gettingStarted = () => {
  return html`
    <section class="doc">
      <h1>Clarity Core Web Components</h1>

      <p>
        Clarity Core is a Web Component implementation of the <a href="https://clarity.design">Clarity Design System</a>.
      </p>

      <h2>Installing</h2>

      <ul>
        <li>
          <h3>1. Install the Clarity Core package from npm.</h3>
          <pre><code>npm install @clr/core --save</code></pre>
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
<link href="/node_modules/@clr/city/css/bundles/default.min" rel="stylesheet">
          `}
          </code></pre>

          Then add the font family to your CSS.

          <pre><code>
          ${`
font-family: 'Clarity City', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
          `}
          </code></pre>
        </li>
        <li>
          <h3>3. Import desired Web Component into your JavaScript or TypeScript</h3>
          <p>
            Once you have the global CSS installed, you can start importing and using
            the Clarity Web Components. To use a component import the component into your
            JavaScript.
          </p>
          <pre><code>import '@clr/core/modal';</code></pre>
        </li>
        <li>
          <h3>4. Use Web Component with JavaScript or framework of choice.</h3>
          <pre><code>import '@clr/core/modal';</code></pre>

          <p>
            Once imported, the component is registered and ready to use in your HTML.
          </p>

          <pre><code>
          ${`
<cwc-button>Hello World</cwc-button>
<script>
  const button = document.querySelector('cwc-button');
  button.status = 'danger';
</script>
          `}
          </code></pre>
        </li>
      </ul>
    </section>
  `;
};

export const angular = () => {
  return html`
    <section class="doc">
      <h1>Angular</h1>

      <p>
        To use Clarity Core with Angular follow the package <a href="/?path=/story/welcome--getting-started">installation instructions</a>.
        Once installed add <code>CUSTOM_ELEMENTS_SCHEMA</code> to your application
        module.
      </p>

<pre><code>
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import '@clr/core/modal';

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
- size - attribute style hook
- [open] - setting the 'open' property on the element
- (openChange) - listen for the 'openChange' custom event
-->

<cwc-modal size="lg" [open]="true" (openChange)="log($event.detail)">
  <p>slot content</p>
</cwc-modal>
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
        To use Clarity Core with Vue follow the package <a href="/?path=/story/welcome--getting-started">installation instructions</a>.
        Once installed import the component into your JavaScript file.
      </p>

<pre><code>
import '@clr/core/modal';
</code></pre>

      <p>
        To set properties on a Web Component use the Vue <code>:property</code> binding syntax.
        To listen to events use the Angular <code>@event</code> binding syntax.
      </p>

      <pre><code>
      ${`
<!--
Example of a modal web component in Vue
- size - attribute style hook
- :open - setting the 'open' property on the element
- @openChange - listen for the 'openChange' custom event
-->

<cwc-modal size="lg" :open="true" @openChange="log">
  <p>slot content</p>
</cwc-modal>
      `}
      </code></pre>
    </section>
  `;
};

export const react = () => {
  return html`
    <section class="doc">
      <h1>Preact</h1>

      <p>
        To use Clarity Core with Preact follow the package <a href="/?path=/story/welcome--getting-started">installation instructions</a>.
        Once installed import the component into your JavaScript file.
      </p>

<pre><code>
import '@clr/core/modal';
</code></pre>

      <pre><code>
      ${`
/*
Example of a modal web component in Preact
- size - attribute style hook
- open - setting the 'open' property on the element
- openChange - listen for the 'openChange' custom event
*/

<cwc-modal size="lg" open={this.state.open} onOpenChange={this.log}>
  <p>slot content</p>
</cwc-modal>
      `}
      </code></pre>

      <h2>React</h2>
      <p>
        Due to React not being compatible with Web Standards such as <a href="https://custom-elements-everywhere.com">custom elements</a>
        a shim layer must be used. More details on this will be added soon.
      </p>
    </section>
  `;
};
