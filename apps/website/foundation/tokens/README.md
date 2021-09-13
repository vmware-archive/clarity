---
title: Overview
toc: true
---

Tokens are a way that the basic values we use in our design system are stored and named so they may be used with consistency throughout your application.

## Globals

The foundation of the token system are our Clarity Core globals. These are universal values that remain consistent regardless of the places they are used. Global tokens can be used to define any value our system requires.

Some examples of global tokens are:

```sass
--cds-global-color-green-800
--cds-global-layout-space-sm
--cds-global-typography-color-300
--cds-global-animation-duration-primary
```

Each of these maps to a coresponding value:

```sass
--cds-global-color-green-800 = Web: hsl(93, 80%, 23%)
--cds-global-layout-space-sm = Web: calc((6 / 20) * 1rem)
--cds-global-typography-color-300 = Web: hsl(198, 23%, 23%)
--cds-global-animation-duration-primary = 0.4s
```

The complete set of these global values comprises the decisions we have made regarding the foundational building blocks of the system. The value of this approach is that many aspects of using the system becaome easier and stay consistent. This is due to applications refering to the token by name rather than using a hard coded value. Useful functions such as speeding up or slowing down of motion or turning it on or off all together are as simple as switching to s dark theme from a light one.

## Aliases

Aliases allow us to refer to global values with regard to their meaning or usage.

Some examples of aliases are:

```
--cds-alias-status-info-tint
--cds-alias-object-border-color-shade
--cds-alias-object-interaction-background-active
```

Each of these maps to a coresponding global with a fixed value as above:

```
--cds-alias-status-info-tint =  --cds-global-color-blue-50
--cds-alias-object-border-color-shade = --cds-global-color-construction-300
--cds-alias-object-interaction-background-active = --cds-global-color-blue-100
```

Aliases allow a designer, developer, and their application to do things like use a hover state universally without needing to refer to or use a hard value. In this case we might look at something like a standard action button. Its default active state is: `--cds-alias-status-info` and the hover state is: `--cds-alias-status-info-shade`.

This approach is repeated throughout the Clarity Core system wherever we need a consistent and repeatable way to specify the states and/or details of a component.

## Components

In rare cases a component will require a value that is unique to itself. We use the token system to refer to this value in a way that identifies its use in the component, allowing the same consistency and flexibility the globals and aliases provide.

An example of a alias is:

```
/* component token */
my-element {
  --background: some-color;
```

## Advanced Tokens

In addition to providing consistency to applications by making it easy to resuse common values throughout your application, design tokens can do much more. Since the token is a global value referred to by name it can have underlying values in different formats and can be altered on a global basis. This makes using the design system with different tech stacks, platforms and devices, as well as screen sizes and form factors much more simple.

An example of a global token having the same values defined in different systems is:

`--cds-alias-object-border-color-tint` will generate the following values depending on the platform:

- Web: `hsl(198, 20%, 91%)`
- iOS: `rgb(227, 234, 237)`
- Android: `#e3eaed`

While each is the same color when rendered in the application, it is referred to using the system that corresponds with the platform. Tokens can also be altered programatically such as by making all rem values change by altering the global em.

`--cds-global-layout-space-md`

- Web: calc((12 / 20) \* 1rem)

## Design Tools

Clarity Core is available as a library for Figma (download link)

When inspecting the library the use of tokens will become apparent. At the most rudimentary level, comonly used colors are not refered to by their raw value but rather by the alias that should be designated when using this color in your design and code. The copy / paste function in the docmentation follows this convention and is intended to encourage use of tokens everyehre. Through strict adherence to this practice your application will get theming and many upgrades and bug fixes at little to no effort.

example:

???
