---
title: Overview
toc: true
---

A tooltip is a momentary dialogue which surfaces from an info icon and provides additional information pertaining to the corresponding UI element.

## Usage

Use a tooltip for actionable icons that do not have text labels, such as the icons in a toolbar. A tooltip is visible on hover.

Don’t use a tooltip on:

- Components. Provide a descriptive label and use inline or signpost help for more information.
- Static images. Use the HTML alt tag to provide information about the image.
- Textual links. Ensure that the link describes its destination and is not truncated.

Don’t rely on tooltips to meet accessibility requirements. Rather, ensure that your underlying content is well-structured for accessibility, for example, by using ARIA roles.

## Anatomy

### Size

Set a width that accommodates the text string. If no size class is used on the tooltip, the default is 240px wide (e.g - `.tooltip-md`) is applied. Other choices are 72 px, 120 px, and 360 px.

1. `.tooltip-xs` is 72px wide
   <doc-demo file="/demos/tooltip/tooltip-xs.html"></doc-demo>
2. `.tooltip-sm` is 120px wide:
   <doc-demo file="/demos/tooltip/tooltip-sm.html"></doc-demo>
3. `.tooltip-md` is 240px wide:
   <doc-demo file="/demos/tooltip/tooltip-md.html"></doc-demo>
4. `.tooltip-lg` is 360px wide:
   <doc-demo file="/demos/tooltip/tooltip-lg.html"></doc-demo>

## Placement

Use tooltip positions that ensure the entire element is visible onscreen. Do not cover important UI elements with a tooltip. The default tooltip position is `top-right` of the tooltip trigger. Tooltips point to the center of the trigger.

### CSS classes for position

#### `.tooltip-top-left`

<doc-demo file="/demos/tooltip/tooltip-top-left.html"></doc-demo>

#### `.tooltip-top-right`

<doc-demo file="/demos/tooltip/tooltip-top-right.html"></doc-demo>

#### `.tooltip-bottom-left`

<doc-demo file="/demos/tooltip/tooltip-bottom-left.html"></doc-demo>

#### `.tooltip-bottom-right`

<doc-demo file="/demos/tooltip/tooltip-bottom-right.html"></doc-demo>

#### `.tooltip-right`

<doc-demo file="/demos/tooltip/tooltip-right.html"></doc-demo>

#### `.tooltip-left`

<doc-demo file="/demos/tooltip/tooltip-left.html"></doc-demo>

## Content

- Use a verb phrase to describe the action on the icon, for example, “Edit settings.”
- Use only plain text and be concise. Tooltips can be a sentence fragment.
- If more detailed information is required, use another form of help.
- Use sentence-style caps and no ending punctuation.
