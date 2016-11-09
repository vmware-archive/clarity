---
title: Typography
permalink: /documentation/typography
layout: documentation
---

{: .component-summary }
#### Clarity uses the geometric sans-serif font, Metropolis.

### Text Styles

<clr-typography-text></clr-typography-text>

### Header Styles

<clr-typography-headers></clr-typography-headers>

### Using Typography

Clarity includes several SASS variables, collections, mixing, and functions for working with typography. These are described below:

#### Variables

##### $clr-font

This SASS variable points to our default text font, Metropolis.

##### $clr-altFont

This SASS variable is only used for our headers (H1..H6). Currently, it also points to Metropolis.

##### $clr-font-size

This SASS variable sets our default font size to 14px.

##### $clr-font-weights

This SASS variable contains a collection for the font weights used in Clarity — light, regular, semibold, and bold. The actual weights assigned to these values are 200, 400, 500, and 600 respectively. The default font weight in Clarity is regular/400. The bold font-weight is actually Metropolis semi-bold (600).

##### $clr-elements

This SASS variable contains a collection that can access all of the font properties for H1 through H6 and P1 through P8 as defined in our typography specs. These properties are returned as a collection which contains nested collections of both common font properties across all screen sizes, as well as breakpoint overrides.

<pre>
<code class="language-scss">
    // passing element label to map-get
    map-get($clr-elements, h3);

    // returns nested map of common properties and breakpoint overrides
    //  (
    //      clr-common: (
    //          font-weight: …,
    //          letter-spacing: …,
    //          font-family: …,
    //          line-height: …,
    //      ),
    //      small: (
    //          letter-spacing: [breakpoint override]
    //      ),
    //      medium: (
    //          letter-spacing: [breakpoint override]
    //      ),
    //      large: (
    //          letter-spacing: [breakpoint override]
    //      ),
    //      xlarge: (
    //          letter-spacing: [breakpoint override]
    //      )
    //  );
</code>
</pre>

##### $clr-typography-dom-to-type-element

This collection maps Clarity components and DOM containers to their expected type properties in <code>$clr-elements</code>. Use the labels listed in the _Use For_ column of the typography tables above.

#### Mixins

Clarity uses SASS mixins to make it easier to access the type properties in the variables and collections listed above. The typography mixins return full CSS style definitions. They are intended to be used inside SASS/SCSS style declarations, placeholders, or other mixins.

##### clr-getTypeProperties($element, $whichTypeProperties)

Returns specified styles (from <code>$whichTypeProperties</code> list parameter) for all styles from the designated typographic element (h1..h6 or p1..p8).

###### Parameters

<div>
<table class="table">
    <thead>
        <tr>
            <th class="left">Parameter</th>
            <th class="left">Optional</th>
            <th class="left">Purpose</th>
            <th class="left">Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">$element</td>
            <td class="left">No</td>
            <td class="left">Key for the typographic properties in the <code class="clr-code">$clr-elements</code> map. <code class="clr-code">h1..h6</code> or <code class="clr-code">p1..p8</code></td>
            <td class="left">&nbsp;</td>
        </tr>
        <tr>
            <td class="left">$whichTypeProperties</td>
            <td class="left">Yes</td>
            <td class="left">A list of font style properties like <code class="clr-code">(font-weight, line-height)</code>. If empty, all properties will be returned.</td>
            <td class="left">An empty list</td>
        </tr>
    </tbody>
</table>
</div>

###### Example

<pre>
<code class="language-scss">
    {% raw %}
    // passing type property list
    .my-styles {{'{'}}
        @include clr-getTypeProperties(p1, (font-weight, font-size));
    {{'}'}};

    //  renders as...
    //  .my-styles {{'{'}}
    //      font-weight: 400;
    //      font-size: 14px;
    //  {{'}'}};

    // passing no type property list
    .all-my-styles {{'{'}}
        @include clr-getTypeProperties(p8);
    {{'}'}};

    //  renders as...
    //  .all-my-styles {{'{'}}
    //      font-weight: 400;
    //      font-size: 10px;
    //      letter-spacing: 0.03em;
    //      line-height: 12px;
    //      margin-top: 24px;
    //      margin-bottom: 0;
    //  {{'}'}};
    {% endraw %}
</code>
</pre>

##### clr-getTypePropertiesForDomElement($element-label, $typePropertiesToGet)

An include that abstracts the clr-getTypeProperties mixin so that users can look up typography based on how it is used in Clarity.

###### Parameters

<div>
<table class="table">
    <thead>
        <tr>
            <th class="left">Parameter</th>
            <th class="left">Optional</th>
            <th class="left">Purpose</th>
            <th class="left">Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">$element-label</td>
            <td class="left">No</td>
            <td class="left">Key/label for the element as found in the <code class="clr-code">$clr-typography-dom-to-type-element</code> map. Existing labels can be found in the <em>Use For</em> column of the header and body text tables above.</td>
            <td class="left">&nbsp;</td>
        </tr>
        <tr>
            <td class="left">$typePropertiesToGet</td>
            <td class="left">Yes</td>
            <td class="left">A list of font style properties like <code class="clr-code">(font-weight, line-height)</code>. If empty, all properties will be returned.</td>
            <td class="left">An empty list</td>
        </tr>
    </tbody>
</table>
</div>

###### Example

<pre>
<code class="language-scss">
    {% raw %}
    // passing type property list
    .sidenav-styles {{'{'}}
        @include clr-getTypePropertiesForDomElement(p1, (font-weight, font-size));
    {{'}'}};

    //  renders as...
    //  .sidenav-styles {{'{'}}
    //      font-weight: 400;
    //      font-size: 14px;
    //      letter-spacing: 0.01em;
    //  {{'}'}};

    // passing no type property list
    .small-text-styles {{'{'}}
        @include clr-getTypeProperties(label_text);
    {{'}'}};

    //  renders as...
    //  .small-text-styles {{'{'}}
    //      font-weight: 400;
    //      font-size: 11px;
    //      letter-spacing: 0.03em;
    //      line-height: 12px;
    //      margin-top: 24px;
    //      margin-bottom: 0;
    //  {{'}'}};
    {% endraw %}
</code>
</pre>


#### Functions

Clarity also includes functions that allow you to access typographic properties to assign them to your own style properties or SASS variables.

##### clr-getTypePropertyValue($element-label, $valToGet)

Returns specified style value (from <code>$valToGet</code>) from styles for the designated typographic element (h1..h6 or p1..p8). Returns an empty string <code>""</code> if the typographic element does not have the style for which it was asked or if it is passed invalid values.

###### Parameters

<div>
<table class="table">
    <thead>
        <tr>
            <th class="left">Parameter</th>
            <th class="left">Optional</th>
            <th class="left">Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">$element-label</td>
            <td class="left">No</td>
            <td class="left">Key for the typographic properties in the <code class="clr-code">$clr-elements</code> map. <code class="clr-code">h1..h6</code> or <code class="clr-code">p1..p8</code></td>
        </tr>
        <tr>
            <td class="left">$valToGet</td>
            <td class="left">No</td>
            <td class="left">A CSS style property from the list of font style properties like <code class="clr-code">font-size</code>, <code class="clr-code">font-weight</code>, etc.</td>
        </tr>
    </tbody>
</table>
</div>

###### Example

<pre>
<code class="language-scss">
    {% raw %}
    // passing type property list
    $myCustomVar: clr-getTypePropertyValue(p1, font-size);
    .my-style {{'{'}}
        font-size: $myCustomVar;
    {{'}'}};

    //  renders as...
    //  .my-style {{'{'}}
    //      font-size: 14px;
    //  {{'}'}};
    {% endraw %}
</code>
</pre>

##### clr-getTypePropertyValueForDomElement($element-label, $valToGet)

This SASS function serves as an abstraction of the <code>clr-getTypePropertyValue</code> above. It performs a lookup against the <code>$clr-typography-dom-to-type-element</code> map so that users can use more familiar component/DOM element labels (as listed in the tables above) to access style property values.

The function returns a specified style value (from <code>$valToGet</code>) from styles for the designated DOM element label (like page_mainHeading). Returns an empty string <code>""</code> if the DOM element or the style is not found.

###### Parameters

<div>
<table class="table">
    <thead>
        <tr>
            <th class="left">Parameter</th>
            <th class="left">Optional</th>
            <th class="left">Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">$element-label</td>
            <td class="left">No</td>
            <td class="left">Key/label for the element as found in the <code class="clr-code">$clr-typography-dom-to-type-element</code> map. Existing labels can be found in the <em>Use For</em> column of the header and body text tables above.</td>
        </tr>
        <tr>
            <td class="left">$valToGet</td>
            <td class="left">No</td>
            <td class="left">A CSS style property from the list of font style properties like <code class="clr-code">font-size</code>, <code class="clr-code">font-weight</code>, etc.</td>
        </tr>
    </tbody>
</table>
</div>

###### Example

<pre>
<code class="language-scss">
    {% raw %}
    // passing type property list
    $myCustomVar: clr-getTypePropertyValueForDomElement(table_header, font-weight);
    .my-style {{'{'}}
        font-weight: $myCustomVar;
    {{'}'}};

    //  renders as...
    //  .my-style {{'{'}}
    //      font-weight: 600;
    //  {{'}'}};
    {% endraw %}
</code>
</pre>

{% comment %}
    Design guidelines start here...
{% endcomment %}


### The Metropolis Font

Metropolis has clear, simple letters with rounded forms.   
This gives the font a friendly and modern appearance.

<img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/typography/Typography-A-Z.png?{{ site.time | date: '%s%N' }}" alt="Metropolis light, regular, medium, and semibold">

### Font Weights in Clarity

To maintain a light, clean look, Clarity does not use a weight stronger than semibold.

<img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/typography/Typography-Metropolis.png?{{ site.time | date: '%s%N' }}" alt="Metropolis light, regular, medium, and semibold">   


### Use the Built-in Styles

The Clarity team determined the optimal height and weight of the text for each component.   Some components also have line wrapping built-in.  If not, text should be kept to a single line.

### Use Text Links for Navigation

<clr-typography-links></clr-typography-links>

Don't use text links for a call to action. [Buttons]({{ site.baseurl }}/documentation/buttons) are better.
