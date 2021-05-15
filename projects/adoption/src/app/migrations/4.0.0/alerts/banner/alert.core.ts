import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/alert/register.js';

@Component({
  selector: 'alert-demo',
  templateUrl: './alert.core.html',
})
export class AlertCoreDemo {}

@NgModule({
  declarations: [AlertCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
