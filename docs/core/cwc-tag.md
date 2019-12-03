# cwc-tag

Web component tags.

```typescript
import '@clr/core/tag';
```

```html
<cwc-tag status="info">Info</cwc-tag>
```

## Attributes

| Attribute | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `alias`   | `string` | Sets the color of the tag (and badge if present) from a predefined list of aliases <br/> (`1`, `2`, `3`, `4`, `5`) |
| `color`   | `string` | Sets the color of the tag (and badge if present) from a predefined list of choices <br/> (`gray`, `purple`, `blue`, `orange`, `light-blue`) |
| `status`  | `string` | Sets the color of the tag (and badge if present) from a predefined list of statuses <br/> (`info`, `success`, `warning`, `danger`) |

## Slots

| Name      | Description                     |
|-----------|---------------------------------|
| `default` | Content slot for inside the tag |

## CSS Custom Properties

| Property                         |
|----------------------------------|
| `--clr-tag-bg-hover-color`       |
| `--clr-tag-blue-bg-color`        |
| `--clr-tag-blue-color`           |
| `--clr-tag-border-radius`        |
| `--clr-tag-danger-bg-color`      |
| `--clr-tag-danger-border-color`  |
| `--clr-tag-danger-font-color`    |
| `--clr-tag-default-border-color` |
| `--clr-tag-font-color-dark`      |
| `--clr-tag-font-color-light`     |
| `--clr-tag-font-size`            |
| `--clr-tag-font-weight`          |
| `--clr-tag-gray-bg-color`        |
| `--clr-tag-gray-color`           |
| `--clr-tag-info-bg-color`        |
| `--clr-tag-info-border-color`    |
| `--clr-tag-info-font-color`      |
| `--clr-tag-letter-spacing`       |
| `--clr-tag-light-blue-bg-color`  |
| `--clr-tag-light-blue-color`     |
| `--clr-tag-orange-bg-color`      |
| `--clr-tag-orange-color`         |
| `--clr-tag-purple-bg-color`      |
| `--clr-tag-purple-color`         |
| `--clr-tag-success-bg-color`     |
| `--clr-tag-success-border-color` |
| `--clr-tag-success-font-color`   |
| `--clr-tag-warning-bg-color`     |
| `--clr-tag-warning-border-color` |
| `--clr-tag-warning-font-color`   |
