import { Component } from '@angular/core';

@Component({
  selector: 'clr-angular-stepper-template-demo',
  templateUrl: './angular-stepper-template.demo.html',
})
export class AngularStepperTemplateDemo {
  templateForm = {
    name: {
      firstName: '',
      lastName: '',
    },
    contact: {
      email: '',
      phone: '',
    },
    password: {
      password: '',
      confirm: '',
    },
  };

  templateFormSubmit(templateFormValues: {}) {
    console.log('template form submit', templateFormValues);
  }
}
