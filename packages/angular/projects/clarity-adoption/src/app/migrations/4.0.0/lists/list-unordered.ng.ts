import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'list-unordered-demo',
  templateUrl: './list-unordered.ng.html',
})
export class ListUnorderedNgDemo {}

@NgModule({
  declarations: [ListUnorderedNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
