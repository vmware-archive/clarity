---
title: Overview
toc: true
---

## Usage

A grid provides a structure of rows and columns for aligning content. Grids are useful because they help create a familiar and easily navigable structure for content.

Clarity extends the 12-column Bootstrap 4 Flex Grid and prefixes the grid classes with clr-. Prefixing allows us to avoid conflicting with other grid systems. However, it also means if you are familiar with the grid classes in Bootstrap 4, the Clarity grid will be familiar.

Important features about the grid are listed below:

<table class="table hidden-xs-down">
<thead>
<tr>
    <th class="left"></th>
    <th class="left">Extra Small</th>
    <th class="left">Small</th>
    <th class="left">Medium</th>
    <th class="left">Large</th>
    <th class="left">Extra Large</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="left">Grid behavior</td>
    <td class="left">Horizontal</td>
    <td class="left" colspan="4">Collapsed to start, horizontal above breakpoints</td>
</tr>
<tr>
    <td class="left">Container width</td>
    <td class="left">&lt;576px</td>
    <td class="left">≥576px</td>
    <td class="left">≥768px</td>
    <td class="left">≥992px</td>
    <td class="left">≥1200px</td>
</tr>
<tr>
    <td class="left">Class prefix</td>
    <td class="left"><code class="clr-code">.clr-col-</code></td>
    <td class="left"><code class="clr-code">.clr-col-sm-</code></td>
    <td class="left"><code class="clr-code">.clr-col-md-</code></td>
    <td class="left"><code class="clr-code">.clr-col-lg-</code></td>
    <td class="left"><code class="clr-code">.clr-col-xl-</code></td>
</tr>
<tr>
    <td class="left">Number of columns</td>
    <td class="left" colspan="5">12</td>
</tr>
<tr>
    <td class="left">Gutter width</td>
    <td class="left" colspan="5">24px (12px on the left and right of column)</td>
</tr>
<tr>
    <td class="left">Nestable</td>
    <td class="left" colspan="5">Yes</td>
</tr>
<tr>
    <td class="left">Offsets</td>
    <td class="left" colspan="5">Yes</td>
</tr>
<tr>
    <td class="left">Column order</td>
    <td class="left" colspan="5">Yes</td>
</tr>
</tbody>
</table>

## Grid Behavior

Horizontal for extra-small. All other breakpoints are collapsed to start, then horizontal above the breakpoint.

## Common Properties

- Number of columns: 12
- Gutter width: 24px (12px on the left and right of column)
- All columns support nesting, offsets, and column order

<table class="table-vertical table">
<tr>
    <th>
        Extra small<br/> &lt; 576px
    </th>
    <td>
        <code class="clr-code">.clr-col-</code>
    </td>
</tr>
<tr>
    <th>
        Small<br/> &ge; 576px
    </th>
    <td>
        <code class="clr-code">.clr-col-sm-</code>
    </td>
</tr>
<tr>
    <th>
        Medium<br/> &ge; 768px
    </th>
    <td>
        <code class="clr-code">.clr-col-md-</code>
    </td>
</tr>
<tr>
    <th>
        Large<br/> &ge; 992px
    </th>
    <td>
        <code class="clr-code">.clr-col-lg-</code>
    </td>
</tr>
<tr>
    <th>
        Extra large<br/> &ge; 1200px
    </th>
    <td>
        <code class="clr-code">.clr-col-xl-</code>
    </td>
</tr>
</table>

## Rows

A `.clr-row` is a horizontal group of 12 columns.

## Columns

The column classes specify the number of columns per row. The value appended to the class prefix must be between 1 and 12.

<doc-demo>
!!!include(.vuepress/code/demos/grid/column-1-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/column-1-ng.html
</doc-code>

<doc-demo>
!!!include(.vuepress/code/demos/grid/1-12-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/1-12-ng.html
</doc-code>

## Column Stacking

Grid columns can occupy different widths on different device sizes.

In the example below, if the device size is ≥ 768px (medium or above), the grid has two columns of equal width and a third column that occupies the entire width of the row. For device sizes < 768px, each column occupies the entire width of the row and the columns are stacked. Resize your browser to see how this works.

<doc-demo>
!!!include(.vuepress/code/demos/grid/col-stack-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/col-stack-ng.html
</doc-code>

## Column Wrapping

Placing more than 12 columns in a single row will wrap the columns exceeding the row, as one unit, onto a new line.
<doc-demo>
!!!include(.vuepress/code/demos/grid/col-wrapping-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/col-wrapping-ng.html
</doc-code>

## Flexbox Grid Layout

### Equal Width

Using the `.clr-col-*` class divides the row into equal width columns.

<doc-demo>
!!!include(.vuepress/code/demos/grid/flex-grid-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/flex-grid-ng.html
</doc-code>

### Setting One Column Width

A specific width can be assigned to a column. All the siblings of that columns will automatically resize around it.
<doc-demo>
!!!include(.vuepress/code/demos/grid/1-col-width-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/1-col-width-ng.html
</doc-code>
<doc-demo>
!!!include(.vuepress/code/demos/grid/1-col-width-auto-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/1-col-width-auto-ng.html
</doc-code>

### Variable Width Content

Using the `.clr-col-*-auto` class on a column sizes it based on the width of its content.
<doc-demo>
!!!include(.vuepress/code/demos/grid/variable-width-content-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/variable-width-content-ng.html
</doc-code>

### Multi Row

Using the `.clr-break-row` class after a column, breaks the following columns to a new line.
<doc-demo>
!!!include(.vuepress/code/demos/grid/multi-row-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/multi-row-ng.html
</doc-code>

## Column Offsets

The responsive `clr-offset-*` classes increase a column’s left margin by \* number of columns.
<doc-demo>
!!!include(.vuepress/code/demos/grid/col-offset-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/col-offset-ng.html
</doc-code>

## Vertical Alignment in Rows

Columns within a row can be vertically aligned using the following responsive classes:

- clr-align-items-\*-start
- clr-align-items-\*-center
- clr-align-items-\*-end

<doc-demo>
!!!include(.vuepress/code/demos/grid/vert-align-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/vert-align-ng.html
</doc-code>

A column can individually be vertically aligned in a row using the following responsive classes:

- clr-align-self-\*-start
- clr-align-self-\*-center
- clr-align-self-\*-end
  <doc-demo>
  !!!include(.vuepress/code/demos/grid/self-align-css.html)!!!
  </doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/self-align-ng.html
</doc-code>

## Horizontal Alignment in Rows

To align columns horizontally within a row, extend the row with one of the following responsive classes:

- clr-justify-content-\*-start
- clr-justify-content-\*-center
- clr-justify-content-\*-end
- clr-justify-content-\*-around
- clr-justify-content-\*-between

<doc-demo>
!!!include(.vuepress/code/demos/grid/horizontal-alignments-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/horizontal-alignments-ng.html
</doc-code>

### Grid Nesting

<doc-demo>
!!!include(.vuepress/code/demos/grid/grid-nesting-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/grid/grid-nesting-ng.html
</doc-code>

## Usage

Clarity recommends that your application layout stay on the grid. A grid-based approach:

- Aligns content consistently
- Establishes a foundation that can be easily built upon for future designs
- Simplifies layout decisions required of a designer
- Coordinates the efforts of multiple designers

### Applying the Grid

Apply the grid with consideration of content. Some pages might benefit from a three-column layout, where other pages might work best with a two-column layout.

You can vary the column layout within the same page. This strategy works well for presenting content that scrolls vertically.

Don’t lock your design into a layout optimized for a large window.

### Grids and Card Layouts

Designing to a grid is especially important for card layouts. Cards contains blocks of content and their height and width can vary. The grid aligns the [cards](/angular-components/card) in a way that is easy for users to navigate.

### Custom Grids

**If You Decide Not to Conform to the Grid**
Do so with intent. Find a balance between aesthetics and conformity. Keep in mind that elements that are not aligned to the grid draw attention in the same way as color, contrast, and iconography and require more cognitive effort on the part of the user.
