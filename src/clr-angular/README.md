### Installing Clarity Angular

1. Install Clarity Icons package through npm:
    ```
    npm install @clr/icons
    ```

2. Install Clarity UI package through npm:
    ```
    npm install @clr/ui
    ```

3. Install the clarity-angular package through npm:
    ```
    npm install @clr/angular
    ```

4. Import the ClarityModule into your Angular application's module.  Your application's main module might look like this:
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
