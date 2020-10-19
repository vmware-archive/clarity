---
title: Overview
toc: true
---

A tree is a hierarchical component that gives users access to a hierarchical set of objects displayed in a the parent-child relationship.

## Usage

Use a tree view to visually display hierarchical information. The user can expand, collapse, and select a tree node within a tree view.

## Types

### Basic Tree

<div class="clr-row">
<div class="clr-col">
<p>
A basic tree provides a tree structure with named nodes and an arrow to expand and collapse child nodes.
</p>
</div>
<div class="clr-col" cds-layout="m-t:lg">
<DocInset>
<ClrImage title="Basic Tree" src="/images/angular-components/tree-view/basic-tree.png" />
</DocInset>
</div>
</div>

### Basic Tree With Icons

<div class="clr-row">
<div class="clr-col">
<p>
A tree can include icons to represent the type of nodes within that group. Icons appear between the collapse/expand arrow and the parent node title.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Basic Tree" src="/images/angular-components/tree-view/icon-tree.png" />
</DocInset>
</div>
</div>

### Checkbox Tree

<div class="clr-row">
<div class="clr-col">
<p>
A checkbox tree features checkboxes between the collapse/expand arrow and the name to indicate whether a node is selected. A parent node with children that are both selected and not selected is shown with an “indeterminate” state.
</p>
<p>
Checkbox trees should not be used together with icons for the nodes. As with icon trees, make sure to put checkboxes on all nodes of a checkbox tree. Do not alternate between types of trees in a checkbox tree.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Basic Tree" src="/images/angular-components/tree-view/checkbox-tree.png" />
</DocInset>
</div>
</div>

## Anatomy

The styling of each piece of a tree node is consistent across the different types of trees.

### Touch Targets

<div class="clr-row">
<div class="clr-col">
<div>
The dimensions of the expand/collapse arrow and the node title allow for a comfortable touch target allowing use with a mouse or a touch screen.
</div>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Tree view touch targets" src="/images/angular-components/tree-view/touch-tree.svg" />
</DocInset>
</div>
</div>

<cds-alert-group status="warning" type="default">
<cds-alert>Touch Targets are relevant even outside of a mobile form factor. Many new desktop environments, especially those running Windows, allow for the use of a touch screen and should be considered when designing your applications.</cds-alert>
</cds-alert-group>

## Behavior

Common terminology that explains tree behavior.

<div class="clr-row">
<div class="clr-col">
<div class="custom-block">
<strong>Highlight</strong>
<p>Click on a node in the tree to either “highlight” it or navigate to its relative content.</p>
</div>
</div>
<div class="clr-col">
<div class="custom-block">
<strong>Select</strong>
<p>Choose items to apply an action. For example, selecting a checkbox in the tree.</p>
</div>
</div>
<div class="clr-col">
<div class="custom-block">
<strong>Expand / Collapse</strong>
<p>Use the arrow to the left of a node to expand or collapse a node in the tree.</p>
</div>
</div>
</div>

### Interacting With Nodes

#### Expanding / Collapsing Nodes

<div class="clr-row">
<div class="clr-col">
<p>
To expand or collapse a parent node, the user clicks on the expand/collapse arrow. Clicking on the node item itself does not expand or collapse a node. It serves as a highlighting mechanism.
</p>
<p>
In read-only trees where highlighting is not an option, this pattern remains true for consistency.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Expand and collapse tree node" src="/images/angular-components/tree-view/tree_interacting.svg" />
</DocInset>
</div>
</div>

#### Highlighting Tree Nodes

<div class="clr-row">
<div class="clr-col">
<p>
To navigate to a content area based on a tree node or to highlight a tree node in order to take a subsequent action based on the selection, a user clicks on the node title itself.
</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Expand and collapse tree node" src="/images/angular-components/tree-view/tree_highlighting.svg" />
</DocInset>
</div>
</div>

#### Interacting With Checkbox Trees

<div class="clr-row">
<div class="clr-col">
<p>
With a checkbox tree, a user is able to perform one or a combination of three actions by clicking on one of three distinct targets:
</p>
<ol class="custom-block">
<li class="custom-block">Expanding and Collapsing: a user is able to perform this action by clicking on the expand / collapse arrow.</li>
<li class="custom-block">Checking a Checkbox: this would require clicking on the checkbox itself to check or uncheck a treenode. This will also affect the status of the parent node’s checkbox.</li>
<li class="custom-block">Highlighting Tree Node: a user can highlight a tree node by clicking on the name (label) of the tree node. This allows for the possibility of loading content based on selection to provide more information on a tree node.</li>
</ol>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Interacting with checkboxes" src="/images/angular-components/tree-view/tree_checkbox_interacting.svg" />
</DocInset>
</div>
</div>

### Loading Data

The way to load data within the tree is based on the scenario in which the tree is being used.

<div class="clr-row">
<div class="clr-col">

#### Load Parent Nodes First

With a dynamic tree, make sure to load the parent nodes first and then lazy load child nodes when requested.

A general goal to keep in mind is that you want to minimize the time a user needs to spend before their first interaction with the tree as well as every subsequent interaction afterwards.

</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Loading data" src="/images/angular-components/tree-view/tree_lazyloading.svg" />
</DocInset>
</div>
</div>

## Code & Examples

### Basic tree

A basic tree can be created by simply nesting `clr-tree-node` components at will. To pre-expand a node, you can use the `[clrExpanded]` input.

<cds-alert-group status="warning" type="default">
<cds-alert>Please note that every tree requires to have root node to work properly, this is done by having clr-tree as root wrapper, please check the example below.</cds-alert>
</cds-alert-group>

<ClrImage title="Basic Tree" src="/images/angular-components/tree-view/basic-tree-demo.png" />

<doc-code>
<<< .vuepress/public/demos/tree-view/basic-ng.html
</doc-code>

### Tracking expanded nodes

Use two-way binding `[(clrExpanded)]="expanded"` on the [clrExpanded](/angular-components/tree-view/api/#clrifexpanded) property to track when a node is expanded or collapsed.

<doc-code>
<<< .vuepress/public/demos/tree-view/expanded-ng.html
</doc-code>

### Routing with a tree

<ClrImage title="Routing Tree" src="/images/angular-components/tree-view/tree-routing.png" />

Use the `.clr-treenode-link` class to style content inside of a Tree Node as clickable. Indicate an active Tree Node with the `.active` class combined with the `.clr-treenode-link` class.

<doc-code>
<<< .vuepress/public/demos/tree-view/routed-ng.html
</doc-code>

### Generating a tree dynamically

When the tree structure is large and complex you can use iteration to generate nodes and child nodes based on the structure given to the [ClrTree](/angular-components/tree-view/api/#clrtree).

<ClrImage title="Dynamically Generated Tree" src="/images/angular-components/tree-view/dynamic-tree.png" />

#### Tree element

<doc-code>
<<< .vuepress/public/demos/tree-view/dynamic.html
</doc-code>

#### Tree typeScript

<doc-code>
<<< .vuepress/public/demos/tree-view/dynamic.ts
</doc-code>

### Checkbox tree

Use checkbox when nodes of the tree need to be selected or unselected by users. There are three parts that are needed to implement a [ClrTree](/angular-components/tree-view/api/#clrtree) with checkbox controls.

1. Data structured in a tree hierarchy
1. The correct declaration on the [ClrTreeNode](/angular-components/tree-view/api/#clrtreenode)'s that need to be selectable
1. A ClrSelectedState for each node that is selectable

<div class="clr-row custom-block">
<div class="clr-col">
<ClrImage title="Checkbox Tree" src="/images/angular-components/tree-view/checkbox-tree-demo.png" />
</div>
<div class="clr-col">

#### Checkbox JSON

<doc-code>
<<< .vuepress/public/demos/tree-view/checkbox.json
</doc-code>
</div>
</div>

#### Checkbox element

<doc-code>
<<< .vuepress/public/demos/tree-view/checkbox-ng.html
</doc-code>

#### Checkbox typeScript

<doc-code>
<<< .vuepress/public/demos/tree-view/checkbox.ts
</doc-code>

### Binding selection to a boolean

If you know a specific node can never become indeterminate, you probably want to use a boolean property on your node. As mentioned previously, `[(clrSelected)]` always outputs [ClrSelectedState](/angular-components/tree-view/api/#bindings) enum values, making two-way binding with a boolean problematic. The most straightforward solution is to use the de-sugarized syntax of the two-way binding , transforming the output to a boolean directly.

<div class="clr-row custom-block">
<div class="clr-col">
<!-- cannot project md images here and ClrImage w/ height distorts the image -->
<img src="/images/angular-components/tree-view/checkbox-binding-demo.png" alt="Checkbox Tree" height="500">
</div>
<div class="clr-col">

#### Checkbox JSON

<doc-code>
<<< .vuepress/public/demos/tree-view/checkbox-binding.json
</doc-code>
</div>
</div>

#### Binding element

<doc-code>
<<< .vuepress/public/demos/tree-view/checkbox-binding-ng.html
</doc-code>

#### Binding TypeScript

<doc-code>
<<< .vuepress/public/demos/tree-view/checkbox-binding.ts
</doc-code>

### Recursive tree

If the data you are displaying is recursive or has an unknown depth, you can use our `*clrRecursiveFor` structural directive to recursively iterate over your data. It has the same syntax as `*ngFor`, and accepts an additional `getChildren` parameter that receives a node and should return its children. Please note that it needs to be used inside of a `<clr-tree>` to function properly.

<ClrImage title="Recursive Tree" src="/images/angular-components/tree-view/recursive-tree-demo.png" />

#### Recursive element

<doc-code>
<<< .vuepress/public/demos/tree-view/recursive-ng.html
</doc-code>

#### Recursive TypeScript

<doc-code>
<<< .vuepress/public/demos/tree-view/recursive-ng.ts
</doc-code>

### Lazy loading child nodes

If your tree is too large to be fully build on initialization or getting the children of a node is an expensive operation like an HTTP request, you might want to lazy-load tree nodes, only loading the ones that are currently displayed. To lazy-load children for a simple tree component, you need to combine several features as follows:

- Use our `<clr-tree>` root component, giving it a `[clrLazy]="true"` input
- leverage our `*clrIfExpanded` structural directive, it only instantiates children when they are displayed
- listen to the `(clrIfExpandedChange)` output to fetch the children's data
- add a `[clrLoading]` boolean input to the node if fetching children is asynchronous, to display a spinner while waiting for the data to be loaded

<DocVideo src="/images/angular-components/tree-view/lazy-tree.mp4" :width="896" :autoplay="true"></DocVideo>

#### Lazy tree element

<doc-code>
<<< .vuepress/public/demos/tree-view/lazy-ng.html
</doc-code>

#### Lazy tree TypeScript

<doc-code>
<<< .vuepress/public/demos/tree-view/lazy-tree.ts
</doc-code>
