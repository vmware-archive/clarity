---
title: Modals
permalink: /documentation/modals
layout: documentation
---

{: .component-summary }
#### Modals are a primary pattern for exchanging information with users.  A modal requires the user to interact with it before the user can continue.

<div class="alert alert-warning bump-down">
    <div class="alert-item">
        <span class="alert-text">
            IE fix: When the modal dialog is open, extend the <code class="clr-code">.no-scrolling</code> class on the
            <code class="clr-code">body</code> tag so that the content behind the backdrop does not scroll.
            Remove the class when the modal dialog is closed.
        </span>
    </div>
</div>

A static example of a modal with header, body and footer:

<clr-modal-static-demo></clr-modal-static-demo>

### Sizes

In addition to the default, medium size, Clarity modals come in two optional sizes, large and small. To use an optional size, add <code>modal-sm</code> or <code>modal-lg</code> class to your modal-dialog.

<clr-modal-sizes-demo></clr-modal-sizes-demo>

### Modal Backdrop

Here is an example of a backdrop to use behind your modal, when you display it on top of a page:

<clr-modal-backdrop-demo></clr-modal-backdrop-demo>

### Animation

Modals and backdrops support fading animations. Clarity recommends using <code>fadeDown</code> on the <code>modal-dialog</code> and <code>fade</code> on the <code>modal-backdrop</code>. These animations hide the modal and backdrop by default. Adding or removing the <code>in</code> class animates the modal or backdrop in or out, respectively.

<clr-modal-animation-demo></clr-modal-animation-demo>

## Angular Component

### Summary of Options

<table class="table">
    <thead>
        <tr>
            <th class="left">Input/Output</th>
            <th>Values</th>
            <th>Default</th>
            <th class="left">Effect</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">[(clrModalOpen)]</td>
            <td>true, false</td>
            <td>false</td>
            <td class="left">
                Two-way binding on the state of the modal: opened or closed.
            </td>
        </tr>
        <tr>
            <td class="left">[clrModalSize]</td>
            <td>"sm", &lt;none&gt;, "lg"</td>
            <td>&lt;none&gt;</td>
            <td class="left">Sets the size of the modal. &lt;none&gt; is for medium size.</td>
        </tr>
        <tr>
            <td class="left">[clrModalClosable]</td>
            <td>true, false</td>
            <td>true</td>
            <td class="left">
                If false, the modal will not be closable by clicking on the mask or on the top-right "x".
            </td>
        </tr>
        <tr>
            <td class="left">[clrModalStaticBackdrop]</td>
            <td>true, false</td>
            <td>false</td>
            <td class="left">If true, the modal will not close when the user clicks outside of the modal.</td>
        </tr>
    </tbody>
</table>

#### Examples

<clr-modal-angular-show-demo></clr-modal-angular-show-demo>

###### 1. clrModalSize

The Angular component offers the same optional sizes as the static styles through the <code>clrModalSize</code> input. The default, empty size is medium.

<clr-modal-angular-size-demo></clr-modal-angular-size-demo>

###### 2. clrModalClosable

If you don't want your modal to be closable by clicking on the top-right "x" or on the mask, you can do so with the <code>clrModalClosable</code> input. The default value is <code>true</code>. You can still close the modal if one of _your_ components modifies the value bound to <code>clrModalOpen</code>.

<clr-modal-angular-not-closable-demo></clr-modal-angular-not-closable-demo>

###### 3. clrModalStaticBackdrop

If you want the modal to be closable with a top-right “x” button, but don’t want a click on the backdrop to close it, use the <code>clrModalStaticBackdrop</code>. If <code>true</code>, clicks on the background are ignored.  The default value is <code>false</code>.

<clr-modal-angular-static-backdrop-demo></clr-modal-angular-static-backdrop-demo>

### API Reference

<table class="table">
    <thead>
        <tr>
            <th class="left">Method</th>
            <th>Arguments</th>
            <th>Return Value</th>
            <th class="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">open()</td>
            <td>N/A</td>
            <td>N/A</td>
            <td class="left">Manually opens the modal.</td>
        </tr>
        <tr>
            <td class="left">close()</td>
            <td>NA</td>
            <td>NA</td>
            <td class="left">
                Manually closes the modal if <code>clrModalClosable</code> is not set to <code>false</code>.
            </td>
        </tr>
    </tbody>
</table>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Common uses for modals are:

- Gather data from the user
- Alert the user to critical information
- Confirm the consequence of a critical action before proceeding

#### Sizes

Modals have a default width (576 pixels) and two optional widths: large (864 pixels) and small (288 pixels).

{: .list}
- The default width is best for presenting short, focused tasks, error messages, and confirmations.  
- The larger size works well for complex forms and EULAs.  
- The smaller size is goof for providing more information about a UI element.

#### Button Placement

Buttons are right-aligned in the footer, with the primary button in the rightmost position. Right-alignment supports the Z-pattern layout.  

The following images show one-, two-, and three-button placement.  Avoid using more than three buttons.

<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-12 col-md-4">
    <span>
        <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/buttons/button_modal_1.png?{{ site.time | date: '%s%N' }}" class="img-fluid cozy-sm" alt="Modal with primary button">
        <p>With primary button</p>
        </span>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
    <span>
        <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/buttons/button_modal_2.png?{{ site.time | date: '%s%N' }}"  class="img-fluid cozy-sm" alt="Modal with primary button">
        <p>With secondary and primary buttons</p>
        </span>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
    <span>
        <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/buttons/button_modal_3.png?{{ site.time | date: '%s%N' }}"  class="img-fluid cozy-sm" alt="Modal with primary button">
        <p>With tertiary, secondary, and primary buttons</p>
        </span>
    </div>
</div>
<p></p>

#### Scrolling

Whenever possible, avoid putting so much content in a modal that it scrolls.  In the cases that require scrolling, such as a EULA and license agreement, a scrollbar is visible upon loading. The title and footer remain in place when the user scrolls the content.

#### Animation

Modals support fading animations. The recommended approach is to fade the modal in and out of view from the top.  

#### Dismissing Modals

Modals can be dismissed by clicking the X icon in the upper right corner or by clicking a button in the footer. Clicking outside the modal should not dismiss it. Users might accidentally click outside the wizard and lose data.

#### Opening a Second Modal

Avoid displaying a modal on top of another modal.  An exception is opening a file chooser.

#### Message Modal

Modals that display a message (information, success, warning, or error) or ask for a confirmation should follow these guidelines:

{: .list}
- Use a short statement or direct question for the title.
- Don't start questions with "Are you sure...?" or "Do you want to..."
- Use sentence caps for the title.
- Use a single primary button for information, success, warning, and error messages.
- For a confirmation, use a primary and secondary button, and preselect the least destructive response.
