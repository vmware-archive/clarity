# Clarity React Wrappers for Core Web Components

Clarity Core is a suite of Web Components from the [Clarity Design System](https://clarity.design). Because React [doesn't fully interoperate with custom elements](https://custom-elements-everywhere.com/) we have developed this library of React components that wrap Clarity Web Components

## Installation

1.  (Optional): Install the Clarity Core package from npm.

    ```bash
    npm install @clr/core --save
    ```

2.  Install the Clarity React package from npm.

    ```bash
    npm install @clr/react --save
    ```

3.  Import desired component into your JavaScript or TypeScript

    ```typescript
    import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from '@clr/react/modal';
    ```

4.  Use React wrapped Web Component in React

    ```jsx
    {
      /*
      Example of a modal web component in React with React Shim
      - size - attribute style hook
      - open - setting the 'open' property on the element
      - openChange - listen for the `openChange` custom event
    */
    }
    <CdsModal onCloseChange={this.handleCloseModalClick.bind(this, false)}>
      <CdsModalHeader>
        <h3 cds-text="title">My Modal</h3>
      </CdsModalHeader>
      <CdsModalContent>
        <div cds-layout="vertical gap:md p-y:xs">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </CdsModalContent>
      <CdsModalActions>
        <div cds-layout="horizontal gap:sm align:right">
          <CdsButton onClick={this.handleCloseModalClick.bind(this, false)} action="outline">
            Cancel
          </CdsButton>
          <CdsButton onClick={this.handleCloseModalClick.bind(this, false)}>Ok</CdsButton>
        </div>
      </CdsModalActions>
    </CdsModal>;
    ```

## Using refs

In React [refs](https://reactjs.org/docs/refs-and-the-dom.html) provide a way to access DOM nodes or
React elements created in the render method. Because web components' lifecycle lives outside of react's
lifecycle our components provide a way to use refs when the underlying web component has finished rendering:

```typescript
import React from 'react';
import { CdsButton } from '@clr/react/button';

export default class App extends React.Component<{}, {}> {
  buttonRef: React.RefObject<CdsButton>;

  constructor(props: any) {
    super(props);
    this.buttonRef = React.createRef<CdsButton>();
  }

  componentDidMount() {
    this.buttonRef.current.nativeElement.then(element => {
      element.focus();
    });
  }

  render() {
    return (
      <div>
        <CdsButton ref={this.buttonRef}>My button</CdsButton>
      </div>
    );
  }
}
```
