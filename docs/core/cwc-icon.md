# cwc-icon

Icon web component that renders svg shapes that can be customized with CSS classnames.
To load a icon import the need icon with the icon service.

```typescript
import { ClarityIcons, userIcon } from '@clr/core/icons';

ClarityIcons.addIcons(userIcon);
```

```html
<cwc-icon shape="user"></cwc-icon>
```

## Properties

| Property | Attribute | Type     | Default      | Description                                      |
|----------|-----------|----------|--------------|--------------------------------------------------|
| `dir`    | `dir`     | `string` | **required** | Takes a directional value (up\|down\|left\|right) that rotates the icon 90° with the<br />top of the icon pointing in the specified direction. |
| `flip`   | `flip`    | `string` | **required** | Takes an orientation value (horizontal\|vertical) that reverses the orientation of the<br />icon vertically or horizontally. |
| `id`     | `id`      | `string` | **required** | If present, determines the id of the icon. Uses a generated unique id otherwise. |
| `shape`  | `shape`   | `string` |              | Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if<br />the specified icon cannot be found in the icon registry. |
| `size`   | `size`    | `string` |              | Apply numerical width-height or a t-shirt-sized CSS classname |
| `title`  | `title`   | `string` | **required** | If present, customizes the aria-label for the icon for accessibility. |

## CSS Custom Properties

| Property                             |
|--------------------------------------|
| `--clr-icon-color-danger`            |
| `--clr-icon-color-default`           |
| `--clr-icon-color-highlight`         |
| `--clr-icon-color-info`              |
| `--clr-icon-color-inverse`           |
| `--clr-icon-color-inverse-danger`    |
| `--clr-icon-color-inverse-highlight` |
| `--clr-icon-color-inverse-info`      |
| `--clr-icon-color-inverse-success`   |
| `--clr-icon-color-inverse-warning`   |
| `--clr-icon-color-success`           |
| `--clr-icon-color-warning`           |
