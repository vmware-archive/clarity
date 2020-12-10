---
title: API
toc: true
---

## Angular Components

### ClrTree

#### Selector & Basic Usage

<doc-code>

```html
<clr-tree>
  <!-- clr-tree-node children components -->
</clr-tree>
```

</doc-code>

### ClrTreeNode

#### Selector & Basic Usage

<doc-code>

```html
<clr-tree>
  <clr-tree-node>
    There is tree node content inside.
  </clr-tree-node>
  <!-- more sibling nodes as needed -->
</clr-tree>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrTreeNode" item="bindings" />

## Angular Directives

### ClrIfExpanded

#### Selector & Basic Usage

Use our `*clrIfExpanded` structural directive to lazy-load node children.

<doc-code>

```html
<clr-tree [clrLazy]="true">
  <clr-tree-node [clrLoading]="loading">
    <clr-icon shape="building"></clr-icon>
    Office Locations
    <ng-template clrIfExpanded (clrIfExpandedChange)="$event ? fetchLocations() : null">
      <clr-tree-node *ngFor="let location of locations$ | async">
        {{location}}
      </clr-tree-node>
    </ng-template>
  </clr-tree-node>
</clr-tree>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrIfExpanded" item="bindings" />

### ClrRecursiveFor

#### Selector & Basic Usage

<doc-code>

```html
<clr-tree>
  <clr-tree-node *clrRecursiveFor="let node of nodes; getChildren: getChildren">
    {{node}}
  </clr-tree-node>
</clr-tree>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrRecursiveFor" item="bindings" />
