import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'label-demo',
  templateUrl: './label.ng.html',
})
export class LabelNgDemo {}

@NgModule({
  declarations: [LabelNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
