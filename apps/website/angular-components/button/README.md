---
title: Overview
toc: true
---

Buttons allow an application to communicate action and direct user intent.

## Usage

Clarity comes with three different types of buttons to use. They are provided to give visual distinction between the priority or heirarchy of the buttons in the application.

<div class="clr-row" cds-layout="m-t:md">
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset><button class="btn btn-primary">Solid Button</button></DocInset>

Solid buttons look heavy on purpose. They direct the user’s attention to the **primary action** the application is suggesting that the user take.

</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset><button class="btn">Outline Button</button></DocInset>

Outline buttons provide a lighter weight button style. They are used to indicate a **secondary action** that compliments a primary action or to reduce visual noise when there are many action of **equal** importance on the page.

</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset><button class="btn btn-link">Flat Button</button></DocInset>

Flat buttons are used in multiple scenarios. They are used as **tertiary buttons**. They can also be used inline because they are different from content in style and recognizable as buttons alongside content.

</div>
</div>

## Buttons vs Links

While buttons and links can both be given similar visual treatments, it is important that you use a link (or anchor element) for anytime clicking the element will _navigate_ you to a different page. Buttons are for interaction in the current page, such as refreshing the content or submitting a form.

<div class="clr-row" cds-layout="m-t:md">
<div class="clr-col-sm-12 clr-col-lg-6">
<DocInset><button class="btn btn-link">Flat Button</button></DocInset>

Use flat buttons when a user is expected to **take an action**.

</div>

<div class="clr-col-sm-12 clr-col-lg-6">
<DocInset><a href="javascript://" class="btn btn-link">Anchor Link</a></DocInset>

Use a link when a user is expected to be **taken to a different page**.

</div>
</div>

## Placement

There are two distinct patterns when it comes to the placement of a button.

<div class="clr-row" cds-layout="m-t:md">
<div class="clr-col-sm-12 clr-col-lg-6">
<DocInset height="300">
<ClrImage title="Z Pattern illustration" src="/images/angular-components/button/z_pattern.svg" />
</DocInset>

**Z Pattern**

The Z-pattern is a natural way for the user to go through content within a **constrained container** and when tasks are oriented from the top-left and ending with a **primary call to action on the right bottom side** of the container. This pattern is reversed for right to left languages.

<cds-icon shape="bookmark" size="24"></cds-icon> Modals and Wizards follow the Z Pattern

</div>

<div class="clr-col-sm-12 clr-col-lg-6">
<DocInset height="300">
<ClrImage title="F Pattern illustration" src="/images/angular-components/button/f_pattern.svg" />
</DocInset>

**F Pattern**

The F-pattern is a natural way to go through content in an **unconstrained container**, such as a form on the page itself. The user will go through the content line-by-line, arriving at a call to action at the end.

<cds-icon shape="bookmark" size="24"></cds-icon> Forms and Cards follow the F Pattern

</div>
</div>

## Style

Consistent button styles make it easier for a user to recognize areas to take action across an application.

### Typography

The text inside of buttons is always **uppercase**. This indicates action by differentiating button text from links and other content on the page. Use descriptive language on buttons relating to the user’s intent.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Typography Don't Example" src="/images/angular-components/button/typography_dont.svg" align="center" />
Use generic language not related to the action and not relating to the intent of the user.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Typography Do Example" src="/images/angular-components/button/typography_do.svg" align="center" />
Use a call to action on buttons.
</div>

</div>

### Visual Style

Clarity buttons have several distinct properties and design considerations.

#### Border Radius

Clarity buttons have a border radius of 3px.

<div class="clr-row" cds-layout="m-t:md">
<div class="clr-col-sm-12 clr-col-lg-6">

#### Size

Clarity offers two button sizes:

- Default height of 36px
- Compact height of 24px

Compact is used in content areas where smaller buttons are needed to de-emphasize calls to action. This is especially true when multiple actions of equal importance are available.

</div>
<div class="clr-col-sm-12 clr-col-lg-6">

<ClrImage cds-layout="m-t@lg:xl p-t@lg:lg" title="Visualization of button sizes" src="/images/angular-components/button/button_sizes.png" />

</div>

</div>

#### Primary Color

A primary color provides consistency across an application. It trains the user to look for that color when trying to find an action. Clarity defaults to blue. This “action blue” can be found across all types of buttons, tabs, and other action-related components.

<div class="clr-row" cds-layout="m-t:md">
<div class="clr-col-sm-12 clr-col-lg-6">

#### Action-based Color

Different colors may be used based on the severity of an action’s result. For example, using a red button when “deleting” files indicates high severity.

</div>
<div class="clr-col-sm-12 clr-col-lg-6">
<ClrImage cds-layout="m-t@lg:xl p-t@lg:lg" title="Visualization of button colors" src="/images/angular-components/button/action_colors.png" />
</div>
</div>

## Icons

Icon buttons are useful where interface space may be limited. If an icon represents the action well, users can sometimes recognize them quicker than reading text. Lastly, using icon buttons can help in the situation where the use of long labels may be challenging.

We recommend you **choose an icon that best describes the action** that the user will be doing. Users may avoid unknown or abstract icon buttons.

### Types & Sizes

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">
<button class="btn btn-primary btn-icon" style="margin-right: 0.6rem"><clr-icon shape="check"></clr-icon></button>
<button class="btn btn-icon" style="margin-right: 0.6rem"><clr-icon shape="folder"></clr-icon></button>
<button class="btn btn-icon btn-link"><clr-icon shape="cog"></clr-icon></button>
</div>
Icon buttons are available in the solid, outline, and flat types. It’s also best to use the normal (36px) sized ones. This makes them easier to recognize and to click.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">
<button class="btn btn-sm btn-primary btn-icon" style="margin-right: 0.6rem"><clr-icon shape="check"></clr-icon></button>
<button class="btn btn-sm btn-icon" style="margin-right: 0.6rem"><clr-icon shape="folder"></clr-icon></button>
<button class="btn btn-icon btn-sm btn-link"><clr-icon shape="cog"></clr-icon></button>
</div>
Use small icon buttons in most cases. They are difficult to see and distinguish what the icon is or represents. They also create smaller click targets, making them harder to click.
</div>

</div>

### With Text

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">
<cds-button size="icon" style="margin-right: 0.6rem"><cds-icon shape="check"></cds-icon> Create</cds-button>
<cds-button size="icon" status="danger"><cds-icon shape="times"></cds-icon> Delete</cds-button>
</div>
If you have the space, adding text helps users understand the action. Start icon buttons with icons and follow with text.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">
<cds-button size="icon" style="margin-right: 0.6rem">Create <cds-icon shape="check"></cds-icon></cds-button>
<cds-button size="icon" status="danger">Delete <cds-icon shape="times"></cds-icon></cds-button>
</div>
Start icon buttons with text and follow with icon. This makes them more difficult to scan quickly.
</div>
</div>

<div class="clr-row" cds-layout="m-t:md">
<div class="clr-col-sm-12 clr-col-lg-6">

### Title Attribute

If your icon button is has no text, we recommend adding the `title="` attribute to your icon buttons. This adds some additional context for users unfamiliar with what action your icon button might produce. Hovering over the icon button for a moment will show a tooltip that has the `title` text. The text should reflect the action being completed.

</div>
<div class="clr-col-sm-12 clr-col-lg-6">

<ClrImage cds-layout="m-t@lg:xl p-t@lg:lg" title="Visualization of button title attributes" src="/images/angular-components/button/icon-button-title-attribute.png" />

</div>
</div>

## Code & Examples

### Solid Buttons

<doc-demo>
!!!include(.vuepress/code/demos/button/solid-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/solid-css.html
</doc-code>

### Outline

<doc-demo>
!!!include(.vuepress/code/demos/button/outline-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/outline-css.html
</doc-code>

### Flat Buttons

<doc-demo>
!!!include(.vuepress/code/demos/button/flat-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/flat-css.html
</doc-code>

### Types: Primary,Secondary and Tertiary

<doc-demo>
!!!include(.vuepress/code/demos/button/types-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/types-css.html
</doc-code>

### States: Info, Success and Danger Outline Buttons

<doc-demo>
!!!include(.vuepress/code/demos/button/states-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/states-css.html
</doc-code>

### Sizes: Normal, Small, Normal Flat, Small Flat

<doc-demo>
!!!include(.vuepress/code/demos/button/sizes-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/sizes-css.html
</doc-code>

### Block

<doc-demo>
!!!include(.vuepress/code/demos/button/block-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/block-css.html
</doc-code>

### Inverse

<doc-demo>
!!!include(.vuepress/code/demos/button/inverse-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/inverse-css.html
</doc-code>

### Icon

<doc-demo>
!!!include(.vuepress/code/demos/button/icon-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button/icon-css.html
</doc-code>

### Loading

Use the `clrLoading` directive to change the state of the spinner button. The directive can be set to one of the following values:

- `ClrLoadingState.DEFAULT`: the default state of the button.
- `ClrLoadingState.LOADING`: replaces the button text with a spinner.
- `ClrLoadingState.SUCCESS`: briefly shows a check mark, and automatically transition back to the ClrLoadingState.DEFAULT state.

<doc-code>
<<< .vuepress/code/demos/button/loading-ng.html
</doc-code>

<doc-code>
<<< .vuepress/code/demos/button/loading.ts
</doc-code>
