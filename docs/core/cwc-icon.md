# cwc-icon

Icon web component that renders svg shapes that can be customized with CSS classnames.

## Properties

| Property | Attribute | Type     | Default | Description                                      |
|----------|-----------|----------|---------|--------------------------------------------------|
| `dir`    | `dir`     | `string` | ""      | Rotate icon 90° with the top of the icon pointing in the specified direction. |
| `flip`   | `flip`    | `string` | ""      | Reverse the orientation of the icon vertically or horizontally. |
| `id`     | `id`      | `string` | ""      | If present, determines the id of the icon. Uses a generated unique id otherwise. |
| `shape`  | `shape`   | `string` |         | Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if<br />the specified icon cannot be found in the icon registry. |
| `size`   | `size`    | `string` |         | Apply numerical width-height or a t-shirt-sized CSS classname |
| `title`  | `title`   | `string` | ""      | If present, customizes the aria-label for the icon for accessibility. |

## CSS Custom Properties

| Property                     |
|------------------------------|
| `--clr-icon-color-danger`    |
| `--clr-icon-color-default`   |
| `--clr-icon-color-error`     |
| `--clr-icon-color-highlight` |
| `--clr-icon-color-info`      |
| `--clr-icon-color-inverse`   |
| `--clr-icon-color-success`   |
| `--clr-icon-color-warning`   |
