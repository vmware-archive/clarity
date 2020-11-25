import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'buttons-demo',
  templateUrl: './buttons.ng.html',
})
export class ButtonNgDemo {}

@NgModule({
  declarations: [ButtonNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
