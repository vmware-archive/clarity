# Clarity Core Web Components [![npm version](https://badge.fury.io/js/%40clr%2Fcore.svg)](https://badge.fury.io/js/%40clr%2Fcore)

Clarity Core is a suite of Web Components for [Clarity Design System](https://clarity.design/storybook/core).

## Quick Start Install

1.  First, install the Clarity Core package from npm.

    ```bash
    npm install @cds/core --save
    ```

2.  Import desired Web Component into your JavaScript or TypeScript

    ```typescript
    import '@cds/core/modal/register.js';
    ```

Full installation steps can be found in the [Core Getting Started Guide](https://clarity.design/storybook/core/?path=/story/documentation-getting-started--page).

## Usage

### No Framework

```html
<cds-modal size="lg">
  <p>slot content</p>
</cds-modal>
<script>
  const modal = document.querySelector('cds-modal');
  modal.addEventListener('closeChange', event => console.log(event));
  modal.closable = true;
</script>
```

### Angular

```html
<!--
  - `size` is set as an HTML attribute so no binding syntax is used
  - [closable] is setting a property on the element
  - (closeChange) is listening for the `closeChange` custom event
-->

<cds-modal size="lg" [closable]="booleanValue" (closeChange)="log($event.detail)">
  <p>slot content</p>
</cds-modal>
```

### Vue

```html
<!--
  - `size` is set as an HTML attribute so no binding syntax is used
  - :closable is setting a property on the element
  - @closeChange is listening for the `closeChange` custom event
-->

<cds-modal size="lg" :closable="booleanValue" @closeChange="log($event.detail)">
  <p>slot content</p>
</cds-modal>
```

### React via `@cds/react` package

```jsx
/*
  - `size` unlike the examples above `size` is set as a property
  - closable is setting a property on the element
  - onCloseChange is listening for the `closeChange` custom event
*/
<CdsModal size="lg" closable={this.state.booleanValue} onCloseChange={this.log}>
  <p>slot content</p>
</CdsModal>
```
