---
title: API
toc: true
---

## Layout System

The layout system is implemented by using the `cds-layout` attribute on a given element to define the correct layout styling for that element.

Each use of `cds-layout` has a few common rules that allow you to mix and match to build extremely complex layouts without any custom CSS. Virtually all layouts can be built using just the layout attribute.

The `cds-layout` attribute accepts any combination of values, and is used to define styles at both the container and item level. For example, imagine a vertical layout container with 3 items (header, body, footer). The container is the element that hosts all three of these elements, and the items are each individual part. Here is a basic hierarchy of how `cds-layout` can help. Here we only place it on the container and let the layout control the flow.

```html
<div cds-layout="vertical">
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</div>
```

However, we might also want to define the header and footer as sticky at the top and bottom, and allow the main content area to scroll. This assumes you have a max-height set to the viewport on the content, but we can do this easily!

```html
<div cds-layout="vertical align:stretch">
  <header cds-layout="p:md">...</header>
  <main cds-layout="horizontal align:vertical-stretch">...</main>
  <footer cds-layout="p:md">...</footer>
</div>
```

### Containers Types

These properties can apply to any horizontal layout container and it will cascade the rules down to all children (unless overridden at the item level). Applying one of these values into the attribute is what makes something a layout container, and all of its direct children will become items.

| Value                     | Effect                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `cds-layout="horizontal"` | Basic use to define all children as horizontal layout, items will wrap once they fill the horizontal space      |
| `cds-layout="vertical"`   | Basic use to define all children as vertical layout, items will always stack on top of each other down the page |
| `cds-layout="grid"`       | Basic use to define all children as grid layout, will need to define each item's columns                        |

### Container Modifiers

These properties can be added to the layout containers to change various properties of the items inside of them.

| Value                                | Effect                                                                                                                                          |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `cds-layout="horizontal gap:md"`     | Adds a gap between all items, any size token can be used from `xxs` to `xxl`                                                                    |
| `cds-layout="horizontal wrap:none"`  | Disabled wrapping of elements, useful for overflow scrolling cases                                                                              |
| `cds-layout="horizontal align:top"`  | Allows you to align items relative to the container, values include `align:top`, `align:left`, `align:bottom`, `align:right`, `align:center`    |
| `cds-layout="horizontal align:fill"` | Stretch the items to fill the initial width, values include `align:fill`, `align:horizontal-stretch`, `align:vertical-stretch`, `align:stretch` |

### Item Modifiers

These properties apply to children items inside of a horizontal container, and allows you to set specific rules for individual items or override the defaults of the container.

| Value                     | Effect                                                                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `cds-layout="align:top"`  | Allows you to align items relative to the container, values include `align:top`, `align:left`, `align:bottom`, `align:right`, `align:center`    |
| `cds-layout="align:fill"` | Stretch the items to fill the initial width, values include `align:fill`, `align:horizontal-stretch`, `align:vertical-stretch`, `align:stretch` |
| `cds-layout="col:3"`      | In a grid layout only, you can define the column width of each item in the grid, based on the default grid size (usually 12 columns)            |

### Margin and Padding

Using `cds-layout` you can apply margins and paddings to any element, regardless if it is a layout container or item. This is the best way to position items when there are needs to manage spacing.

| Value                 | Effect                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `cds-layout="m:sm"`   | Apply margin around the whole item, use sizing tokens                                                                 |
| `cds-layout="m-t:sm"` | Apply margin to the top of the item, can also be `m-t`, `m-b`, `m-r`, or `m-l` for directions, use sizing tokens      |
| `cds-layout="p:sm"`   | Apply padding inside whole item, use sizing tokens                                                                    |
| `cds-layout="p-t:sm"` | Apply padding inside the top of the item, can also be `p-t`, `p-b`, `p-r`, or `p-l` for directions, use sizing tokens |

### Responsive Modifiers

Any modifier can be used with responsive breakpoints to change layout options as the screen size changes. For example, you might have a grid that has two columns that are 3 and 9 columns wide respectively, but at the mobile size you might want to stack them as both being 12 columns wide. You might also want to change the padding or margin on elements as the screen size changes.

The anatomy of a responsive modifier is `{modifier}@{breakpoint}:{value}`. The `{modifier}` is any property listed above, followed by the `@` symbol and the `{breakpoint}` as defined as any of the defined sizes (`xxs` to `xxl`). Finally the `{value}` is the value of the modifier to set at that breakpoint. To help illustrate this, here are several examples.

| Value                                     | Effect                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `cds-layout="gap@sm:sm gap@md:lg"`        | At layouts of below `sm`, no gap. Between `sm` and `md`, gap of `sm` width. Above `md` the gap is `lg`.                  |
| `cds-layout="col:12 col@md:6"`            | Column width for an item is by default 12 (full width) for mobile but at `md` width and above it goes to 6 columns wide. |
| `cds-layout="align:left align@md:center"` | Item alignmentis by default left, but at `md` width and above will center                                                |
