---
title: Overview
toc: true
---

The Clarity Icons presents pixel-perfect, scalable SVG-based icons. The icon system gives you complete control over icon color, orientation, and size. Additionally, you can access and customize any SVG graphic elements inside the icon through standard CSS.

## Usage

Follow the instructions in the web components getting [started page](/web-components/get-started) to install the @cds/core package.

### Import

To start rendering svg shaps or providing custom svg shapes, import the icon with the icon service

<doc-code>

```typescript
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);
```

</doc-code>

### Instantiate

Add an icon element to the application templates as needed and specify a registered shape.

<doc-code>

```html
<cds-icon shape="user"></cds-icon>
```

</doc-code>

Browse and search the collection of [shapes](/foundation/icons/shapes) to see what Clarity ships with.

### Customize

Applications can provide their own custom svg shapes if the icon library that ships with Clarity doesn't have exactly what it needs. You need to provide a unique shape name and the svg for its shape.

<doc-code>

```typescript
ClarityIcons.add({ 'my-custom-icon': '<svg ... >[your SVG code goes here]</svg>' });
```

</doc-code>

Once the custom shape is added, use it just like any other icon.

<doc-code>

```html
<cds-icon shape="my-custom-shape"></cds-icon>
```

</doc-code>

## Behavior

### Icon size:

By default, the size for Clarity Icons is 16 by 16 pixels, and you have two ways of customizing this default value. One is through the use of the size attribute; the other is manually customizing the width and height values in your icon's style.

The size attribute takes a string number or one of the standard Clarity t-shirt sizes.

#### The CDS-ICON size attribute

<doc-demo>
!!!include(.vuepress/public/core-usage-demos/icon/size-attr.html)!!!
</doc-demo>

#### The style attribute (CSS)

<doc-demo>
!!!include(.vuepress/public/core-usage-demos/icon/size-style.html)!!!
</doc-demo>

### Rotation:

The default rotation for every shape in Clarity Icons is 0 degrees. With directional icons such as arrows and carets, 0 degrees means it points up. To rotate an icon to another direction, specify that either in the shape or dir attribute. Alternatively, you can set the rotation values in the icon's style attribute.

#### Use the CDS-ICON direction attribute

<doc-demo>
!!!include(.vuepress/public/core-usage-demos/icon/rotate-attr.html)!!!
</doc-demo>

#### Use the style attribute

<doc-demo>
!!!include(.vuepress/public/core-usage-demos/icon/rotate-style.html)!!!
</doc-demo>

### Flips:

You can flip icons horizontally or vertically through the use of the flip attribute.

<doc-demo>
!!!include(.vuepress/public/core-usage-demos/icon/flip.html)!!!
</doc-demo>

### Icon Colors

Clarity Icons also come with predefined colors using the `status` attribute.
Colors are described as:

- **highlight**: use this color when you want to draw attention to the icon
- **danger**: use this color when you want to show errors or make the user pause and evaluate when they see this icon
- **warning**: use this color when you want the user to proceed with caution
- **success**: use this color when you want the user to know something is correct
- **info**: use this color when you want the user to be informed

<doc-demo>

!!!include(.vuepress/public/core-usage-demos/icon/colors.html)!!!

</doc-demo>

There is also `inverse` attribute, which is suitable for icons used on darker backgrounds.

<doc-demo>

!!!include(.vuepress/public/core-usage-demos/icon/inverse-color.html)!!!

</doc-demo>

### Badges and Variants:

Clarity Icons come with variants for badges that add visual indicators to the badge, where applicable.

#### Badge shapes and colors

- **info (circle)** - use this variant when you want the icon to inform
- **success (circle)** - use this variant when you want the icon to show something is correct
- **danger (circle)** - use this variant when you want this icon to show something is incorrect
- **warning (circle)** - use this variant when you want to show something needs caution
- **warning (triangle)** - use this variant when you want to show something needs caution
- **danger (triangle)** - use this variant when you want this icon to show something is incorrect

**Note**: not all icons support all variants. Check the details for specific [shapes](/foundation/icons/shapes) to see the variants that it supports.

<doc-demo>

!!!include(.vuepress/public/core-usage-demos/icon/badges.html)!!!

</doc-demo>
