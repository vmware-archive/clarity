![Clarity](logo.png)

# Clarity Design System

The Clarity Design System brings user experience, implementation, tools, and guidelines together.  This repository includes everything you need to build, customize, test, and deploy Clarity.  For complete documentation, visit the [Clarity website](https://vmware.github.io/clarity/).

## Getting Started

Clarity is published as three npm packages:

* __clarity-icons.__ Contains the custom element icons.
* __clarity-ui.__ Contains the static styles for building HTML components.
* __clarity-angular.__ Contains the Angular 2 components. This package depends on clarity-ui for styles.

### Installing Clarity Icons

1. Install Clarity Icons package through npm:
    ```
    npm install clarity-icons
    ```

2. Install the polyfill for Custom Elements:
    ```
    npm install github:webcomponents/custom-elements.git#v1.0.0-alpha.3
    ```

3. If your application supports IE10, the polyfill will require the MutationObserver shim to work. If your application doesn't support IE10, you can skip the following installation:
    ```
    npm install mutationobserver-shim@0.3.2
    ```

4. Include the clarity-icons.min.css and clarity-icons.min.js in your HTML. As custom-elements.min.js is dependent on the Custom Elements polyfill, make sure to include it before clarity-icons.min.js. Also, if your app needs to support IE10, include the mutationobserver.min.js before the polyfill:
    ```
    <link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">

    <script src="path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js"></script>
    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>
    ```

### Installing Clarity UI

1. Install Clarity UI package through npm:
    ```
    npm install clarity-ui
    ```

2. Install Clarity Icons package through npm:
    ```
    npm install clarity-icons
    ```

3. Include the clarity-ui.min.css and clarity-icons.min.css in your HTML file:
    ```
    <link rel="stylesheet" href="path/to/node_modules/clarity-ui/clarity-ui.min.css">
    <link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">
    ```

4. Include the clarity-icons.min.js in your HTML file:
    ```
    <script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>
    ```

5. Write your HTML with the Clarity CSS class names and markup.

### Installing Clarity Angular

1. Install Clarity Icons package through npm:
    ```
    npm install clarity-icons
    ```

2. Install Clarity UI package through npm:
    ```
    npm install clarity-ui
    ```

3. Install the clarity-angular package through npm:
    ```
    npm install clarity-angular
    ```

4. Import the ClarityModule into your Angular 2 application's module.  Your application's main module might look like this:
    ```
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { ClarityModule } from 'clarity-angular';
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

## Documentation

For documentation on the Clarity Design System, including a list of components and example usage, see [our website](https://vmware.github.io/clarity).

## Contributing

The Clarity project team welcomes contributions from the community. For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Licenses

* The Clarity Design System is licensed under the MIT license.
* The font is licensed under the Open Font License (OFL).

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/vmware/clarity/issues).
