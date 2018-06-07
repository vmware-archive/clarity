import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule, Title} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ClarityModule} from "@clr/angular";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

import {DocumentationModule} from "./documentation/documentation.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: "clarity" }),
        BrowserAnimationsModule,
        ClarityModule,
        DocumentationModule,
        AppRoutingModule
    ],
    providers: [
        Title,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
