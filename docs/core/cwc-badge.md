# cwc-badge

Web component badges.

```typescript
import '@clr/core/badge';
```

```html
<cwc-badge status="info">2</cwc-badge>
```

## Properties

| Property | Attribute | Type                                             | Default      | Description                                      |
|----------|-----------|--------------------------------------------------|--------------|--------------------------------------------------|
| `color`  | `color`   | `"gray" \| "purple" \| "blue" \| "orange" \| "light-blue"` | **required** | Sets the color of the badge from a predefined list of choices |
| `status` | `status`  | `"info" \| "success" \| "warning" \| "danger"`   | **required** | Sets the color of the badge from a predefined list of statuses |

## Slots

| Name      | Description                       |
|-----------|-----------------------------------|
| `default` | Content slot for inside the badge |

## CSS Custom Properties

| Property                          |
|-----------------------------------|
| `--clr-badge-blue-bg-color`       |
| `--clr-badge-blue-color`          |
| `--clr-badge-danger-bg-color`     |
| `--clr-badge-danger-color`        |
| `--clr-badge-font-color-dark`     |
| `--clr-badge-font-color-light`    |
| `--clr-badge-gray-bg-color`       |
| `--clr-badge-gray-color`          |
| `--clr-badge-info-bg-color`       |
| `--clr-badge-info-color`          |
| `--clr-badge-light-blue-bg-color` |
| `--clr-badge-light-blue-color`    |
| `--clr-badge-orange-bg-color`     |
| `--clr-badge-orange-color`        |
| `--clr-badge-purple-bg-color`     |
| `--clr-badge-purple-color`        |
| `--clr-badge-success-bg-color`    |
| `--clr-badge-success-color`       |
| `--clr-badge-warning-bg-color`    |
| `--clr-badge-warning-color`       |
