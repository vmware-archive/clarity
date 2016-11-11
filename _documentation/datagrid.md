---
title: Datagrid
permalink: /documentation/datagrid
layout: documentation
---

{: .component-summary }
#### Datagrids are for organizing large volumes of data that users can scan, compare, and perform actions on.

<clr-datagrid-basic-structure-demo></clr-datagrid-basic-structure-demo>

<clr-datagrid-custom-rendering-demo></clr-datagrid-custom-rendering-demo>

<clr-datagrid-smart-iterator-demo></clr-datagrid-smart-iterator-demo>

<clr-datagrid-binding-properties-demo></clr-datagrid-binding-properties-demo>

<clr-datagrid-sorting-demo></clr-datagrid-sorting-demo>

<clr-datagrid-filtering-demo></clr-datagrid-filtering-demo>

<clr-datagrid-string-filtering-demo></clr-datagrid-string-filtering-demo>

<clr-datagrid-pagination-demo></clr-datagrid-pagination-demo>

<clr-datagrid-selection-demo></clr-datagrid-selection-demo>

<clr-datagrid-server-driven-demo></clr-datagrid-server-driven-demo>

<clr-datagrid-full-demo></clr-datagrid-full-demo>

### Usage

#### For Structured Content

Datagrids work best for structured, homogeneous content, where each object has the same attributes.  When common attributes are directly aligned in columns, users can quickly scan and compare them.

For data sets with a blend of text, images, and data visualizations, or content with mixed formatting, [cards]({{ site.baseurl }}/documentation/cards) offer a better layout.

#### For Large Volumes of Data

A datagrid is well-suited for presenting large volumes of data that don't fit on one page.  Users can filter and sort the data according to preference.

For smaller amounts of data (10 to 20 lines), datagrids are a relatively heavy component.  Use datagrids if:

- The data set will grow
- Users need search, filter, or batch operations

For a smaller volume of data, use a [table]({{ site.baseurl }}/documentation/tables).  Tables are a lighter-weight solution with a static view.
