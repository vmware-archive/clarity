---
title: Application Layout
permalink: /documentation/app-layout
layout: documentation
---

{: .component-summary }
##### A properly structured layout enforces an optimal, consistent experience across applications.

### Layout

**.main-container:**
<div>
    The <code class="clr-code">.main-container</code> is a vertical flexbox which wraps the following components:
    <ul class="list">
        <li><a href="{{ site.baseurl }}/documentation/alerts">App-Level Alert</a></li>
        <li><a href="{{ site.baseurl }}/documentation/header">Header</a></li>
        <li><a href="{{ site.baseurl }}/documentation/header">Subnav</a></li>
        <li>Content Container</li>
    </ul>
</div>

**Note:** Although Clarity does not have a footer component, a custom footer can be added in the main-container.

**.content-container:**
<div>
    The <code class="clr-code">.content-container</code> is a horizontal flexbox which wraps the following components:
    <ul class="list">
        <li>Content Area</li>
        <li><a href="{{ site.baseurl }}/documentation/sidenav">Sidenav</a></li>
    </ul>
</div>

<clr-layout-all-demo></clr-layout-all-demo>


{: #guidelines }
### Basic Structure

Two constants of an app built in Clarity are the header and content area. These are the blocks upon which you build your app model.

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_contentarea.png?{{ site.time | date: '%s%N' }}" alt="Header and Content Area"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <h5 style="margin-top:0">Header</h5>
        The <a href="{{ site.baseurl }}/documentation/header">header</a> is for branding and app-level elements such as navigation, search, and account settings.

        <h5>Content Area</h5>
        The content area is where users focus their attention most of the time, gathering information and performing tasks–it is the canvas for your application. As the largest portion of your app, the content area is always visible.
    </div>
</div>




### Layout
Your layout should reflect the information or workflow of the selected <a href="{{ site.baseurl }}/documentation/navigation">navigation</a>. When laying out the content, keep the following in mind:

{: .list}
- The flow of content–how to create a hierarchy and layout that draws attention to the areas of importance
- The importance of designing to the <a href="{{ site.baseurl }}/documentation/grid">grid</a>
- How to aid users in completing their tasks
- How to handle large amounts of data
- Responsive design (if that is part of your product's goals)

##### Common Layout Patterns

Content can consist of any of the <a href="{{ site.baseurl }}/documentation/">Clarity components</a>, or no components and just information.  Following are common layout patterns and recommended usage.
For information on navigation components, header, subnav, and sidenav, see [Navigation]({{ site.baseurl }}/documentation/navigation).

###### Cards

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/cards.png?{{ site.time | date: '%s%N' }}" alt="Cards"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            <a href="{{ site.baseurl }}/documentation/cards">Cards</a> are for presenting high-level information and guiding users to related actions and details. Cards might include a combination of text, images, and data visualizations.
        </div>
        <p>
            Benefits of using cards include:
        </p>
        <ul class="list">
            <li>Ability to see data in a collection</li>
            <li>Facilitates scanning of information</li>
            <li>Works well across platforms</li>
        </ul>
    </div>
</div>

###### Tables and Datagrids

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/tables.png?{{ site.time | date: '%s%N' }}" alt="Tables and Datagrids"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            <a href="{{ site.baseurl }}/documentation/tables">Tables</a> and datagrids are for good for managing large amounts of data.  These layouts work well when users need to compare data and perform batch operations.
        </div>
        <p>
            A table is a static view.  A datagrid provides users flexibility in viewing the data, including filtering and sorting.
        </p>
        <p>
            Complex tables and datagrids work best on larger screens.
        </p>
    </div>
</div>

###### Forms

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/forms.png?{{ site.time | date: '%s%N' }}" alt="Forms"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            <a href="{{ site.baseurl }}/documentation/forms">Forms</a> are for collecting data from users.  Forms are comprised of other components, including labels, input fields, labels, checkboxes, radio buttons, and text.
        </div>
        <p>
            A benefit of a form is that users can see what information they must provide. Conversely, too many fields can discourage the user.
        </p>
        <p>Inline forms are better than modals in cases where you don't want to block users from performing other actions.</p>
    </div>
</div>

###### Tabs

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/tabs.png?{{ site.time | date: '%s%N' }}" alt="Tabs"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            <a href="{{ site.baseurl }}/documentation/tabs">Tabs</a> appear in a single, non-scrollable row, at the top of the content area.  They are good for breaking content into separate, related views.         
        </div>
        <p>
            Tabs are not appropriate if users need to compare data across views.
        </p>
    </div>
</div>

###### White Space and Typography

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/typography.png?{{ site.time | date: '%s%N' }}" alt="White Space and Typography"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            White space and <a href="{{ site.baseurl }}/documentation/typography">typography</a> are important elements in conveying hierarchy.  These elements direct users to what they should view next and make the content and data easier to parse. They also helps bring consistency to an app.
        </div>
    </div>
</div>

###### Button Placement

In the content area, buttons are left-aligned, with the primary button in the leftmost position.  This placement supports the F-pattern layout.

<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
         <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/app-layout/do_button_alignment.png?{{ site.time | date: '%s%N' }}" alt="Buttons align left in content area">
        <p><b><font color="#318700">Do.</font> </b> Left-alignment puts buttons closest to the content.
        </p>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
           <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/app-layout/dont_button_alignment.png?{{ site.time | date: '%s%N' }}" alt="Buttons do not align right in content area">
        <p><b><font color="#E62700">Don't.</font> </b>On the right, buttons might appear separate from content.</p>
        </div>
    </div>
</div>


#### Using Vertical Rhythm for Layout

Vertical rhythm is the repetition of spatial relationships in a design.  A consistent rhythm gives elements a uniform and balanced placement in a design.  The more consistent the design, the easier it is for users to read and understand.

###### The Clarity Baseline is 24px

All elements in Clarity are built in terms of 24px:

{: .list}
- The height of all components and text elements is in multiples of 24px.
- The vertical white space between elements is also in multiples of 24px.


<img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/app-layout/24_baseline.png?{{ site.time | date: '%s%N' }}" alt="24px Baseline">

###### Repeat 24px in Your Layout

Calculate the vertical margins and padding between elements using the Clarity baseline.  A multiple of 24px can be a whole or half-ratio. Common numbers include:

6 px, 12px, 18px, 24px, 30px, 36px, 42px, 48px, 54px, 60px, 66px, 72px  
