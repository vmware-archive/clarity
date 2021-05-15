import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'list-unstyled-demo',
  templateUrl: './list-unstyled.ng.html',
})
export class ListUnstyledNgDemo {}

@NgModule({
  declarations: [ListUnstyledNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
