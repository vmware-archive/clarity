---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrTooltip

#### Selector & Basic Usage

<doc-code>

```html
<clr-tooltip>
  <!-- clrTooltipTrigger -->
  <!-- clr-tooltip-content -->
</clr-tooltip>
```

</doc-code>

### ClrTooltipContent

#### Selector & Basic Usage

<doc-code>

```html
<clr-tooltip>
  <!-- clrTooltipTrigger -->
  <clr-tooltip-content>
    Concise description.
  </clr-tooltip-content>
</clr-tooltip>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrTooltipContent" item="bindings" />

## Angular Directives

{.section-header}

### ClrTooltipTrigger

Used to designate the open/close element for [ClrTooltipContent](./api/#clrtooltipcontent).

#### Selector & Basic Usage

<doc-code>

```html
<clr-tooltip>
  <clr-icon shape="help" clrTooltipTrigger></clr-icon>
  <!-- clr-tooltip-content -->
</clr-tooltip>
```

</doc-code>

### ClrIfOpen

The tooltip component uses the \*clrIfOpen structural directive on the tooltip content to indicate clearly the tooltip content is only present in the DOM when open. We recommend using it for these reasons: better performance, clear intention in your own templates, and following a the natural lifecycle for directives and components inside of the tooltip.

If you do not want this behavior we also support the tooltip content without a *clrIfOpen directive on it. It will be created eagerly when the tooltip itself initializes, and will not be destroyed or recreated until the tooltip itself is.
One reason to bypass the `*clrIfOpen` directive is when screenreaders need to read the tooltip inline instead of when the user moves focus to the trigger.

#### Selector & Basic Usage

<doc-code>

```html
<clr-tooltip>
  <!-- clrTooltipTrigger -->
  <clr-tooltip-content *clrIfOpen>
    Concise description.
  </clr-tooltip-content>
</clr-tooltip>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrIfOpen" item="bindings" />
