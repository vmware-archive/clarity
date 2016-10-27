### Installing Clarity Demos

1. Install Clarity UI package through npm:
    ```
    npm install clarity-ui
    ```

2. Install Font Awesome:
    ```
    npm install font-awesome
    ```

3. Install the clarity-angular package through npm:
    ```
    npm install clarity-angular
    ```

3. Install the clarity-demos package through npm:
    ```
    npm install clarity-demos
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
