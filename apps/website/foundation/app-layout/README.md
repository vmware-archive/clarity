---
title: Overview
toc: true
---

A properly structured layout enforces an optimal, consistent experience across applications.

## Layout

**.main-container:**

The `.main-container` is a vertical flexbox which wraps the following components:

- [App-Level Alert](/components/alert)
- [Header](/components/header)
- [Subnav](/components/header)
- Content Container

**Note:** Although Clarity does not have a footer component, a custom footer can be added in the main-container.

**.content-container:**

The `.content-container` is a horizontal flexbox which wraps the following components:

- Content Area
- [Sidenav](/components/sidenav)

<doc-demo>
!!!include(.vuepress/code/demos/app-layout/content-container-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/app-layout/content-container-ng.html
</doc-code>

## Basic Structure

Two constants of an app built in Clarity are the header and content area. These are the blocks upon which you build your app model.

<div class="clr-row">
<div class="clr-col-4">
<ClrImage title="Header navigation pattern" src="/images/foundation/app-layout/header_contentarea.png" />
</div>
<div class="clr-col-8">

### Header

The [header](/components/header) is for branding and app-level elements such as navigation, search, and account settings.

### Content Area

The content area is where users focus their attention most of the time, gathering information and performing tasks–it is the canvas for your application. As the largest portion of your app, the content area is always visible.

</div>
</div>

## Layout

Your layout should reflect the information or workflow of the selected [navigation](/foundation/navigation). When laying out the content, keep the following in mind:

- The flow of content–how to create a hierarchy and layout that draws attention to the areas of importance
- The importance of designing to the [grid](/components/grid)
- How to aid users in completing their tasks
- How to handle large amounts of data
- Responsive design (if that is part of your product’s goals)

## Common Layout Patterns

Content can consist of any of the [Clarity components](/components), or no components and just information. Following are common layout patterns and recommended usage. For information on navigation components, header, subnav, and sidenav, see [Navigation](/foundation/navigation).

### Cards

<div class="clr-row">
<div class="clr-col-4">
<ClrImage title="A common layout for cards." src="/images/foundation/app-layout/cards.png" />
</div>
<div class="clr-col-8">

[Cards](/components/card) are for presenting high-level information and guiding users to related actions and details. Cards might include a combination of text, images, and data visualizations.

Benefits of using cards include:

- Ability to see data in a collection
- Facilitates scanning of information
- Works well across platforms

</div>
</div>

### Tables and Datagrids

<div class="clr-row">
<div class="clr-col-4">
<ClrImage title="A common layout for tables and datagrids." src="/images/foundation/app-layout/tables.png" />
</div>
<div class="clr-col-8">

[Tables](/components/table) and datagrids are for good for managing large amounts of data. These layouts work well when users need to compare data and perform batch operations.

A table is a static view. A datagrid provides users flexibility in viewing the data, including filtering and sorting.

Complex tables and datagrids work best on larger screens.

</div>
</div>

### Forms

<div class="clr-row">
<div class="clr-col-4">
<ClrImage title="A common layout for forms." src="/images/foundation/app-layout/forms.png" />
</div>
<div class="clr-col-8">

[Forms](/components/form) are for collecting data from users. Forms are comprised of other components, including labels, input fields, labels, checkboxes, radio buttons, and text.

A benefit of a form is that users can see what information they must provide. Conversely, too many fields can discourage the user.

Inline forms are better than modals in cases where you don't want to block users from performing other actions.

</div>
</div>

### Tabs

<div class="clr-row">
<div class="clr-col-4">
<ClrImage title="A common navigation layout with tabs." src="/images/foundation/app-layout/tabs.png" />
</div>
<div class="clr-col-8">

[Tabs](/components/tab) appear in a single, non-scrollable row, at the top of the content area. They are good for breaking content into separate, related views.

Tabs are not appropriate if users need to compare data across views.

</div>
</div>

### White Space and Typography

<div class="clr-row">
<div class="clr-col-4">
<ClrImage title="Good application layouts use whitespace and typography to convey hierarchy." src="/images/foundation/app-layout/typography.png" />
</div>
<div class="clr-col-8">

White space and [typography](/foundation/typography) are important elements in conveying hierarchy. These elements direct users to what they should view next and make the content and data easier to parse. They also helps bring consistency to an app.

</div>
</div>

### Button Placement

In the content area, buttons are left-aligned, with the primary button in the leftmost position. This placement supports the F-pattern layout.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Left-alignment puts buttons closest to the content" src="/images/foundation/app-layout/do_button_alignment.png" align="center"/>
Left-alignment puts buttons closest to the content.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="On the right, buttons might appear separate from content" src="/images/foundation/app-layout/dont_button_alignment.png" align="center" />
On the right, buttons might appear separate from content.
</div>

</div>

### Using Vertical Rhythm for Layout

Vertical rhythm is the repetition of spatial relationships in a design. A consistent rhythm gives elements a uniform and balanced placement in a design. The more consistent the design, the easier it is for users to read and understand.

### The Clarity Baseline is 24px

All elements in Clarity are _designed_ with a 24px baseline:

- The visual height of all components and text elements is in multiples of 24px.
- The vertical white space between elements is also in multiples of 24px.

<ClrImage title="Image showing how the 24 pixel baseline is used to provide vertical height and visual white space in an application layout." src="/images/foundation/app-layout/24_baseline.png" />

### Repeat 24px in Your Layout

Design the vertical margins and padding between elements using the Clarity baseline. A multiple of 24px can be a whole or half-ratio. Common numbers include: 6px, 12px, 18px, 24px, 30px, 36px, 42px, 48px, 54px, 60px, 66px, 72px.

## Code & Examples

Clarity layouts and components are _designed_ with a "24px baseline". This means that the visual size of our components is expressed in clean multiples of 24.

But starting with version 3.0, the Clarity CSS _code's_ rem values are derived from a root font-size of 20px!

Why the difference?

### Rem Sizing

In its underlying code, the Clarity styles had to move away from a root font-size of 24px for a couple of reasons:

- 24px was not a clean multiple of many common sizes. 1px, for example, had to be derived from 0.04166667rem. 16px, likewise, had a measurement of 0.6666667rem. The lack of clean multiples left us at the mercy of browsers rounding out our values. This introduced inconsistency across browsers and sloppy line rendering in many cases.
- Early styling decisions before Clarity 1.0 broke expected browser sizing preferences and negatively impacted the accessibility of Clarity for some users.

The changes to "rem" sizing in Clarity addresses both of those concerns. But there are a few caveats to keep in mind.

### Design remains at 24px, underlying code is at 20px

The visual baseline for our design system remains 24px with a base grid of 6px. _For designers using the Clarity Design System, nothing has changed_.

Developers, however, must convert 24px based designs to a system that uses 20px at its core.

### Converting from old 24px-based styles to new 20px based styles

First and most importantly, you do not need to do _anything_ if your application does not use rem values or percentages that rely on Clarity's default root font-size.

If you do, however, rely on the rem sizing available in Clarity, there are a number of options available to update the old code to the new rem sizing.

### Set hard pixel values (Not recommended)

If you are already setting hard pixel values outside of Clarity, no change is needed on your part. Setting hard pixel values is not recommended, however, because it breaks accessibility and browser text resizing features.

### Update your rem values

If you are using rem values outside of Clarity, you can update them by either:

- multiplying them by 1.2 – so a value of `1.4rem` in a SASS file becomes `1.2 * 1.4rem`
- doing the math upfront and updating rem values in place – so that `1.4rem` becomes `1.68rem`

### What if I can't do this right now?

If you would prefer to update Clarity to version 3.x and cannot update the sizes in your application that rely on Clarity's baseline, you can override the `$clr-baseline-denominator` SASS variable. Setting it to `24` ignores the baseline changes, putting everything back to the pre-3.0 24px baseline.

Clarity implemented this workaround to make the transition to 3.0 easier on our users, allowing them to take on the work of updating their rem sizes at their own pace if they need to. Note that this should be consider a temporary workaround, however, not a long-term solution. There is no guarantee that this override will be supported beyond 3.0.

### Customizing the root font-size

Clarity uses [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units) for its whitespace and sizing. If the 24px vertical baseline is too large or too small for your needs, you can edit this globally across a Clarity application by changing the `font-size` style of the `html` element, as in the example below.

<doc-code>
<<< .vuepress/code/demos/app-layout/custom-rem-size.css
</doc-code>

Note that the declaration on the `html` selector needs to happen _after_ the Clarity CSS has been loaded. Also note that the "grid" for Clarity layouts and components is equal to one-fourth of the baseline. So instead of a 6px grid, the example above will put your application on a 5px grid.
