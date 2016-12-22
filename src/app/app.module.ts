import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "clarity-angular";

import { UtilsModule } from "./utils/utils.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AnchorLinksHandler} from "./utils/anchor-links-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
    UtilsModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    AnchorLinksHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
