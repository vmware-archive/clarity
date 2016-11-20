### Installing Clarity Icons

1. Install Clarity Icons package through npm:
    ```
    npm install clarity-icons
    ```

2. Install the polyfill for Custom Elements:
    ```
    npm install @webcomponents/custom-elements@1.0.0-alpha.3
    ```

3. If your application supports IE10, the polyfill will require the MutationObserver shim to work. If your application doesn't support IE10, you can skip the following installation:
    ```
    npm install mutationobserver-shim@0.3.2
    ```

4. Include the clarity-icons.min.css and clarity-icons.min.js in your HTML. As custom-elements.min.js is dependent on the Custom Elements polyfill, make sure to include it before clarity-icons.min.js. Also, if your app needs to support IE10, include the mutationobserver.min.js before the polyfill:
    ```
    <link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css">

    <script src="path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js"></script>
    <script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    <script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"></script>
    ```
