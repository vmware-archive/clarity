---
title: Tabs
permalink: /documentation/tabs
layout: documentation
---

{: .component-summary }
#### With tabs, users can easily switch between alternate views.

### Static

###### Basic example

The following is a static example of tabs with their associated sections. The active tab should have the additional class <code class="clr-code">active</code>.

The stylesheet will hide all the section elements where attribute <code class="clr-code">aria-hidden</code> is set to <code class="clr-code">true</code>.

###### Accessibility

The active tab should have the attribute <code class="clr-code">aria-selected</code> set to <code class="clr-code">true</code>, and the others false.

The active panel associated with the active tab should have the attribute <code class="clr-code">aria-hidden</code> set to <code class="clr-code">true</code>, and the others <code class="clr-code">false</code>.

In addition, each tab should have an aria-controls attribute set to the id of the matching panel and each panel should have an <code class="clr-code">aria-labelledby</code> attribute set to the id of the tab associated with the panel.

<clr-tabs-demo-static></clr-tabs-demo-static>

### Angular Component

###### Basic example

The tabs component is generated based on the <code class="clr-code">&lt;clr-tab-link&gt;</code> and <code class="clr-code">&lt;clr-tab-content&gt;</code> sub-components inside the <code class="clr-code">&lt;clr-tabs&gt;</code> tag. The tab links are automatically associated with the the content components in order. If there are more tabs then the content sections, clicking on the extra tabs will set the tab to active, but will only show blank content. If there are more content sections than the tabs, the extra sections will remain invisible since no tab can be selected to activate them.

###### Accessibility

All attributes associated with accessibility (aria-controls, aria-selected, aria-hidden, aria-labelledby, role) are automatically created and managed by the angular component.

<clr-modal-tabs-angular></clr-modal-tabs-angular>

### Summary of Options

<table class="table">
    <thead>
    <tr>
        <th class="left">Input/Output</th>
        <th>Values</th>
        <th>Default</th>
        <th class="left">Effect</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="left">[clrTabContentActive]</td>
        <td>true, false</td>
        <td>false</td>
        <td class="left">
            Used on &lt;clr-tab-content&gt;. If true, will make the content visible. If none of the
            &lt;clr-tab-content&gt;s is set as active, then the component will initialize the first one as active.
            Note that while it's possible to set multiple tab contents as active, it is discouraged.
        </td>
    </tr>
    <tr>
        <td class="left">[clrTabContentId]</td>
        <td>&lt;any valid id for html element&gt;</td>
        <td>auto-generated</td>
        <td class="left">
            Used on &lt;clr-tab-content&gt;. If explicitly set, will assign the set id as the id for the element. If not set,
            the component will auto-generate the id.
        </td>
    </tr>
    <tr>
        <td class="left">[clrTabsCurrentTabIndex]</td>
        <td>&lt;number&gt;</td>
        <td>-1</td>
        <td class="left">
            Returns the index of the current active tab link. If multiple tab links are active, this will return the
            index of the last active tab link.
        </td>
    </tr>
    <tr>
        <td class="left">[clrTabLinkActive]</td>
        <td>true, false</td>
        <td>false</td>
        <td class="left">
            Used on &lt;clr-tab-link&gt;. If true, will highlight the tab as an active tab. If none of the
            &lt;clr-tab-link&gt;s is set as active, then the component will initialize the first one as active.
            Note that while it's possible to set multiple tab links as active, it is discouraged.
        </td>
    </tr>
    <tr>
        <td class="left">[clrTabLinkId]</td>
        <td>&lt;any valid id for html element&gt;</td>
        <td>auto-generated</td>
        <td class="left">
            Used on &lt;clr-tab-link&gt;. If explicitly set, will assign the set id as the id for the element. If not set,
            the component will auto-generate the id.
        </td>
    </tr>
    <tr>
        <td class="left">(clrTabsCurrentTabLinkChanged)</td>
        <td>&lt;TabLink&gt;</td>
        <td>N/A</td>
        <td class="left">
            When a tab is clicked, an event is emitted with the selected TabLink.
        </td>
    </tr>
    <tr>
        <td class="left">(clrTabsCurrentTabContentChanged)</td>
        <td>&lt;TabContent&gt;</td>
        <td>N/A</td>
        <td class="left">
            When a tab is clicked, an event is emitted with the TabContent whose index matches the selected TabLink.
        </td>
    </tr>
    <tr>
        <td class="left">(clrTabsCurrentTabIndexChanged)</td>
        <td>&lt;number&gt;</td>
        <td>N/A</td>
        <td class="left">
            When a tab is clicked, an event is emitted with the index of the selected TabLink.
        </td>
    </tr>
    </tbody>
</table>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Use tabs for alternate views within the [sidenav]({{ site.baseurl }}/documentation/sidenav) or main content area.

Don't use tabs to break user interactions into a series of steps.  Serial workflows are best presented in a [wizard]({{ site.baseurl }}/documentation/wizards).

Avoid using tabs in cards and modals.

### Presentation

Tabs appear in a single, non scrollable row, above their content.  The width of each tab is dependent on its label.  To ensure that all tabs appear in the container:

{: .list}
- Avoid using more than seven tabs.
- Use one to two words per label.

### Content

While the content within tabs is flexible, follow these guidelines for organization and presentation:

{: .list}
- Ensure that the content in each view is independent of the content in other views.
- Don't force users to navigate back and forth to compare data–keep such content in the same view.
- Avoid cross-linking between tabs.
- If the content within a view is broad, divide it into subsections.

### Labels

{: .list}
- Ensure that the labels show a clear relationship between the views.
- Favor nouns over verbs, for example, Settings, Permissions, and Performance.
- Avoid generic labels such as General or Advanced.
- Use title-style caps.
- Avoid using icons in the labels.
