---
title: Overview
toc: true
---

Date Picker is a popover control for picking a date value for a date input. It's also sometimes referred to as Datepicker.

## Usage

<div class="clr-row">
<div class="clr-col">
<p>Use a Date Picker to select a date when a user needs to understand the date in context with other possible dates. Date choices are influenced by day of the week, or week within a month. It is paired with a text input so that it can send a formatted date value to the input. A Date Picker is also helpful when the formatting of the date is important.</p>
<p>Date Pickers aren’t helpful when the date is a known value like a birthday. A user will likely want to type that value in versus hunting for it in a Date Picker. In cases where space is limited, it may be a good idea to omit the Date Picker.</p>
</div>
<div class="clr-col doc-wrapper">
<ClrImage src="/images/angular-components/datepicker/basic-demo.png" />
</div>
</div>

## Types

### Month Picker

<div class="clr-row">
<div class="clr-col">
<p>12 month values can be selected from. Arrow keys can be used to navigate through the values. Selecting a month value will return the user back to the date view.
</p>
</div>
<div class="clr-col">
<DocInset class="custom-block">
<ClrImage src="/images/angular-components/datepicker/monthpicker.png" />
</DocInset>
</div>
</div>

### Year Picker

<div class="clr-row">
<div class="clr-col">
<p>10 year values are displayed at one time. Arrow keys can be used to navigate through the values, future years, and past years. Selecting a year value will return the user back to the date view.</p>
</div>
<div class="clr-col">
<DocInset class="custom-block">
<ClrImage src="/images/angular-components/datepicker/yearpicker.png" />
</DocInset>
</div>
</div>

### Small Screens

We automatically disable the Clarity Date Picker on small mobile phones. This is done because unlike desktop browsers, most mobile browsers have a built-in date picker. These built-in date pickers are optimized to work on mobile devices and provide an experience which the user is already familiar with.

<cds-alert-group status="warning" type="default">
<cds-alert>Clarity Date Picker is shown at screen width 768px and above.</cds-alert>
</cds-alert-group>

## Behavior

Date Picker is shown by clicking, or moving focus to the input and pressing enter, on the calendar icon next to the input field.

Today’s date is displayed in bold. Unless preloaded with another date, today’s date will be selected in the Date Picker.

Clicking on the check-calendar icon inside the Date Picker returns the focus to today’s date.

Focus is indicated by a grey background. Focus can be moved around inside the Date Picker using arrow and tab keys. Clicking the enter key will select a value.

The Month and Year views are shown when a user clicks on the month or year titles in the date view.

### Important Notes about User Input

{.custom-block}

- Every time the user changes the value in the input field, the value is validated against the placeholder to check if a valid date is entered or not. If a valid date is entered, the date picker opens with the entered date selected. If an invalid date is entered, the date picker opens with the focus on today's date.
- Selecting a date from the date picker overrides the value in the input field.
- Date picker ideally requires a 4 digit year but can convert a 2 digit year input by the user to a 4 digit year. For eg: a 2 digit year 20 will convert to 2020. If the 4 digit conversion is 20 more than the current year, we subtract 100 from it. If the current year is 2018 and the year input is 99, then the converted year is 1999. Anything other than a 4 digit or 2 digit year is considered invalid.

## Accessibility

For applications that use the ClrDateInput directive and the associated ClrDateContainer component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

{.custom-block}

1. Programmatically associating the correct label for attribute with the id of the input
1. Automatic wiring up of the aria-describedby behavior with associated clr-control-error elements
1. An aria-live region that can notify screen readers about changes in the control error state
1. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit

## Code & Examples

### Basic Datepicker

To use the date picker, add the [clrDate](/angular-components/datepicker#clrdate) directive to an input field. Then, place the input inside the clr-date-container container element.

![Basic Datepicker](/images/angular-components/datepicker/basic-demo.png)

<doc-code>
<<< .vuepress/public/demos/datepicker/basic-ng.html
</doc-code>

### Min/Max Dates

The earliest and latest acceptable dates can also be set. Just like the native HTML5 date spec a yyyy-mm-dd string can be used in the value for min or max. If the max value isn't a possible date then that the input has no max value. Similar for min values, if the string used is not a possible date then the input will not have a min value.

Only dates inside the min/max range will be selectable for the input when there is a bound placed for the min or max attribute.

The `min` and the `max` attributes can be used alone or together to have both an upper and a lower bound on accepted dates.

![Basic Datepicker](/images/angular-components/datepicker/min-max-demo.png)

<doc-code>
<<< .vuepress/public/demos/datepicker/min-max-ng.html
</doc-code>

### Internationalization

Clarity uses the [locale identifiers](https://github.com/angular/angular/tree/master/packages/common/locales) supported by Angular for getting the date format, first day of the week, month and day names. These values are used to generate the input field placeholder and the calendar.

### Placeholder

Using the date format retrieved from Angular, the placeholder is generated in one of the following formats:
{.custom-block}

1. big-endian (YYYY/MM/DD)
1. little-endian (DD/MM/YYYY)
1. middle-endian (MM/DD/YYYY)

<cds-alert-group status="warning" type="default">
<cds-alert>We recommend against overriding the automatically generated placeholder. Adding an incorrect placeholder will create confusion while entering the date in the input.</cds-alert>
</cds-alert-group>

The following demo shows two date pickers. The first date picker uses the `en-US` locale identifier whereas the second one uses `fr`. Both the date pickers have different first day of the week and the calendar is generated based on the first day of the week.

<div class="clr-row">
<div class="clr-col">
<h5>Locale Identifier: en-US</h5>
<ClrImage src="/images/angular-components/datepicker/us-locale-demo.png" />
<table class="table">
    <thead>
        <tr><th class="left">Key</th><th class="left">Value</th></tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">Language</td>
            <td class="left">English</td>
        </tr>
        <tr>
            <td class="left">Territory</td>
            <td class="left">US</td>
        </tr>
        <tr>
            <td class="left">First Day of the Week (Retrieved from Angular)</td>
            <td class="left">Sunday (US)</td>
        </tr>
        <tr>
            <td class="left">Date Format (Retrieved from Angular)</td>
            <td class="left">M/d/yy</td>
        </tr>
        <tr>
            <td class="left">Placeholder Generated</td>
            <td class="left">MM/DD/YYYY</td>
        </tr>
    </tbody>
</table>
</div>
<div class="clr-col">
<h5>Locale Identifier: fr</h5>
<ClrImage src="/images/angular-components/datepicker/fr-locale-demo.png" />
<table class="table">
    <thead>
        <tr><th class="left">Key</th><th class="left">Value</th></tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">Language</td>
            <td class="left">French</td>
        </tr>
        <tr>
            <td class="left">Territory</td>
            <td class="left">-</td>
        </tr>
        <tr>
            <td class="left">First Day of the Week (Retrieved from Angular)</td>
            <td class="left">Monday (L)</td>
        </tr>
        <tr>
            <td class="left">Date Format (Retrieved from Angular)</td>
            <td class="left">dd/MM/y</td>
        </tr>
        <tr>
            <td class="left">Placeholder Generated</td>
            <td class="left">DD/MM/YYYY</td>
        </tr>
    </tbody>
</table>
</div>
</div>

Changing the locale requires its data to be registered first. Afterwards you can simply provide the locale in any Module or Component by the LOCALE_ID token.

<doc-code>
<<< .vuepress/public/demos/datepicker/i18n-ng.ts
</doc-code>

For more information on setting the locale parameter and loading the locale data, please read the Angular [internationalization](https://angular.io/guide/i18n) documentation.

<cds-alert-group status="warning" type="default">
<cds-alert>The date picker uses the locale set for the application to ensure consistency of date inputs and outputs across the application. It is not recommended to override the locale identifier to use different locales for different date picker instances in the same application.</cds-alert>
</cds-alert-group>

### Date Access

You can access the Date in two ways, a JavaScript Date object or a string. Further, for access ing the date with a string is different for template driven forms vs. reactive forms.

#### JavaScript Date object

You can add a two way binding on clrDate to access the date value. The benefit of using this approach is that you can interact with the Date picker directly using Javascript Date objects which would avoid converting values from string to date and vice versa on the application side.

<cds-alert-group status="warning" type="default">
<cds-alert>Date picker emits `null` when an invalid date is entered after a valid date was set.</cds-alert>
</cds-alert-group>

<doc-code>
<<< .vuepress/public/demos/datepicker/js-date-object.html
</doc-code>

```javascript
// clrDate Output
'2020-07-16T17:56:30.728Z';
```

#### String: Template Driven

Template Driven Forms use the `ngModel` directive to create a binding between the model and the input field.

#### HTML

<doc-code>
<<< .vuepress/public/demos/datepicker/template-driven.html
</doc-code>

#### TypeScript

<doc-code>
<<< .vuepress/public/demos/datepicker/template-driven.ts
</doc-code>

#### Example Output

<doc-code>

```javascript
{
  "date": "01/02/2015"
}
```

</doc-code>

#### String: Reactive Form

Reactive Forms use FormControls to create the binding between the model and the input field.

##### HTML

<doc-code>
<<< .vuepress/public/demos/datepicker/reactive-date.html
</doc-code>

##### TypeScript

<doc-code>
<<< .vuepress/public/demos/datepicker/reactive-date.ts
</doc-code>

##### Example Output

The date value will be null until a user selects a date.

<doc-code>

```javascript
{
  "date": null
}
```

</doc-code>
