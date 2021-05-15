import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'list-ordered-demo',
  templateUrl: './list-ordered.core.html',
})
export class ListOrderedCoreDemo {}

@NgModule({
  declarations: [ListOrderedCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
