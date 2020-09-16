---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrDatagrid

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>...</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagrid" item="bindings" />

#### Methods

<DocComponentApi component="ClrDatagrid" item="methods" />

### ClrDatagridActionBar

Use this component to project buttons with functionality that operate on multiple items at once. There are no
Bindings or methods for this class.

#### Selector & Basic Usage

<doc-code>

```html
<clr-dg-action-bar><clr-dg-action-bar></clr-dg-action-bar></clr-dg-action-bar>
```

</doc-code>

### ClrDatagridActionOverflow

Declare this component inside of the `clr-dg-row` element. It is used to project row specific actions that
operate on a single row item.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  ...
  <clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item">
    <clr-dg-action-overflow (clrDgActionOverflowOpenChange)="openChangeFn($event)">
      <button class="action-item">
        <clr-icon shape="note"></clr-icon>
        Action
      </button>
    </clr-dg-action-overflow>
  </clr-dg-row>
  ...
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridActionOverflow" item="bindings" />

### ClrDatagridColumn

#### Selector & Basic Usage

<doc-code>

```html
<clr-dg-column></clr-dg-column>
```

</doc-code>

The ClrDgatagridColumn is used to project column header content, declare the property on the model that relates to a
column and declare filters, sorting as well as if it can be hidden by the user.

#### Bindings

<DocComponentApi component='ClrDatagridColumn' item='bindings' />

### ClrDatagridFilter

Declares the filter component to be applied on the container (clr-dg-column) element. This is only needed when
creating and applying custom filters to a column.

<!-- @TODO: Add in docs for clr-dg-string-filter and clr-dg-numeric-filter -->

#### Selector & Basic Usage

##### Inline View

<doc-code>

```html
<-- In the columns declaration -->
<clr-dg-column>
  My column
  <clr-dg-filter [clrDgFilter]="myFilter">
    <-- The HTML from your custom filter: inputs, checkboxes, ... -->
  </clr-dg-filter>
</clr-dg-column>
```

</doc-code>

<doc-code>

```javascript
import { ClrDatagridFilterInterface } from '@clr/angular';

class MyFilter implements ClrDatagridFilterInterface<User> {
  changes = new Subject<any>();
  isActive(): boolean {
    /* ... */
  }
  accepts(user: User) {
    /* ... */
  }
}

@Component({
  /* ... */
})
class MyComponent {
  public myFilter = new MyFilter();
}
```

</doc-code>

##### Encapsulated View

<doc-code>

```html
<clr-dg-filter [clrDgFilter]="myFilter">
  <my-reusable-filter></my-reusable-filter>
</clr-dg-filter>

<clr-dg-filter [clrDgFilter]="myFilter">
  <-- The HTML for custom view with myFilter -->
</clr-dg-filter>
```

</doc-code>

<doc-code>

```javascript
import { ClrDatagridFilterInterface, ClrDatagridFilter } from '@clr/angular';

@Component({
  selector: 'my-filter',
})
class MyFilter implements ClrDatagridFilterInterface<User> {
  constructor(private filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }
  changes = new Subject<any>();
  isActive(): boolean {
    /* ... */
  }
  accepts(user: User) {
    /* ... */
  }
}
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridFilter" item="bindings" />

#### Methods

<DocComponentApi component="ClrDatagridFilter" item="methods" />

### ClrDatagridRow

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-row *clrDgItems="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
  </clr-dg-row>
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridRow" item="bondings" />

### ClrDatagridCell

This class is used to project cell content into. Content can be simple textual content or complex DOM structure.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-row *ngFor="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
  </clr-dg-row>
</clr-datagrid>
```

</doc-code>

### ClrDgFooter

This class contains a layout for the following features: non-interactive icon that appears when rows are selected, a
toggle button for the hide/show control when one or more columns are hideable and a slot for the pagination
component. Any other projected content will be displayed in the description slot.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-row *clrDgItems="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
  </clr-dg-row>
  <clr-dg-footer>
    {{ users.length }} Users
  </clr-dg-footer>
</clr-datagrid>
```

</doc-code>

### ClrDatagridPagination

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-row *clrDgItems="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
  </clr-dg-row>
  <clr-dg-footer>
    <clr-dg-pagination #pagination [clrDgPageSize]="10">
      {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
    </clr-dg-pagination>
  </clr-dg-footer>
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridPagination" item="bindings" />

### ClrDatagridPageSize

Child component of pagination. Used to set the page size for pagination calculations.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-row *clrDgItems="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
  </clr-dg-row>
  <clr-dg-footer>
    <clr-dg-pagination #pagination [clrDgPageSize]="10">
      <clr-dg-page-size [clrPageSizeOptions]="[10,20,50,100]">Users per page</clr-dg-page-size>
      {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
    </clr-dg-pagination>
  </clr-dg-footer>
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridPageSize" item="bindings" />

### ClrDatagridPlaceholder

Content projected into this component appears only when the datagrid is empty.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <!-- columns, rows, footer, etc declared -->
  <clr-dg-placeholder></clr-dg-placeholder>
</clr-datagrid>
```

</doc-code>

### ClrDatagridDetail

Use this to project the details view when a row has master/detail enabled.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <!-- columns, rows, footer, etc declared -->
  <clr-dg-detail *clrIfDetail="let detail">
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</clr-datagrid>
```

</doc-code>

## Angular Directives

{.section-header}

### ClrDatagridHideableColumn

This is a structural directive that seperates on the column it is declared on. When at least one column is hidable the
datagrid displays UI controls to hide and show the columns that have this directive declared. Note: it accepts the
{ hidden: boolean } object when presetting the hidden or shown state.

#### Selector & Basic Usage

Note, the object passed to the directive was a design decision to make it explicit what was being set. This separates the declaration of the feature from the (hidden) state of the feature.

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>
    <ng-container *clrDgHideableColumn="{hidden: false}">
      User ID
    </ng-container>
  </clr-dg-column>
  <!-- placeholder, rows, footer, etc declared -->
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridHideableColumn" item="bindings" />

### ClrDatagridItems

For datagrids that can supply all of the items on page load there is a structural directive that lets us handle all
of the data processing needed for filters, sorting and pagination. The TrackByFunction is optional.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
    <clr-dg-row *clrDgItems="let user of users; trackBy: myTrackByFunction"">
        <clr-dg-cell>{{user.id}}</clr-dg-cell>
    </clr-dg-row>
    <!-- placeholder, rows, footer, etc declared -->å
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridItems" item="bindings" />

### ClrIfDetail

Structural directive that creates the detail view after a user activates it with the row button.
Use it on the clr-dg-detail element and use the let keyword to declare a template variable for it.

#### Selector & Basic Usage

<doc-code>

```html
<clr-datagrid>
  <!-- columns, rows, footer, etc declared -->
  <clr-dg-detail *clrIfDetail="let detail">
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</clr-datagrid>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrIfDetail" item="bindings" />

## Interfaces

{.section-header}

### ClrDatagridStateInterface

The meta information about the datagrid model that is passed to the server in order to get a slice of the data.
It contains a page object for paging state, a filters array with the filter object and a object that describes how
the data gets sorted.

#### Basic Usage

<doc-code>

```javascript
interface ClrDatagridStateInterface<T = any> {
  page?: {
    from?: number,
    to?: number,
    size?: number,
    current?: number,
  };
  sort?: {
    by: string | ClrDatagridComparatorInterface<T>,
    reverse: boolean,
  };
  filters?: any[];
}
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDatagridStateInterface" item="interface" />

### ClrDatagridComparatorInterface

An interfaced used when creating a custom comparator. Use it to implement custom sorting for a columns. It must implement the
compare method described below.

#### Methods

<DocComponentApi component="ClrDatagridComparatorInterface" item="interface" />

##### ClrDatagridComparatorInterface Notes

(T)ype is the type that describes a row of data for the items in the datagrid. It should handle undefined cases for
both arguments along with the cases where a is sorted before b and b is sorted before a. When none of those cases
applies it should return 0 (e.g the unsorted case).
