---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrTree

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-tree>
  <!-- clr-tree-node children components -->
</clr-tree>
```

</DocDemo>

### ClrTreeNode

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-tree>
  <clr-tree-node>
    There is tree node content inside.
  </clr-tree-node>
  <!-- more sibling nodes as needed -->
</clr-tree>
```

</DocDemo>

#### Bindings

<DocComponentApi component="ClrTreeNode" item="bindings" />

## Angular Directives

### ClrIfExpanded

#### Selector & Basic Usage

<DocDemo toggle="false">

```html

```

</DocDemo>

#### Bindings

<DocComponentApi component="ClrIfExpanded" item="bindings" />

### clrRecursiveFor

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-tree>
  <clr-tree-node *clrRecursiveFor="let node of nodes; getChildren: getChildren">
    {{node}}
  </clr-tree-node>
</clr-tree>
```

</DocDemo>

#### Bindings

<DocComponentApi component="ClrRecursiveFor" item="bindings" />
