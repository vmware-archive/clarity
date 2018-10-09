/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, Directive } from '@angular/core';
import {
  ValidatorFn,
  Validators,
  ValidationErrors,
  NG_VALIDATORS,
  FormGroup,
  FormArray,
  FormControl,
  Validator,
  AbstractControl,
} from '@angular/forms';

// @TODO Work out the support for validating checkbox groups
@Directive({
  selector: '[ngModelGroup][minSelected]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinimumSelectionValidatorDirective, multi: true }],
})
export class MinimumSelectionValidatorDirective implements Validator {
  @Input() minimumSelection: number = 1;

  validate(ctrl: AbstractControl) {
    return function minSelection(): ValidatorFn {
      return (control: FormControl): ValidationErrors | null => {
        if (!control) {
          return null;
        }

        const totalSelected = Object.keys(control.parent.controls)
          .map(key => control.parent.controls[key].value)
          .reduce((prev, next) => (next ? prev + next : prev), 0);

        // if the total is not greater than the minimum, return the error message
        return totalSelected < this.minimumSelection ? { minSelection: true } : null;
      };
    };
  }
}

function minimumSelection(minimum = 1): ValidatorFn {
  return (controls: FormArray) => {
    if (!controls || !controls.controls) {
      return null;
    }

    const totalSelected = controls.controls
      .map(control => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected < minimum ? { minSelection: true } : null;
  };
}

@Component({
  templateUrl: './checkboxes.demo.html',
})
export class CheckboxesDemo {
  disabled = true;
  vertical = {
    one: {
      one: '',
      two: '',
      three: '',
    },
    two: {
      one: '',
      two: '',
      three: '',
    },
    three: {
      one: '',
      two: '',
      three: '',
    },
  };
  horizontal = {
    one: {
      one: '',
      two: '',
      three: '',
    },
    two: {
      one: '',
      two: '',
      three: '',
    },
    three: {
      one: '',
      two: '',
      three: '',
    },
  };
  compact = {
    one: {
      one: '',
      two: '',
      three: '',
    },
    two: {
      one: '',
      two: '',
      three: '',
    },
    three: {
      one: '',
      two: '',
      three: '',
    },
  };

  vms = ['127.0.0.1', '192.168.0.1', '8.8.8.8'];
  reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    vmsSelection: new FormArray((() => this.vms.map(() => new FormControl(false)))(), [minimumSelection(1)]),
  });
  templateForm = {
    name: '',
    vmsSelection: this.vms.map(vm => {
      return { ip: vm, selected: false };
    }),
  };
}
