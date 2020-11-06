---
title: Themes
toc: true
---

Themes help you customize the look and feel of your application.

## Establish your brand with Clarity

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

## Default Themes

Clarity offers two default themes — light and dark. These themes can be used without modification to optimize user experience or they can be used as a guideline for creating custom themes in Clarity.

<div class="clr-row">
<div class="clr-col">

<ClrImage width="100%" alt="Light Theme" src="/images/foundation/themes/theme-light.svg" />

**Light Theme**

Light theme is Clarity’s default. It is best suited to **content-rich applications** where users will be working with the application in **well-lit conditions** for brief periods of time throughout the day. Light theme can help prevent eye strain in applications where a user is expected to **read a large amount of content** — like documentation or a blog.

</div>
<div class="clr-col">

<ClrImage width="100%" alt="Dark Theme" src="/images/foundation/themes/theme-dark.svg" />

**Dark Theme**

Dark theme is best suited for applications that are **content-sparse, yet highly interactive**. A dark theme can help with eye strain if a user works with an application over a long span of time but in a way that requires **focus but not a great amount of reading**.

</div>
</div>

## Theme Guidelines

Themes offer a great deal of flexibility — which can be both a good and bad thing. The Clarity team has put continued effort towards **accessibility** and the intentional **use of color** so that our end users can add great value to their products with minimal investment.

**But theming can put some of those benefits at risk**. Please review the following guidelines before building a custom theme.

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6">

### Use color responsibly

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

### Communicate with color

Consider using color to communicate meaning to users. Using colors like red for warning or danger and green for success or preferred actions reinforces your user experience.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont" cds-layout="m-t:lg">
<ClrImage class="doc-example" title="Don't use brand colors irrespective of what the color communicates to users" src="/images/foundation/themes/theme-comms.svg" align="center" />
Don't use brand colors irrespective of what the color communicates to users
</div>

</div>

### Create visual hierarchy

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

### Avoid extreme color combinations

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-6">

Avoid extreme light-on-dark and dark-on-light color combinations that could contribute to eye strain.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont" cds-layout="m-t:lg">
<ClrImage class="doc-example" title="Don't use color combinations that may cause eye-strain" src="/images/foundation/themes/theme-color-combos.svg" align="center" />
Don't use color combinations that may cause eye-strain
</div>

</div>

### Be Accessible

Clarity’s color palette is WCAG AA compliant, meaning all color combinations of text-on-background meet the standard for color accessibility for our users. Use [the WebAIM Color Contrast Checker tool](//webaim.org/resources/contrastchecker/) to test text and background colors when deciding how a brand’s color palette will be used in an application.

All of the text/background combinations on the Clarity Color Palette page are tested for WCAG AA compliance.

## Code & Examples

Clarity UI ships with two css files, `clr-ui.min.css` for the light theme and `clr-ui-dark.min.css` for the dark theme. You can consume either one of these files and have a fully light or dark-themed Clarity application. If you already use `@clr/ui` in your project there is nothing more you need to do. If you want to switch over to the dark theme use one of the examples below to modify your build process and consume the `clr-ui-dark.min.css` code.

### Angular CLI Builds

Consume the dark theme code in `clr-ui-dark.min.css` by adding it to your styles array in the `angular.json` file.

<doc-code>
<<< .vuepress/public/demos/themes/angular.json
</doc-code>

### Webpack Builds

Modify your `webpack.config.js` entry styles to consume the new `clr-ui-dark.min.css`

<doc-code>
<<< .vuepress/public/demos/themes/webpack.js
</doc-code>

## Custom Themes

If you need to customize components for your application we suggest starting with either the light theme or the dark theme and overriding variables from there to suit your customizations.

### Two Ways to Theme Clarity

With the 3.0 release, there are two ways to theme Clarity: _SASS variables_ and _CSS custom properties_. The recommended way to theme Clarity is through [CSS Custom Properties](//developer.mozilla.org/en-US/docs/Web/CSS/--*).

After the release of Clarity 4.0, SASS based theming will no longer work in Clarity.

<cds-alert-group status="danger" type="default">
<cds-alert>SASS-based theming is deprecated in Clarity 3.0 and will no longer work when Clarity 4.0 is released. It is recommended that you convert your themes to use CSS custom properties for the 4.0 release in Spring of 2020.</cds-alert>
</cds-alert-group>

### SASS-based Theming

SASS-based theming is most familiar to those who use SASS/SCSS in their own products to build CSS stylesheets. SASS acts like a superset of CSS that enables convenient nesting syntax and programming-like functionality in a CSS-based language that compiles to CSS. SASS also gives developers variables they can reuse throughout their SASS codebase.

Clarity has a number of such variables. The [\_variables.clarity.scss](https://github.com/vmware/clarity/blob/master/packages/angular/projects/clr-angular/src/utils/_variables.clarity.scss) file in the Clarity project can serve as a directory for where all of the variable files can be found.

It is these variables that we override in SASS to build out a new CSS file for our theme.

- Light Theme Base
- Dark Theme Base

In order to customize the Clarity light theme you will need to build with the Clarity SCSS and overwrite the SCSS variables that set the look-n-feel for each component you need to customize. You will need to build your applications CSS output with Clarity's SCSS.

#### Remove Clarity CSS from your build configuration

First, since we are going to be creating custom component styles the first step is to remove all of the Clarity css from your build process.

<doc-code>

```javascript
"styles": [
      ...
      "./node_modules/@clr/icons/clr-icons.min.css",
      ...
]
```

</doc-code>

#### Add (or modify) your applications main.scss file

Next, we need to include the the application scss variable overrides and the Clarity component styles. This example shows one way of adding the Clarity dependencies and component styles based on standard `npm` installation into a `node_modules` directory of the project. In this example the `styles.scss` file lives at the top of a standard angular-cli application `src` folder.

<doc-code>

```css
// Your Application Theme File
@import './theme.scss';

// Clarity Component SCSS
@import '../node_modules/@clr/ui/src/utils/components.clarity';
```

</doc-code>

### Why is SASS-based theming going away?

Once the Clarity Angular library begins to integrate the web components from Clarity Core, SASS-based theming will no longer work. The Clarity Core web components are encapsulated within the shadow DOM. Changes to the CSS at the global level will not be able to affect shadow DOM encapsulated web components through any means outside of CSS custom properties.

### CSS Custom Properties

CSS custom properties are a specification that defines a syntax that allows developers to define "variables" in their stylesheets whose values they can reuse and override. This is a huge improvement for CSS and greatly streamlines theming, as well as the management of complex stylesheets.

Additionally, CSS custom properties deliver a great deal of flexibility in how developers can implement themes for their applications. Dramatic visual changes can now be realized using CSS and leveraging the native cascade of stylesheets. CSS custom properties are also very simple to override in just a few lines of JavaScript.

For more information on using CSS custom properties, [see this article on MDN](//developer.mozilla.org/en-US/docs/Web/CSS/--*).

## Different Types of Theming

When doing research on how best to deliver a theming solution to our developer community, the Clarity team identified several primary use cases:

- Use of a non-default theme, like the dark theme, with no theme switching
- Switching between two themes, like a light/dark theme switcher
- Customized themes
- Dynamically switching an application between multiple theme options

### CSS Custom Property Dark Theme

After adopting custom properties, delivering a dark theme in Clarity no longer requires pointing to a separately built CSS file. Likewise, if your application relies on Clarity but needs a different color scheme, you'll no longer need to rebuild the Clarity CSS at build time.

Instead, you will redefine the clarity CSS custom properties and include the CSS in your application. [An example can be found here](//github.com/mathisscott/clarity-theming-starter/tree/clarity-css-dark-theme).

If you are already working with a SASS/SCSS file with Clarity SASS variables, clarity has made the conversion easy in that all previous sass variables can be changed to custom properties by replacing leading `$` with `--` in the variable name.

So, the previous SASS variable `$clr-alert-info-bg-color` would become a custom property of `--clr-alert-info-bg-color`. [This file on github](//github.com/mathisscott/clarity-theming-starter/blob/clarity-css-dark-theme/src/_dark-theme.scss) shows an example of what this looks like in practice.

### Theme Switching

A common use case for applications is giving users the ability to switch between predefined universal themes. An example would be switching between a light and a dark theme.

Before custom properties, this was accomplished by generating two completely different files containing all of the style definitions in Clarity. Each of these files were compiled separately with different SASS variables at their root. Through JavaScript, developers could then enable and disable the stylesheet they wanted to use.

While elements of this approach remain the same with custom properties, the cumbersome step of compiling and then forcing users to download multiple versions of the full Clarity stylesheet is no longer necessary.

Instead, our theme only contains the custom property values we want to change when a theme is selected.

An example of this kind of "theme switching" [can be found here in this github repository](//github.com/mathisscott/clarity-theming-starter/tree/clarity-css-dark-theme-switcher).

### Whitelabeling

Whitelabeling is a term that describes a product feature that allows end-users to change a minimal set of colors to aid with brand identity across a company's offerings. Typically, whitelabeling refers to the ability to change navigation or header colors and sometimes elements such as buttons.

This was incredibly difficult in Clarity prior to custom properties. Due to the aforementioned requirement that teams rebuild the clarity CSS in order to theme any part of it, there was not a good native solution for those seeking to whitelabel its components.

Because custom properties allows us to change just the styles that we want to override in normal CSS, [whitelabeling Clarity applications is far more streamlined](//github.com/mathisscott/clarity-theming-starter/tree/clarity-css-whitelabeling).

### Dynamic Whitelabeling

A feature that often walks hand-in-hand with whitelabeling is some sort of theme generator the customers can use to customize a product to their needs. Again, this is often limited to a subset of styles -- generally concerned with Color and navigation.

With the ease of accessing and updating CSS custom properties with JavaScript, this is also functionality that is far easier now in Clarity with custom properties. [Here is an example demonstrating a theme switcher that uses JavaScript to update CSS custom properties](//github.com/mathisscott/clarity-theming-starter/tree/clarity-css-whitelabel-switcher).

## IE11 Support

[CSS custom properties are supported in every major browser](//caniuse.com/#feat=css-variables) with the exception of Internet Explorer. If your product does not support this legacy Microsoft browser, then you do not need to read any further.

If, however, your product has not been able to stop supporting Internet Explorer, Clarity Core can offer some assistance.

### Setting up IE11 support

First, you will need to install Clarity Core and its dependencies:

<doc-code>

```bash
npm install @webcomponents/custom-elements @webcomponents/shadycss @webcomponents/webcomponentsjs ramda @cds/core
```

</doc-code>

### Using the polyfills

Once the dependencies are in a good place, you will need to import the `runCssVarsPolyfill` helper from `@cds/core`. This is what you will use to update the CSS custom properties in Internet Explorer.

### When to call the polyfills

[As demonstrated in this example](//github.com/mathisscott/clarity-theming-starter/blob/clarity-css-whitelabel-switcher/src/app/app.component.ts), you'll want to call `runCssVarsPolyfill()` whenever making a change to your custom properties. This includes if you are enabling or disabling stylesheets.

`runCssVarsPolyfill()` can accept an optional config object if you would like. We suggest [familiarizing yourself with the documentation of the `css-vars-ponyfill`](//jhildenbiddle.github.io/css-vars-ponyfill/#/) before passing in a custom configuration, however.

In most cases, the Clarity default configuration will be sufficient.
