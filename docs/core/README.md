# Clarity Core API

You can find all the Core Web Component APIs documented within this directory.
Clarity Web Components are designed to work in any front end framework or no
framework at all. This is an initial getting started guide and will continue to
improve over the next few months.

* [Icons](cwc-icon.md)
* [Buttons](cwc-button.md)

## Installation

To get started using Core install via NPM.

```bash
npm install @clr/city @clr/core
```

### Global Styles

Clarity Core includes a global stylesheet that provides our [typography utilities](https://clarity.design/documentation/typography)
as well as our [layout grid utilities](https://clarity.design/documentation/grid).
You can also use our default font, [Clarity City](https://github.com/vmware/clarity-city),
by importing the provided font CSS file from Core. You can import the styles via
a CSS Preprocessor like Sass or reference the CSS directly in your HTML.

```scss
// import in Sass
@import '~@clr/core/global.min';
@import '~@clr/core/font.min';
```

Or

```html
<!-- import in HTML -->
<link href="/node_modules/@clr/core/global.min.css" rel="stylesheet">
<link href="/node_modules/@clr/core/font.min.css" rel="stylesheet">
```

### Web Components

Once you have the global CSS installed, you can start importing and using
the Clarity Web Components. To use a component import the component into your
JavaScript.

```typescript
import '@clr/core/button';
```

Once imported, the component is registered and ready to use in your HTML.

```html
<cwc-button>Hello World</cwc-button>
```
