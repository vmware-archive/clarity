import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'label-color-demo',
  templateUrl: './label-color.ng.html',
})
export class LabelColorNgDemo {}

@NgModule({
  declarations: [LabelColorNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
