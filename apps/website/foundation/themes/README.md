---
title: Overview
toc: true
---

## Theming in Clarity Core

Clarity Core is based on a system of design tokens and aliases. This allows many theming functions to be achieved with a simple switch of the token or re-assinment of an alias. The Clarity Core dark theme accomplishes a complete switch from light mode to dark using this method and is contained in about 50 lines of code. Simple themes can be created using this approach. For more complex themes where there are changes in sizes, spacing, and layout, as well as aspects like typeface and type scale, the complexity increases.

### Simple themes

Simple themes are built much like the Clarity Core dark theme, by remapping aliases. With a large palette of global colors, a complete set of sizing increments, and clearly named attributes such as --cds-global-border-radius a different look and feel can be achieved relatively easily.

### Complex themes

A complex theme is one where a simple remapping of an alias is insufficient to achieve the desired results. This could be because brand colors are not contained in the global palette, or because a different typeface or type scale is needed, Creating such advanced themes creates many areas where careful attention is required.

## Theme attributes

### Type

The benefit of switching the typeface is enormous. There is no more effective way to make a substantial change to the appeal of an application. Switching out the typeface is in itself a simple task, but weighing the ramifications is more complex. Even substantially similar typefaces will have differing horizontal spacing causing lines to wrap in different ways and this may lead to unexpected results especially within components. Testing a typeface thoroughly across the entire system is essential for a refined and successful theme.

Simple:

At the primary level you continue to use the Clarity type classes with all their size and space attributes as-is. This will be the least intrusive, resulting in the smallest layout and spacing changes, but will still require a lot of attention to detail via a full system audit.

Complex:

At a more complex level one may also adjust the size and space attributes of one or more type classes. This will lead to many more areas where careful attention is needed for assessment of consequences.

### Color

Identifying colors by their usage is best practice for assesing changes and their ramifications when you want to create a theme that uses different colors than are used in Clarity Core.

- Status - semantic I.e. action / success / warning / danger - also used as modifiers on icons
- Decorative - badge and label (tag)
- Interaction styles
- Construction - lines for making containers
- Type including links - normal / clicked / visited

Semantic color known as status-color in Clarity Core uses a 3 color system - there is a primary color and a tint (lighter) and a shade (darker). These 3 are selected from the scales in the Clarity Global Tokens. By examining the logic behind the selection and use of these 3 main colors in any Clarity theme their relationship will be apparent. A common use is for the main color to define the solid border around a container, while the tint is used for the light background and the shade is used for the hover state. These will differ in light and dark themes.

To build a theme you will at a minimum need to define the mapping [all of these aliases](../color) which will offer to Clarity color tokens.

### Sizes and space

Clarity uses a `space` token system for specifying the sizes within components, and a ‘layout-space’ system for controlling the space between components. These give powerful control not only of individual components with regard to how they are sized, but also to the way the fit together to create a complete screen. Changing any of the spacing tokens, while a powerful way to globally adjust the way your application uses whitespace, is also very advanced and requires a great deal of attention to detail in order to avoid unintended consequences.

### Corners and shadows

Adjusting border radius and shadow density and distance can create a substantial change in visual appeal and is less difficult than other adjustments since the domino effect of possible consequences in virtually non-existent.

## Advanced theming

### Altering base colors

The Clarity color system uses aliases to semantically define the usage of colors in your application. Changing the color an alias points to as described above is a simple level of changing the appeal of your application. This is also limited to the Clarity color set as defined in the global tokens file. Should you wish to have other colors to choose from the base values must be changed. These consist of 11 values each described as 50-100-200-300-400-500-600-700-800-900-1000 (light to dark) for each for the following colors described by their base HUE in HSL:

Status

- (Success) Green - 93
- (Action) Blue - 198
- (Secondary Action) Violet - 282
- (Warning) Ochre (hue shift 41-35)
- (Danger) Red - 9

Utility

- Lavender -238
- Azure - 211
- Aqua -184
- Jade - 160
- Yellow (hue shift 40-50)
- Tangerine - 25
- Magenta - 345
- Pink -324

Muted

- WarmGray - 282
- CoolGray - 211
- Slate - 238
- Ice - 211
- Tan - 41

Construction

- Construction - 198

Changing this set will create a (color only) theme, and if done with extreme care may not require the changing of any aliases. Beware that this set was carefully chosen to work with the aliases and results in fully accessible components in every case. While it may be tempting to shift only the HUE and allow the scales of lightness and saturation to remain as-is, it is important to remember that different hues result in different luminance levels with the same lightness and saturation, and consequently will not have the same a11y values as one another. To preserve a11y, the scales will not always be able to retain the increments in the Clarity Core globals. Shifting the base color tokens may end up being a large project all said and done, in order to ensure everything is working properly.

### Altering Type Classes

Simple:

At the primary level you continue to use the Clarity type classes with all their size and space attributes as-is. This will be the least intrusive, resulting in the smallest layout and spacing changes, but will still require the attention to detail as mentioned previously via a full system audit.

Complex:

At a more complex level one may also adjust the size and space attributes of one or more type classes. This will lead to many more areas where careful attention is needed for assessment of consequences.
How do we document dealing with line height eraser for switching font for theming?

We need to describe the problem, the solution, and the trajectory of technology that makes this a non-issue in the future. This should include what teams need to do in the short term / if they should wat / what will happen when technology catches up etc. (Links good).

Recommendation:
Switching themes as a testing method.

The ideal way to go about creating a Clarity theme once the above has been thoroughly understood, is to begin with singular adjustments and using these to create a style sheet that can be previewed easily. By checking your work step-by-step, and running an in browser accessibility check such as (XYZ) you can ensure that Bothe your aesthetic and a11y needs are proceeding as desired. When the theme is behaving as desired it is time to make changes to (alias token - I am not sure exactly about what I should recommend here) and being building an application with your theme for real. Remember to test test test. A11y is always a very important factor and when colors shift they can cross the line from compliant to non-compliant quite easily.

## Submission and Publishing

Where do themes belong and where are they appropriate?

Once you have an attractive and useful Clarity theme that meets accessibility requirements it is time to submit it to the Clarity team. Once properly validated we will be happy to include your theme as an available theme for some Clarity users. Not all? Yes - because Clarity is first and foremost a design system for use by VMware products, not all themes will be appropriate for consistency and branding. Clarity requires that themes used by VMware are appropriate for the company / brand and consistency. As an open source project, Clarity themes may have many uses outside of VMware and proliferation of themes in the open source community is another consideration all together.

View more information about [working with the Clarity team](../../get-started/).
