---
title: Tables
permalink: /documentation/tables
layout: documentation
hideTab: true
---

{: .component-summary }
##### Use the table styles wherever you need to present static data in a tabular format.

### Basic Tables

Tables take up the full width of their container. Values in table cells are center-aligned by default.


<clr-tables-basic-demo></clr-tables-basic-demo>

### Left-Aligned Table Cells

Values within cells can be left-aligned by adding the
<code class="clr-code">.left</code> classname to the table cell.

<clr-tables-leftcell-demo></clr-tables-leftcell-demo>

### Multiline Table Cells

Table cells automatically wrap text.


<clr-tables-multiline-demo></clr-tables-multiline-demo>

### Non-Bordered Tables

Tables can be displayed without borders by using the
<code class="clr-code">.table-noborder</code> classname.

<clr-tables-noborder-demo></clr-tables-noborder-demo>

### Compact Tables

Table row heights can be reduced with the <codeclass="clr-code">.table-compact</code> classname.

<clr-tables-compact-demo></clr-tables-compact-demo>

### Compact, Non-Bordered Tables

The <code class="clr-code">.table-compact</code> and
<code class="clr-code">.table-noborder</code> classnames can be combined.

<clr-tables-compact-noborder-demo></clr-tables-compact-noborder-demo>

### Vertical Tables

Using the <code class="clr-code">.table-vertical</code> classname orients the table vertically.
The left-most column serves as the table header. The left-most cell can be either a
<code class="clr-code">td</code> or
<code class="clr-code">th</code> element.

Cells in a vertical table default to left alignment. We have no use cases for center alignment at this time.

<clr-tables-vertical-demo></clr-tables-vertical-demo>

### Vertical, Compact, Non-bordered Tables
<clr-tables-vertical-noborder-compact-demo></clr-tables-vertical-noborder-compact-demo>

### Table Container Widths

Tables can exist inside grid columns.

<clr-tables-width-demo></clr-tables-width-demo>
