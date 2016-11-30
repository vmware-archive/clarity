---
title: Spinners
permalink: /documentation/spinners
layout: documentation
---

{: .component-summary }
##### A spinner is visual indicator of an ongoing, user-initiated process.

Clarity has two types of spinners:

{: .list }
- **Page Spinners:** For tracking the progress of an operation related to an entire page.
- **Inline Spinners:** For tracking the progress of an operation related to a specific component.

###### .spinner

Use the <code class="clr-code">.spinner</code> to create a page spinner.

###### .spinner-inline

Extend the <code class="clr-code">.spinner-inline</code> class with <code class="clr-code">.spinner</code> to create an inline spinner.

###### .spinner-inverse

Extend the <code>.spinner-inverse</code> class with <code>.spinner</code> to create a spinner for dark backgrounds.

### Examples

<clr-spinner-types></clr-spinner-types>

### Spinner Sizes

Clarity spinners can be displayed in three sizes:

{: .list }
- **Small:** This is the required sizing for inline spinners (see above). It measures 18x18 pixels.
- **Medium:** Medium spinners measure 36x36 pixels.
- **Large:** This is the default size for page spinners (see above).

###### Spinner sizes classnames

The classnames used to size spinners are: <code class="clr-code">.spinner-sm</code>, <code class="clr-code">.spinner-md</code>, and <code class="clr-code">.spinner-lg</code>. Note that using the <code class="clr-code">.spinner-inline</code> class will force a spinner to the small size and that <code class="clr-code">.spinner-lg</code> is the default sizing of page spinners.

### Examples

<clr-spinner-sizes></clr-spinner-sizes>

{: #guidelines}
### Usage

Use the three sizes of spinners as follows:

<table class="table table-noborder">
    <tbody>
        <tr>
            <td class="left">
                <b>Large</b>
                <div class="hidden-sm-up nowrap">72px &times; 72px</div>
            </td>
            <td class="left hidden-xs-down nowrap">72px &times; 72px</td>
            <td class="left">
                Use to track the progress of an operation related to a page.
                For example, in the login form, a large spinner replaces the
                form fields while the data is being authenticated.
            </td>
        </tr>
        <tr>
            <td class="left">
                <b>Medium</b>
                <div class="hidden-sm-up nowrap">36px &times; 36px</div>
            </td>
            <td class="left hidden-xs-down nowrap">36px &times; 36px</td>
            <td class="left">Use when content is being loaded, for example, in a table or datagrid.</td>
        </tr>
        <tr>
            <td class="left">
                <b>Small</b>
                <div class="hidden-sm-up">18px &times; 18px</div>
            </td>
            <td class="left hidden-xs-down">18px &times; 18px</td>
            <td class="left">Use in constrained spaces, such as in an input field or next to a button.  The spinner animates and the field or button is disabled until the action is complete.</td>
        </tr>
    </tbody>
</table>


#### Placement

Place the spinner where you want to focus users' attention when the process completes.

#### Label

Optionally, provide a brief description of the process, for example, "Loading ..."

#### Spinners Versus Progress Bars

Clarity provides a linear, indeterminate [progress bar]({{ site.baseurl }}/documentation/progress) that serves the same use cases as a spinner.  Using a spinner or an indeterminate progress bar is a matter of spacing, visual consistency, and the object the user selected to begin the process.
