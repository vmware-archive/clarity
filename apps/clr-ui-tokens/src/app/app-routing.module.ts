import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionDemoComponent } from './accordion-demo/accordion-demo.component';
import { ComboboxDemoComponent } from './combobox-demo/combobox-demo.component';
import { DatagridDemoComponent } from './datagrid-demo/datagrid-demo.component';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';
import { OverviewComponent } from './overview/overview.component';
import { StepperDemoComponent } from './stepper-demo/stepper-demo.component';
import { WizardDemoComponent } from './wizard-demo/wizard-demo.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'accordion', component: AccordionDemoComponent },
  { path: 'combobox', component: ComboboxDemoComponent },
  { path: 'datagrid', component: DatagridDemoComponent },
  { path: 'modal', component: ModalDemoComponent },
  { path: 'stepper', component: StepperDemoComponent },
  { path: 'wizard', component: WizardDemoComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
