---
title: Overview
toc: true
---

::: component-summary

Design tokens are the foundation of the Clarity Design System. They are fundamental to everything that is built in Clarity. Changes to a global token will propagate visual changes throughout the entire system.

Clarity design tokens are organized into three categories:

1. **Global**: global primitives are building blocks that everything in CLarity is constructed with.
2. **Alias**: alternative values that describe intent.
3. **Component**: component specific values that control the look-n-feel and to a certsain extent, the behavior of a specific component.

:::

::: component-section-level-one-title

## Spacing

:::

:::component-section-level-one

Spacing is a fundamental part to a good user interface. It is integral to page and component layout and is used to control density and information hierarchy. Clarity provides two sets of [spacing](/foundation/design-tokens/spacing/) primitives that are used throughout the system and should also be used when building with Clarity.

Yuou can also see the spacing tokens used in the [layout](/foundation/layouts/), [typography](/foundation/typography/) and [color](/foundation/color/) tokens.

:::

:::component-section-level-one-title

## Alias Tokens

:::

:::component-section-level-one

Alias tokens are used to describe intent **throughout** the system. States such as status, sucess and error are commonly repeated in multiple components and these aliases are used to unify and reduce the code for those styles.

Alias tokens can be found indetail [here](/foundation/design-tokens/aliases/).

:::

::: component-section-level-one-title

## Component Tokens

:::

:::component-section-level-one

Component tokens are specific values that control the look-n-feel, and to a certain extent the behavior, of a specific component. These tokens often use the built in primitives. In opening up access to the look-n-feel of a component Clarity provides the means for consumers to customize the public parts of a component to suit application needs.

For more information see the API section of a given **web-component** to identify the css properties that are exposed.

:::
