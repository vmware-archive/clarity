---
title: Usage
---

### Set icon size:

By default, the size for Clarity Icons is 16 by 16 pixels, and you have two ways of customizing this default value. One is through the use of the size attribute; the other is manually customizing the width and height values in your icon's style.

```html
<!--A. SETTING THE SIZE THROUGH CLR-ICON SIZE ATTRIBUTE-->
<clr-icon shape="info-circle" size="12"></clr-icon>
<clr-icon shape="info-circle" size="16"></clr-icon>
<clr-icon shape="info-circle" size="36"></clr-icon>
<clr-icon shape="info-circle" size="48"></clr-icon>
<clr-icon shape="info-circle" size="64"></clr-icon>
<clr-icon shape="info-circle" size="72"></clr-icon>

<!--B. SETTING THE SIZE IN STYLE ATTRIBUTE-->
<clr-icon shape="info-circle" style="width: 12px; height: 12px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 16px; height: 16px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 36px; height: 36px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 48px; height: 48px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 64px; height: 64px;"></clr-icon>
<clr-icon shape="info-circle" style="width: 72px; height: 72px;"></clr-icon>
```

_Both of the methods above will produce this result:_

### Rotate icons:

The default rotation for every shape in Clarity Icons is 0 degrees. With directional icons such as arrows and carets, 0 degrees means it points up. To rotate an icon to another direction, specify that either in the shape or dir attribute. Alternatively, you can set the rotation values in the icon's style attribute.

```html
<!--A. SETTING THE ROTATION DIRECTION THROUGH CLR-ICON SHAPE ATTRIBUTE-->
<clr-icon shape="caret up"></clr-icon>
<clr-icon shape="caret right"></clr-icon>
<clr-icon shape="caret down"></clr-icon>
<clr-icon shape="caret left"></clr-icon>

<!--B. SETTING THE ROTATION DIRECTION THROUGH CLR-ICON DIR ATTRIBUTE-->
<clr-icon shape="caret" dir="up"></clr-icon>
<clr-icon shape="caret" dir="right"></clr-icon>
<clr-icon shape="caret" dir="down"></clr-icon>
<clr-icon shape="caret" dir="left"></clr-icon>

<!--C. SETTING THE ROTATION DIRECTION IN STYLE ATTRIBUTE-->
<clr-icon shape="caret" style="transform: rotate(0deg);"></clr-icon>
<clr-icon shape="caret" style="transform: rotate(90deg);"></clr-icon>
<clr-icon shape="caret" style="transform: rotate(180deg);"></clr-icon>
<clr-icon shape="caret" style="transform: rotate(270deg);"></clr-icon>
```

_All three methods above will produce this result:_

### Flip icons:

You can flip icons horizontally or vertically through the use of the flip attribute.

```html
<clr-icon shape="floppy"></clr-icon>
<clr-icon shape="floppy" flip="horizontal"></clr-icon>
<clr-icon shape="floppy" flip="vertical"></clr-icon>
```

### Make Icons Accessible:

Add a custom title to your icon using the `title` attribute. Adding a title improves the accessibility of the icon, making it recognizable by screen readers. Title attribute also helps you to localize your Icon.

```html
<clr-icon shape="copy" title="Copy Document"></clr-icon>
```

### Predefined Clarity color classes for icons:

Clarity Icons also come with predefined color classes.

```html
<clr-icon shape="info-circle"></clr-icon>
<clr-icon shape="info-circle" class="is-highlight"></clr-icon>
<clr-icon shape="info-circle" class="is-error"></clr-icon>
<clr-icon shape="info-circle" class="is-warning"></clr-icon>
<clr-icon shape="info-circle" class="is-success"></clr-icon>
<clr-icon shape="info-circle" class="is-info"></clr-icon>
```

There is also `is-inverse` color class, which is suitable for icons used on darker backgrounds.

```html
<clr-icon shape="info-circle" class="is-inverse"></clr-icon>
```

### Display variant icons:

Clarity Icons come with variants of each icon where applicable. Variants may include:

- **Badged icons** have a small dot in the top right corner
- **Alerted icons** have a triangle in the top right corner
- **Solid icons** are filled in as opposed to the default outlined style
- **Combinations.** Such as: _solid + badged_ and _alerted + badged_

Class name

What it does

`.is-solid`

Replaces the default outlined style of the icon with a filled-in solid version for icons that have a solid version.

`.has-alert`

Causes a small yellow triangle to appear in the top right corner of an icon that supports it.

`.has-badge`

Causes a small dot to appear in the top right corner of an icon that supports badging. By default, this dot is red.

`.has-badge--success`

Causes a small green dot to appear in the top right corner of an icon that supports badging.

`.has-badge--error`

Causes a small red dot to appear in the top right corner of an icon that supports badging.

`.has-badge--info`

Causes a small blue dot to appear in the top right corner of an icon that supports badging.

Displaying an icon variant only requires adding a CSS class to your `clr-icon` element. Applicable classes are listed below.

```html
<clr-icon shape="user"></clr-icon>
<clr-icon shape="user" class="has-alert"></clr-icon>
<clr-icon shape="user" class="has-badge"></clr-icon>
<clr-icon shape="user" class="is-solid"></clr-icon>
<clr-icon shape="user" class="is-solid has-alert"></clr-icon>
<clr-icon shape="user" class="is-solid has-badge"></clr-icon>
<clr-icon shape="user" class="is-solid has-badge--success"></clr-icon>
```

### Manipulate the inline SVG graphic elements via CSS

After adding `clr-icon` in your HTML, check it with a web inspection tool. You will find that SVG elements are injected inside the `clr-icon` tag that responsible for drawing the icon.

You can individually select any of these SVG graphic elements and stylize them through CSS. For easier access to the individual graphic parts of the icon, each piece of the glyph has a unique number identifier. For example, `.clr-i-outline-path-3` targets the third path in the outlined version of an icon.

There are also a couple of common CSS classes that can help you target common elements. `.clr-i-badge` targets the round dot in badged icons. Likewise, `.clr-i-alert` targets the yellow triangle in alerted icons. Both of these classes work across solid and outlined icons.
