import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'label-badges-demo',
  templateUrl: './label-badges.ng.html',
})
export class LabelBadgesNgDemo {}

@NgModule({
  declarations: [LabelBadgesNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
