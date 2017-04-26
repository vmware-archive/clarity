import { Component } from '@angular/core';

const NG_MODULE_EXAMPLE = `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { ClarityModule } from 'clarity-angular';
    import { AppComponent } from './app.component';
    
    @NgModule({
        imports: [
            BrowserModule,
            ClarityModule.forRoot(),
            ...
         ],
         declarations: [ AppComponent ],
         bootstrap: [ AppComponent ]
    })
    export class AppModule {    }
`;

@Component({
  selector: 'get-started',
  templateUrl: "./get-started.component.html",
  host: {
    "id": "main-container",
    "[class.content-container]": "true"
  }
})
export class GetStartedComponent {

  constructor() { }

  public ngModuleExample = NG_MODULE_EXAMPLE;
}
