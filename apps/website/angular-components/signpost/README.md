---
title: Overview
toc: true
---

The signpost is a convenient, lightweight way to show contextual help of information without taking the user out of the current context.

## Usage

Use a signpost when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding details.

<ClrImage title="basic and pie chart" src="/images/angular-components/signpost/basic-and-pie-chart.svg" align="center" />

Use a signpost:

- When you want to include a header, image or text/image links in the content
- When the information presented needs to stay in view at length (Unlike tooltips, signposts stay in view until the user interacts with another element)

## Anatomy

A signpost displays contextual help or information in a popover dialog. Like a tooltip, it has an arrow/pointer that extends out to the trigger element, but the dialog is larger to fit more content. Signposts are designed to show a relatively small amount of content which may include: a title, images, text links of image links. A vertical scrollbar (browser default) may be used if the content exceeds the maximum height of the dialog.

### Size

Min-width 216px; Min-height 84px
Max-width 360px; Max-height 504px

## Behavior

Clicking the icon triggers the signpost. It remains visible until the user clicks the close icon or clicks anywhere outside of the dialog to dismiss it. To keep the interface uncluttered, only one signpost is displayed at a time. When a dialog is visible, clicking an icon to open another one automatically dismisses the previous dialog.

<ClrImage title="states" src="/images/angular-components/signpost/states.svg" align="center" />

## Placement

[//]: # 'IMAGE - default position'

Default position for the dialog is 6px to the right of the trigger icon.

<ClrImage title="Trigger icon and dialog positioning" src="/images/angular-components/signpost/positioning.svg" align="center" />

[//]: # 'IMAGES x2 - icon position'

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

<ClrImage title="Default position for the dialog is 6px from the end of the text" src="/images/angular-components/signpost/inline-alignment.svg" align="center" />
Default position for the dialog is 6px from the end of the text

</div>
<div class="clr-col-12 clr-col-md-6">

<ClrImage title="In tables, the icons may be aligned in a column" src="/images/angular-components/signpost/column-alignment.svg" align="center" />
In tables, the icons may be aligned in a column

</div>
</div>

### Recommendations

- The popover should not be so large that it dominates the screen
- Make sure that the popover doesn't obstruct other important information on the screen
- With the exception of text/image links, don't insert any actionable components, such as buttons, in the dialog
- Don't rely on signposts as a primary method of displaying additional information - i.e. as a way to save space on a page
- Use sparingly as a device to add immediate, relevant information

## Code & Examples

### Basic Signpost

The signpost component uses the `*clrIfOpen` structural directive (detailed documentation coming soon) on the signpost content to indicate clearly that said content is only present in the DOM when open. We heavily recommend using it for many reasons: better performance, making the intent clear in your own templates, and following a more natural lifecycle for any directives or components inside of the signpost.

If for some reason this behavior was not the one you wanted, for instance if you want screen readers to read the signpost inline as opposed to when the user activates the trigger, we also support the signpost content without a \*clrIfOpen directive on it. It will be created eagerly when the signpost itself initializes, and will not be destroyed or recreated until the signpost itself is. Please make sure you know exactly why you are omitting this directive if you end up doing so.

The default signpost is shown to the right of the trigger icon with the content centered vertically in the middle of the trigger. It opens with a click action. Once open its contents can be interacted with. The Signpost is closed when clicking on the X icon or by clicking anywhere outside the clr-signpost-content element.

![Basic Signpost](/images/angular-components/signpost/basic.png)

<doc-code>
<<< .vuepress/public/demos/signpost/basic-ng.html
</doc-code>

### Positions

There are twelve signpost positions to help place popover content in an appropriate position when it is shown. Control the position and direction by declaring a position that orients the Signpost content in one of these positions.

To set a position, use the `clrInput` property on the [ClrSignpostContent](/angular-components/signposts/api/#clrsignpostcontent) element:

- top-left
- top-middle
- top-right
- right-top
- right-middle
- right-bottom
- bottom-right
- bottom-middle
- bottom-left
- left-bottom
- left-middle
- left-top

### Custom Trigger

Clarity provides a default trigger. If needed, a custom trigger can be provided for any icon or element. Adding the [ClrSignpostTrigger](/angular-components/signpost/api/#clrsignposttrigger) directive to any element will turn it into a toggle control for the content.

<doc-code>
<<< .vuepress/public/demos/signpost/custom-ng.html
</doc-code>
