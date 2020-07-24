---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrSignpost

A lightweight convenient way to show contextual help without taking the user out of the current context.

#### Selector & Basic Usage

```html
<clr-signpost>
  <clr-signpost-content>
    <h3>Contextual Information</h3>
    <p>Position: right-middle</p>
    <p>Right-middle opens on the right side of the trigger and centered vertically on the trigger.</p>
  </clr-signpost-content>
</clr-signpost>
```

### ClrSignpostContent

When using ClrSignpost it can be optimized with the CLrIfOpen structural directive. When ClrIfOpen is used the ClrSignpostCOntent elements are only created when a user opens the content and they are destroyed when the user closes the sign post content.

#### Selector & Basic Usage

```html
<clr-signpost>
  <clr-signpost-content *clrIfOpen>
    <h3>Contextual Information</h3>
    <p>Position: left-middle</p>
    <p>Right-middle opens on the left side of the trigger and centered vertically on the trigger.</p>
  </clr-signpost-content>
</clr-signpost>
```

#### Bindings

<DocComponentApi component="ClrSignpostContent" item="bindings" />

#### Methods

<DocComponentApi component="ClrSignpostContent" item="methods" />

## Angular Directives

{.section-header}

### ClrSignpostTrigger

There is a default trigger that is used if the application does not supply one. Sometimes applications need to use a specific element for the trigger.
This directive will mark that element as the signpost trigger.

#### Selector & Basic Usage

```html
<clr-signpost>
  <button class="btn" clrSignpostTrigger>Signpost</button>
  <clr-signpost-content>
    Signpost contextual information.
  </clr-signpost-content>
</clr-signpost>
```

### ClrIfOpen

#### Selector & Basic Usage

```html
<clr-signpost>
  <button class="btn">Signpost</button>
  <clr-signpost-content *clrIfOpen>
    Signpost contextual information.
  </clr-signpost-content>
</clr-signpost>
```

#### Bindings

<DocComponentApi component="ClrIfOpen" item="bindings" />

#### Methods

<DocComponentApi component="ClrIfOpen" item="methods" />
