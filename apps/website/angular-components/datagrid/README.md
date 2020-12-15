---
title: Overview
toc: true
---

A datagrid is a presentation of data in a table which enables the user to perform actions upon the entries which are organized in rows, with columns for each attribute.

## Usage

Datagrids are for organizing large volumes of data that users can scan, compare, and perform actions on.

- Do not use a datagrid when you need to present static data - this is what tables are for.
- Do not use a datagrid when you require hierarchy within the data - tree tables a.k.a hierarchical datagrids are not supported by Clarity because of usability and accessibility issues.

## Content

A datagrid is well-suited for presenting large volumes of data that don’t fit on one page. Users can filter and sort the data according to preference.

For smaller amounts of data (10 to 20 lines), datagrids are a relatively heavy component. Use datagrids if:

- The data set will grow
- Users need search, filter, or batch operations
- For a smaller volume of data, use a [table](/angular-components/table). Tables are a lighter-weight solution with a static view..

For data sets with a blend of text, images, and data visualizations, or content with mixed formatting, [cards](/angular-components/card/) offer a better layout.

## Code & Examples

### Basic Structure

To use our Datagrid, you do not need to pass an array of data or a JSON configuration to a single element. Instead, we leverage a pure declarative API, just like any other Angular component. You write your HTML just as you would for a basic table, with a `*ngFor` (or `*clrDgItems`, see Smart iterator below) on the rows to iterate over your data.

<ClrImage title="basic structure" src="/images/angular-components/datagrid/datagrid-basic-structure.png" :align="'center'" :width="864" />

<doc-code>
<<< .vuepress/code/demos/datagrid/basic-structure.html
</doc-code>

### Custom Cell Rendering

The contents of datagrid cells or column headers can be as complex as you need them to be, with nested components and interpolation (define nested components and interpolation for designers)

Because we use a declarative API, simply projecting your HTML inside our components' templates, you have complete control over what we display. The contents of datagrid cells or column headers can be as complex as you need them to be, with nested components and interpolation.

<doc-code>
<<< .vuepress/code/demos/datagrid/custom-rendering.html
</doc-code>

### Smart Iterator

If you want to let us handle all the data processing needed by our various features, you will need to use `*clrDgItems` instead of `*ngFor`. They have the exact syntax and behave the same way, but the former lets us have full control what is actually being displayed. As you can see in the following example it doesn't change anything for our simple case, but it will as soon as we start adding features like sorting, filtering, pagination, etc.,

<doc-code>
<<< .vuepress/code/demos/datagrid/smart-iterator.html
</doc-code>

### Binding Properties

For an easy setup of datagrid column features, you can simply specify the property to bind it to in your model. When you do, the column will benefit from all built-in features for this case: sorting based on the natural comparison, filtering using either of the built-in filters, and anything else we might add in the future. You can bind to as deep a property as you want in your model, using a standard dot-separated syntax: `[clrDgField]="'my.deep.property'"`

You can also see in the following example how every feature we offer is always opt-in: we did not declare any binding on the "User ID" column, which means it is not sortable or filterable.

By default, bound columns are assumed to contain string-like contents and the user is presented with the normal string filter. If you know that the contents of the column will be numeric, you can instead use the built-in numeric range filter by adding `[clrDgColType]="'number'"`. You can see an example of this in the "Wins" column.

<DocVideo src="/images/angular-components/datagrid/datagrid-binding-properties.mp4" :width="874" :autoplay="true"></DocVideo>

<doc-code>
<<< .vuepress/code/demos/datagrid/binding-properties.html
</doc-code>

<cds-alert-group status="warning" type="default">
<cds-alert>In this example, the <code class="clr-code">[clrDgField]</code> input is a hard-coded string, so it needs to be quoted twice: <code class="clr-code">[clrDgField]="'name'"</code>.</cds-alert>
<cds-alert>Another way to write this would be <code class="clr-code">clrDgField="name"</code>, without having the extra quotes, but we do not recommend this. In particular, this leaves a potentially unwanted attribute on the element, whereas the previous syntax only adds a property to the corresponding Javascript object.</cds-alert>
</cds-alert-group>

### Custom Sorting

Sometimes, the natural sort order for a property is not the relevant one. Sometimes, a column is not even a property on your model but is dynamically generated instead. In these cases, you might want to specify a custom comparator to sort the column according to your needs. This can be done by providing a comparator through the `[clrDgSortBy]` input, whether or not your column is declared as a clrDgField, and will always take precedence over it if it is.

A comparator is just an object that implements a `compare` method that could be given as parameter to Javascript's native `Array.sort()` function. In other words, if a and b are two elements being compared, then:

- if compare(a, b) is less than 0, a comes first,
- if compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all other items,
- if compare(a, b) is greater than 0, b comes first.
  The safest way to check that your types comply with our API is to have your comparator be an instance of a class that implement the `ClrDatagridComparatorInterface`{.clr-code} interface provided by Clarity.

<strong>Why use an object instead of the function directly?</strong>
<cds-alert-group status="warning" type="default">
<cds-alert>Using an object implementing an interface allows strong type-checking, which is safer for your application.If your sorting function does not comply with our API, you will get a clear error during typescript compilation, instead of an obscure one during runtime.</cds-alert>
<cds-alert>Admittedly, we could achieve strong typing by exporting a function signature instead of a whole interface, but not only do interfaces leave room for future features without forcing breaking changes, they also encourage you to write your business logic outside of the controller, naturally creating pure Typescript or Javascript "logic" classes, which are far more reusable.</cds-alert>
</cds-alert-group>

In our example, everyone knows pokemon **should not** be sorted lexicographically, but according to Pokédex number.

<DocVideo src="/images/angular-components/datagrid/datagrid-custom-sorting.mp4" :width="876" :autoplay="true"></DocVideo>

<doc-code>

```javascript
import { ClrDatagridComparatorInterface } from '@clr/angular';

class PokemonComparator implements ClrDatagridComparatorInterface<User> {
  compare(a: User, b: User) {
    return a.pokemon.number - b.pokemon.number;
  }
}

@Component({
  /* ... */
})
class MyComponent {
  public pokemonComparator = new PokemonComparator();
}
```

</doc-code>

<doc-code>

```html
<!-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'" [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>
```

</doc-code>

#### Pre-Sorted Columns

Columns can be pre-sorted ascending or descending by declaring the `clrSortOrder` input on `clr-dg-column`. You must also provide the `[clrDgField]` so it knows what field in the provided object to sort on. Clarity provides an enum for such a scenario: `ClrDatagridSortOrder`

Here is an example that presorts the **Name** column for descending sort order.

<doc-code>

```javascript
import {ClrDatagridSortOrder} from '@clr/angular';
...
@Component({ /* ... */ })
class MyComponent {
    this.descSort = ClrDatagridSortOrder.DESC;
}
```

</doc-code>

<doc-code>

```html
<clr-dg-column [clrDgField]="'name'" [clrDgSortOrder]="descSort">Name</clr-dg-column>
```

</doc-code>

### Custom Filtering

Similarly to the advanced sorting features, sometimes the default filter on a string property is not what you need. When this is the case you can write your own filter, with fully custom template and controller, and both wrap it in and pass it to a `<clr-dg-filter>` component in your column declaration. This can be done whether or not your column is declared as a clrDgField, and will always take precedence over it if it is.

The filter you provide to the `<clr-dg-filter>` component needs to implement the ClrDatagridFilterInterface interface provided by Clarity:

<doc-code>

```javascript
interface ClrDatagridFilterInterface<T, S = any> {
  isActive(): boolean;
  accepts(item: T): boolean;
  changes: Observable<any>;
  readonly state?: S;
  equals?(other: ClrDatagridFilterInterface<T, any>): boolean;
}
```

</doc-code>

There are several ways to pass your filter to the `<clr-dg-filter>` component:

- The simplest, but less reusable way, is to simply inline your filter's template in the column and use the `[clrDgFilter]` input to pass your filter instance:

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

<doc-code>

```html
<!-- In the columns declaration -->
<clr-dg-column>
  My column
  <clr-dg-filter [clrDgFilter]="myFilter">
    <-- The HTML from your custom filter: inputs, checkboxes, ... -->
  </clr-dg-filter>
</clr-dg-column>
```

</doc-code>

- A more reusable way is to write an actual component for your custom filter, and inject its DatagridFilter parent in its constructor so that it can register itself:

<doc-code>

```javascript
import { ClrDatagridFilterInterface, ClrDatagridFilter } from '@clr/angular';

@Component({
  selector: 'my-filter',
  /* ... */
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

<doc-code>

```html
<!-- In the columns declaration -->
<clr-dg-column>
  My column
  <clr-dg-filter>
    <my-filter></my-filter>
  </clr-dg-filter>
</clr-dg-column>
```

</doc-code>

- Finally, if you want to have a completely reusable filter independently of our Datagrid, you can write a component for it and use a template reference variable to declare the filter to its container:

<doc-code>

```javascript
@Component({
  selector: 'my-reusable-filter',
  /* ... */
})
class MyReusableFilter {
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

<doc-code>

```html
<!-- In the columns declaration -->
<clr-dg-column>
  My column
  <clr-dg-filter [clrDgFilter]="myFilter">
    <my-reusable-filter #myFilter></my-reusable-filter>
  </clr-dg-filter>
</clr-dg-column>
```

</doc-code>

In our example, we can create "color picker" filter, rather than have to search by color name.

<DocVideo src="/images/angular-components/datagrid/datagrid-custom-filtering.mp4" :width="872" :autoplay="true"></DocVideo>

<doc-code>

```javascript
import { ClrDatagridFilterInterface } from '@clr/angular';

@Component({
  selector: 'color-filter',
  /* The rest of the filter component's declaration */
})
class ColorFilter implements ClrDatagridFilterInterface<User> {
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

<doc-code>

```html
<!-- In the columns declaration -->
<clr-dg-column>
  Favorite color
  <clr-dg-filter [clrDgFilter]="colorFilter">
    <color-filter #colorFilter></color-filter>
  </clr-dg-filter>
</clr-dg-column>
```

</doc-code>

By default, filtering searches the original model value for matches. In cases where you format the text for display (such as using a pipe), you may want to create a custom filter to handle searching the formatted text. Otherwise, the results you see may not be filtered in the way you expect.

<doc-code>

```html
<clr-datagrid>
  <!--
      This will search into user.creation (a Date object) and not the result
      of the pipe (the string 'Jan 6, 2018').
    -->
  <clr-dg-column [clrDgField]="'creation'">Creation Date</clr-dg-column>

  <!--
      This will search into user.name and will not include user.id searching for user.id will not return any results.
    -->
  <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>

  <clr-dg-row *ngFor="let user of users">
    <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
    <clr-dg-cell>{{ user.id }} : {{ user.name }}</clr-dg-cell>
  </clr-dg-row>
</clr-datagrid>
```

</doc-code>

In the example above you will need to go with custom filters that will take into account the data that the user sees is the same that he is searching into.

#### Preset Column Filters

You can use a preset filter on columns to initialize the data grid to a specific filtered state. `[(clrFilterValue)]` can be pre-set.

<doc-code>

```html
<!-- Using clrFilterValue declaration -->
<clr-dg-column [clrDgField]="'name'" [(clrFilterValue)]="myFilterValue">
  Name
</clr-dg-column>
```

</doc-code>

### Built-in Filters

Before reading this, you should make sure you read the previous section on custom filters. Done? Then you might be a bit overwhelmed by the complexity of custom filters, understandably. What if you want just a bit more than default string value filters, but phenomenal cosmic filter power turns out to be slightly overkill? This is where our built-in custom filters come handy. They let you customize specific parts of the filter like the filter matching function, without having to rewrite the whole thing yourself from two-way binding inputs to integration in the datagrid.

#### String Filter

The first and default filter is the "string" filter one, meaning the user is offered a text input, and the rows will be filtered based on a string-matching function you provide. You should now be familiar with our use of interfaces for this, so here is the interface your string matcher should implement:

<doc-code>

```javascript
interface ClrDatagridStringFilterInterface<T> {
  accepts(item: T, search: string): boolean;
}
```

</doc-code>

Once you have it, you simply need to pass it to a `<clr-dg-string-filter>` component:

<doc-code>

```html
<!-- In the columns declaration -->
<clr-dg-column>
  My column
  <clr-dg-string-filter [clrDgStringFilter]="myFilter"></clr-dg-string-filter>
</clr-dg-column>
```

</doc-code>

In our example, we can allow the user to filter not only by pokemon name, but also by entering the exact number of the pokemon they are interested in.

#### Numeric filter

Another built-in filter is the numeric filter, which allows you to filter a column by a minimum and/or maximum numeric value. The "Wins" column demonstrates the numeric filter. You provide the function logic and the user can optionally enter high and low limits for elements in the column. In this case, use a `<clr-dg-numeric-filter>` component and pass the filter to the `[clrDgNumericFilter]` property.

<doc-code>

```javascript
interface ClrDatagridNumericFilterInterface<T> {
  accepts(item: T, low: number, high: number): boolean;
}
```

</doc-code>

<doc-code>

```html
<clr-dg-column>
  Wins
  <clr-dg-numeric-filter [clrDgNumericFilter]="winsFilter"></clr-dg-numeric-filter>
</clr-dg-column>
```

</doc-code>

In the example below, we are implementing the string filter on pokemons' names.

<doc-code>

```javascript
import { ClrDatagridStringFilterInterface } from '@clr/angular';

class PokemonFilter implements ClrDatagridStringFilterInterface<User> {
  accepts(user: User, search: string): boolean {
    return '' + user.pokemon.number == search || user.pokemon.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  /* ... */
})
class MyComponent {
  private pokemonFilter = new PokemonFilter();
}
```

</doc-code>

#### Filters with preset values

You can use a preset filter with either of the built-in filters to initialize the data grid to a specific state. `[(clrFilterValue)]` can be pre-set to a string for a string filter or a range of numbers for a numeric filter. With numeric filters you can pass null for either of the limits to not set it. The example below sets a lower limit of 10 and no upper limit.

<doc-code>

```html
<!-- Using clrFilterValue declaration -->
<clr-dg-string-filter [clrDgStringFilter]="pokemonFilter" [(clrFilterValue)]="myFilterValue"> </clr-dg-string-filter>
<clr-dg-numeric-filter [clrDgNumericFilter]="winsFilter" [clrFilterValue]="[10, null]"> </clr-dg-numeric-filter>
```

</doc-code>

<cds-alert-group status="warning" type="default">
<cds-alert>We are planning on writing more of these semi-customisable filters in future releases, including a filter where the user selects values among the ones that are actually present in the data. If the one you are looking for isn't implemented yet, you can absolutely write it yourself using the fully customisable filters. And if you think it's good, feel free to contribute back to Clarity and add it for everyone!</cds-alert>
</cds-alert-group>

### Pagination

The Clarity datagrid supports pagination because the point of a datagrid is to display large amounts of data, and it often can't be displayed all at the same time on the page.

To activate pagination on your datagrid, you simply need to add a `<clr-dg-pagination>` component in your datagrid's footer. This component exposes many of properties, most of them are bindable, to help you interact with it. You can optionally include a clr-dg-page-size component to bind a list of options to display for toggling the number of items per page.

Here is an example of how to use pagination, and attach a template reference variable to it to display information on the current page.

<DocVideo src="/images/angular-components/datagrid/datagrid-pagination.mp4" :width="876" :autoplay="true"></DocVideo>

<doc-code>

```html
<!-- Inside the full datagrid declaration -->
<clr-dg-footer>
  <clr-dg-pagination #pagination [clrDgPageSize]="10">
    <clr-dg-page-size [clrPageSizeOptions]="[10,20,50,100]">Users per page</clr-dg-page-size>
    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
  </clr-dg-pagination>
</clr-dg-footer>
```

</doc-code>

### Selection

To allow actions on multiple items at once, we provide the ability for the user to select rows in the datagrid. To make rows selectable in your datagrid, you need to do the following:

- Add a `[clrDgItem]` input on each `<clr-dg-row>` component to tell us what model the user is actually selecting. Most of the time, this will simply be the current data object in the iteration.
- Add a `[(clrDgSelected)]` two-way binding on the datagrid itself, to have access to the list of currently selected items. Note that by adding items to this list yourself, you can dynamically select elements if you need to.

In addition to a checkbox for each row to select individual rows, there will be a checkbox in the header row that will select all of the currently visible rows.

In the following example, we simply display the names of the selected users, but since we have access to the full objects, we could perform any operation we want on them.

<DocVideo src="/images/angular-components/datagrid/datagrid-selection.mp4" :width="872" :autoplay="true"></DocVideo>

<doc-code>

```html
<clr-datagrid [(clrDgSelected)]="selected">
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <-- ... -->
  </clr-dg-row>
  <-- ... -->
</clr-datagrid>
```

</doc-code>

If you need an easier access to the selected state of a row, without having to go through the entire array, we also provide a boolean `[(clrDgSelected)]` two-way binding on the `<clr-dg-row>` itself. For instance, when your model itself tracks if items are selected, you can simply write:

<doc-code>

```html
<clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item" [(clrDgSelected)]="item.selected">
  <!-- ... -->
</clr-dg-row>
```

</doc-code>

If you need to listen to when the selection changes, you can use Angular's two way binding to listen to the `(clrDgSelectedChange)` event:

<doc-code>

```html
<clr-datagrid [clrDgSelected]="selected" (clrDgSelectedChange)="selectionChanged($event)">
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

Mark a row with `clrDgSelectable`, this way the state of the row could not be changed by user interactions. This property works only when using single or multi-selection modes.

<doc-code>

```html
<clr-dg-row [clrDgSelectable]="!user.locked" *clrDgItems="let user of users" [clrDgItem]="user">
  <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <!-- ... -->
  </clr-dg-row>
</clr-dg-row>
```

</doc-code>

#### Preserving Selection

By default, when a filter is applied to the datagrid the selection is cleared. This is done to ensure that all selected items are always visible in the datagrid. In certain instances, this might not be desirable, therefore we provide the `[clrDgPreserveSelection]` input. Setting this to true will retain the current selection on the datagrid, even if filters are applied and selected items are not visible.

Note: If you do enable `[clrDgPreserveSelection]`, before performing any action on the selected items, a confirmation should be shown to ensure the end-user is aware of which items they are operating on, since the filters may hide some of the selected items from the user causing a discovery issue.

### Single Selection

Depending on the use case, you might want to restrict the user to only allow single selection in a datagrid. If you haven't done so, please read the previous section on general selection first.

- For single select, instead of `[(clrDgSelected)]`, add a `[(clrDgSingleSelected)]` two-way binding on the datagrid itself, to have access to the currently selected item. Note that by setting this value yourself, you can dynamically select an element if you need to.

In the following example, we simply display the name of the selected user, but since we have access to the full objects, we could perform any operation we want on it.

<DocVideo src="/images/angular-components/datagrid/datagrid-single-selection.mp4" :width="872" :autoplay="true"></DocVideo>

<doc-code>

```html
<clr-datagrid [(clrDgSingleSelected)]="selectedUser">
  <!-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <!-- ... -->
  </clr-dg-row>
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

If you need to listen to when the selection changes, you can use Angular's two way binding to listen to the `(clrDgSingleSelectedChange)` event:

<doc-code>

```html
<clr-datagrid [clrDgSingleSelected]="selected" (clrDgSingleSelectedChange)="selectionChanged($event)">
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

In order to conditionally disable selection on a row, use the `clrDgSelectable` input to disable selection state changes. This has to be done on each row you wish to disable, and works with single and multi selection.

<doc-code>

```html
<clr-dg-row [clrDgSelectable]="!user.locked" *clrDgItems="let user of users" [clrDgItem]="user">
  <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <!-- ... -->
  </clr-dg-row>
</clr-dg-row>
```

</doc-code>

### Batch Action

You can allow batch actions to be performed on selected rows in selectable datagrids. You can make the action choices contextual to the selection by showing certain actions only if the selection meets the criteria. Add a `clr-dg-action-bar` inside a `clr-datagrid`. The content inside of it will be projected when one or more items is selected. We recommend that that you use a button bar with small buttons as in the example.

In the following example, we simply display the names of the selected users, but since we have access to the full objects, we could perform any operation we want on them.

Depending on the role of certain batch actions, you can choose to break button bars up into separate button groups. To increase the visibility of the most important batch actions within each button group, we recommend organizing batch actions in priority order from left to right.

<DocVideo src="/images/angular-components/datagrid/datagrid-batch-action.mp4" :width="872" :autoplay="true"></DocVideo>

<doc-code>

```html
<clr-datagrid [(clrDgSelected)]="selected">
  <clr-dg-action-bar>
    <div class="btn-group">
      <button type="button" class="btn btn-sm btn-secondary" (click)="onAdd()">
        <clr-icon shape="plus"></clr-icon> Add to group
      </button>
      <button type="button" class="btn btn-sm btn-secondary" (click)="onDelete()">
        <clr-icon shape="close"></clr-icon> Delete
      </button>
      <button type="button" class="btn btn-sm btn-secondary" (click)="onEdit()" *ngIf="selected.length == 1">
        <clr-icon shape="pencil"></clr-icon> Edit
      </button>
    </div>
    <div class="btn-group">
      <clr-dropdown>
        <button type="button" class="btn btn-sm btn-secondary" clrDropdownTrigger>
          Export
          <clr-icon shape="caret down"></clr-icon>
        </button>
        <clr-dropdown-menu clrPosition="bottom-left" *clrIfOpen>
          <button type="button" (click)="onExportAll()" clrDropdownItem>Export All</button>
          <button type="button" (click)="onExportSelected()" [disabled]="selected.length === 0" clrDropdownItem>
            Export Selected Items
          </button>
        </clr-dropdown-menu>
      </clr-dropdown>
    </div>
  </clr-dg-action-bar>
  <!-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <!-- ... -->
  </clr-dg-row>
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

### Single Action

You can allow actions on an item in a single row, in the cases where batch operation is not applicable. You can use this pattern in both selectable and non-selectable datagrids. Add a `clr-dg-action-overflow` inside a `clr-dg-row`. The content inside of it will be projected as an action menu which will toggle when the user clicks on the ellipsis icon as shown below. We recommend that the menu items be buttons with a class `.action-item` as in the example.

In the following example, we simply display the names of the selected users, but since we have access to the full objects, we could perform any operation we want on them.

<DocVideo src="/images/angular-components/datagrid/datagrid-single-action.mp4" :width="872" :autoplay="true"></DocVideo>

<doc-code>

```html
<clr-datagrid>
  <!-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <clr-dg-action-overflow>
      <button class="action-item" (click)="onEdit(user)">Edit</button>
      <button class="action-item" (click)="onDelete(user)">Delete</button>
    </clr-dg-action-overflow>
    <!-- ... -->
  </clr-dg-row>
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

### Server-Driven datagrid

When dealing with large amounts of data or heavy processing, a datagrid often has access the currently displayed data only, requesting only the necessary pieces from the server. This is a very common case that we fully support.

We expose events and hooks on all parts of the datagrid to make sure you can trigger any requests you need based on precise user actions. But an important thing to note is that when the server does handle pagination, it needs to also deal with sorting and filtering, because all three are tightly coupled. In light of this, we decided to expose a single global output `(clrDgRefresh)` that emits the current "state" of the datagrid whenever it changes due to a user action or an external one. This state has the following format:

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

It contains all the information you need to send to the server in order to get the slice of data currently displayed. It even contains redundant information ( `page.to` and `page.size` for instance), to make sure you have access to the most practical for you without extra processing.

The `filters` array contains either a custom state object returned by the `state` method of the filter or the filter instance itself if the optional `state` method is not implemented.

One important thing to note is that since you don't have all the data available at once, you cannot use the smart iterator `*clrDgItems`: it would sort, filter and paginate a subset of the data that has already gone through all that. So all you need to do is to go back to a simple `*ngFor`, which we support.

Finally, since server calls are involved, we need some way of notifying the user that his action has been acknowledged and that we are currently working on it. To this effect, we provide an input `[clrDgLoading]` that you can use to display the datagrid in a loading state, while fetching data.

<doc-code>

```javascript
import { ClrDatagridStateInterface } from '@clr/angular';

class MyComponent {
  users: User[];
  total: number;
  loading: boolean = true;

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    let filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let { property, value } = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }
    this.inventory
      .filter(filters)
      .sort(<{ by: string; reverse: boolean }>state.sort)
      .fetch(state.page.size * (state.page.current - 1), state.page.size)
      .then((result: FetchResult) => {
        this.users = result.users;
        this.total = result.length;
        this.loading = false;
      });
  }
}
```

</doc-code>

<doc-code>

```html
<clr-datagrid (clrDgRefresh)="refresh($event)" [clrDgLoading]="loading">
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
  <clr-dg-column [clrDgField]="'creation'">Creation date</clr-dg-column>
  <clr-dg-column [clrDgField]="'pokemon'">Pokemon</clr-dg-column>
  <clr-dg-column [clrDgField]="'color'">Favorite color</clr-dg-column>

  <clr-dg-row *ngFor="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <clr-dg-cell>{{user.name}}</clr-dg-cell>
    <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
    <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
    <clr-dg-cell>
      <span class="color-square" [style.backgroundColor]="user.color"></span>
    </clr-dg-cell>
  </clr-dg-row>

  <clr-dg-footer>
    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{total}} users
    <clr-dg-pagination #pagination [clrDgTotalItems]="total"></clr-dg-pagination>
  </clr-dg-footer>
</clr-datagrid>
```

</doc-code>

### Placeholder

Your datagrid can be empty for any number of reasons: you are still fetching the data from the server, the filters selected by the user are too strict, or simply you didn't find any data to display in it. In these cases, we display a simple placeholder image, but it can be useful to display a message to the user explaining what is happening. To do so, simply add a `<clr-dg-placeholder>` element next to your rows.

<ClrImage title="basic structure" src="/images/angular-components/datagrid/datagrid-placeholder.png" :align="'center'" :width="864" />

<doc-code>

```html
<clr-datagrid>
  <!-- ... -->
  <clr-dg-placeholder>We couldn't find any users!</clr-dg-placeholder>

  <clr-dg-row *ngFor="let user of users">
    <!-- ... -->
  </clr-dg-row>
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

### Detail Pane

The Detail Pane is a pattern to show additional details for a record. The Detail Pane condenses the datagrid to show a primary column and a panel to the right to display more details about your record. The Detail Paine allows you to show the full content of the record in a larger scrollable space. The Detail Pane is also fully accessible for keyboard and screen reader users.

The Detail Pane adds a new toggle icon on the left-hand side of the Datagrid. When the pane is open, it takes 2/3 of the width of the Datagrid and hides all columns, except for the first column and any built-in columns that facilitate features like selection and row actions. The pagination also updates to a condensed format that scales well to small sizes. Only one row can be open at a time; selecting another row changes the content to the newly selected row.

The Detail Pane is not compatible with Expandable Rows; when both are enabled, the Detail Pane takes precedence. Hide and show columns are disabled while the Detail Pane is open, but still works properly when closed. The rest of the Datagrid behaviors work as expected, even while the Detail Pane is open.

#### Basic use of Detail Pane

To use the Detail Pane, add a new element with the following syntax inside of the Datagrid

<doc-code>

```html
<clr-dg-detail *clrIfDetail="let detail">
  <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
  <clr-dg-detail-body>
    <!-- ... -->
  </clr-dg-detail-body>
</clr-dg-detail>
```

</doc-code>

<DocVideo src="/images/angular-components/datagrid/datagrid-detail-pane.mp4" :width="870" :autoplay="true"></DocVideo>

<doc-code>

```html
<clr-datagrid [(clrDgSelected)]="selected">
  <!-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <!-- ... -->
  </clr-dg-row>

  <clr-dg-detail *clrIfDetail="let detail">
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
  </clr-dg-detail>
  <!-- ... -->
</clr-datagrid>
```

</doc-code>

#### Reacting to changes in Detail Pane state

It is possible to listen for changes to the Detail Pane state, by desugaring the `*clrIfDetail` directive and listening for the `(clrIfDetailChange)` event. It is important to use a local template variable like `let-detail` to reference the row object.

<doc-code>

```html
<ng-template clrIfDetail let-detail (clrIfDetailChange)="onDetailOpen($event)">
  <clr-dg-detail>
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</ng-template>
```

</doc-code>

#### Controlling the Detail Pane programmatically

In some cases, you might want to programmatically control the toggling of the Detail Pane, which you can do by desugaring `*clrIfDetail` directive and using the two way binding syntax. To open the detail pane, set the `detailState` value to the row object, or to `null` to close it. Be sure to include the local template variable like `let-detail` to get access to the row object.

<doc-code>

```html
<ng-template [(clrIfDetail)]="detailState" let-detail>
  <clr-dg-detail>
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <!-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</ng-template>
```

</doc-code>

### Expandable Rows

Use expandable rows when you have additional information for a row, or row cells that do not need to be shown at all times. This helps minimize visual clutter. It also frees up the need of a second datagrid that gets updated with details. This is sometimes called a master-detail or master-child pattern. Another use is replacing original row data with a custom view or layout which includes most or all of the original row data. The expanded area can be loaded with other components as well to fit your needs.

To make a row expandable, you need to put a `<clr-dg-row-detail>` component inside your row, and add a \*clrIfExpanded structural directive on it. This directive doesn't take any input, it is here for 2 reasons: make sure the details are only instantiated once they are needed, and make it very clear in your application templates that this part of the DOM is not present at all times, but only when the row is expanded. This component can contain anything: text, images, graphs, ... It can ignore the overall table layout. If you wish to display details for each cell of the row individually and respect the table layout, all you need to do is use our usual `<clr-dg-cell>` component in the detail. Make sure you have exactly as many cells in the detail as you have in the row, or they will not align properly.

<doc-code>

```html
<clr-dg-row *ngFor="let user of users">
  <!-- Cells declarations -->
  <clr-dg-cell>...</clr-dg-cell>

  <clr-dg-row-detail *clrIfExpanded>
    Lorem ipsum...
  </clr-dg-row-detail>
</clr-dg-row>
```

</doc-code>

If you want the details to replace the original row rather than expand under it, we offer a `[clrDgReplace]` input that receives a boolean on the `<clr-dg-row-detail>` component. In other words, to make details replace the row they're in, just write:

<doc-code>

```html
<clr-dg-row-detail *clrIfExpanded [clrDgReplace]="true">
  Lorem ipsum...
</clr-dg-row-detail>
```

</doc-code>

Sometimes you want to conditionally display the expandable row, depending on if the given row has any content to expand. In order to handle this, you'll need to wrap your expandable row in a conditional \*ngIf directive to handle this, but since you can't put two structural directives on the same element you'll need to use NgContainer and ngProjectAs like you see here in the following snippet.

<doc-code>

```html
<ng-container ngProjectAs="clr-dg-row-detail" *ngIf="true">
  <clr-dg-row-detail *clrIfExpanded>
    Lorem ipsum...
  </clr-dg-row-detail>
</ng-container>
```

</doc-code>

Finally, you might need to make a server call to get the details for a row before you can display them. This is a very common lazy loading pattern. In this case, you need to add a `[clrLoading]` directive receiving a boolean anywhere in the row. Yes, it can be absolutely anywhere, as long as it's in or on the row itself. The easiest way to make the server call lazily is simply to create a component that will make the call on initialization (typically in the `ngOnInit()` method), and to use that component inside the `*clrIfExpanded` structural directive. Here is an example of what this solution typically looks like.

<doc-code>

```html
<clr-dg-row *ngFor="let user of users">
  <!-- Cells declarations -->
  <clr-dg-cell>...</clr-dg-cell>

  <my-detail *clrIfExpanded [user]="user" ngProjectAs="clr-dg-row-detail"></my-detail>
</clr-dg-row>
```

</doc-code>

<doc-code>

```javascript
@Component({
    selector: "my-detail",
    template: `
        <div [clrLoading]="loading">...</div>
    `
})
class MyDetailComponent implements OnInit {
    @Input() user: User;

    loading: boolean;

    ngOnInit() {
        this.loading = true;
        // Make the server call
        fetchRemoteDetail(user).then(() => this.loading = false));
    }
}
```

</doc-code>

<cds-alert-group status="warning" type="default">
<cds-alert>Note the <code class="clr-code">ngProjectAs</code> attribute on our custom detail component. This is needed to make sure it is projected in the same place an actual <code class="clr-code">clr-dg-row-detail</code> would be.</cds-alert>
</cds-alert-group>

<DocVideo src="/images/angular-components/datagrid/datagrid-expandable-rows.mp4" :width="872" :autoplay="true"></DocVideo>

### Hide/Show Columns

Datagrid columns may be shown / hidden by the user. A UI control on the left side of the footer surfaces a popup with the available columns listed. Activating the checkbox gives the user access to this function.

Datagrid columns are hideable with the `*clrDgHideableColumn` directive. Because this is a structural directive it cannot be used on the clr-dg-column component directly. Instead, you use `*clrDgHideableColumn` on an `ng-container` inside your `clr-dg-column`. It defaults to showing the column but you can use the hidden property to pre-configure it.

<DocVideo src="/images/angular-components/datagrid/datagrid-hide-show-columns.mp4" :width="874" :autoplay="true"></DocVideo>

<doc-code>

```html
<clr-datagrid>
  <clr-dg-column>
    <ng-container *clrDgHideableColumn="{hidden: false}">
      User ID
    </ng-container>
  </clr-dg-column>
  <clr-dg-column>
    <ng-container *clrDgHideableColumn="{hidden: false}">
      Name
    </ng-container>
  </clr-dg-column>
  ...

  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <clr-dg-cell>{{user.name}}</clr-dg-cell>
    ...
  </clr-dg-row>

  <clr-dg-footer>
    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
    <clr-dg-pagination #pagination [clrDgPageSize]="currentPageSize"></clr-dg-pagination>
  </clr-dg-footer>
</clr-datagrid>
```

</doc-code>

### Compact Datagrid

To increase the information density of your Datagrid or to decrease the amount of space it takes up, add the `datagrid-compact` class to it. This class decreases the amount of whitespace paddings in the default Datagrid style.

<ClrImage title="basic structure" src="/images/angular-components/datagrid/datagrid-compact.png" :align="'center'" :width="864" />

<doc-code>

```html
<clr-datagrid class="datagrid-compact">
  <!-- ... -->
</clr-datagrid>
```

</doc-code>
