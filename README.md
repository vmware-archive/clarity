![Clarity](logo.png)

# Clarity Design System

[![Build Status](https://travis-ci.org/vmware/clarity.svg?branch=master)](https://travis-ci.org/vmware/clarity)

Project Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and Angular 2 components. This repository includes everything you need to build, customize, test, and deploy Clarity.  For complete documentation, visit the [Clarity website](https://vmware.github.io/clarity/).

## Getting Started

Clarity is published as three npm packages:

* __clarity-icons.__ Contains the custom element icons.
* __clarity-ui.__ Contains the static styles for building HTML components.
* __clarity-angular.__ Contains the Angular 2 components. This package depends on clarity-ui for styles.

The easiest way to run a sample Angular 2 application with Clarity is to use the [Clarity Seed](https://github.com/vmware/clarity-seed). 

If you already have an Angular 2 application, you can follow the installation steps below to include and use Clarity in your application.

### Installing Clarity Icons

1. Install Clarity Icons package through npm:
    ```bash
    npm install clarity-icons --save
    ```

2. Install the polyfill for Custom Elements: 
    ```bash
    npm install @webcomponents/custom-elements@1.0.0-alpha.3 --save
    ```

3. (Optional) If your application supports IE10, the polyfill will require the MutationObserver shim to work. If your 
application doesn't support IE10, you can skip the following installation:
    ```bash
    npm install mutationobserver-shim@0.3.2 --save
    ```

4. Include the clarity-icons.min.css and clarity-icons.min.js in your HTML. As custom-elements.min.js is dependent on the Custom Elements polyfill, make sure to include it before clarity-icons.min.js. Also, if your app needs to support IE10, include the mutationobserver.min.js before the polyfill:
    ```html
    <link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">

    <script src="path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js"></script>
    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>
    ```

    If your site is built with [angular-cli](https://github.com/angular/angular-cli) you can achieve the above by adding the files to the styles array and 
    scripts array in `angular-cli.json`:
    ```js
    "styles": [
        ...
        "../node_modules/clarity-icons/clarity-icons.min.css",
        ...
    ],
    "scripts": [
        ...
        "../node_modules/mutationobserver-shim/dist/mutationobserver.min.js",
        "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
        "../node_modules/clarity-icons/clarity-icons.min.js"
        ...
    ]
    ```

### Installing Clarity UI

1. Install Clarity UI package through npm:
    ```bash
    npm install clarity-ui --save
    ```

2. Include the clarity-ui.min.css in your HTML file:
    ```html
    <link rel="stylesheet" href="path/to/node_modules/clarity-ui/clarity-ui.min.css">
    ```

    If your site is built with [angular-cli](https://github.com/angular/angular-cli), you can achieve the above by adding the file to the styles array in 
    `angular-cli.json`:
    ```js
    "styles": [
        ...
        "../node_modules/clarity-ui/clarity-ui.min.css"
        ...
    ]
    ```

3. Write your HTML with the Clarity CSS class names and markup.

### Installing Clarity Angular

1. Follow steps above to install Clarity Icons and Clarity UI.
2. Install the clarity-angular package through npm:
    ```bash
    npm install clarity-angular --save
    ```

3. Import the ClarityModule into your Angular 2 application's module.  Your application's main module might look like this:
    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { ClarityModule } from 'clarity-angular';
    import { AppComponent } from './app.component';

    @NgModule({
        imports: [
            BrowserModule,
            ClarityModule.forRoot(),
            ....
         ],
         declarations: [ AppComponent ],
         bootstrap: [ AppComponent ]
    })
    export class AppModule {    }
    ```
    
    If your application uses [systemjs](https://github.com/systemjs/systemjs), add the clarity-angular configurations
    as in the example below. If your application already has packages setting for `rxjs` but doesn't have the `main`
    file, add it in.
    ```
    System.config({
    	...
    	map: {
    	   ...
    	   'clarity-angular': 'node_modules/clarity-angular/clarity-angular.umd.js',
    	},
    	packages: {
            ...
            'rxjs' : { main: 'Rx.js', defaultExtension: 'js' },
    	}
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
If possible please provide a minimal demo illustrating the issue by forking one of the Clarity Plunker Templates 
- Clarity Version: [Latest](https://plnkr.co/8TwwdL)
- Clarity Version: [0.7.6](https://plnkr.co/iWrQNL)