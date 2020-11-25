import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'list-unordered-demo',
  templateUrl: './list-unordered.core.html',
})
export class ListUnorderedCoreDemo {}

@NgModule({
  declarations: [ListUnorderedCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
