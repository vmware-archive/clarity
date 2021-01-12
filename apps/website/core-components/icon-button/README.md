---
title: Overview
toc: true
---

::: component-summary

Icon buttons are useful where interface space may be limited. If an icon represents the action well, users can sometimes recognize them quicker than reading text. Using icon buttons can also help when space constraints prevent the use of long labels.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Icon buttons come in two different types of buttons to use: solid and outlined. This contrasts with [buttons](../button) which support three different visual variants (solid, outlined, and "flat"). Icon buttons **do not have a flat style** because flat icon buttons would have no visual affordance to differentiate them from a regular icon.

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6" cds-layout="p-b@lg:none p-b:lg">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <cds-icon-button aria-label="a user button example" title="a user button example"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Solid icon buttons look heavy on purpose. They direct the user’s attention to the <span cds-text="semibold">primary action</span> the application is suggesting that the user take.</p>
</div>
<div class="clr-col-sm-12 clr-col-lg-6" cds-layout="p-b@lg:none p-b:lg">
<DocInset height="72">
<div cds-layout="horizontal align:center">
    <cds-icon-button aria-label="a user button example" title="a user button example" action="outline"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
</div>
</DocInset>
<p cds-text="body" cds-layout="p-t:lg p-b:md">Outlined icon buttons provide a lightweight visual style. They are used to indicate a <span cds-text="semibold">secondary action</span> that compliments a primary action or to reduce visual noise when there are many actions of <span cds-text="semibold">equal</span> importance on the page.</p>
</div>
</div>

::: component-section-level-two-title

### Which Icon?

:::

::: component-section-level-two

Clarity recommends using an icon that **best describes the action** that the user will be doing.

:::

<DocDoDont>
<DocDo summary="Use icons that clearly represent the call-to-action." demoHeight="120">
<div cds-layout="horizontal align:center gap:sm">
    <cds-icon-button aria-label="send email button example" title="send email button example" solid><cds-icon aria-label="envelope" shape="envelope"></cds-icon></cds-icon-button>
    <cds-icon-button aria-label="upload file button example" title="upload file button example" action="outline"><cds-icon aria-label="upload arrow" shape="upload"></cds-icon></cds-icon-button>
    <cds-icon-button aria-label="download file button example" title="download file button example" action="outline"><cds-icon aria-label="download arrow" shape="download"></cds-icon></cds-icon-button>
</div>
</DocDo>
<DocDont slot="dont" summary="Use unfamiliar icons. Users may avoid clicking on unknown or abstract icon buttons." demoHeight="120">
<div cds-layout="horizontal gap:sm align:center">
    <cds-icon-button aria-label="a success button with a weird shape in it" title="a success button with a weird shape in it" status="success"><cds-icon aria-label="circles" shape="animation"></cds-icon></cds-icon-button>
    <cds-icon-button aria-label="a danger button with a weird shape in it" title="a danger button with a weird shape in it" status="danger"><cds-icon aria-label="a cube" shape="block"></cds-icon></cds-icon-button>
</div>
</DocDont>
</DocDoDont>

::: component-section-level-one-title

## Style

:::

:::component-section-level-one

Consistent button styles make it easier for a user to recognize areas to take action across an application.

:::

::: component-section-level-two-title

### Border Radius

:::

::: component-section-level-two

Clarity icon buttons have a border radius of 3px.

:::

::: component-section-level-two-title

### Size

:::

::: component-section-level-two

Clarity offers two icon button sizes: a **default** width and height of 1.8rem (36px) and a **compact** width and height of 1.2rem (24px).

:::

<DocDoDont>
<DocDo summary="Using default-sized icon buttons is often best. The larger size makes them easier to recognize and to." demoHeight="120">
<div cds-layout="horizontal align:center gap:sm">
    <cds-icon-button aria-label="a solid user button" title="a solid user button"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
    <cds-icon-button aria-label="an outlined user button" title="an outlined user button" action="outline"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
</div>
</DocDo>
<DocDont slot="dont" summary="Using compact icon buttons should be avoided in most cases. They are difficult to see and distinguish what the icon  represents. They also create smaller click targets which may cause accessibility issues." demoHeight="120">
<div cds-layout="horizontal gap:sm align:center">
    <cds-icon-button aria-label="a solid, compact user button" title="a solid, compact user button" size="sm"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
    <cds-icon-button aria-label="an outlined, compact user button" title="an outlined, compact user button" size="sm" action="outline"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
</div>
</DocDont>
</DocDoDont>

::: component-section-level-two-title

#### Primary Color

:::

::: component-section-level-two

A primary color provides consistency across an application. It trains the user to look for that color when trying to find an action. Clarity defaults to blue. This “action blue” can be found across all types of buttons, tabs, and other action-related components.

:::

::: component-section-level-one-title

## Interaction

:::

:::component-section-level-one

Icon buttons have a built-in loading and disabled state.

:::

::: component-section-level-two-title

### Loading & Success

:::

::: component-section-level-two

Use the button's **loading state** when you need to communicate that the application is working on a call-to-action a user has iniated by clicking on the button. Use the **success state** when a call-to-action has completed successfully.A button may remain in the success state if a call-to-action is only intended to be performed once.

Unlike [regular buttons](../button), icon buttons only support **two loading states**: loading and success.

:::

<DocIndent>
<div cds-layout="horizontal gap:sm">
    <cds-icon-button aria-label="this is loading" title="this is loading" loading-state="loading"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
    <cds-icon-button aria-label="success!" title="success!" loading-state="success"><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
</div>
</DocIndent>

::: component-section-level-two-title

### Disabled Icon Buttons

:::

::: component-section-level-two

Icon buttons may be disabled to indicate to a user that the call-to-action is unavailable. It should be clear to the user why a button is disabled, however, and users should be directed how enable the call-to-action if that is possible.

:::

<DocIndent>
<cds-icon-button aria-label="disabled user button" title="disabled button" disabled><cds-icon aria-label="user" shape="user"></cds-icon></cds-icon-button>
</DocIndent>

::: component-section-level-one-title

## Accessibility

:::

:::component-section-level-one

Clarity recommends adding the `title=""` and `aria-label=""` attributes to icon buttons. This adds additional context for users who are unfamiliar with what call-to-action the icon inside the button represents. Hovering over the icon button for a moment will show a tooltip that has the `title` text. The text should reflect the call-to-action.

Note also that Clarity recommends all icons have an `aria-label=""` attribute as well.

:::
