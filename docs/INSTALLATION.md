# Installing the Clarity Design System

## Installing Clarity UI (CSS Only)

1.  Install Clarity UI package through npm:

    ```bash
    npm install @clr/ui --save
    ```

2.  Include the clr-ui.min.css in your HTML file:

    ```html
    <link rel="stylesheet" href="path/to/node_modules/@clr/ui/clr-ui.min.css" />
    ```

    If your site is built with [angular-cli](https://github.com/angular/angular-cli),
    you can achieve the above by adding the file to the styles array in `angular-cli.json`:

    ```js
    "styles": [
        ...
        "../node_modules/@clr/ui/clr-ui.min.css"
        ...
    ]
    ```

3.  Write your HTML with the Clarity CSS class names and markup.

## Installing Clarity Icons

1.  Install Clarity Icons package through npm:

    ```bash
    npm install @clr/icons --save
    ```

2.  Install the polyfill for Custom Elements:

    ```bash
    npm install @webcomponents/custom-elements --save
    ```

3.  Include the clr-icons.min.css and clr-icons.min.js in your HTML. As clr-icons.min.js is dependent on the Custom Elements polyfill, make sure to include it before clr-icons.min.js:

    ```html
    <link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css" />

    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clr-icons/clr-icons.min.js"></script>
    ```

    If your site is built with [angular-cli](https://github.com/angular/angular-cli) you can achieve the above by adding the files to the styles array and
    scripts array in `angular-cli.json`:

    ```js
    "styles": [
        ...
        "../node_modules/@clr/icons/clr-icons.min.css",
        ...
    ],
    "scripts": [
        ...
        "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
        "../node_modules/@clr/icons/clr-icons.min.js"
        ...
    ]
    ```

## Installing Clarity Angular

1.  The easiest way to run a sample Angular application with Clarity is to use
    the Angular CLI and run `ng add @clr/angular`. If you have an existing project
    or are not using the Angular CLI, follow the following steps.

2.  Follow the steps above to install Clarity Icons and Clarity UI.

3.  Install the clarity-angular package through npm:

    ```bash
    npm install @clr/angular --save
    ```

4.  Import the ClarityModule into your Angular application's module. Your
    application's main module might look like this:

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

    If your application uses [systemjs](https://github.com/systemjs/systemjs),
    add the configuration as in the example below.

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

## Installing Clarity Web Components

1.  First, install the Clarity Core package from npm.

    ```bash
    npm install @cds/core --save
    ```

2.  Import desired Web Component into your JavaScript or TypeScript

    ```typescript
    import '@cds/core/modal';
    ```

3.  Use Web Component in desired framework template

    #### Angular

    ```html
    <!--
        - size - a attribute style hook
        - [open] - setting a property on the element
        - (openChange) - listening for the `openChange` custom event
      -->
    <cds-modal size="lg" [open]="true" (openChange)="log($event.detail)">
      <p>slot content</p>
    </cds-modal>
    ```

    #### Vue

    ```html
    <!--
      Example of a modal web component in Vue
      - size - a attribute style hook
      - :open - setting a property on the element
      - @openChange - listening for the `openChange` custom event
    -->
    <cds-modal large :open="true" @openChange="log($event.detail)">
      <p>slot content</p>
    </cds-modal>
    ```

    #### React (Support Coming Soon)

    ```jsx
    {
      /*
      Example of a modal web component in React with React Shim
      - size - a attribute style hook
      - open - setting a property on the element
      - openChange - listening for the `openChange` custom event
    */
    }
    <CdsModal large open={this.state.open} openChange={this.log}>
      <p>slot content</p>
    </CdsModal>;
    ```
