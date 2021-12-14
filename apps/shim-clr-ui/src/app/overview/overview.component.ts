import { Component, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrForm, ClrTimelineStepState } from '@clr/angular';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  @ViewChildren(ClrForm) forms: ClrForm[] | undefined;

  items = ['one', 'two'];

  model = new FormGroup({
    input: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
    'input-help': new FormControl('', []),
    date: new FormControl('', [Validators.required]),
    'date-helper': new FormControl('', []),
    textarea: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
    options: new FormControl('', [Validators.required]),
    checkbox: new FormControl('', [Validators.required]),
    select: new FormControl('', [Validators.required]),
    range: new FormControl('', [Validators.required]),
    datalist: new FormControl('', [Validators.required]),
  });

  validate() {
    this.forms?.forEach(f => {
      f.markAsTouched();
    });
  }

  timelineState = ClrTimelineStepState;
}
