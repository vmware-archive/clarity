---
title: Header & Subnav
permalink: /documentation/header
layout: documentation
---

{: .component-summary }
#### The header and subnav support app-level information and navigation links.

### Header

**.header**
<div>
    <code class="clr-code">.header</code> is a wrapper around the following four sections:
</div>

- Branding
- Navigation
- Search
- Settings

**.branding**
<div>
    <code class="clr-code">.branding</code> contains the product logo and the product title. The logo extends the <code class="clr-code">.clr-icon</code> class and the title extends the <code class="clr-code">.title</code> class.
</div>

**.header-nav**
<div>
    <code class="clr-code">.header-nav</code> contains the navigation links. Each navigation link extends the <code class="clr-code">.nav-link</code> class. Navigation links can be text or icons.
</div>

**.search**
<div>
    <code class="clr-code">.search</code> is a form containing the search icon and the search input field.
</div>

**.header-actions**
<div>
    <code class="clr-code">.header-actions</code> is a wrapper that contains secondary navigation links. Each navigation link extends the <code class="clr-code">.nav-link</code> class. Navigation links can be text or icons.
</div>

#### Types
<clr-header-demo-types></clr-header-demo-types>

#### Color Options
<clr-header-demo-colors></clr-header-demo-colors>

### Subnav

<code class="clr-code">.sub-nav</code> immediately follows the <code class="clr-code">.header</code>. It wraps a [tab]({{ site.baseurl }}/documentation/tabs) and an <code class="clr-code">aside</code> section.

<clr-nav-demo-subnav></clr-nav-demo-subnav>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Header

At the top of the viewport, the header contains branding, navigation, and other elements. Clarity recommends the following header structure, from left to right:

{: .list}
- Branding (required)
- Navigation (optional)
- Search (optional)
- Settings (optional)

![Navigation]({{ site.baseurl }}/images/documentation/header/Navigation_header.png)

#### Branding
Branding should include your product's logo and name. A minimum of 200 pixels is recommended to avoid crowding the left side of the header.

#### Navigation

Although users commonly look for app-level navigation in the header, having too many main links can cause navigation to lose its meaning.

{: .list}
- The header works best for two to four links.
- For less than two, navigation is not needed.
- For more than four, use the subnav or [sidenav]({{ site.baseurl }}/documentation/sidenav).

##### Text Links

The preferred format of navigation links is text because it is generally better understood than icons.

{: .list}
- Use one to two words per link, with a limit of 16 characters.
- Make sure that the terminology is clear.
- Use title caps.
- Do not wrap text.

##### Icon Links

{: .list}
- Ensure that the icons are clearly recognizable, for example, Home.
- Alternately, include a text label, for example, a cloud icon and the text "Cloud Infrastructure."
- Provide a tooltip that describes the function of the icon.
- Don't mix standalone icons with standalone text links.

#### Search

Consider placement of Search as follows:

{: .list}
- If the header includes navigation links, place Search to the immediate right of the links.
- If the header does not include navigation, make Search the central point.
- Otherwise, align Search on the right.

For larger screens, include placeholder text in the Search field to give users an example of a search query.

![Search]({{ site.baseurl }}/images/documentation/header/Search_header.png)

#### Settings

Settings are typically right-aligned.  These might include app-related actions such as help and logout.  Don't overcrowd the header with too many settings--consolidate them in a dropdown menu.

#### Colors

Headers have their own color palette.  These colors make the header visually recede in focus so it does not compete with the content area.

![Header Colors]({{ site.baseurl }}/images/documentation/header/Colors.png)

### Subnav
Directly below the header, the subnav is recommended for either app-level navigation links or for links secondary to the ones in the header:

{: .list}
- For best use of the horizontal space, include five to seven links.  Less than five might leave too much empty space.
- Use text for the link names, not icons.
- Ensure that the text is clear and concise.
- Use title caps.

![Subnav]({{ site.baseurl }}/images/documentation/header/Subnav_header.png)
