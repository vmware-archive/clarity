# cwc-button

Web component buttons.

```typescript
import '@clr/core/button';
```

```html
<cwc-button>submit</cwc-button>
```

## Properties

| Property       | Attribute       | Type                               | Default      | Description                                      |
|----------------|-----------------|------------------------------------|--------------|--------------------------------------------------|
| `action`       | `action`        | `"default" \| "outline" \| "link"` | **required** | Define the type of action the button triggers    |
| `icon`         | `icon`          | `""`                               | **required** | Sets button type for icon                        |
| `loadingState` | `loading-state` | `ClrLoadingState`                  |              | Changes the button content based on the value passed. The value must be of type `ClrLoadingState` and here are possible states:<br /><br />- `ClrLoadingState.DEFAULT` : shows the content of the button<br /><br />- `ClrLoadingState.LOADING` : disables the button and shows a spinner inside the button<br /><br />- `ClrLoadingState.SUCCESS` : disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms<br /><br />- `ClrLoadingState.ERROR` : shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)<br /><br />Defaults to `ClrLoadingState.DEFAULT`. |
| `size`         | `size`          | `any`                              |              | Sets the overall height and width of the button based on the following string values:<br />'default', 'sm' |
| `status`       | `status`        | `any`                              |              | Sets the color of the button to match the following string statuses<br />'default', 'primary', 'inverse', 'success', 'warning', 'danger' |

## Slots

| Name      | Description                        |
|-----------|------------------------------------|
| `default` | Content slot for inside the button |

## CSS Custom Properties

| Property                                         |
|--------------------------------------------------|
| `--clr-btn-border-radius`                        |
| `--clr-btn-border-width`                         |
| `--clr-btn-danger-bg-color`                      |
| `--clr-btn-danger-border-color`                  |
| `--clr-btn-danger-box-shadow-color`              |
| `--clr-btn-danger-checked-bg-color`              |
| `--clr-btn-danger-checked-color`                 |
| `--clr-btn-danger-color`                         |
| `--clr-btn-danger-disabled-bg-color`             |
| `--clr-btn-danger-disabled-border-color`         |
| `--clr-btn-danger-disabled-color`                |
| `--clr-btn-danger-hover-bg-color`                |
| `--clr-btn-danger-hover-color`                   |
| `--clr-btn-danger-outline-bg-color`              |
| `--clr-btn-danger-outline-border-color`          |
| `--clr-btn-danger-outline-box-shadow-color`      |
| `--clr-btn-danger-outline-checked-bg-color`      |
| `--clr-btn-danger-outline-checked-color`         |
| `--clr-btn-danger-outline-color`                 |
| `--clr-btn-danger-outline-disabled-bg-color`     |
| `--clr-btn-danger-outline-disabled-border-color` |
| `--clr-btn-danger-outline-disabled-color`        |
| `--clr-btn-danger-outline-hover-bg-color`        |
| `--clr-btn-danger-outline-hover-color`           |
| `--clr-btn-default-bg-color`                     |
| `--clr-btn-default-border-color`                 |
| `--clr-btn-default-box-shadow-color`             |
| `--clr-btn-default-checked-bg-color`             |
| `--clr-btn-default-checked-color`                |
| `--clr-btn-default-color`                        |
| `--clr-btn-default-disabled-bg-color`            |
| `--clr-btn-default-disabled-border-color`        |
| `--clr-btn-default-disabled-color`               |
| `--clr-btn-default-hover-bg-color`               |
| `--clr-btn-default-hover-color`                  |
| `--clr-btn-default-outline-bg-color`             |
| `--clr-btn-default-outline-border-color`         |
| `--clr-btn-default-outline-box-shadow-color`     |
| `--clr-btn-default-outline-checked-bg-color`     |
| `--clr-btn-default-outline-checked-color`        |
| `--clr-btn-default-outline-color`                |
| `--clr-btn-default-outline-disabled-bg-color`    |
| `--clr-btn-default-outline-disabled-border-color` |
| `--clr-btn-default-outline-disabled-color`       |
| `--clr-btn-default-outline-hover-bg-color`       |
| `--clr-btn-default-outline-hover-color`          |
| `--clr-btn-font-weight`                          |
| `--clr-btn-group-focus-outline`                  |
| `--clr-btn-height`                               |
| `--clr-btn-height-sm`                            |
| `--clr-btn-horizontal-margin`                    |
| `--clr-btn-horizontal-padding`                   |
| `--clr-btn-icon-disabled-color`                  |
| `--clr-btn-inverse-bg-color`                     |
| `--clr-btn-inverse-border-color`                 |
| `--clr-btn-inverse-box-shadow-color`             |
| `--clr-btn-inverse-checked-bg-color`             |
| `--clr-btn-inverse-checked-color`                |
| `--clr-btn-inverse-color`                        |
| `--clr-btn-inverse-disabled-bg-color`            |
| `--clr-btn-inverse-disabled-border-color`        |
| `--clr-btn-inverse-disabled-color`               |
| `--clr-btn-inverse-hover-bg-color`               |
| `--clr-btn-inverse-hover-color`                  |
| `--clr-btn-link-bg-color`                        |
| `--clr-btn-link-border-color`                    |
| `--clr-btn-link-checked-bg-color`                |
| `--clr-btn-link-checked-color`                   |
| `--clr-btn-link-color`                           |
| `--clr-btn-link-disabled-bg-color`               |
| `--clr-btn-link-disabled-border-color`           |
| `--clr-btn-link-disabled-color`                  |
| `--clr-btn-link-hover-bg-color`                  |
| `--clr-btn-link-hover-color`                     |
| `--clr-btn-outline-bg-color`                     |
| `--clr-btn-padding`                              |
| `--clr-btn-primary-bg-color`                     |
| `--clr-btn-primary-border-color`                 |
| `--clr-btn-primary-box-shadow-color`             |
| `--clr-btn-primary-checked-bg-color`             |
| `--clr-btn-primary-checked-color`                |
| `--clr-btn-primary-color`                        |
| `--clr-btn-primary-disabled-bg-color`            |
| `--clr-btn-primary-disabled-border-color`        |
| `--clr-btn-primary-disabled-color`               |
| `--clr-btn-primary-hover-bg-color`               |
| `--clr-btn-primary-hover-color`                  |
| `--clr-btn-success-bg-color`                     |
| `--clr-btn-success-border-color`                 |
| `--clr-btn-success-box-shadow-color`             |
| `--clr-btn-success-checked-bg-color`             |
| `--clr-btn-success-checked-color`                |
| `--clr-btn-success-color`                        |
| `--clr-btn-success-disabled-bg-color`            |
| `--clr-btn-success-disabled-border-color`        |
| `--clr-btn-success-disabled-color`               |
| `--clr-btn-success-hover-bg-color`               |
| `--clr-btn-success-hover-color`                  |
| `--clr-btn-success-outline-bg-color`             |
| `--clr-btn-success-outline-border-color`         |
| `--clr-btn-success-outline-box-shadow-color`     |
| `--clr-btn-success-outline-checked-bg-color`     |
| `--clr-btn-success-outline-checked-color`        |
| `--clr-btn-success-outline-color`                |
| `--clr-btn-success-outline-disabled-bg-color`    |
| `--clr-btn-success-outline-disabled-border-color` |
| `--clr-btn-success-outline-disabled-color`       |
| `--clr-btn-success-outline-hover-bg-color`       |
| `--clr-btn-success-outline-hover-color`          |
| `--clr-btn-vertical-margin`                      |
| `--clr-btn-vertical-padding`                     |
