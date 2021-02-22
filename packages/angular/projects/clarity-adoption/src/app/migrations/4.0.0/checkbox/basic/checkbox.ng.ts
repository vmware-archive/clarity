import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'checkbox-demo',
  templateUrl: './checkbox.ng.html',
})
export class CheckboxNgDemo {}

@NgModule({
  declarations: [CheckboxNgDemo],
  imports: [ClarityModule, CommonModule],
})
class AppModule {}
