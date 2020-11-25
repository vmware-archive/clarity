import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'label-status-demo',
  templateUrl: './label-status.ng.html',
})
export class LabelStatusNgDemo {}

@NgModule({
  declarations: [LabelStatusNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
