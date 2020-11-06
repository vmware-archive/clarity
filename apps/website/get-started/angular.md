# Angular Quickstart

Clarity works best with Angular, and we are constantly updating Clarity to work best with the latest version of Angular. If you are not using Angular, then you'll want to review the [HTML/CSS Quickstart](/get-started/html).

Before you begin, make sure that you have all of the prerequisites setup for your computer. You can review the [local environment setup on Angular's documentation](https://angular.io/guide/setup-local).

Clarity has an automated installation process that will work for most projects, but we've also included the manual steps if you need them.

## Installing Clarity using Angular CLI (Recommended)

For any Angular application, which uses the Angular CLI version 6 or greater, we recommend using the `ng add` feature to install Clarity automatically. This works regardless if you have a brand new application, or one that you've been working on for some time. We highly recommend that all Angular projects use the Angular CLI, because we'll also work on supporting migration features which will make it easier to keep Clarity and Angular up to date.

The following example shows how to 1) create a new Angular application, 2) change into the new directory, and 3) add Clarity automatically.

<doc-code>

```bash
ng new my-awesome-app
cd my-awesome-app
ng add @clr/angular
```

</doc-code>

If you are using the Angular CLI with multiple projects, you can specify which project to add Clarity to by using the `--project PROJECTNAME` flag.

## Manually adding Clarity to an Angular project

If you are unable to install Clarity using the Angular CLI as described above, then you can follow the steps below to get started. This might be applicable if you already have an Angular application that doesn't use the Angular CLI for building. This is uncommon, and generally only applicable to advanced use cases with custom tooling.

If you can already build an Angular app, then you need to install Clarity onto your project following these steps.

### Step 1: Install packages

Clarity is published as three separate packages on NPM, as well as one dependency. You will need to install these into your project to have access to them at build time.

- **@clr/icons.** The library that provides the custom element icons.
- **@clr/ui.** Contains the static styles for building HTML components.
- **@cds/core.** Contains a shared core library of web components.
- **@clr/angular.** Contains the Angular components. This package depends on @clr/ui for styles.
- **@webcomponents/webcomponentsjs.** A polyfill for web components for older browsers, which Clarity depends upon.

Install them all by running the following command with `npm` or `yarn`.

<doc-code>

```bash
npm install @clr/icons @clr/angular @clr/ui @cds/core @webcomponents/webcomponentsjs

yarn add @clr/icons @clr/angular @clr/ui @cds/core @webcomponents/webcomponentsjs
```

</doc-code>

### Step 2: Adding scripts and styles

We need to make the build system aware of some CSS and JavaScript files so it can include them in the build. If you are using the Angular CLI, you need to add the files to the `angular.json` file. Find the `scripts` and `styles` arrays and add the following:

<doc-code>

```javascript
"styles": [
  "node_modules/@clr/icons/clr-icons.min.css",
  "node_modules/@clr/ui/clr-ui.min.css",
  "... any other styles"
],
"scripts": [
  "... any existing scripts",
  "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
  "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
  "node_modules/@clr/icons/clr-icons.min.js"
]
```

</doc-code>

If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also put them in the head of the index.html file like:

<doc-code>

```html
<link rel="stylesheet" href="path/to/node_modules/@clr/ui/clr-ui.min.css" />
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css" />
<script src="path/to/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
<script src="path/to/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>
```

</doc-code>

### Step 3: Add Clarity to Angular application

Import the `ClarityModule` into your Angular application's module. Some features also depend upon the `BrowserAnimationsModule`, so you should add it as well. A simple application's main module might look like this, but yours might be more complex.

<doc-code>

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

</doc-code>

### Step 4: Working with Angular Feature Modules (Optional)

Some Angular projects are setup using [Angular Feature Modules](https://angular.io/guide/feature-modules), which is a way of splitting the application into smaller units. If you do this, you'll want to ensure you add `ClarityModule` and `BrowserAnimationsModule` to each feature module imports array, or you might also be able to add it once to a [shared library module](https://angular.io/guide/sharing-ngmodules).

### Step 5: Add a Clarity component

If you'd like to see a Clarity component in action, you can add the following snippet to the very top of the `AppComponent` template to see if it loads an app level alert as expected.

<doc-code>

```html
<clr-alert [clrAlertAppLevel]="true">
  <clr-alert-item>
    <span class="alert-text">
      Congratulations, you have installed Clarity!
    </span>
  </clr-alert-item>
</clr-alert>
```

</doc-code>

That is all you need to get Clarity installed. To see it running, start your application build server using `npm start` or `yarn start` (commands may vary if you have a different build system) to see your Angular application. You might notice some small styling changes, but should not see any errors in the browser console.

## What's next?

1. Add Clarity components wherever they are needed in your application
1. Explore the component usage, demo and api sections to learn about specific coomponents
1. Get help by asking a question on [StackOverflow](https://stackoverflow.com/questions/tagged/vmware-clarity) and tagging it with `vmware-clarity`
1. Follow [Clarity on Twitter](https://twitter.com/vmwareclarity), stay up to date
