---
toc: true
---

# Roadmap

As a design system, Clarity plays a large role in applications and many people from inside and outside of VMware ask for capabilities or changes on a regular basis to enhance the system for various needs. This page contains a summary of the major objectives and an indication of their status and priority.

## How we work

Clarity is an open source project, so we welcome input from the community to help guide the future of Clarity. If you are interested in submitting ideas, we encourage you to use the [GitHub Discussions](https://github.com/vmware-clarity/core/discussions) forum to share your thoughts. We continuously take those requests and review them and incorporate things into our future plans.

Maintaining a design system is a delicate balance of defining the specific capabilities and allowing maximum flexibility. We often take requests together in block to design the best solution that meets the most needs. This means at times we can't accept or prioritize requests, but do our best to balance the overall needs of the community with aligning efforts to keep harmony with Clarity.

## Recently Completed

Below is a list of items that have been recently completed.

#### Pagination

This is a new component. We are building a standalone pagination component that could be used in any context where you have a large amount of records to display but need to split them into different pages. This is currently available in `beta`, see [the pagination component on Storybook](https://clarity.design/storybook/core/?path=/story/components-pagination--page).

#### Cards

This is a new component, built to replace Cards in Clarity Angular. Cards are a common container for grouping information. We are building out a new Card component that will support the existing use cases and allow for additional flexibility for applications. This is currently available in `beta`, see [the cards component on Storybook](https://clarity.design/storybook/core/?path=/story/components-card--page).

#### Table

This is a new component, designed to replace Tables in Clarity Angular. We are building out custom stylings that can be applied to tables to style and suppliment the default browser tables provided in HTML. This is currently available in `beta`, see [the table component on Storybook](https://clarity.design/storybook/core/?path=/story/components-table--page).

#### Breadcrumbs

This is a new component, and doesn't exist today in Clarity Angular. We are working with our friends at Porsche Informatik who have the [Clarity Addons](https://github.com/porscheinformatik/clarity-addons/) library to bring this component into Clarity Core. This is currently available in `beta`, see [the breadcrumb component on Storybook](https://clarity.design/storybook/core/?path=/story/components-breadcrumb--page).

#### Vertical Navigation

This is a new component, designed to replace the Vertical Nav in Clarity Angular. We will then explore building out the other navigational items such as a Header, Subnav, and mobile friendly behaviors. This is currently available in `beta`, see [the navigation component on Storybook](https://clarity.design/storybook/core/?path=/story/components-navigation--page).

#### Tree View

This is a new component, designed to replace Clarity Angular Tree View. We are building out a set of components to compose a nested tree of items and allow users to navigate through directories or select items from a nested list. This is currently available in `beta`, see [the tree view component on Storybook](https://clarity.design/storybook/core/?path=/story/components-tree-view--page).

## In Progress Work

### Core Components

Clarity is actively working on creating our Clarity Core components. Our long term goal is to provide a greater level of capabilities through Clarity Core for the next generation of applications to depend upon for the long term. We are also working to ensure that accessibility is included by default in all of our Core components.

#### Popovers and Dropdowns

This is a new component, designed to replace the Clarity Angular dropdown menu. We are building out a new dropdown menu that has rich positioning and accessibility behaviors that are highly requested. The bulk of the work is in developing an accessible and reusable popover that can be used by dropdowns and other components like signposts and tooltips.

#### Header, Subnav, and Mobile Nav

These are new components, designed to replace the Clarity Angular header, subnav and mobile navigation pattern. There will be similar support to having different header styles and menu options, but enhanced accessibility and mobile friendliness.

### Adoption Support

As we develop Clarity Core, we are also working on documentation and automation to help applications migrate to Clarity Core from Clarity Angular. We want to ensure that this is a smooth process and that applications have the power to choose when and how they update their applications.

### Website Enhancements

The website is a primary source of documentation for Clarity, and we aim to constantly improve and extend it. We're looking at a large number of enhancements that can support better content, enable better viewing of samples, and reach a larger audience.

- Independent Angular documentation - We want to make our original Angular documentation available with interactive demos available again.
- Website Theme Switching - We'd like to make it easy to preview components in the light and dark theme live in the documentation.
- Core Foundational Content - The website foundational pages have not yet been updated to reflect the new content from Clarity Core.
- Updated Charts Guidance - We're working on guidance for accessible and consistent charts and visualizations to help applications reach their audiences.

### Patterns

Patterns are a new aspect to Clarity that we're very excited about. Some key interactions in applications are more complex than an individual component, and we're working to release a set of common patterns that address complex workflows that require multiple components.

## Future Work

### Clarity Core Feature Parity

There are a number of Core components that are either blocked by other work or will be worked upon in the future. The goal is for Clarity Core to reach a similar level of capabilities in Clarity Angular. This list represents the gaps in Clarity Core compared with Clarity Angular. As we work through this list of future work, we are also considering efficiencies by reducing duplicate behaviors or components and in other cases considering adding functionality as we build. In alphabetical order:

- Combobox
- Progress
- Signpost
- Stack View
- Stepper
- Tabs
- Tooltip
- Wizard

### New Potential Components

There are a number of components that are on our radar to consider for inclusion. While we can't make specific committments at this moment, we are considering improvements as well as new components based on the feedback and input we get from users.

### Patterns

We have more patterns envisioned for the long term, and are looking to work with key partners on helping to define and refine them for more use cases.
