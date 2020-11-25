import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/tag/register.js';

@Component({
  selector: 'tag-color-demo',
  templateUrl: './tag-color.core.html',
})
export class TagColorCoreDemo {}

@NgModule({
  declarations: [TagColorCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
