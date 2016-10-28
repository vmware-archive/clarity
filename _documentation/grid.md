---
title: Grid
permalink: /documentation/grid
layout: documentation
---

{: .component-summary }
#### A grid provides a structure of rows and columns for aligning content. Grids are useful because they help create a familiar and easily navigable structure for content.

Clarity uses the [Bootstrap 4 Flex Grid](http://v4-alpha.getbootstrap.com/layout/grid/).  This is a 12-column, responsive grid, per the Bootstrap documentation shown here:

<div class="row">
    <div class="col-xs-12">
        <table class="table">
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
                    <td class="left"><544px</td>
                    <td class="left">≥544px</td>
                    <td class="left">≥768px</td>
                    <td class="left">≥992px</td>
                    <td class="left">≥1200px</td>
                </tr>
                <tr>
                    <td class="left">Class prefix</td>
                    <td class="left"><code class="clr-code">.col-xs-</code></td>
                    <td class="left"><code class="clr-code">.col-sm-</code></td>
                    <td class="left"><code class="clr-code">.col-md-</code></td>
                    <td class="left"><code class="clr-code">.col-lg-</code></td>
                    <td class="left"><code class="clr-code">.col-xl-</code></td>
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
    </div>
</div>

### Rows

A <code class="clr-code">.row</code> is a horizontal group of 12 columns. When the number of columns exceeds 12, the extra columns wrap to the next line.

### Columns

The column classes specify the number of columns per row.  The value appended to the class prefix must be between 1 and 12.

<clr-grid-demo-columns></clr-grid-demo-columns>

### Column Stacking

Grid columns can occupy different widths on different device sizes.

In the example below, if the device size is ≥ 768px (medium or above), the grid has two columns of equal width and a third column that occupies the entire width of the row.  For device sizes < 768px, each column occupies the entire width of the row and the columns are stacked. Resize your browser to see how this works.

<clr-grid-demo-column-stacking></clr-grid-demo-column-stacking>

### Column Offsets

The <code class="clr-code">&lt;class-prefix&gt;-offset-*</code> classes increase a column’s left margin by the width occupied by `*` number of columns.
<clr-grid-demo-column-offsetting></clr-grid-demo-column-offsetting>

### Column Ordering

The <code class="clr-code">push</code> and <code class="clr-code">pull</code> modifiers change the order of columns.

#### Push

<clr-grid-demo-column-push></clr-grid-demo-column-push>

#### Pull

<clr-grid-demo-column-pull></clr-grid-demo-column-pull>

### Flexbox Grid Auto Layout

Using the <code class="clr-code">.col-&lt;breakpoint&gt;</code> class divides the row into equal width columns.

<clr-grid-demo-auto-layout-1></clr-grid-demo-auto-layout-1>

<clr-grid-demo-auto-layout-2></clr-grid-demo-auto-layout-2>

### Vertical Alignment in Rows

Columns within a row can be vertically aligned using the following classes:

- <code class="clr-code">flex-items-xs-top</code>
- <code class="clr-code">flex-items-xs-middle</code>
- <code class="clr-code">flex-items-xs-bottom</code>

<clr-grid-demo-vertical-alignment></clr-grid-demo-vertical-alignment>

A column can individually be vertically aligned in a row using the following classes:

- <code class="clr-code">flex-xs-top</code>
- <code class="clr-code">flex-xs-middle</code>
- <code class="clr-code">flex-xs-bottom</code>

<clr-grid-demo-individual-vertical-alignment></clr-grid-demo-individual-vertical-alignment>

### Horizontal Alignment in Rows

To align columns horizontally within a row, extend the row with one of the following classes:

- <code class="clr-code">flex-items-xs-left</code>
- <code class="clr-code">flex-items-xs-center</code>
- <code class="clr-code">flex-items-xs-right</code>
- <code class="clr-code">flex-items-xs-around</code>
- <code class="clr-code">flex-items-xs-between</code>

<clr-grid-demo-horizontal-alignment></clr-grid-demo-horizontal-alignment>

{% comment %}
    Design guidelines start here...
{% endcomment %}

Clarity recommends that your application layout stay on the grid.  A grid-based approach:

{: .list}
- Aligns content consistently
- Establishes a foundation that can be easily built upon for future designs
- Simplifies layout decisions required of a designer
- Coordinates the efforts of multiple designers

#### Applying the Grid

Apply the grid with consideration of content. Some pages might benefit from a three-column layout, where other pages might work best with a two-column layout.

You can vary the column layout within the same page.  This strategy works well for presenting content that scrolls vertically.

Don't lock your design into a layout optimized for a large window.

#### Grids and Card Layouts

Designing to a grid is especially important for card layouts.  Cards contains blocks of content and their height and width can vary.  The grid aligns the cards in a way that is easy for users to navigate.

#### If You Decide Not to Conform to the Grid

Do so with intent. Find a balance between aesthetics and conformity. Keep in mind that elements that are not aligned to the grid draw attention in the same way as color, contrast, and iconography and require more cognitive effort on the part of the user.
