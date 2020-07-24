---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrTree

#### Selector & Basic Usage

```html
<clr-tree>
  <!-- clr-tree-node children components -->
</clr-tree>
```

### ClrTreeNode

#### Selector & Basic Usage

```html
<clr-tree>
  <clr-tree-node>
    There is tree node content inside.
  </clr-tree-node>
  <!-- more sibling nodes as needed -->
</clr-tree>
```

#### Bindings

<DocComponentApi component="ClrTreeNode" item="bindings" />

## Angular Directives

### ClrIfExpanded

#### Selector & Basic Usage

```html

```

#### Bindings

<DocComponentApi component="ClrIfExpanded" item="bindings" />

### clrRecursiveFor

#### Selector & Basic Usage

```html
<clr-tree>
  <clr-tree-node *clrRecursiveFor="let node of nodes; getChildren: getChildren">
    {{node}}
  </clr-tree-node>
</clr-tree>
```

#### Bindings

<DocComponentApi component="ClrRecursiveFor" item="bindings" />
