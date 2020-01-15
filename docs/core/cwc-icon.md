# cwc-icon

Icon web component that renders svg shapes that can be customized with CSS classnames.
To load a icon import the need icon with the icon service.

```typescript
import '@clr/core/icon';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';

ClarityIcons.addIcons(userIcon);
```

```html
<cwc-icon shape="user"></cwc-icon>
```

## Properties

| Property    | Attribute   | Type      | Default      | Description                                      |
|-------------|-------------|-----------|--------------|--------------------------------------------------|
| `alert`     | `alert`     | `boolean` | false        | Displays the icon warning symbol (triangle) if `true` |
| `badge`     | `badge`     | `boolean` | false        | Displays the icon badge symbol (dot) if `true`<br /><br />Use the badgeType property (`badge-type` attribute) if you<br />want a badge to display using a different pre-defined color. |
| `badgeType` | `badgeType` | `any`     |              | Attribute: `badge-type`<br />Sets the color of the icon badge (dot) from the following predefined.<br />By default, the badge uses the 'danger' color. This property is only used<br />to change the color of the badge. It is not required to show the badge,<br />although it can be used independently to show the badge.<br /><br />The color of the badge can change according to the following<br />list of statuses: 'info', 'success', 'warning', 'danger', 'inverse'<br /><br />Setting the badge to 'null' removes it from the DOM. This is necessary to<br />remove the badge (dot) from the icon if you are using badgeType. |
| `dir`       | `dir`       | `any`     |              |                                                  |
| `direction` | `direction` | `any`     |              | Takes a directional value (up\|down\|left\|right) that rotates the icon 90° with the<br />top of the icon pointing in the specified direction. |
| `flip`      | `flip`      | `any`     |              | Takes an orientation value (horizontal\|vertical) that reverses the orientation of the<br />icon vertically or horizontally using the strings: 'horizontal' or 'vertical' |
| `inverse`   | `inverse`   | `boolean` | false        | Inverts color of icon fills and outlines if `true`.<br />Useful for displaying icons on a dark background. |
| `shape`     | `shape`     | `string`  |              | Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if<br />the specified icon cannot be found in the icon registry. |
| `size`      | `size`      | `string`  |              | Apply numerical width-height or a t-shirt-sized CSS classname |
| `solid`     | `solid`     | `boolean` | false        | Displays most icons in their "filled" version if set to `true`. |
| `status`    | `status`    | `any`     | ""           | Changes color of icon fills and outlines to a color determined by the following<br />list of statuses: 'info', 'success', 'warning', 'danger', 'highlight' |
| `title`     | `title`     | `string`  | **required** | If present, customizes the aria-label for the icon for accessibility. |

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
