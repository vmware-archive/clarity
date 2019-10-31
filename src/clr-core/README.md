# Clarity Core Web Components

Clarity Web Components is a suite of Web Components from the [Clarity Design System](https://clarity.design).

## Installing Clarity Web Components

1.  First, install the Clarity Core package from npm.

    ```bash
    npm install @clr/core --save
    ```

2.  Import desired Web Component into your JavaScript or TypeScript

    ```typescript
    import '@clr/core/modal';
    ```

3.  Use Web Component in desired framework template

    #### Angular

    ```html
      <!--
        - `large` is a attribute style hook
        - [open] is setting a property on the element
        - (openChange) is listening for the `openChange` custom event
      -->
      <cwc-modal large [open]="true" (openChange)="log($event.detail)">
        <p>slot content</p>
      </cwc-modal>
    ```

    #### Vue

    ```html
    <!--
      Example of a modal web component in Vue
      - `large` is a attribute style hook
      - :open is setting a property on the element
      - @openChange is listening for the `openChange` custom event
    -->
    <cwc-modal large :open="true" @openChange="log($event.detail)">
      <p>slot content</p>
    </cwc-modal>
    ```

    #### React (Support Coming Soon)

    ```jsx
    {
      /*
      Example of a modal web component in React with React Shim
      - `large` is a attribute style hook
      - open is setting a property on the element
      - openChange is listening for the `openChange` custom event
    */
    }
    <CwcModal large open={this.state.open} openChange={this.log}>
      <p>slot content</p>
    </CwcModal>;
    ```
