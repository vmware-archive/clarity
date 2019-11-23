# cwc-tag

Web component tags.

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
