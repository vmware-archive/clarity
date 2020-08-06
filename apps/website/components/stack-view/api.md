---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrStackView

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-stack-view>
  <!-- header child -->
  <!-- one or more stack block children -->
</clr-stack-view>
```

</DocDemo>

### ClrStackHeader

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-stack-view>
  <clr-stack-header>Stackview Header</clr-stack-header>
  <!-- one or more stack block children -->
</clr-stack-view>
```

</DocDemo>

### ClrStackBlock

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-stack-view>
  <!-- header child -->
  <clr-stack-block>
    <!-- block label -->
    <!-- block content -->
  </clr-stack-block>
</clr-stack-view>
```

</DocDemo>

### ClrStackLabel

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-stack-view>
  <!-- header child -->
  <clr-stack-block>
    <clr-stack-label>Block label</clr-stack-label>
    <!-- block content -->
  </clr-stack-block>
</clr-stack-view>
```

</DocDemo>

### ClrStackContent

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<clr-stack-view>
  <!-- header child -->
  <clr-stack-block>
    <!-- block label -->
    <clr-stack-content>Block content</clr-stack-content>
  </clr-stack-block>
</clr-stack-view>
```

</DocDemo>
