---
title: Overview
toc: true
---

A table displays information in a grid of rows and columns providing a method of organizing information in way that facilitates comparisons to discover patterns and insights.

## Usage

Use the table styles wherever you need to present static data in a tabular format. For advanced features like sorting, filtering, pagination etc. see [Datagrid.](/angular-components/datagrid)

## Code & Examples

### Basic Tables

Tables take up the full width of their container. Values in table cells are center-aligned by default.

<doc-demo>
!!!include(.vuepress/public/demos/table/basic.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/table/basic.html
</doc-code>

### Left-Aligned Table Cells

Values within cells can be left-aligned by adding the `.left` classname to the table cell.

<doc-demo>
!!!include(.vuepress/public/demos/table/left-align.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/table/left-align.html
</doc-code>

### Multiline Table Cells

Table cells automatically wrap text.

<doc-demo>
!!!include(.vuepress/public/demos/table/multiline.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/table/multiline.html
</doc-code>

### Non-Bordered Tables

Tables can be displayed without borders by using the `.table-noborder` classname.

<doc-demo>
!!!include(.vuepress/public/demos/table/borderless.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/table/borderless.html
</doc-code>

### Compact Tables

Table row heights can be reduced with the `.table-compact` classname.

<doc-demo>
!!!include(.vuepress/public/demos/table/compact.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/table/compact.html
</doc-code>

### Vertical Tables

Using the `.table-vertical` classname orients the table vertically. The left-most column serves as the table header. The left-most cell can be either a `td` or `th` element.

Cells in a vertical table default to left alignment. We have no use cases for center alignment at this time.

<doc-demo>
!!!include(.vuepress/public/demos/table/vertical.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/table/vertical.html
</doc-code>
