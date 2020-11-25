import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/tag/register.js';

@Component({
  selector: 'tag-clickable-demo',
  templateUrl: './tag-clickable.core.html',
})
export class TagClickableCoreDemo {}

@NgModule({
  declarations: [TagClickableCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
