# Installing the Clarity Design System

1.  First, install the Clarity Core package from npm.

    ```bash
    npm install @cds/core --save
    ```

2.  Import desired Web Component into your JavaScript or TypeScript

    ```typescript
    import '@cds/core/modal';
    ```

3.  Use Web Component in desired framework template

    #### Angular

    ```html
    <!--
        - size - a attribute style hook
        - [open] - setting a property on the element
        - (openChange) - listening for the `openChange` custom event
      -->
    <cds-modal size="lg" [open]="true" (openChange)="log($event.detail)">
      <p>slot content</p>
    </cds-modal>
    ```

    #### Vue

    ```html
    <!--
      Example of a modal web component in Vue
      - size - a attribute style hook
      - :open - setting a property on the element
      - @openChange - listening for the `openChange` custom event
    -->
    <cds-modal large :open="true" @openChange="log($event.detail)">
      <p>slot content</p>
    </cds-modal>
    ```

    #### React (Support Coming Soon)

    ```jsx
    {
      /*
      Example of a modal web component in React with React Shim
      - size - a attribute style hook
      - open - setting a property on the element
      - openChange - listening for the `openChange` custom event
    */
    }
    <CdsModal large open={this.state.open} openChange={this.log}>
      <p>slot content</p>
    </CdsModal>;
    ```
