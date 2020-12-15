---
title: Overview
toc: true
---

::: component-summary

Themes help you customize the look and feel of your application.

:::

::: component-section-level-one-title

## Establish your brand with Clarity

:::

:::component-section-level-one

<div class="clr-row">
<div class="clr-col">

<ClrImage width="100%" alt="Color Theming" src="/images/foundation/themes/theme-branding.svg" />

Match a company or client’s unique brand identity with **color theming** at **many different levels of granularity** allowing for customization at an application or component level.

</div>
<div class="clr-col">

<ClrImage width="100%" alt="Clarity Icons API" src="/images/foundation/themes/theme-icons.svg" />

**Font customization** and the [Clarity Icons API](/foundation/icons/api) offer the power to reinforce identity at the most fundamental levels of user experience.

</div>

<div class="clr-col">

<ClrImage width="100%" alt="Theme information density" src="/images/foundation/themes/theme-info.svg" />

Depending on users’ expectations, different applications may require different degrees of **information density**. Clarity themes can be adjusted to make an application as **sparse or compact** as it needs to be.

</div>
</div>

:::

::: component-section-level-one-title

## Theme Guidelines

:::

:::component-section-level-one

Themes offer a great deal of flexibility — which can be both a good and bad thing. The Clarity team has put continued effort towards **accessibility** and the intentional **use of color** so that our end users can add great value to their products with minimal investment.

**But theming can put some of those benefits at risk**. Please review the following guidelines before building a custom theme.

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6">

<h3>Use color responsibly</h3>

Use colors that reinforce your brand but in a way that is pleasing.

Save saturated or bright colors in your palette for highlights. And use them sparingly to highlight actions or content.

Harsh colors can cause eye strain for users over time. Avoid using too many bright, neon colors and avoid using highly saturated/bold colors as backgrounds over large areas of content.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-do" cds-layout="m-t:lg">
<ClrImage class="doc-example" title="Do use brand colors in a pleasing manner" src="/images/foundation/themes/theme-responsability.svg" align="center" />
Use brand colors in a pleasing manner
</div>

</div>

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6">

<h3>Communicate with color</h3>

Consider using color to communicate meaning to users. Using colors like red for warning or danger and green for success or preferred actions reinforces your user experience.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont" cds-layout="m-t:lg">
<ClrImage class="doc-example" title="Don't use brand colors irrespective of what the color communicates to users" src="/images/foundation/themes/theme-comms.svg" align="center" />
Don't use brand colors irrespective of what the color communicates to users
</div>

</div>

:::component-section-level-two-title

### Create visual hierarchy

:::

:::component-section-level-two

Darker colors recede while lighter and brighter colors push forward. Be mindful of this when working with brand colors to create a custom theme.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Use light and dark colors to reinforce visual hierarchy" src="/images/foundation/themes/theme-visual-do.svg" align="center" />
Use light and dark colors to reinforce visual hierarchy.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Draw attention to the wrong items with the use of color" src="/images/foundation/themes/theme-visual-dont.svg" align="center" />
Draw attention to the wrong items with the use of color.
</div>

</div>

Color draws visual focus. Visual hierarchy can be re-inforced or circumvented. Be specfic to where a design guides vidual focus. Observe an unintended effect in the example above where the content in the cards and the datagrid recede into the background while the sidenav and the header draw the visual attention away from the data.

:::

:::component-section-level-two-title

### Avoid extreme color combinations

:::

:::component-section-level-two

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6">

Avoid extreme light-on-dark and dark-on-light color combinations that could contribute to eye strain.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont" cds-layout="m-t:lg">
<ClrImage class="doc-example" title="Don't use color combinations that may cause eye-strain" src="/images/foundation/themes/theme-color-combos.svg" align="center" />
Don't use color combinations that may cause eye-strain
</div>

</div>

:::

:::component-section-level-two-title

### Be Accessible

:::

:::component-section-level-two

Clarity’s color palette is WCAG AA compliant, meaning all color combinations of text-on-background meet the standard for color accessibility for our users. Use [the WebAIM Color Contrast Checker tool](//webaim.org/resources/contrastchecker/) to test text and background colors when deciding how a brand’s color palette will be used in an application.

All of the text/background combinations on the Clarity Color Palette page are tested for WCAG AA compliance.

:::
