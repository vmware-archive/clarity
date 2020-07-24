---
title: API
---

The Clarity Icons library features a namespaced core of functionality that is publicly accessible from the browser's `window` object. This "API" is available at `ClarityIcons` and provides three useful pieces of functionality such as retrieving icons, adding new icons, and creating aliases for icons. It's worth noting that you can also access the API from the `"@clr/icons"` module in Typescript. For example:

```typescript
import { ClarityIcons } from '@clr/icons';
```

If you load `"@clr/icons"` like this make sure that you are not also loading it via a script tag or in some other manner.

### Retrieve icons

You can retrieve and check the currently available icons in Clarity Icons by calling the `ClarityIcons.get()` method. The method will return the list of icons, each in a form of key:value. The key being the icon name and the value its template, you can retrieve the specific icon template by passing its name in the method. For example: `ClarityIcons.get("check")`, which will return the SVG template of the "check" icon:

[View example](https://embed.plnkr.co/RA7fzKw9KcWqJS3JDgMz/)

### Naming icons

- Must be non-empty string
- Must not contain any whitespace characters, for example `"My Custom Icon"` is not valid
- Names are case-insensitive meaning that `"myCustomIcon"` and `"mycustomicon"` will be the same icon

### Add custom icons to ClarityIcons

The ClarityIcons API enables you to add your own icons to the publicly available ClarityIcons architecture. Use the following call to add your icon to our library in your application:

```typescript
ClarityIcons.add({ 'my-custom-icon': '<svg ... >[your SVG code goes here]</svg>' });
```

This API method will assign your SVG markup to the named shape it is sent. The icon can then be used in your application like any other icon in the Clarity Icons library.

```html
<clr-icon shape="my-custom-icon" size="24"></clr-icon>
```

[View example](https://embed.plnkr.co/MiRlaQDHIIJd3e3Hgxyj/)

### Create aliases for icons

The Clarity Icons API can create aliases for the icons in your application with a single API call:

```typescript
ClarityIcons.alias({ bell: ['alarm', 'oh-noehz'] });
```

The above method call will assign "alarm" and "oh-noehz" names to the existing "bell" icon shape. Now you can use the "bell" icon with any of the new names you have assigned it.

```html
<clr-icon shape="bell"></clr-icon>
<clr-icon shape="alarm"></clr-icon>
<clr-icon shape="oh-noehz"></clr-icon>
```

[View example](https://embed.plnkr.co/7lsRWtqzta0FApicikel/)
