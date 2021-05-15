import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/tag/register.js';

@Component({
  selector: 'tag-status-demo',
  templateUrl: './tag-status.core.html',
})
export class TagStatusCoreDemo {}

@NgModule({
  declarations: [TagStatusCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
