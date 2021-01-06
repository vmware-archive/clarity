import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/icon/register.js';

@Component({
  selector: 'icons-demo',
  templateUrl: './icons.core.html',
})
export class IconsDirectionCoreDemo {}

@NgModule({
  declarations: [IconsDirectionCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
