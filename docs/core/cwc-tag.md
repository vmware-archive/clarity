# cwc-tag

Web component tags.

```typescript
import '@clr/core/tag';
```

```html
<cwc-tag status="info">Info</cwc-tag>
```

## Properties

| Property | Attribute | Type                              | Default      | Description                                      |
|----------|-----------|-----------------------------------|--------------|--------------------------------------------------|
| `color`  | `color`   | `"1" \| "2" \| "3" \| "4" \| "5"` | **required** | Sets the color of the tag (and badge if present) from a predefined list of choices |
| `status` | `status`  | `any`                             |              | Sets the color of the tag (and badge if present) from the following predefined list of statuses:<br />'info', 'success', 'warning', 'danger' |

## Slots

| Name      | Description                     |
|-----------|---------------------------------|
| `default` | Content slot for inside the tag |

## CSS Custom Properties

| Property                   |
|----------------------------|
| `--clr-tag-bg-color`       |
| `--clr-tag-bg-hover-color` |
| `--clr-tag-border-color`   |
| `--clr-tag-border-radius`  |
| `--clr-tag-font-size`      |
| `--clr-tag-font-weight`    |
| `--clr-tag-letter-spacing` |
