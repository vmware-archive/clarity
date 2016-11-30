---
title: Wizards
permalink: /documentation/wizards
layout: documentation
---

{: .component-summary }
##### A wizard presents a multi-step workflow that users perform in a recommended sequence.

### HTML and Styles

Here is an example static markup using just HTML and CSS. Since the interactive functionality
of the wizard is not provided in the static version, we recommend using the Angular component.

<clr-wizard-demo-static></clr-wizard-demo-static>

## Angular Component

### Basic Wizard

The wizard comes in three different sizes: medium, large, and extra-large.
You can set the size by providing the value as an input (<code class="clr-code">clrWizardSize</code>).
If not specified, the wizard will default to the extra-large size. See the options
table for a list of valid values for the size.

<clr-wizard-basic></clr-wizard-basic>

### Wizard Options

#### Skipping and UnSkipping Steps

Depending on the flow of the wizard, you may want to skip a step in the wizard.
The component exposes two methods (<code class="clr-code">skipTab</code> and
<code class="clr-code">unSkipTab</code>) to skip or un-skip a step. In order
to use the methods, you will have to specify a unique id as an input
(<code class="clr-code">clrWizardStepId</code>) and pass that value into the methods. You
can also set the input <code class="clr-code">clrWizardStepIsSkipped</code>
 and the corresponding <code class="clr-code">clrWizardPageIsSkipped</code> to skip
 the step and the matching page as shown in the example below.

#### Overriding the Title in the Wizard Page

By default, the page on the right-hand side will display the same title as the text
that is inside the <code class="clr-code">&lt;clr-wizard-step&gt;</code>. You may wish to
override this for the matching page. You can do this by including an element inside the
<code class="clr-code">&lt;clr-wizard-page&gt;</code>
with class <code class="clr-code">.wizard-page-title</code> as shown in the example below.

<clr-wizard-simple></clr-wizard-simple>

### Wizard with Form Validation

You can use form validation with the wizard. If you wish to disable the next button
until the form is valid, you can do so by setting the
<code class="clr-code">clrWizardPageNextDisabled</code> input of the
<code class="clr-code">&lt;clr-wizard-page&gt;</code> to the form's valid property as shown
in the example.

<clr-wizard-form-validation></clr-wizard-form-validation>

### Wizard with Asynchronous Validation

You may have an asynchronous server-side call for validation. The example demonstrate how
you can prevent the default behavior on clicking the next button (of going to next step) by
setting the <code class="clr-code">clrWizardPagePreventDefault</code> input to false, and
programmatically calling next when the asynchronous validation call returns and passes.

<clr-wizard-async-validation></clr-wizard-async-validation>

### Options for &lt;clr-wizard&gt;
{% raw %}
<table class="table">
    <thead>
    <tr>
        <th class="left">Input/Output</th>
        <th class="hidden-xs-down">Values</th>
        <th class="hidden-xs-down">Default</th>
        <th class="left">Effect</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="left">
            <b>[(clrWizardOpen)]</b>
            <div class="hidden-sm-up">Type: Boolean</div>
            <div class="hidden-sm-up">Default: false</div>
        </td>
        <td class="hidden-xs-down">true, false</td>
        <td class="hidden-xs-down">false</td>
        <td class="left">
            Two-way binding on the state of the wizard: open or closed.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>(clrWizardOpenChanged)</b></div>
            <div class="hidden-sm-up"><b>(clrWizard<br>OpenChanged)</b></div>
            <div class="hidden-sm-up">Type: Boolean</div>
        </td>
        <td class="hidden-xs-down">true, false</td>
        <td class="hidden-xs-down">N/A</td>
        <td class="left">
            Emits the state of the wizard when a wizard is open or closed.
        </td>
    </tr>
    <tr>
        <td class="left">
            <b>[clrWizardSize]</b>
            <div class="hidden-sm-up">Values: "md", "lg", "xl"</div>
            <div class="hidden-sm-up">Default: "xl"</div>
        </td>
        <td class="hidden-xs-down">"md", "lg", "xl"</td>
        <td class="hidden-xs-down">"xl"</td>
        <td class="left">Sets the size of the wizard.</td>
    </tr>
    <tr>
        <td class="left">
            <b>[clrWizardStepId]</b>
            <div class="hidden-sm-up">Values:<br>&lt;any valid id for html element&gt;</div>
            <div class="hidden-sm-up">Default: auto-generated</div>
        </td>
        <td class="hidden-xs-down">&lt;any valid id for html element&gt;</td>
        <td class="hidden-xs-down">auto-generated</td>
        <td class="left">
            Used on &lt;clr-wizard-step&gt;. If explicitly set, will assign the
            set id as the id for the element. If not set, the component will
            auto-generate the id. You can skip or unskip a step in the
            wizard by passing in the id to wizard's skipTab an unSkipTab methods.
        </td>
    </tr>

    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>[clrWizardStepIsSkipped]</b></div>
            <div class="hidden-sm-up"><b>[clrWizard<br>StepIsSkipped]</b></div>
            <div class="hidden-sm-up">Type: Boolean</div>
            <div class="hidden-sm-up">Default: false</div>
        </td>
        <td class="hidden-xs-down">true, false</td>
        <td class="hidden-xs-down">false</td>
        <td class="left">
            Used on &lt;clr-wizard-step&gt;. If true, the wizard will skip this
            step and not display it.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>[clrWizardPageErrorFlag]</b></div>
            <div class="hidden-sm-up"><b>[clrWizard<br>PageErrorFlag]</b></div>
            <div class="hidden-sm-up">Type: Boolean</div>
            <div class="hidden-sm-up">Default: false</div>
        </td>
        <td class="hidden-xs-down">true, false</td>
        <td class="hidden-xs-down">false</td>
        <td class="left">
            Used on &lt;clr-wizard-page&gt;. If true, signifies that there was
            an error on the wizard page.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>[clrWizardPageIsSkipped]</b></div>
            <div class="hidden-sm-up"><b>[clrWizard<br>PageIsSkipped]</b></div>
            <div class="hidden-sm-up">Type: Boolean</div>
            <div class="hidden-sm-up">Default: false</div>
        </td>
        <td class="hidden-xs-down">true, false</td>
        <td class="hidden-xs-down">false</td>
        <td class="left">
            Used on &lt;clr-wizard-page&gt;. If true, the wizard will skip this
            page and not display it.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>[clrWizardPageNextDisabled]</b></div>
            <div class="hidden-sm-up"><b>[clrWizard<br>PageNext<br>Disabled]</b></div>
            <div class="hidden-sm-up">Type: Boolean</div>
            <div class="hidden-sm-up">Default: false</div>
        </td>
        <td class="hidden-xs-down">true, false</td>
        <td class="hidden-xs-down">false</td>
        <td class="left">
            Used on &lt;clr-wizard-page&gt;. If true, the wizard's next or
            finish button will be disabled.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>(clrWizardPageNextDisabledChanged)</b></div>
            <div class="hidden-sm-up"><b>(clrWizard<br>PageNext<br>DisabledChanged)</b></div>
            <div class="hidden-sm-up">Type: Any</div>
        </td>
        <td class="hidden-xs-down">any</td>
        <td class="hidden-xs-down">N/A</td>
        <td class="left">
            Emits the state of the wizard page when the nextDisabled status
            changes.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>(clrWizardPageOnCommit)</b></div>
            <div class="hidden-sm-up"><b>(clrWizardPage<br>OnCommit)</b></div>
            <div class="hidden-sm-up">Type: Any</div>
        </td>
        <td class="hidden-xs-down">any</td>
        <td class="hidden-xs-down">N/A</td>
        <td class="left">
            Emits an event when the next or finish button is clicked on the
            wizard page.
        </td>
    </tr>
    <tr>
        <td class="left">
            <div class="hidden-xs-down"><b>(clrWizardPageOnLoad)</b></div>
            <div class="hidden-sm-up"><b>(clrWizard<br>PageOnLoad)</b></div>
            <div class="hidden-sm-up">Type: Any</div>
        </td>
        <td class="hidden-xs-down">any</td>
        <td class="hidden-xs-down">N/A</td>
        <td class="left">
            Emits an event when loading the wizard page.
        </td>
    </tr>
    </tbody>
</table>
{% endraw %}

{: #guidelines}
### Usage

Use a wizard to present a series of steps for completing a complex workflow, such as installation. A wizard simplifies the workflow by directing users serially through the tasks.

If the user doesn't need to complete the workflow in a predefined order, use a [modal]({{ site.baseurl }}/documentation/modals) instead.

#### Base Wizard size on use case

BSizes are 576 px, 864 px and 1056 px (default). The best design provides a good balance between white space and the number of elements per page.   Overloading a page with too many controls can be a problem as can having  many sparsely-populated pages.

#### Title

Typically task-based, the title should summarize the workflow, for example, Create Hardware Profile.


#### Steps
<div class="row buttons-modal-gfx">
    <div class="col-md-6 col-sm-12 flex-xs-middle">
        <img
            src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/wizards/New_wizard.png"
            alt="Buttons on inner wizard pages"
            style="max-width:100%;">
    </div>

    <div class="col-md-5 offset-md-1 col-sm-12 clrweb-wizardsteps-block">
        <h4>Streamline the number of steps</h4>
        <p>
            A wizard should be at least two steps.  Otherwise, a modal will suffice.  Also, avoid vertical scrolling of steps.  At the default size, the steps scroll at 14 lines.
        </p>

        <h4>Non-branching wizards are preferable</h4>
        <p>
            However, if a user choice results in a change in the number of steps, make the change early in the workflow.  Otherwise, users might lose track of the navigation path.
        </p>

        <h4>Steps titles should be concise and direct</h4>
        <p>
            To help readers scan the text, use sentence-style caps and no ending punctuation. Avoid text that is so long it wraps to the next line.
        </p>
    </div>
</div>


#### Pages

###### Use the header to set context

By default, the page header is the same text as the selected step.  If needed, enhance the header text to clarify meaning.

###### Ensure content is cohesive

All text and components should support the goal or purpose of the page.  

Avoid:

<ul class="list">
    <li>Putting more than one task on a page.  Pages are easier to use when they present a single step of the workflow.</li>
    <li>Opening a modal or wizard from within a wizard.  This increases the complexity of the workflow.</li>
    <li>Putting so much content on a page that it scrolls.</li>
</ul>

###### Buttons are right-aligned, in the footer

Right alignment supports the Z-pattern layout.  The primary button is in the rightmost position.


<table class="table-noborder">
    <tbody>
          <tr>
              <td class="left">First wizard page</td>
              <td class="left">
                <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/wizards/Wizard_buttons_1.png?{{ site.time | date: '%s%N' }}" width="70%" height="70%" alt="Buttons on first page of wizard">
              </td>
          </tr>
          <tr>
              <td class="left">Inner wizard pages</td>
              <td class="left">
                <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/wizards/Wizard_buttons_2.png?{{ site.time | date: '%s%N' }}" width="70%" height="70%" alt="Buttons on wizard inner pages">
              </td>
          </tr>
          <tr>
              <td class="left">Last page</td>
              <td class="left">
                <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/wizards/Wizard_buttons_3.png?{{ site.time | date: '%s%N' }}" width="70%" height="70%" alt="Buttons on final wizard page">
              </td>
          </tr>
    </tbody>
</table>

###### Cancel and Close

Wizards have both a Close and Cancel button.  The Close button is in the upper right corner as a visual affordance and for accessibility reasons.

Clicking outside the wizard should not dismiss it. Users might accidentally click outside the wizard and lose data.

###### Scrolling

Some wizard pages might require scrolling.  The title and buttons remain in place when the content scrolls.

Clarity does not use horizontal lines to define the scrollable area.  This  keeps the UI clean and simple.  Also, a line above the buttons makes it appear as if all content is visible.

###### Validation

Validation of user input can occur at the field level, the page level, and when the user finishes the wizard. This control allows users to complete actions with minimal risk of error or data loss.

For more information on validation, see [input fields]({{ site.baseurl }}/documentation/input-fields).
