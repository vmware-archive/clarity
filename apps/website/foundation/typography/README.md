---
title: Typography
toc: true
---

Clarity uses the geometric sans-serif font, Clarity City.

## Text Styles

<DocTypographyTable table="text-styles" />

```html
<p class="p1">Body text</p>
<p class="p2">Section header</p>
<p class="p3">Table, grid, and form text</p>
<p class="p4">Form labels and column headers</p>
<p class="p5">Table footers and chart data</p>
<p class="p6">Mostly buttons</p>
<p class="p7">Tags and labels</p>
<p class="p8">Badges</p>
<pre class="language-html">Monospaced</pre>
or <code class="language-html">Monospaced</code>
```

## Header Styles

<DocTypographyTable table="header-styles" />

```html
<h1>Header 1 (Display)</h1>
<h2>Header 2 (Headline)</h2>
<h3>Header 3 (Sub Heading)</h3>
<h4>Header 4 (Section Heading Level 1)</h4>
<h5>Header 5 (Category / group label, TOC)</h5>
<h6>Header 6 (Section Heading Level 2 group label)</h6>
```

## Using Typography

Clarity includes several SASS variables, collections, mixing, and functions for working with typography. These are described below:

###### \$clr-font

This SASS variable points to our default text font, Metropolis.

###### \$clr-altFont

This SASS variable is only used for our headers (H1..H6). Currently, it also points to Metropolis.

###### \$clr-font-size

This SASS variable sets our default font size to 14px.

###### \$clr-font-weight-light

This SASS variable defaults to 200. It is used in very large display text (p0) and headers 1 through 4.

###### \$clr-font-weight-regular

This SASS is the default font weight for Clarity. It defaults to 400.

###### \$clr-font-weight-semibold

This SASS variable is the default bold font-weight of Clarity. It is Metropolis semi-bold (500).

###### \$clr-font-weight-bold

This SASS variable defaults to 600. It is used in very small text (p4 and p6).

### The Clarity City Font

Clarity City has clear, simple letters with rounded forms.
This gives the font a friendly and modern appearance.

<ClrImage title="Metropolis light, regular, medium, and semibold" src="/images/foundation/typography/Typography-A-Z.png" />

### Font Weights in Clarity

To maintain a light, clean look, Clarity does not use a weight stronger than semibold.

<ClrImage title="Metropolis light, regular, medium, and semibold" src="/images/foundation/typography/Typography-Metropolis.png" />

### Use the Built-in Styles

The Clarity team determined the optimal height and weight of the text for each component. Some components also have line wrapping built-in. If not, text should be kept to a single line.

### Use Text Links for Navigation

Don’t use text links for a call to action. [Buttons](/components/buttons) are better.
