import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/tag/register.js';

@Component({
  selector: 'tag-badges-demo',
  templateUrl: './tag-badges.core.html',
})
export class TagBadgesCoreDemo {}

@NgModule({
  declarations: [TagBadgesCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
