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

## Installing Clarity Angular

1.  The easiest way to run a sample Angular application with Clarity is to use
    the Angular CLI and run `ng add @clr/angular`. If you have an existing project
    or are not using the Angular CLI, follow the following steps.

2.  Install the clarity-angular package through npm:

    ```bash
    npm install @clr/angular --save
    ```

3.  Import the ClarityModule into your Angular application's module. Your
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
      },
      ...
    });
    ```
