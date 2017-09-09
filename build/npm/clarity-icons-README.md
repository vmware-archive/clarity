### Installing Clarity Icons

1. Install Clarity Icons package through npm:
    ```
    npm install clarity-icons
    ```

2. Install the polyfill for Custom Elements:
    ```
    npm install @webcomponents/custom-elements
    ```

3. Include the clarity-icons.min.css and clarity-icons.min.js in your HTML. As clarity-icons.min.js is dependent on the Custom Elements polyfill, make sure to include it before clarity-icons.min.js:
    ```
    <link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">

    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>
    ```
