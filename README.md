![Clarity](logo.png)

# Clarity Design System

[![Build Status](https://travis-ci.org/vmware/clarity.svg?branch=master)](https://travis-ci.org/vmware/clarity)

[![Build Status](https://saucelabs.com/browser-matrix/claritydesignsystem.svg)](https://saucelabs.com/beta/builds/b16110e384ce459ab68f10da6e38a285)

Project Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and Angular components. This repository includes everything you need to build, customize, test, and deploy Clarity. For complete documentation, visit the [Clarity website](https://vmware.github.io/clarity/).

## Getting Started

Clarity is published as three npm packages:

* **@clr/icons.** Contains the custom element icons.
* **@clr/ui.** Contains the static styles for building HTML components.
* **@clr/angular.** Contains the Angular components. This package depends on @clr/ui for styles.

The easiest way to run a sample Angular application with Clarity is to use the [Clarity Schematic](https://vmware.github.io/clarity/documentation/v0.13/get-started#angularCLI).

If you already have an Angular application, you can follow the installation steps below to include and use Clarity in your application.

### Installing Clarity Icons

1.  Install Clarity Icons package through npm:

    ```bash
    npm install @clr/icons --save
    ```

2.  Install the polyfill for Custom Elements:

    ```bash
    npm install @webcomponents/custom-elements --save
    ```

3.  Include the clr-icons.min.css and clr-icons.min.js in your HTML. As clr-icons.min.js is dependent on the Custom Elements polyfill, make sure to include it before clr-icons.min.js. Finally, include the shape sets you wish to include. (There is a short cut to include the `clr-icons-all.min.js` file which will load everything.)

    ```html
    <link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clr-icons/clr-icons.min.js"></script>
    <script src="path/to/node_modules/clr-icons/shapes/core.min.js"></script>
    ```

    If your site is built with [angular-cli](https://angular.io/cli) you can achieve the above by adding the files to the styles array and scripts array in `angular.json`. However, Clarity automatically sets up the minimum number of icons by default so you don't need to actually include the scripts unless you wish to have more icons, like adding the travel icons here.

    ```js
    "styles": [
        ...
        "../node_modules/@clr/icons/clr-icons.min.css",
        ...
    ],
    "scripts": [
        ...
        "node_modules/@webcomponents/custom-elements/custom-elements.min.js",
        "node_modules/@clr/icons/shapes/travel.min.js"
        ...
    ]
    ```

    Also for Angular you can use the ClarityIcons API to add just the icons you need (preferred approach for focusing on what you need). To do this, in your `main.ts` file you do the following.

    ```typescript
    import { ClarityIcons, ClrEssentialSet, ClrShapeEllipsisHorizontal } from '@clr/icons';

    // Adding single shape and a whole set
    ClarityIcons.add(ClrShapeEllipsisHorizontal, ClrEssentialSet);
    ```

### Installing Clarity UI

1.  Install Clarity UI package through npm:

    ```bash
    npm install @clr/ui --save
    ```

2.  Include the clr-ui.min.css in your HTML file:

    ```html
    <link rel="stylesheet" href="path/to/node_modules/@clr/ui/clr-ui.min.css">
    ```

    If your site is built with [angular-cli](https://github.com/angular/angular-cli), you can achieve the above by adding the file to the styles array in
    `angular.json`:

    ```js
    "styles": [
        ...
        "node_modules/@clr/ui/clr-ui.min.css"
        ...
    ],
    ```

3.  Write your HTML with the Clarity CSS class names and markup.

### Installing Clarity Angular

1.  Follow steps above to install Clarity Icons and Clarity UI.
2.  Install the clarity-angular package through npm:

    ```bash
    npm install @clr/angular --save
    ```

3.  Import the ClarityModule into your Angular application's module. Your application's main module might look like this:

    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { ClarityModule } from '@clr/angular';
    import { AppComponent } from './app.component';

    @NgModule({
        imports: [
            BrowserModule,
            ClarityModule,
            ....
         ],
         declarations: [ AppComponent ],
         bootstrap: [ AppComponent ]
    })
    export class AppModule {    }
    ```

    If your application uses [systemjs](https://github.com/systemjs/systemjs), add the configuration
    as in the example below.

    ```
    System.config({
    	...
    	map: {
    	   ...
    	   '@clr/angular': 'node_modules/@clr/angular/bundles/clr-angular.umd.js',
    	   '@clr/icons': 'node_modules/@clr/icons/bundles/clr-icons.umd.js',
    	},
    	...
    });
    ```

## Documentation

For documentation on the Clarity Design System, including a list of components and example usage, see [our website](https://vmware.github.io/clarity).

## Contributing

The Clarity project team welcomes contributions from the community. For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Licenses

* The Clarity Design System is licensed under the MIT license.
* The font is licensed under the Open Font License (OFL).

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/vmware/clarity/issues).

* Include a link to the reproduction scenario you created by forking one of the Clarity [StackBlitz Templates](https://stackblitz.com/@clr-team).
