import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'icons-demo',
  templateUrl: './icons.ng.html',
})
export class IconsStatusNgDemo {}

@NgModule({
  declarations: [IconsStatusNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
