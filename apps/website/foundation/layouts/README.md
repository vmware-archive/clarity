---
title: Overview
toc: true
---

Clarity provides tools for the simplification and consistency of layout in your application, making it easier to exert the control you need for rythmic and consistent designs.

## Space and Layout Space

Clarity provides 2 sets of space. **Layout-Space** is the smaller set in T-shirt sizes e.g. XXS and is based on a 4px proportional system. This set is very useful for designing screens with space between components that define a regular vertical rhythm. Since margin and padding attributes are absent from Clarity Core components, you can create designs using a bricks (components) and mortar (space) metaphor. By specifying the use of space in this way, combined with our Layout Utilities, the code and design have a 1:1 correspndence - no suprises and easy to finesse.

<DocSpaceLayout />

<p cds-text="message center" cds-layout="m-b:xl">Layout-Space showing vertical and horizontal orientation</p>

**Space** is a larger set of values provided for finer increments of adjustement necessary for the details within components. These are described by number e.g. size-4. In both cases pixel sizes are provided as a helper to assist in understanding them in a 100% magnification view, but under the hood they refer to scalable values allowing proper magnification and responsive design. In most cases designers will be using only **Layout-Space**. **Space** should be used primarily for designing components. Keep this is mind if you need something Clarity does not provide. Using the **Space** tokens to build such a componenent will make it behave as expected with regard to theming.

<DocSpaceSpace />

<p cds-text="message center" cds-layout="m-b:xl">Space showing vertical and horizontal orientation</p>

## Layout Utilities

By combining the space primitives with our lyout utilities you can achieve a great deal of felxibility and dynamic behavior in your screen designs. This is best be illustrated by way of example. Lets say we have a group of elements arranged vertically and we wish to fine tune the rhythm for a pleasing and functional information hierarchy. In this example we’ve decided that we want XXL between the top of the page and the group of buttons, MD between the buttons and the horizontal rule, XS between the rule and the title, and LG between the title and the body copy. We specify each in our design in the T-shirt size scale. The layout utility will be used to group and arrange the components. In this case layout will specify vertical and left align. We also have specified that the button group is left aligned and uses a MD space between each button.

This is a very simple example. The utilities have numerous options which allow you to specify not only the alignment and gap attributes of a group, but also how a component scales, wraps, stretches, responds (or doesn’t) relative to the container it is within. The full list one may call upon includes more attributes than are practical to review here. Please see: (storybook link) for a complete list of layout utilities and examples.
