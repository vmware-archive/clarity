import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'badge-color-demo',
  templateUrl: './badge-color.ng.html',
})
export class BadgeColorNgDemo {}

@NgModule({
  declarations: [BadgeColorNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
