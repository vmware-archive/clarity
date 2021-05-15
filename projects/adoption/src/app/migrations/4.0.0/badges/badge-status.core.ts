import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/badge/register.js';

@Component({
  selector: 'badge-demo',
  templateUrl: './badge-status.core.html',
})
export class BadgeStatusCoreDemo {}

@NgModule({
  declarations: [BadgeStatusCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
