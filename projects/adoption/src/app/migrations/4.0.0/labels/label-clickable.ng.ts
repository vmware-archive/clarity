import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'label-clickable-demo',
  templateUrl: './label-clickable.ng.html',
})
export class LabelClickableNgDemo {}

@NgModule({
  declarations: [LabelClickableNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
