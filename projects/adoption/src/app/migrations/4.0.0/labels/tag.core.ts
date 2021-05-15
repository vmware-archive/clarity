import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/tag/register.js';

@Component({
  selector: 'tag-demo',
  templateUrl: './tag.core.html',
})
export class TagCoreDemo {}

@NgModule({
  declarations: [TagCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
