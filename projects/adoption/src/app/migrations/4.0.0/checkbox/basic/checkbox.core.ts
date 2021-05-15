import '@cds/core/checkbox/register.js';

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CdsModule } from '@cds/angular';

@Component({
  selector: 'checkbox-demo',
  templateUrl: './checkbox.core.html',
})
export class CheckboxCoreDemo {}

@NgModule({
  declarations: [CheckboxCoreDemo],
  imports: [CdsModule, CommonModule],
})
class AppModule {}
