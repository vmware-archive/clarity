### Installing Clarity Icons [![npm version](https://badge.fury.io/js/%40clr%2Ficons.svg)](https://badge.fury.io/js/%40clr%2Ficons)

1.  Install Clarity Icons package through npm:

    ```
    npm install @clr/icons
    ```

2.  Install the polyfill for Custom Elements:

    ```
    npm install @webcomponents/custom-elements
    ```

3.  Include the clr-icons.min.css and clr-icons.min.js in your HTML. As clr-icons.min.js is dependent on the Custom Elements polyfill, make sure to include it before clr-icons.min.js:

    ```
    <link rel="stylesheet" href="path/to/node_modules/clr-icons/clr-icons.min.css">

    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clr-icons/clr-icons.min.js"></script>
    ```
