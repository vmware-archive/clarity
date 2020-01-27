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
| `badge`     | `badge`     | `any`     |              | Attribute: `badge`<br />Sets the color of the icon decoration that appears in the top-right corner<br />of the glyph. The icon decoration is derived from the following predefined types.<br /><br />The color of the badge can change according to the following<br />list of statuses:<br />'info'  -> blue dot<br />'success' -> green dot<br />'warning' -> yellow dot<br />'danger' -> red dot<br />'inherit' -> dot inherits color of full icon glyph<br />'warning-triangle' -> yellow triangle<br />'inherit-triangle' -> triangle inherits color of full icon glyph<br />unrecognized value, empty string, or true -> red dot<br /><br />By default, the badge displays a 'danger' dot (a red-colored dot).<br /><br />Setting the badge to 'null' removes the attribute from the DOM. |
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

| Property                           |
|------------------------------------|
| `--clr-icon-color-danger`          |
| `--clr-icon-color-default`         |
| `--clr-icon-color-info`            |
| `--clr-icon-color-inverse`         |
| `--clr-icon-color-inverse-danger`  |
| `--clr-icon-color-inverse-info`    |
| `--clr-icon-color-inverse-success` |
| `--clr-icon-color-inverse-warning` |
| `--clr-icon-color-success`         |
| `--clr-icon-color-warning`         |
