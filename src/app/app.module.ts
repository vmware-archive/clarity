import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Interface Components
import { SourceCodeComponent } from './components/sourcecode.component';
import { Demo } from './components/demo.component';
import { NotReadyComponent } from './components/not-ready.component';
import { EslintIntroBlockComponent } from './components/eslint-intro-block/eslint-intro-block.component';

// Adoption Pages
import { GettingStartedPage } from './pages/getting-started.page';
import { AlertPage } from './pages/alert.page';
import { BadgePage } from './pages/badge.page';
import { LabelPage } from './pages/label.page';
import { IconsPage } from './pages/icons.page';
import { AccordionPage } from './pages/accordion.page';
import { CheckboxPage } from './pages/checkbox.page';
import { AdoptionToolingPage } from './pages/adoption-tooling.page';
import { FormPage } from './pages/form.page';
import { ButtonPage } from './pages/button.page';
import { DatalistPage } from './pages/detalist.page';
import { InputPage } from './pages/input.page';
import { ListPage } from './pages/list.page';
import { ModalPage } from './pages/modal.page';
import { PasswordPage } from './pages/password.page';
import { RadioPage } from './pages/radio.page';
import { RangePage } from './pages/range.page';
import { SelectPage } from './pages/select.page';
import { TextareaPage } from './pages/textarea.page';
import { TogglePage } from './pages/toggle.page';
import { CardPage } from './pages/card.page';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    GettingStartedPage,
    AccordionPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DatalistPage,
    FormPage,
    IconsPage,
    InputPage,
    LabelPage,
    ListPage,
    ModalPage,
    PasswordPage,
    RadioPage,
    RangePage,
    SelectPage,
    TextareaPage,
    TogglePage,
    AdoptionToolingPage,

    /* Interface Components */
    EslintIntroBlockComponent,
    SourceCodeComponent,
    NotReadyComponent,
    Demo,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, CdsModule, AppRoutingModule, ClarityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
