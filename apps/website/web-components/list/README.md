---
title: Overview
toc: true
---

::: component-summary

Lists are for showing a set of items in sequence and can be nested to show hierarchy.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a list to group related items and organize them vertically for easy scanning.

:::

::: component-section-level-two-title

## Types

:::

:::component-section-level-two

There are three types of lists: unordered, ordered, and unstyled. Lists can be nested and the varieties can be mixed within nested groupings.

:::

::: component-section-level-three-title

#### Unordered List

:::

:::component-section-level-three

Use an unordered list when the order does not matter.

:::

<DocIndent>
<ul cds-list>
    <li>Chicken Breast</li>
    <li>Flour</li>
    <li>Garlic</li>
    <li>Honey</li>
</ul>
</DocIndent>

::: component-section-level-three-title

#### Ordered List

:::

:::component-section-level-three

Use an ordered list when you need to convey a priority, hierarchy, or sequence between list items.

:::

<DocIndent>
<ol cds-list>
    <li>Split chicken breast in half</li>
    <li>Dust chicken with flour</li>
    <li>Sear chicken, add butter, garlic, vinegar, soy sauce, honey</li>
    <li>Simmer until the sauce thickens</li>
</ol>
</DocIndent>

::: component-section-level-three-title

#### Unstyled List

:::

:::component-section-level-three

Use an unstyled list when styling is unecessary to improve comprehension or hierarchy.

:::

<DocIndent>
<ul cds-list>
    <li>Calories: 323 cal</li>
    <li>Carbohydrates: 23g</li>
    <li>Protein: 28g</li>
    <li>Fat: 13g</li>
</ul>
</DocIndent>

::: component-section-level-three-title

#### Nested Lists

:::

:::component-section-level-three

You can also mix and match list styles based on your use cases.

:::

<DocIndent>
<ul cds-list>
    <li>Gluten free</li>
    <li>Soy sauce</li>
    <li>Other proteins
        <ul cds-list>
            <li>Tofu</li>
            <li>Prawns/shrimp</li>
            <li>Fish</li>
        </ul>
    </li>
    <li>Nutrition</li>
</ul>
</DocIndent>

::: component-section-level-three-title

#### Compact List

:::

:::component-section-level-three

You can also mix and match list styles based on your use cases.

:::

<DocIndent>
<ul cds-list cds-layout="vertical gap:none" cds-text="body">
    <li>Chicken Breast</li>
    <li>Flour</li>
    <li>Garlic</li>
    <li>Honey</li>
</ul>
</DocIndent>
