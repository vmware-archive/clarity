import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  angleIcon,
  cogIcon,
  ClarityIcons,
  sunIcon,
  worldIcon,
  atomIcon,
  plusIcon,
  pencilIcon,
  downloadIcon,
  timesIcon,
} from '@cds/core/icon';
import { CdsIconModule } from '@cds/angular/icon';
import { CdsAccordionModule } from '@cds/angular/accordion';
import { CdsAlertModule } from '@cds/angular/alert';
import { CdsButtonModule } from '@cds/angular/button';
import { CdsCheckboxModule } from '@cds/angular/checkbox';
import { CdsDatalistModule } from '@cds/angular/datalist';
import { CdsFormsModule } from '@cds/angular/forms';
import { CdsFileModule } from '@cds/angular/file';
import { CdsInputModule } from '@cds/angular/input';
import { CdsPasswordModule } from '@cds/angular/password';
import { CdsRadioModule } from '@cds/angular/radio';
import { CdsRangeModule } from '@cds/angular/range';
import { CdsSearchModule } from '@cds/angular/search';
import { CdsSelectModule } from '@cds/angular/select';
import { CdsTagModule } from '@cds/angular/tag';
import { CdsTextareaModule } from '@cds/angular/textarea';
import { CdsTimeModule } from '@cds/angular/time';
import { CdsToggleModule } from '@cds/angular/toggle';

import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatagridDemoComponent } from './datagrid-demo/datagrid-demo.component';
import { WizardDemoComponent } from './wizard-demo/wizard-demo.component';
import { AccordionDemoComponent } from './accordion-demo/accordion-demo.component';
import { StepperDemoComponent } from './stepper-demo/stepper-demo.component';
import { ComboboxDemoComponent } from './combobox-demo/combobox-demo.component';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,

    DatagridDemoComponent,
    WizardDemoComponent,
    AccordionDemoComponent,
    StepperDemoComponent,
    ComboboxDemoComponent,
    ModalDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CdsIconModule,
    CdsAccordionModule,
    CdsAlertModule,
    CdsButtonModule,
    CdsCheckboxModule,
    CdsDatalistModule,
    CdsFileModule,
    CdsFormsModule,
    CdsInputModule,
    CdsPasswordModule,
    CdsRadioModule,
    CdsRangeModule,
    CdsSearchModule,
    CdsSelectModule,
    CdsTagModule,
    CdsTextareaModule,
    CdsTimeModule,
    CdsToggleModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    ClarityIcons.addIcons(cogIcon);
    ClarityIcons.addIcons(angleIcon);
    ClarityIcons.addIcons(sunIcon);
    ClarityIcons.addIcons(atomIcon);
    ClarityIcons.addIcons(worldIcon);

    ClarityIcons.addIcons(plusIcon);
    ClarityIcons.addIcons(pencilIcon);
    ClarityIcons.addIcons(downloadIcon);
    ClarityIcons.addIcons(timesIcon);
  }
}
