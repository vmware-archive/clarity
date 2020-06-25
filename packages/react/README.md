# Clarity React Wrappers for Core Web Components

Clarity Web Components is a suite of Web Components from the [Clarity Design System](https://clarity.design).

## Installing Clarity Web Components

1.  First, install the Clarity Core package from npm.

    ```bash
    npm install @clr/react --save
    ```

2.  Import desired Web Component into your JavaScript or TypeScript

    ```typescript
    import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from '@clr/react/modal';
    ```

3.  Use Web Component in react

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
