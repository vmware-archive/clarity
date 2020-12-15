---
title: Overview
toc: true
---

A combobox is a complex element, which can be considered as a combination of two elements - a dropdown list and a text input. The text input is used for quick search and filtering of the predefined options from the dropdown list.

## Usage

Use a combobox when you need to have a list of options with search and filtering capabilities. This is a common pattern in web UI and is similar to the native datalist. In contrast to the datalist, a combobox features multiple selection and possibility to build richer UI for each option in the list, with images and styling. Adding free text input that is not part of the predefined list is not supported in the combobox.

## Types

The combobox can be configured in several different ways, depending on how the options are loaded, whether a single value or multiple values can be selected.

### List of basic static options

<div class="clr-row">
<div class="clr-col">
<p>
This basic type of combobox features declarative list of options. It's suitable for smaller, static lists.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Basic Combobox" src="/images/angular-components/combobox/combobox-simple.png" />
</DocInset>
</div>
</div>

### Single selection list of data-driven options

<div class="clr-row">
<div class="clr-col">
<p>
This type is dynamic and is generated from an array of data. The user supplies a template which tells how any option will be displayed in the list. When an option is selected, its display name gets populated in the search box.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Single Selection Combobox" src="/images/angular-components/combobox/combobox-single.png" />
</DocInset>
</div>
</div>

### Multi selection list of data-driven options

<div class="clr-row">
<div class="clr-col">
<p>
The multi select combobox is similar to the single select one, as it is data driven and allows for detailed configuration of the option display. After selection is made, a pill is created that corresponds to the selected item. Multi selection is achieved by subsequent selection from the drop down list, adding pills to the pills list.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Multi Selection Combobox" src="/images/angular-components/combobox/combobox-multi.png" />
</DocInset>
</div>
</div>

### Asynchronous list of options, either single or multi selectable

<div class="clr-row">
<div class="clr-col">
<p>
The asynchronous scenario allows for lazy loading of the pre-selected options. There is a "loading" spinner and message that's displayed before the options load is complete.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Asynchronous Combobox" src="/images/angular-components/combobox/combobox-async.png" />
</DocInset>
</div>
</div>

## Anatomy

<div class="clr-row">
<div class="clr-col">
<p>
As part of the forms elements collection, the Combobox has a label, that can be vertically or horizontally aligned to it. It also has a condensed mode, that occupies less space.
It has helper text and error/success message area. The component itself has a text input where the users enter the search text and a dropdown area, with a list of predefined options which can be styled by the user. The multi select version of the combobox has a list of pills that is situated before the text input. These pills all feature a delete button, and can also be styled, similarly to the options.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Combobox Anatomy" src="/images/angular-components/combobox/combobox-anatomy.png" />
</DocInset>
</div>
</div>

## Behavior

### Interacting with current selection

#### Single selection combobox

The current selection is pre-filled in the text input box. Changing the input text does not change the selection until an option is selected from the drop down list. Selection can only be changed, not deleted.

#### Multi selection combobox

Current selection is displayed as a list of pills before the input box. New pills can be added from the drop down list. Pills can be deleted by clicking the "X" icon on each pill. Also, pressing Backspace key in an empty input box will select the last pill in the list.

### Opening the drop down

The drop down with the pre-selected options can be opened either by clicking on the down caret icon at the end of the input text box, or by typing into the text box.

### Interacting with the options

Options can be mouse clicked to be selected. Also keyboard navigation with the arrow keys and selection with Enter key is available.
Selected option/s are highlighted in the list.

### Filtering the options list

Typing in the input text box will filter the drop down list of predefined options. This works in all cases with the exception of the basic, declarative list with static options, as they don't use the smart options iterator which is used in the dynamic scenarios.

## Code & Examples

### Basic static combobox

<div class="clr-row">
<div class="clr-col">
<p>
A basic static combobox can be created by directly nesting <code>clr-option</code> components in the <code>clr-options</code> container.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Basic Combobox" src="/images/angular-components/combobox/combobox-simple.png" />
</DocInset>
</div>
</div>

<doc-code>
<<< .vuepress/code/demos/combobox/basic.html
</doc-code>

### Single selection combobox

<div class="clr-row">
<div class="clr-col">
<p>
A single selection combobox is taking advantage of the <code>*clrOptionItems</code> smart iterator to manage its inventory of pre-selected options. It is similar to <code>*NgFor</code> as syntax. <code>field:'name'</code> designates which field of the underlying data object should be used as display name. The html nested inside the <code>clr-option</code> node will be used as template for the option design. It can include images, text, html code.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Single Selection Combobox" src="/images/angular-components/combobox/combobox-single.png" />
</DocInset>
</div>
</div>

<doc-code>
<<< .vuepress/code/demos/combobox/single.html
</doc-code>

### Multi selection combobox

<div class="clr-row">
<div class="clr-col">
<p>
The multi selection mode is triggered with a <code>clrMulti="true"</code> attribute on the <code>clr-combobox</code> component.
In regard to option management, the multi select combobox works the same as the single select one. It uses <code>*clrOptionItems</code> smart iterator and a template inside <code>clr-option</code> node for option styling.
Pill styling is defined inside <code>ng-container</code> with <code>*clrOptionSelected</code> structural directive, as seen in the example.

</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Single Selection Combobox" src="/images/angular-components/combobox/combobox-multi.png" />
</DocInset>
</div>
</div>

<doc-code>
<<< .vuepress/code/demos/combobox/multi.html
</doc-code>

### Asynchronous combobox

<div class="clr-row">
<div class="clr-col">
<p>
Using the combobox asynchronously requires to manually bind several event handlers on the <code>clr-combobox</code> component.
<code>(clrInputChange)="fetchStates($event)"</code> and <code>(clrOpenChange)="$event ? fetchStates() : null"</code> need to be bound to your method that fetches the backend data ("fetchStates()" in this example). Then <code>[clrLoading]="loading"</code>, which triggers the display of the "loading" indicator, should be bound to a property that is active while your data fetching called is in progress.

</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Async Combobox" src="/images/angular-components/combobox/combobox-async.png" />
</DocInset>
</div>
</div>

<doc-code>
<<< .vuepress/code/demos/combobox/async.html
</doc-code>
