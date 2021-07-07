---
title: Core (@cds/core)
toc: true
---

Clarity Core is a Web Component implementation of the Clarity Design System. Clarity Core provides a set of reusable UI components that work in any JavaScript framework or no framework at all.

Here you will find general installation process that applies regardless of the framework, as well as examples of how to include core components in some of the more popular frameworks.

## Installation

### 1. Install the Clarity Core package from npm

```bash
npm install @cds/core @cds/city --save
```

### 2. Global Styles

Clarity Core provides a global stylesheet that contains our foundational styles.
These global styles include our CSS Custom Properties, layout utilities, and typography utilities.

We also recommend using normalize.css to eliminate any browser differences.

To get started quickly you can install our global single bundle which includes
all our global style modules. To install the global styles you can import via CSS
Preprocessor like Sass/Less or reference the CSS directly in your HTML. The paths listed below may
be different depending on your build tooling

```scss
// Sass file syntax
@import '~modern-normalize.css/modern-normalize.css'; // css reset
@import '~@cds/core/global.min'; // clarity global styles
@import '~@cds/core/styles/module.shims.min'; // non-evergreen browser shims
@import '~@cds/city/css/bundles/default.min'; // load base font
```

```html
<!-- HTML file syntax -->
<link href="/node_modules/modern-normalize.css/modern-normalize.css" rel="stylesheet" />
<link href="/node_modules/@cds/core/global.min.css" rel="stylesheet" />
<link href="/node_modules/@cds/core/styles/module.shims.min.css" rel="stylesheet" />
<link href="/node_modules/@cds/city/css/bundles/default.min.css" rel="stylesheet" />
```

Add the following to your HTML to set the default Clarity body typography.

```html
<body cds-text="body">
  ...
</body>
```

### 3. Use Web Components with JavaScript

Currently Core requires a JavaScript bundler to import the required dependencies.
Core is compatible with tools such as Webpack, RollupJS, Parcel as well
as most Framework CLIs. Additional documentation and examples will be added
soon for no build step prototyping.

To use a component, import the component into your JavaScript or TypeScript.

```typescript
import '@cds/core/button/register.js';
```

Once imported, the component is automatically registered and ready to use in your HTML and JavaScript.

<cds-button status="success" action="outline">Hello World</cds-button>

```html
<cds-button status="success">Hello World</cds-button>
<script>
  const button = document.querySelector('cds-button');
  button.action = 'outline';
</script>
```

<a href="https://github.com/vmware/clarity/tree/next/apps" target="_blank" rel="noopener">
  <cds-button status="primary" size="md">Example Apps</cds-button>
</a>

## Frameworks

Core works in most JavaScript frameworks. For detailed install steps for your
framework, see our guides below. More framework guides and
demos will be added in the near future.

- [Angular](#angular)
- [Vue](#vue)
- [React](#react)
- [Preact](#preact)
- [AngularJS](#angularjs-1-8-0)

### Angular

We have created an Angular package that helps the Angular compiler understand the custom element bindings. Normally custom elements require you to use the [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) which allows non-Angular elements to be processed, but this has the side effect of not supporting strict checks in templates. Our `@cds/angular` package provides Angular component definitions so that you can use Clarity Core components like normal Angular components.

#### Installing Clarity Core using Angular CLI (recommended)

You can use the Angular CLI to set up Clarity Core in an Angular project.

```bash
ng add @cds/angular
```

#### Manually adding Clarity Core to an Angular project

Alternatively, you can set up Clarity Core manually.

First, follow the package [installation instructions](#installation).

Then, install `@cds/angular`.

```bash
npm install @cds/angular --save
```

Finally, add the `CdsModule` to your `AppModule`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdsModule } from '@cds/angular';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CdsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Using Clarity Core components

Once you have Clarity Core set up in your project, import the component(s) you plan to use.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdsModule } from '@cds/angular';
import { AppComponent } from './app.component';

import '@cds/core/alert/register.js';

@NgModule({
  imports: [BrowserModule, CdsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

To set properties on a Web Component use the Angular <code>[property]</code> binding syntax.
To listen to events use the Angular <code>(event)</code> binding syntax.

```html
<!--
- status - attribute style hook
- [closable] - setting the 'closable' property on the element
- (closeChange) - listen for the 'closeChange' custom event
-->

<cds-alert status="info" [closable]="true" (closeChange)="log($event.detail)">
  Hello World
</cds-alert>
```

<a href="https://github.com/vmware/clarity/tree/next/apps/core-angular-cli" target="_blank" rel="noopener">
  <cds-button status="primary" size="md">Example Angular App</cds-button>
</a>

### Vue

To use Clarity Core with Vue follow the package [installation instructions](#installation).

Once installed import the component into your JavaScript file.

```typescript
import '@cds/core/alert/register.js';
```

To set properties on a Web Component use the Vue <code>:property</code> binding syntax.
To listen to events use the Vue <code>@event</code> binding syntax.

```html
<!--
Example of a alert web component in Vue
- status - attribute style hook
- :closable - setting the 'closable' property on the element
- @closeChange - listen for the 'closeChange' custom event
-->

<cds-alert status="info" :closable="true" @closeChange="log"> Hello World </cds-alert>`
```

<a href="https://github.com/vmware/clarity/tree/next/apps/core-vue-cli" target="_blank" rel="noopener">
  <cds-button status="primary" size="md">Example Vue App</cds-button>
</a>

### React

To use Clarity Core with React follow the package [installation instructions](#installation).

In addition, because React [doesn't fully interoperate with custom elements](https://custom-elements-everywhere.com/)
we have developed a library of [React wrapper components](https://reactjs.org/docs/web-components.html#using-web-components-in-react) which must be installed in addition to the core package.

```bash
npm install @cds/react --save
```

Once installed import the component into your JavaScript or Typescript file. You'll repeat these steps for any additional components that you use.

```typescript
import { CdsAlert } from '@cds/react/alert';
```

Web Components are kebab cased tag name which in `@cds/react` will be converted to
Pascal case. For example, `<cds-alert>` element will be `<CdsAlert>` in React.
Our event props will follow the React naming convention of camel case for props
and start with `on`. The custom event `closeChange` will be `onCloseChange` in React.

```jsx
/*
Example of an alert component in React
- status - attribute/property style hook
- closable - setting the 'closable' property on the element
- onCloseChange - listen for the 'closeChange' custom event
*/

<CdsAlert status="info" closable={this.state.closable} onCloseChange={this.log}>
  Hello World
</CdsAlert>
```

#### Using refs

In React [refs](https://reactjs.org/docs/refs-and-the-dom.html) provide a way to access DOM nodes or React elements created in the render method. Because web components' lifecycle lives outside of react's lifecycle our components provide a way to use refs when the underlying web component has finished rendering:

```typescript
import React from 'react';
import { CdsButton } from '@cds/react/button';

export default class App extends React.Component<{}, {}> {
  buttonRef: React.RefObject<CdsButton>;

  constructor(props: any) {
    super(props);
    this.buttonRef = React.createRef<CdsButton>();
  }

  componentDidMount() {
    this.buttonRef.current.nativeElement.then(element => {
      element.focus();
    });
  }

  render() {
    return (
      <div>
        <CdsButton ref={this.buttonRef}>My button</CdsButton>
      </div>
    );
  }
}
```

<a href="https://github.com/vmware/clarity/tree/next/apps/core-create-react-app" target="_blank" rel="noopener">
  <cds-button status="primary" size="md">Example React App</cds-button>
</a>

### Preact

To use Clarity Core with Preact follow the package [installation instructions](#installation).

Once installed import the component into your JavaScript file.

```typescript
import '@cds/core/alert/register.js';
```

To listen to custom events in Preact the event must be prefixed with `on`.

```jsx
/*
Example of an alert web component in Preact
- status - attribute style hook
- closable - setting the 'closable' property on the element
- onCloseChange - listen for the 'closeChange' custom event
*/

<cds-alert status="info" closable={this.state.closable} onCloseChange={this.log}>
  Hello World
</cds-alert>
```

### AngularJS (> 1.8.0)

<cds-alert-group status="warning" cds-layout="m-b:lg">
  <cds-alert>To use Clarity Core with Angular JS you must be on AngularJS version 1.7.3 or later.</cds-alert>
</cds-alert-group>

To use Clarity Core with AngularJS follow the package [installation instructions](#installation).

Once installed import the register path in your JavaScript.

```javascript
import angular from 'angular';
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';

angular.module('app', []);
angular.element(document).ready(() => angular.bootstrap(document, ['app']));

angular.module('app').component('appRoot', {
  template: `
    <cds-button status="primary" ng-click="$ctrl.showAlert = true">show alert</cds-button>

    <cds-alert ng-if="$ctrl.showAlert" ng-prop-status="$ctrl.status" ng-on-close_change="$ctrl.showAlert = false" closable>
      This is an alert message.
    </cds-alert>
  `,
  controller: function () {
    this.status = 'danger';
    this.showAlert = false;
  },
});
```

To set properties on a Web Component use the [`ng-prop` directive](https://docs.angularjs.org/api/ng/directive/ngProp).
To listen to custom events use the [`ng-on` directive](https://docs.angularjs.org/api/ng/directive/ngOn).

```html
<!--
- status - attribute style hook
- ng-prop-closable - setting the 'closable' property on the element
- ng-on-close_change - listen for the 'closeChange' custom event
-->

<cds-alert status="info" ng-prop-closable="$ctrl.closable" ng-on-close_change="$ctrl.log($event.detail)">
  Hello World
</cds-alert>
```

<a href="https://github.com/vmware/clarity/tree/next/apps/core-angular-js" target="_blank" rel="noopener">
  <cds-button status="primary" size="md">Example AngularJS App</cds-button>
</a>

## Advanced Installation (Optional)

### Base Font Size

By default, Clarity has a default base font size of `20px/125%`. This means that
if you use CSS relative values such as `rem`, then `1rem` is equal to `20px`. If
you have an existing application that uses the default browser font size
(`16px` = `1rem`) then add the following to your root HTML tag.

```html
<html cds-base-font="16">
  ...
</html>
```

This setting will configure Clarity to adjust its CSS custom properties to be
relative to the browser default of 16px without noticeable differences. This
setting will also allow applications to more easily adopt Clarity without
requiring to change the global base font size.

### Global CSS Performance

If you would like to reduce your bundle sizes, you can choose a subset of the
global styles by importing the module individually. However, we recommend at a
minimum, including normalize and the reset module, to ensure consistent styling
across browsers.

```scss
@import '~modern-normalize.css/modern-normalize.css';
@import '@cds/core/styles/module.reset.min.css';
@import '@cds/core/styles/module.tokens.min.css';
@import '@cds/core/styles/module.layout.min.css';
@import '@cds/core/styles/module.typography.min.css';
@import '@cds/core/styles/module.shims.min.css';
@import '@cds/city/css/bundles/default.min.css';
```
