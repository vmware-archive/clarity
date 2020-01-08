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
| `color`  | `color`   | `"gray" \| "purple" \| "blue" \| "orange" \| "light-blue"` | **required** | Sets the color of the badge from the following predefined list of choices:<br />'gray', 'purple', 'blue', 'orange', 'light-blue' |
| `status` | `status`  | `any`                                            |              | Sets the color of the badge from the following predefined list of statuses:<br />'info', 'success', 'warning', 'danger' |

## Slots

| Name      | Description                       |
|-----------|-----------------------------------|
| `default` | Content slot for inside the badge |

## CSS Custom Properties

| Property                       |
|--------------------------------|
| `--clr-badge-background-color` |
| `--clr-badge-color`            |
