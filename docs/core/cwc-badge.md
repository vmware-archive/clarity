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

| Property                       |
|--------------------------------|
| `--clr-badge-background-color` |
| `--clr-badge-color`            |
