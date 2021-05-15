import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'accordion-demo',
  templateUrl: './accordion.ng.html',
})
export class AccordionNgDemo {}

@NgModule({
  declarations: [AccordionNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
