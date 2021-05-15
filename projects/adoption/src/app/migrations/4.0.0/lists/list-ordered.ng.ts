import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'list-ordered-demo',
  templateUrl: './list-ordered.ng.html',
})
export class ListOrderedNgDemo {}

@NgModule({
  declarations: [ListOrderedNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
