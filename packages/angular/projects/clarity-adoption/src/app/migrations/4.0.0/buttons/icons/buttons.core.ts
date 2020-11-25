import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import '@cds/core/icon/register.js';
import { checkIcon, ClarityIcons, cogIcon, homeIcon, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, homeIcon, cogIcon, checkIcon);

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
