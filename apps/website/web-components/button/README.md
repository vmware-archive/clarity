---
title: Overview
toc: true
---

::: component-summary

Buttons allow an application to communicate action and direct user intent.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Clarity comes with three different types of buttons to use. They are provided to give visual distinction between the priority or heirarchy of the buttons in the application.

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-4" cds-layout="p-b@lg:none p-b:lg">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <cds-button>solid button</cds-button>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Solid buttons look heavy on purpose. They direct the user’s attention to the <span cds-text="semibold">primary action</span> the application is suggesting that the user take.</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-4" cds-layout="p-b@lg:none p-b:lg">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <cds-button action="outline">outline button</cds-button>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Outline buttons provide a lighter weight button style. They are used to indicate a <span cds-text="semibold">secondary action</span> that compliments a primary action or to reduce visual noise when there are many actions of <span cds-text="semibold">equal</span> importance on the page.</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <cds-button action="flat">flat button</cds-button>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Flat buttons are used in multiple scenarios. They are used as <span cds-text="semibold">tertiary buttons</span>. They can also be used inline because they are different from content in style and recognizable as buttons alongside content.</p>
</div>
</div>

::: component-section-level-one-title

## Buttons vs. Links

:::

:::component-section-level-one

While buttons and links can both be given similar visual treatments, it is important that you use a link (or anchor element) for anytime clicking the element will navigate you to a different page. Buttons are for interaction in the current page, such as refreshing the content or submitting a form.

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6" cds-layout="p-b:lg p-b@lg:none">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <cds-button>button</cds-button>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Use  buttons when a user is expected to <span cds-text="semibold">take an action</span>.</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-6">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <a href="javascript:void(0)"><cds-button>link</cds-button></a>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Use a link when a user is expected to be <span cds-text="semibold">taken to a different page.</span>.</p>
</div>
</div>

::: component-section-level-one-title

## Placement

:::

:::component-section-level-one

There are two distinct patterns when it comes to the placement of a button.

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6" cds-layout="p-b:lg p-b@lg:none">
<DocInset height="300">
<div cds-layout="horizontal align:center">
<ClrImage title="Z Pattern illustration" src="/images/angular-components/button/z_pattern.svg" />
</div>
</DocInset>
<p cds-text="subsection semibold" cds-layout="p-t:lg">Z Pattern</p>
<p cds-text="body" cds-layout="p-t:md p-b:md" style="min-height: 5.125rem">The Z-pattern is a natural way for the user to go through content within a <span cds-text="semibold">constrained container</span> and when tasks are oriented from the top-left and ending with a <span cds-text="semibold">primary call to action on the right bottom side</span> of the container. This pattern is reversed for right to left languages.</p>
<p cds-text="body" cds-layout="p-t:sm p-b:md"><cds-icon shape="bookmark"></cds-icon> Modals and Wizards follow the Z Pattern</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-6">
<DocInset height="300">
<div cds-layout="horizontal align:center">
<ClrImage title="F Pattern illustration" src="/images/angular-components/button/f_pattern.svg" />
</div>
</DocInset>
<p cds-text="subsection semibold" cds-layout="p-t:lg">F Pattern</p>
<p cds-text="body" cds-layout="p-t:md p-b:md" style="min-height: 5.125rem">The F-pattern is a natural way to go through content in an <span cds-text="semibold">unconstrained container</span>, such as a form on the page itself. The user will go through the content line-by-line, arriving at a call to action at the end.</p>
<p cds-text="body" cds-layout="p-t:sm p-b:md"><cds-icon shape="bookmark"></cds-icon> Forms and Cards follow the F Pattern</p>
</div>
</div>

::: component-section-level-one-title

## Style

:::

:::component-section-level-one

Consistent button styles make it easier for a user to recognize areas to take action across an application.

:::

::: component-section-level-two-title

### Typography

:::

::: component-section-level-two

The text inside of buttons is always **uppercase**. This indicates action by differentiating button text from links and other content on the page. Use descriptive language on buttons relating to the user’s intent.

:::

<DocDoDont>
<DocDo summary="Use a call to action on buttons." demoHeight="280">
<div cds-layout="horizontal align:center">
<ClrImage class="doc-example" title="Typography Do Example" src="/images/angular-components/button/typography_do.svg" />
</div>
</DocDo>
<DocDont slot="dont" summary="Use generic language not related to the action and not relating to the intent of the user." demoHeight="280">
<div cds-layout="horizontal gap:sm align:center">
<ClrImage class="doc-example" title="Typography Don't Example" src="/images/angular-components/button/typography_dont.svg"/>
</div>
</DocDont>
</DocDoDont>

::: component-section-level-two-title

### Visual Style

:::

::: component-section-level-two

Clarity buttons have several distinct properties and design considerations.

:::

::: component-section-level-three-title

#### Border Radius

:::

::: component-section-level-three

Clarity buttons have a border radius of 3px.

:::

::: component-section-level-three-title

#### Size

:::

<div class="clr-row" cds-layout="m-t:md m-b:lg">
<div class="clr-col-sm-12 clr-col-lg-6" cds-layout="p-b:lg p-b@lg:none">
<div cds-layout="vertical gap:lg">
<p cds-text="body">Clarity offers two button sizes:</p>
<ul cds-list cds-text="body">
    <li><b>Default</b> height of 1.8rem (36px)</li>
    <li><b>Compact</b> height of 1.2rem (24px)</li>
</ul>
<p cds-text="body">Compact is used in content areas where smaller buttons are needed to de-emphasize calls to action. This is especially true when multiple actions of equal importance are available.</p>
</div>
</div>
<div class="clr-col-sm-12 clr-col-lg-6">
<ClrImage  title="Visualization of button sizes" src="/images/angular-components/button/button_sizes.png" />
</div>
</div>

::: component-section-level-three-title

#### Primary Color

:::

::: component-section-level-three

A primary color provides consistency across an application. It trains the user to look for that color when trying to find an action. Clarity defaults to blue. This “action blue” can be found across all types of buttons, tabs, and other action-related components.

:::

::: component-section-level-two-title

### Using Icons

:::

<DocInset height="100" cds-layout="m-b:lg">
<div cds-layout="horizontal gap:sm align:center">
    <cds-button action="outline" status="danger"><cds-icon shape="times"></cds-icon> cancel</cds-button>
    <cds-button>download <cds-icon shape="download"></cds-icon></cds-button>
</div>
</DocInset>

::: component-section-level-two

Icons can be used inside buttons to decorate the call-to-action with a visual indicator. Icons should be used alongside text that clearly indicates what the interaction is expected to do.

Icons can be placed to the left or right of the button text. Icons should only appear on the right of the text if the call-to-action would extend outside of the current context, however. Examples include downloading a file, opening a new window, or navigating the user to a page outside the application.

Buttons should only use icons by themselves if an interface is constrained by space. Using only an icon, and no text, in a button requires the use of the [icon button component](/web-components/icon-button).

:::

::: component-section-level-two-title

### Using Badges

:::

<DocInset height="100" cds-layout="m-b:lg">
<div cds-layout="horizontal gap:sm align:center">
    <cds-button status="danger" action="outline">Archive Items <cds-badge>10<span cds-layout="display:screen-reader-only">items</span></cds-badge></cds-button>
    <cds-button><cds-icon shape="envelope" badge></cds-icon> Mark As Read <cds-badge>99+<span cds-layout="display:screen-reader-only">items</span></cds-badge></cds-button>
</div>
</DocInset>

::: component-section-level-two

[Badges](/web-components/badge) can be used inside buttons to indicate a known number of items associated with an action. This can help the user understand the impact or severity of the call-to-action. Badges always appear to the right of the text in an ltr presentation.

:::

::: component-section-level-one-title

## Interaction

:::

:::component-section-level-one

Buttons have built-in loading and disabled states.

:::

::: component-section-level-two-title

### Loading States

:::

::: component-section-level-two

Use the button's **loading state** when you need to communicate that the application is working on a call-to-action a user has iniated by clicking on the button. Use the **error state** when a call-to-action has failed to complete. Use the **success state** when a call-to-action has completed successfully.A button may remain in the success state if a call-to-action is only intended to be performed once.

All three states (loading, error, and success) prevent further execution of the call-to-action.

:::

<DocIndent>
<div cds-layout="horizontal gap:sm">
    <cds-button loading-state="loading">default</cds-button>
    <cds-button loading-state="success">default</cds-button>
    <cds-button loading-state="error">default</cds-button>
</div>
</DocIndent>

::: component-section-level-two-title

### Disabled Buttons

:::

::: component-section-level-two

Buttons may be disabled to indicate to a user that the call-to-action is unavailable. It should be clear to the user why a button is disabled, however, and users should be directed how enable the call-to-action if that is possible.

:::

<DocIndent>
<cds-button disabled>a disabled button</cds-button>
</DocIndent>
