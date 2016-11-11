---
title: Header & Subnav
permalink: /documentation/header
layout: documentation
---

{: .component-summary }
##### The header and subnav support app-level information and navigation links.

### Header

###### .header

<code class="clr-code">.header</code> is a wrapper around the following four sections:

{: .list}
- Branding
- Navigation
- Search
- Settings

###### .branding

<code class="clr-code">.branding</code> contains the product logo and the product title. The logo extends the <code class="clr-code">.clr-icon</code> class and the title extends the <code class="clr-code">.title</code> class.

###### .header-nav

<code class="clr-code">.header-nav</code> contains the navigation links. Each navigation link extends the <code class="clr-code">.nav-link</code> class. Navigation links can be text or icons.

###### .search

<code class="clr-code">.search</code> is a form containing the search icon and the search input field.

###### .header-actions

<code class="clr-code">.header-actions</code> is a wrapper that contains secondary navigation links. Each navigation link extends the <code class="clr-code">.nav-link</code> class. Navigation links can be text or icons.

#### Types
<clr-header-demo-types></clr-header-demo-types>

#### Color Options
<clr-header-demo-colors></clr-header-demo-colors>

### Subnav

<code class="clr-code">.sub-nav</code> immediately follows the <code class="clr-code">.header</code>. It wraps a [tab]({{ site.baseurl }}/documentation/tabs) and an <code class="clr-code">aside</code> section.

<clr-nav-demo-subnav></clr-nav-demo-subnav>

{: #guidelines}
### Using Headers

The Clarity header can include the following elements, placed from left to right:

{: .list}
- Product identification
- Navigation
- Search
- Settings

<!--![Navigation]({{ site.baseurl }}/images/documentation/header/Navigation_header.png)-->

#### Product Identification
A minimum of 200 pixels is recommended to avoid crowding the left side of the header.  Clicking on the product name should return the user to the home page.

#### Navigation

The header works best for two to four links. For less than two, navigation is not needed. For more than four, use the subnav or [sidenav]({{ site.baseurl }}/documentation/sidenav).  Although users commonly look for app-level navigation in the header, having too many main links can cause navigation to lose its meaning.


#### Text Links

The preferred format of navigation links is text because it is generally better understood than icons.  Use one to two words per link, with a limit of 16 characters.  Do not wrap text.

#### Icon Links

Ensure that the icons are clearly recognizable, for example, Search. Alternately, include a text label, for example, a cloud icon and the text "Cloud Infrastructure."  You can also provide a tooltip that describes the function of the icon.

Don't mix standalone icons with standalone text links.

#### Search

Consider placement of Search as follows:

{: .list}
- If the header includes navigation links, place Search to the immediate right of the links.
- If the header does not include navigation, make Search the central point.
- Otherwise, align Search on the right.

For larger screens, include placeholder text in the Search field to give users an example of a search query.

<!--![Search]({{ site.baseurl }}/images/documentation/header/Search_header.png)-->

#### Settings

Settings are typically right-aligned.  These might include app-related actions such as help and logout.  Don't overcrowd the header with too many settings--consolidate them in a dropdown menu.

#### Colors

Headers have their own color palette.  These colors make the header visually recede in focus so it does not compete with the content area.

![Header Colors]({{ site.baseurl }}/images/documentation/header/Colors.png)

### Using the Subnav
The subnav is recommended for either app-level navigation links or for links secondary to the ones in the header. For best use of the horizontal space, include five to seven links.  Less than five might leave too much empty space.

Use text for the link names, not icons. Ensure that the text is clear and concise.

<!--
![Subnav]({{ site.baseurl }}/images/documentation/header/Subnav_header.png)-->
