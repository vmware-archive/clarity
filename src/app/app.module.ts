import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ROUTING } from "./app.routing";

import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing.component";
import {ClarityModule} from "../clarity/clarity.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ROUTING,
        ClarityModule
    ],
    declarations: [
        AppComponent,
        LandingComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
