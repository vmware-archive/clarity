# Coding guidelines

To ensure the highest quality and maintainability for Clarity components, we adhere to the following guidelines when coding.

**Some of our code hasn't been updated to these standards yet, but these do take precedence. Copy-pasting existing code without updating it to follow these guidelines will result in a stalled PR.**

## File names

* Components or directives should be named without a suffix like `datagrid-row.ts`, and be placed in the main module folder like `/datagrid/datagrid-row.ts`.
* Providers, factories, services should be named with a suffix like `wizard-navigation.service.ts`.
  * If the component has a single provider, the provider file can be placed directly in the same folder as the component itself.
  * In the case of more complex components (like the Datagrid or the Wizard) where many providers are needed for the various subcomponents to communicate, the providers should be placed inside of a `providers` subfolder of the module folder like `/wizard/providers/wizard-navigation.service.ts`.
* Interfaces and abstract classes used as interfaces should be named with a suffix like `datagrid-state.interface.ts` \* If the component has a single provider, the provider file can be placed directly in the same folder as the component itself
  * In the case of more complex components (like the Datagrid or the Wizard) where many providers are needed for the various subcomponents to communicate, the providers should be placed inside of a `providers` subfolder of the module folder like `/wizard/providers/wizard-navigation.service.ts`.
* Interfaces and abstract classes used as interfaces should be named with a suffix like `datagrid-state.interface.ts`.
  * If the component has one or two interfacees/abstract classes the file can be placed in the same folder as the component itself
  * In the case of more complex components (w/ 3 or more) interfaces/abstract classes should be placed inside an interface subfolder like `/datagrid/interfaces/string-filter.interface.ts`
* Enums should be named with a suffix like `sort-order.enum.ts`.
  * If the component has one or two enums the file can be placed in the same folder as the component
  * In the case of more complex components(w/ 3 or more enums) they should be placed in an `enum` subfolder like `/datagrid/enums/sort-order.enum.ts`

## Naming conventions

### General guidelines

* Prefer full words over abbreviations
* Anything public and meant to be used by consumers should have the `clr` prefix.

### SCSS

* SCSS variables should use the `clr` prefix and follow the `kebab-case` convention: `$clr-some-variable`.
* Coming soon...

### Typescript

#### Constants

Constants internal to Clarity are named following the `SCREAMING_SNAKE_CASE` convention.
Constants exported as part of our public API follow the same convention but need to be prefixed: `CLR_SCREAMING_SNAKE_CASE`.

#### Enums

The enum itself is prefixed by `Clr` since it is public, and each of the values are `SCREAMING_SNAKE_CASE` because they are constant. For instance:

```typescript
ClrDirection.DOWN;
```

#### Class names

Any class exported publicly needs to be prefixed with `Clr`. For instance:

```typescript
class ClrBourgeoisie {}
class ClrProletariat {}
```

#### Properties and methods

Properties and methods on Typescript classes should not be prefixed or suffixed. In particular, private properties should **not** be prefixed with `_`.

```typescript
public open: boolean;
public next() { ... }
private subscription: Subscription;
```

There are 2 exceptions to this rule, and they're the only cases where we allow the use of an `_` prefix:

* A private property is hidden behind a getter (and maybe a setter) that has the same name:

```typescript
private _open: boolean;
public get open(): boolean;
public set open(value: boolean);

private _openChange: Subject<boolean>;
public get openChange(): Observable<boolean>;
```

* A property or method needs to be public for integration purposes but should not be considered public by the consumer:

```typescript
@ContentChildren(Something) _children: QueryList<Something>;
_internalMethodCalledFromAnotherClass()
```

### Angular

#### Components and directives selector

All Angular selectors are prefixed with `clr`, then follow the typical `snake_case` or `camelCase` depending on whether they're element or attribute selectors:

```
clr-component
[clrDirective]
```

When larger components have sub-components, the sub-component should use these selectors:

```
clr-component-subcomponent
[clrComponentSubdirective]
```

This is slightly verbose, but will prevent conflicts between components. This is a case where abbreviations are acceptable to reduce verbosity.

#### Inputs and outputs

To avoid conflict with non-Clarity components, inputs and outputs of our directives and components should be prefixed with `clr`:

```
[clrInput]
(clrInputChange)
(clrOutput)
```

Remember that for `[(clrProperty)]` two-way binding to work, you need to expose both a `[clrProperty]` input and
a `(clrPropertyChange)` output.

#### Components and directives class names

Components and directives are exported Typescript classes, so they respect the earlier convention and are prefixed with `Clr`. Contrary to the recommendation on the Angular style guide, they do not have any `Component` or `Directive` suffix, in order to allow us to switch from one to the other without breaking changes. For instance:

```
ClrWizard (component)
ClrIfOpen (structural directive)
ClrLoading (directive)
```

#### Providers and services class names

Once again, providers are exported Typescript classes so they are prefixed. To avoid conflicts with similar component names, they are suffixed with `Service`:

```
ClrSomeService
ClrIfOpenService
```

#### Modules

Prefixed with `Clr` as usual, and suffixed with `Module`:

```
ClrWizardModule
ClrFormsModule
```

`ClarityModule` is the exception, since the actual "Clarity" name is already there.

## Typescript and Angular

### Public API

* Custom texts should almost always be received through content projection, **not** inputs. This will allow for icons, images, links, etc.
* Offer an output for every internal state change, whether it's triggered by a user action or an internal operation (expand/collapse, on/off, option selected, etc).
* Offer two-way binding rather than simple outputs when possible.
* Use structural directives to receive `TemplateRef` instances, in order to offer a less verbose API than `<ng-template>` to the consumer.
* Have related components (like parent / child) communicate by default through services.
* Never use explicitly named template reference variables as part of the API, to query them through `@ContentChild`. Simply receive structural directives or inputs.
* Never make HTTP calls, and never impose formatting constraints on their backend API.
* In cases where a directive cannot be used unless it is a child of another directive, it is usually best to throw a new Error in the constructor to alert developers that it is not supported. [Example](src/clr-angular/popover/dropdown/dropdown-menu.ts)

Finally, and this is harder to put in black-or-white terms, keep the API as simple and natural as possible, even if it means more work on Clarity's side. Implementing multiple directives and components and making them communicate through services will lead to a much more pleasant integration than forcing your consumer to pass data manually from one to the other. Here are a couple examples of what to do and not to do (taken from real-life carousel components):

* **Don't:** Using an `<ng-template>` and passing an `$implicit` value to it, that the consumer will have to tie to a template local variable:

```html
<clr-carousel [clrItems]="items">
  <ng-template let-item>
    <h1>{{item}}</h1>
  </ng-template>
</clr-carousel>
```

* **Don't:** Receive an input on the "wrong" component, and force the user to handle the communication between this component and the other, linked ones (in this case through a template reference variable):

```html
<clr-carousel #carousel [clrItems]="items">
  <h1 *ngFor="let item of carousel.visible">
    {{item}}
  </h1>
</clr-carousel>
```

* **Do:** Introduce a new structural directive that behaves like an `*ngFor`, but will automatically communicate with the parent component through services:

```html
<clr-carousel>
  <h1 *clrVisible="let item of items">
    {{item}}
  </h1>
</clr-carousel>
```

### Code style

* If the template is just a few lines, it should go inline in the component's metadata with `template`. Otherwise, it should be in a separate HTML file using `templateUrl`.
* Make sure to use CSS classnames with your components. We avoid using component tags in our CSS selectors. This often means adding a `host: { '[class.your-classname-here]': 'true' }` to your component definition. And in the CSS you would then use the classname defined on the host in your CSS selectors instead of the component element tag. So instead of using `clr-signpost { .. }` to apply styles to a component, you would use `.signpost { .. }`.
* Bindings that are always true should be declared directly in the component's metadata using the `host` option. Other bindings should be on the corresponding property or getter, using the `@HostBinding` annotation.
* Host listeners should always use the `@HostListener` annotation.
* Methods used as event listeners in a component or directive should be named in a way that describe **what** they do, not **when** they trigger. For instance, if a method is used when the user clicks a button to toggle the selection, the method name should **not** be `onClick()`, it should be `toggleSelection()`. Here are more typical method names that are commonly used but that you should avoid: `onClick()`, `onHover()`, `onFocus()`, `onScroll()`, etc.

### Gotchas

* Make sure your component or feature is fully accessible.
* Never hardcode any text in your template or in the component. Any text visible to the user should be received from the consumer.
* Avoid using native elements API as much as possible. Use simple bindings or the renderer to achieve the same effect.
* An `@Output` **should not** fire when we receive a new `@Input` value from the app.
* Any button in your template should have `type="button"`, in case the component is used inside of a form.

### Unit testing

* We expect extensive unit test coverage of any code submitted.
* Unit tests should not duplicate coverage. In particular, avoid multiple unit tests failing for the same error.
* Do not test several components at the same time, unless you're specifically writing an integration test. You should manually declare parent components that might be needed for your test as **providers**, or even better mock them. In other words, make sure the only components your are declaring in your testing module are the currently tested component and the test host.
* Split your unit tests in Typescript API, Template API and View (details coming soon).

## Static UI

* Remove unused HTML wrappers that might be left from previous prototypes of your code.
* Avoid styling elements themselves, use CSS classes. This also means applying CSS styles to the classes on your Angular components. For example, don't use `clr-signpost > .btn` as a selector in your CSS. Use `.signpost > .btn` instead.
* Keep your CSS selectors as flat as possible, try not to exceed 2 levels (e.g. `.parent .child`).
* Do not hardcode colors, use the SCSS variables provided in `color/_variables.color.scss`.
* Only use `rem` and `%` sizes. The only exception is `1px` borders that should remain 1px even on larger font sizes.
* All of your SCSS styles should be wrapped in an `@include exports('XXX.clarity') { ... }`, to avoid producing duplicates in the deliverable CSS.
* The baseline should always be respected to ensure proper vertical rhythm.
