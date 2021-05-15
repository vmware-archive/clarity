import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'badge-status-demo',
  templateUrl: './badge-status.ng.html',
})
export class BadgeStatusNgDemo {}

@NgModule({
  declarations: [BadgeStatusNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
