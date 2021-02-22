import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule, ClrForm } from '@clr/angular';

@Component({
  selector: 'checkbox-status-demo',
  templateUrl: './checkbox.ng.html',
  styles: [
    `
      .clr-form-horizontal .clr-form-control {
        display: block;
      }
    `,
  ],
})
export class CheckboxStatusNgDemo {
  indeterminateState = null;
  disabled = null;
  disabledCheck = true;

  // All of the code below is used just to force some of the checkboxes to show their status. E.g. error checkbox
  @ViewChild(ClrForm) form: ClrForm;

  ngAfterViewInit() {
    this.form.markAsTouched();
  }
}

@NgModule({
  declarations: [CheckboxStatusNgDemo],
  imports: [ClarityModule, CommonModule, FormsModule],
})
class AppModule {}
