import '@cds/core/accordion/register.js';

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CdsModule } from '@cds/angular';

@Component({
  selector: 'accordion-demo',
  templateUrl: './accordion.core.html',
})
export class AccordionCoreDemo {
  expandedPanel = false;

  expandedChange() {
    this.expandedPanel = !this.expandedPanel;
  }
}

@NgModule({
  declarations: [AccordionCoreDemo],
  imports: [CdsModule, CommonModule],
})
class AppModule {}
