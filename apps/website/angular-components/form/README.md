---
title: Overview
toc: true
---

Forms are a grouping of input controls that allow a user to submit information to your application.

## Usage

Forms are comprised of text and input components such as checkboxes, dropdowns, input fields, radio buttons, and toggle switches. The easier users can complete forms, the better your response rates will typically be. Forms should be clear, concise, and relevant to its context.

## Types

### Form Layouts

Clarity offers three types of forms: horizontal (our recommended default), vertical and compact.

### Horizontal

Default Horizontal formats are good for the quick scanning of labels, and can be used in cases of limited vertical space. The space between label and input however can slow users down.

<doc-demo>
!!!include(.vuepress/public/demos/form/horizontal.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/form/horizontal.html
</doc-code>

### Vertical

This option is better for scanning, mobile experiences, accessibility, and localization. While it offers better completion rates, it is less ideal for longer forms.

<doc-demo>
!!!include(.vuepress/public/demos/form/vertical.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/form/vertical.html
</doc-code>

### Compact

For cases with highly limited space, we provide a compact form layout.

<doc-demo>
!!!include(.vuepress/public/demos/form/compact.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/form/compact.html
</doc-code>

### Form Length

Forms should only be as long as absolutely necessary. We recommend reviewing each form input and asking whether you could obtain the information in another way, or at a later, more convenient time.

## Anatomy

### Columns

Forms should help users complete their goal as quickly as possible. Column structure can help make it easier for users to complete your form.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="put forms into one column" src="/images/angular-components/form/architecture-do.svg" align="center" />
Put forms in one column. Multiple columns disrupt users’ vertical rhythm and completion.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="put forms into multiple columns" src="/images/angular-components/form/architecture-dont.svg" align="center" />
Create multiple columns of input fields per page, except for small, related inputs like name "first" and "last".
</div>

</div>

### Input Grouping

Grouping will make scanning easier. A form with more than 6 inputs will likely have inputs that can be grouped together, like “address”: street, city, zip, county, country, etc.

For the grouping of labels and their input fields, we recommend grouping labels closely with their respective input fields.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Put labels in close proximity to their input controls" src="/images/angular-components/form/input-grouping-do.svg" align="center" />
Put labels in close proximity to their input controls.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Space labels out far from their input controls" src="/images/angular-components/form/input-grouping-dont.svg" align="center" />
Space labels out far from their input controls.
</div>

</div>

### Form Elements

**Radios, Checkboxes, and Select Box**
For inputs with 3 or more options, you may use radios, checkboxes or select boxes. We recommend placing your options vertically in one column to make it easier to scan.

Radios and checkboxes are used when it is helpful to compare options within the context of the form, as all selections will be visible at all times. Select boxes typically have more than 7 options that do not need to be compared with each other.

**Error Message Styling**
When showing error inputs, highlight the input field with red in some way, but also pair the red with another visual indicator, like an icon. This will help with accessibility.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Place icons outside the input field" src="/images/angular-components/form/error-do.svg" align="center" />
Place icons outside the input field. This will also help avoid browser and third-party app collision conflicts.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Don't Put icons inside the input field" src="/images/angular-components/form/error-dont.svg" align="center" />
Don't put icons inside the input field. If inside, account for changing form value space (increase characters).
</div>

</div>

## Behavior

### Validation and Error Messaging

You also want to let users know when something is wrong with the information provided.

### Error Message Behavior

For most cases, validate when the user leaves the field (onblur). Invalidating fields while users are still typing can be frustrating.

There are some cases where real-time validation can be helpful, such as inputs with sensitive field value lengths (like tweets), or when users return to an error field and successfully edit the error field, or for password fields with visible password strength criteria.

## Placement

### Error Message Location

We recommend displaying error messages within the same area where the error occurs.

## Content

### Error Message Content

Humanize the error messaging as much as possible. The content should provide clear guidance on how to fix the error. Avoid unrecognizable system error messages like "code 500 error". You may also consider using more than one error message when helpful. For example, if an email address input field has an error, consider either showing “please enter an email address” for a blank field, or “email address needs an ’@’ symbol followed by a domain” for an invalid symbol.

<!-- TODO: Move this content to accessibility tab when ready. -->

## Forms Accessibility

Clarity form controls are built with `clr-CONTROLNAME-container` elements. These elements are used to build in the accessibility needed to make Clarity forms accessible. While it is control dependent, the containers enable screen readers to be aware of errors both on the control itself and in the form as a whole. They enable the behaviors that describe controls with their respective labels that in an accessible way.

Without the `clr-CONTROL-container` parent the forms and form controls are not accessible. In the examples below and on the documentation page for each control you can find example markup for making the forms and form controls accessible.

Finally, for screen readers, if there are any controls with errors after the submit action an `aria-live` region will be updated with the associated labels for each control in the error state.

## Forms Using Angular

Clarity has created a set of directives to help manage forms with minimal effort by developers. The structure is more condensed and easier to implement, so it is the recommended approach to use the following if you are using Angular. More form controls are being added regularly.

### Basic form

Then declare a form start by adding the `clrForm` directive to the form element. This will wire up some internals to manage the form itself.

<doc-code>

```html
<form clrForm>
  ... form controls
</form>
```

</doc-code>

### Layout options

If you wish to have a different layout, then you can use the `clrLayout` directive to set the desired layout. The appropriate grid classes will be applied to enable automatic layout switching for mobile viewports.

<doc-code>

```html
<form clrForm clrLayout="horizontal">
  ... form controls
</form>
```

</doc-code>

### Basic structure

When you start to fill in your form controls, each will should be wrapped in a container like you see here in this text input example.

<doc-code>

```html
<form clrForm>
  <clr-input-container>
    <label>Field 1 label</label>
    <input clrInput type="text" [(ngModel)]="model" name="example" />
  </clr-input-container>
  <clr-input-container>
    <label>Field 2 label</label>
    <input clrInput type="text" [(ngModel)]="model" name="example" />
  </clr-input-container>
</form>
```

</doc-code>

### Helper and validation messages

These Angular components also support built in helper text and validation with error messages.

<doc-code>

```html
<form clrForm>
  <clr-input-container>
    <label>Field 1 label</label>
    <input clrInput type="text" [(ngModel)]="model" name="example" required />
    <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>
    <clr-control-error>Error message that appears after focus is lost and control is invalid</clr-control-error>
  </clr-input-container>
</form>
```

</doc-code>

All fields should be assumed to be required. Clarity does not support a required input treatment for labels (which often comes in the form of an \* by the label). The recommendation is to focus your forms to include only required fields, and if a field is optional then you can describe it as such in the label like (Optional).

Info

For screen reader accessibility, forms with validation messages should provide a descriptive message on how validation messages will be triggered. The `.clr-sr-only` class will hide content and only make it visible for screen readers.

<doc-code>

```html
<form clrForm>
  <span class="clr-sr-only">Tabbing through form inputs will trigger validation messages to be read aloud.</span>
  <clr-input-container>
    <label>First name</label>
    <input clrInput type="text" [(ngModel)]="firstName" name="firstName" required />
    <clr-control-error>We need your first name for legal compliance</clr-control-error>
  </clr-input-container>
  <clr-input-container>
    <label>Middle name (Optional)</label>
    <input clrInput type="text" [(ngModel)]="midleName" name="midleName" />
  </clr-input-container>
  <clr-input-container>
    <label>Last name</label>
    <input clrInput type="text" [(ngModel)]="lastName" name="lastName" required />
    <clr-control-error>We need your last name for legal compliance</clr-control-error>
  </clr-input-container>
</form>
```

</doc-code>

This pattern is more accessible and clear by writing the word "error" explicitly for users (and screen readers) to read, with research to back this up compared with the use of a red required asterisk (\*). See [this article from fusionbox](https://www.fusionbox.com/blog/detail/rethinking-the-red-required-asterisk-for-better-form-ux/599/) provides some evidence for this rationale.

### Multiple error messages

If you want to support multiple error messages, you can do this by defining an error message for each scenario using `clrIfError`. It is recommended that you create an error message for each validator you specify. Use the validator name provided in the binding for `*clrIfError="'errorName'"`, which might be your custom validator or a built in Angular one.

### Reset and force validation

All Clarity form controls support resetting the validation state simply by calling the `reset()` method on the `FormControl` or `FormGroup`.

<doc-code>

```javascript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  template: `
    <form clrForm [formGroup]="exampleForm">
      <clr-input-container>
        <label>Sample Text</label>
        <input clrInput formControlName="sample" />
        <button class="btn btn-primary" type="submit" (click)="submit()">Submit</button>
        <button class="btn" type="button" (click)="resetForm()">Reset</button>
      </clr-input-container>
    </form>
  `,
})
export class ReactiveFormsDemo {
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });

  resetForm() {
    this.exampleForm.reset();
  }

  submit() {
    // ...
  }
}
```

</doc-code>

Normally, validation errors only appear after the control has been focused on by the user. In cases where you want to force validation errors to show (such as when the user tried to submit a form), you simply need to mark every control as touched with Angular. You can use the form API to accomplish this, `ClrForm.markAsTouched()`, which will force all form controls inside of a form to be touched, which will display the validation errors.

<doc-code>

```javascript
import { ViewChild, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  template: `
    <form clrForm [formGroup]="exampleForm">
      <clr-input-container>
        <input clrInput formControlName="sample" />
        <button class="btn btn-primary" type="submit" (click)="submit()">Submit</button>
      </clr-input-container>
    </form>
  `,
})
export class ReactiveFormsDemo {
  @ViewChild(ClrForm, { static: true })
  clrForm;

  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });

  submit() {
    if (this.exampleForm.invalid) {
      this.clrForm.markAsTouched();
    } else {
      // Do submit logic
    }
  }
}
```

</doc-code>

### Layout with grid

You can use the `clrLabelSize` directive to configure the label width for an entire form. This is useful for `horizontal` and compact layouts, but doesn't apply when you are using `vertical` layout. It will accept a number between 1-12 to calculate the width according to our grid, and the controls will adopt the remaining size. For example if you pass `clrLabelSize="4"` it will size the controls to use 8 grid columns for a total of 12 columns.

<doc-code>

```html
<form clrForm clrLayout="horizontal" clrLabelSize="4">
  <clr-input-container>
    <label>First name</label>
    <input clrInput type="text" [(ngModel)]="firstName" name="firstName" required />
    <clr-control-error>We need your first name for legal compliance</clr-control-error>
  </clr-input-container>
</form>
```

</doc-code>

### Overriding column widths

For horizontal layouts, you can override the default widths for labels (2 columns) and controls (10 columns). Even on horizontal layouts, the default behavior should still use a vertical layout for narrow mobile sizes. That means you should always include the class `clr-col-12` on both the input and label. Ensure your override columns add up to 12 to use the full space.

<doc-code>

```html
<form clrForm>
  <clr-input-container>
    <label class="clr-col-12 clr-col-md-4">Field 1 label</label>
    <input class="clr-col-12 clr-col-md-8" clrInput type="text" [(ngModel)]="model" name="example" required />
    <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>
    <clr-control-error>Error message that appears after focus is lost and control is invalid</clr-control-error>
  </clr-input-container>
</form>
```

</doc-code>

### Reactive Forms

Forms also work with reactive forms with the same support for validations.

<doc-code>

```javascript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  //...
})
export class ReactiveFormsDemo {
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });
}
```

</doc-code>

<doc-code>

```html
<form clrForm [formGroup]="exampleForm">
  <clr-input-container>
    <label>Field 1 label</label>
    <input clrInput type="text" formControlName="sample" />
    <clr-control-helper>Helper text that shows while it is pristine and valid</clr-control-helper>
    <clr-control-error>Error message that appears after focus is lost and control is invalid</clr-control-error>
  </clr-input-container>
</form>
```

</doc-code>

### Custom and non-Clarity Controls

Applications often have form controls that are not supported by Clarity directly. To make these controls work nicely with Clarity, you can wrap them in a generic control container. Regardless if you make your own form controls or import a third party control, the generic container should help make your controls more consistent. The only requirement is that the form control works with Angular forms (Reactive or Template-Driven).

The basic process is to wrap the form control in the `clr-control-container` component, and then apply the `clrControl` directive to the form control itself.

It is likely that you'll have to write some CSS rules to make the custom controls fit and look correct within the generic control container. Use specific selectors to avoid changing the default form control behaviors in other parts of the application!

<doc-code>

```javascript
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({ templateUrl: './generic-container.html' })
export class FormsGenericContainerDemo {
  constructor(private fb: FormBuilder) {}

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  model = {
    basic: '',
    container: '',
    required: '',
    cars: [3],
  };

  reactiveModel = this.fb.group({
    basic: new FormControl(),
    container: new FormControl(),
    required: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/asdfasdf/)]),
    cars: new FormControl([3], [Validators.required]),
  });
}
```

</doc-code>

<doc-code>

```html
<!-- Template Driven Example -->
<form clrForm>
  <clr-control-container>
    <input clrControl placeholder="Basic text" name="basic" [(ngModel)]="model.container" />
  </clr-control-container>

  <clr-control-container>
    <label>Required</label>
    <input
      clrControl
      placeholder="Input control"
      name="required"
      [(ngModel)]="model.required"
      pattern="asdfasdf"
      required
      minlength="5"
    />
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error *clrIfError="'required'">This is a required field</clr-control-error>
    <clr-control-error *clrIfError="'minlength'">Must be at least 5 characters</clr-control-error>
    <clr-control-error *clrIfError="'pattern'">It must match 'asdfasdf'</clr-control-error>
  </clr-control-container>

  <clr-control-container>
    <label>Ng Select 2</label>
    <ng-select clrControl [multiple]="true" name="cars" [(ngModel)]="model.cars" required>
      <ng-option *ngFor="let car of cars" [value]="car.id">{{car.name}}</ng-option>
      <ng-option [value]="'custom'">Custom</ng-option>
    </ng-select>
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error *clrIfError="'required'">This is a required field</clr-control-error> </clr-control-container
  >f

  <button class="btn btn-primary" type="submit">Submit</button>
</form>

<!-- Reactive Example -->
<form clrForm [formGroup]="reactiveModel">
  <clr-control-container>
    <input clrControl placeholder="Basic text" formControlName="container" />
  </clr-control-container>

  <clr-control-container>
    <label>Required</label>
    <input clrControl placeholder="Input control" formControlName="required" />
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error *clrIfError="'required'">This is a required field</clr-control-error>
    <clr-control-error *clrIfError="'minlength'">Must be at least 5 characters</clr-control-error>
    <clr-control-error *clrIfError="'pattern'">It must match 'asdfasdf'</clr-control-error>
  </clr-control-container>

  <clr-control-container>
    <label>Ng Select 2</label>
    <ng-select clrControl [multiple]="true" formControlName="cars">
      <ng-option *ngFor="let car of cars" [value]="car.id">{{car.name}}</ng-option>
      <ng-option [value]="'custom'">Custom</ng-option>
    </ng-select>
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error *clrIfError="'required'">This is a required field</clr-control-error>
  </clr-control-container>

  <button class="btn btn-primary" type="submit">Submit</button>
</form>
```

</doc-code>
