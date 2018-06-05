# Clarity Website

The Clarity website is an Angular CLI project that has server-side rendering enabled. This allows us to pre-render the documentation and publish static assets for SEO reasons.

### Setup

Clone the repository, checkout the `website` branch, and install node modules.

    git clone https://github.com/vmware/clarity.git --branch website clarity-website
    cd clarity-website
    npm install

There are 3 ways the application can run.

1. **Development** - Use `ng serve --prod` or `npm start` to run the website for development.
2. **Dynamic** - Use `npm run build:dynamic && npm run serve:dynamic` to run a dynamically server-side rendered version. Not usually used for this project.
3. **Static** - Use `npm run build:static && npm run serve:static` to pre-render the application and serve it with a local server.

##### Development

This mode is for when you want to test your changes in real time and view the results quickly. This is just as you would run any Angular CLI project, except we must run it in prod mode to ensure preboot works correctly. The website will be available at http://localhost:4200.

##### Dynamic

This mode is for when you want to run a server and dynamically render the content on the server instead of in the client. This is not necessary for our cases, but the option is enabled and required for pre-rendering static assets. If you make changes to the source code, you'll want to run `npm run build:dynamic` again to regenerate the server assets, and perhaps restart the server.

It is not recommended to deploy the current server to a production instance as the server is not hardened. The website will be available at http://localhost:4000. 

##### Static

This mode is for when you want to preview the final result as it will appear in the website. This will start a dynamic server and then pre-render the routes found in the `src/sitemap.xml` file. The result is creating a directory structure of the website routes, and putting an `index.html` file in each path. You will have to run `npm run build:static` every time you make file changes to see the changes in the server. The website will be available at http://localhost:8080.

### Deployment

To deploy the app, you need to run the following command.

    npm run deploy

It will deploy the static version of the website automatically to the `gh-pages` branch of the current `origin` remote.