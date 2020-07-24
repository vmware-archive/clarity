---
title: Overview
toc: true
---

A table displays information in a grid of rows and columns providing a method of organizing information in way that facilitates comparisons to discover patterns and insights.

## Usage

Use the table styles wherever you need to present static data in a tabular format. For advanced features like sorting, filtering, pagination etc. see [Datagrid.](/documentation/datagrid)

## Code Examples

### Basic Tables

Tables take up the full width of their container. Values in table cells are center-aligned by default.

<doc-demo file="/demos/table/basic.html"></doc-demo>

### Left-Aligned Table Cells

Values within cells can be left-aligned by adding the `.left` classname to the table cell.

<doc-demo file="/demos/table/left-align.html"></doc-demo>

### Multiline Table Cells

Table cells automatically wrap text.

<doc-demo file="/demos/table/multiline.html"></doc-demo>

### Non-Bordered Tables

Tables can be displayed without borders by using the `.table-noborder` classname.

<doc-demo file="/demos/table/borderless.html"></doc-demo>

### Compact Tables

Table row heights can be reduced with the `.table-compact` classname.

<doc-demo file="/demos/table/compact.html"></doc-demo>

### Vertical Tables

Using the `.table-vertical` classname orients the table vertically. The left-most column serves as the table header. The left-most cell can be either a `td` or `th` element.

Cells in a vertical table default to left alignment. We have no use cases for center alignment at this time.

<doc-demo file="/demos/table/vertical.html"></doc-demo>
