import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'alert-demo',
  templateUrl: './alert.ng.html',
})
export class AlertNgDemo {}

@NgModule({
  declarations: [AlertNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
