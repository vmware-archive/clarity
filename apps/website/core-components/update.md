# Updating Clarity Core

Clarity Core web components can be easily updated using NPM or Yarn. If you are using the React or Angular packages, you will want to update them at the same time.

```bash
npm install @cds/core@latest # updates to the latest release
```

If you are using either the React or Angular packages, you should update them at the same time.

```bash
npm install @cds/core@latest @cds/angular@latest # updates both Core and Angular
npm install @cds/core@latest @cds/react@latest # updates both Core and React
```

If there is a prerelease version available for testing, you can install it using the `next` tag on NPM. These versions are only available when we are actively working on a new major version, so only do this if you are willing to try beta software.

```bash
npm install @cds/core@next
```
