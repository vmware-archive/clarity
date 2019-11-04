# cwc-test-dropdown

Dropdown, example test component. Do not use in production.

## Attributes

| Attribute | Type  | Description          |
|-----------|-------|----------------------|
| `outline` | `any` | Apply outline style. |

## Properties

| Property | Attribute | Type      | Default    | Description                            |
|----------|-----------|-----------|------------|----------------------------------------|
| `open`   | `open`    | `boolean` |            | Set open to open or close the dropdown |
| `title`  | `title`   | `string`  | "dropdown" | Set the dropdown button text           |

## Events

| Event        | Description                          |
|--------------|--------------------------------------|
| `openChange` | notify open state change of dropdown |

## Slots

| Name      | Description                       |
|-----------|-----------------------------------|
| `default` | Content slot for dropdown content |

## CSS Custom Properties

| Property                             |
|--------------------------------------|
| `--clr-test-border-color`            |
| `--clr-test-button-background-color` |
| `--clr-test-button-text-color`       |
