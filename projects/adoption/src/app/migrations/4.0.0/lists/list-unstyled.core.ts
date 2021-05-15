import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'list-unstyled-demo',
  templateUrl: './list-unstyled.core.html',
})
export class ListUnstyledCoreDemo {}

@NgModule({
  declarations: [ListUnstyledCoreDemo],
  imports: [ClarityModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}
