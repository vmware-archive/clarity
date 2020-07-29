## Installing Clarity Angular

The easiest way is to use the Angular CLI to automatically install Angular into your project

```
ng add @clr/angular
```

Then it should be setup automatically

## Manual Installation

If you are unable to use the automatic method above, follow these steps.

1.  Install Clarity packages through npm:

    ```
    npm install @clr/icons @clr/ui @clr/angular
    ```

2.  Import the ClarityModule into your Angular application's module. Your application's main module might look like this:

    ```
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
