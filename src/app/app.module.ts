import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';

import { CdcModule } from './components/cross-components/cross-component.module';

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
import { DatalistPage } from './pages/datalist.page';
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
import { WizardPage } from './pages/wizard.page';
import { TooltipPage } from './pages/tooltip.page';
import { StackViewPage } from './pages/stackview.page';
import { StepperPage } from './pages/stepper.page';
import { TimelinePage } from './pages/timeline.page';
import { TreeviewPage } from './pages/treeview.page';
import { TabPage } from './pages/tab.page';
import { SignpostPage } from './pages/signpost.page';
import { SpinnerPage } from './pages/spinner.page';
import { TablePage } from './pages/table.page';
import { HeaderPage } from './pages/header.page';
import { ProgressbarPage } from './pages/progressbar.page';
import { ComboboxPage } from './pages/combobox.page';
import { DropdownPage } from './pages/dropdown.page';
import { LandingPage } from './pages/landing.page';
import { IntroPage } from './pages/intro.page';
import { ApproachesPage } from './pages/approaches.page';
import { MenuTitlePipe } from './pipes/menu-title.pipe';
import { OverviewPage } from './pages/overview.page';
import { DifferencesPage } from './pages/differences.page';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    GettingStartedPage,
    AccordionPage,
    AlertPage,
    ApproachesPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DifferencesPage,
    DatalistPage,
    FormPage,
    IconsPage,
    InputPage,
    IntroPage,
    LabelPage,
    LandingPage,
    ListPage,
    ModalPage,
    OverviewPage,
    PasswordPage,
    RadioPage,
    RangePage,
    SelectPage,
    TextareaPage,
    TogglePage,
    WizardPage,
    TimelinePage,
    TabPage,
    SignpostPage,
    SpinnerPage,
    StepperPage,
    StackViewPage,
    TreeviewPage,
    TablePage,
    HeaderPage,
    DropdownPage,
    ComboboxPage,
    ProgressbarPage,
    TooltipPage,
    AdoptionToolingPage,

    /* Interface Components */
    EslintIntroBlockComponent,
    SourceCodeComponent,
    NotReadyComponent,
    Demo,

    MenuTitlePipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, CdsModule, AppRoutingModule, ClarityModule, CdcModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
