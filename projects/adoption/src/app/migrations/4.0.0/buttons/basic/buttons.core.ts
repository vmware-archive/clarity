import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/button/register.js';

@Component({
  selector: 'buttons-demo',
  templateUrl: './buttons.core.html',
})
export class ButtonCoreDemo {}

@NgModule({
  declarations: [ButtonCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
