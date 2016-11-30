---
title: Tabs
permalink: /documentation/tabs
layout: documentation
---

{: .component-summary }
##### Tabs divide content into separate views which users navigate between.

### Static

###### Basic example

The following is a static example of tabs with their associated sections. The active tab should have the additional class <code class="clr-code">active</code>.

The stylesheet will hide all the section elements where attribute <code class="clr-code">aria-hidden</code> is set to <code class="clr-code">true</code>.

###### Accessibility

The active tab should have the attribute <code class="clr-code">aria-selected</code> set to <code class="clr-code">true</code>, and the others to false.

The active panel associated with the active tab should have the attribute <code class="clr-code">aria-hidden</code> set to <code class="clr-code">true</code>, and the others <code class="clr-code">to false</code>.

In addition, each tab should have an aria-controls attribute set to the id of the matching panel and each panel should have an <code class="clr-code">aria-labelledby</code> attribute set to the id of the tab associated with the panel.

<clr-tabs-demo-static></clr-tabs-demo-static>

### Angular Component

###### Basic example

The tabs component is generated based on the <code class="clr-code">&lt;clr-tab-link&gt;</code> and <code class="clr-code">&lt;clr-tab-content&gt;</code> sub-components inside the <code class="clr-code">&lt;clr-tabs&gt;</code> tag. The tab links are automatically associated with the content components, in order. If there are more tabs then content sections, clicking on the extra tabs will set the tab to active but  only show blank content. If there are more content sections than tabs, the extra sections will remain invisible since no tab can be selected to activate them.

###### Accessibility

All attributes associated with accessibility (aria-controls, aria-selected, aria-hidden, aria-labelledby, role) are automatically created and managed by the angular component.

<clr-modal-tabs-angular></clr-modal-tabs-angular>

### Summary of Options

<table class="table">
    <thead>
        <tr>
            <th class="left">Input/Output</th>
            <th class="hidden-xs-down">Values</th>
            <th class="hidden-xs-down">Default</th>
            <th class="left">Effect</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">
                <b>[clrTabContentActive]</b>
                <div class="hidden-sm-up">Type: Boolean</div>
                <div class="hidden-sm-up">Default: false</div>
            </td>
            <td class="hidden-xs-down">true, false</td>
            <td class="hidden-xs-down">false</td>
            <td class="left">
                Used on &lt;clr-tab-content&gt;. If true, will make the content visible. If none of the
                &lt;clr-tab-content&gt;s are set as active, then the component will initialize the first one as active.
                Note that while it's possible to set multiple tab contents as active, it is discouraged.
            </td>
        </tr>
        <tr>
            <td class="left">
                <b>[clrTabContentId]</b>
                <div class="hidden-sm-up">Values:<br>&lt;any valid id for html element&gt;</div>
                <div class="hidden-sm-up">Default: auto-generated</div>
            </td>
            <td class="hidden-xs-down">&lt;any valid id for html element&gt;</td>
            <td class="hidden-xs-down">auto-generated</td>
            <td class="left">
                Used on &lt;clr-tab-content&gt;. If explicitly set, will assign the set id as the id for the element. If not set,
                the component will auto-generate the id.
            </td>
        </tr>
        <tr>
            <td class="left">
                <div class="hidden-xs-down"><b>[clrTabsCurrentTabIndex]</b></div>
                <div class="hidden-sm-up"><b>[clrTabs<br>CurrentTabIndex]</b></div>
                <div class="hidden-sm-up">Type: Integer</div>
                <div class="hidden-sm-up">Default: -1</div>
            </td>
            <td class="hidden-xs-down">&lt;number&gt;</td>
            <td class="hidden-xs-down">-1</td>
            <td class="left">
                Returns the index of the current active tab link. If multiple tab links are active, this will return the
                index of the last active tab link.
            </td>
        </tr>
        <tr>
            <td class="left">
                <b>[clrTabLinkActive]</b>
                <div class="hidden-sm-up">Type: Boolean</div>
                <div class="hidden-sm-up">Default: false</div>
            </td>
            <td class="hidden-xs-down">true, false</td>
            <td class="hidden-xs-down">false</td>
            <td class="left">
                Used on &lt;clr-tab-link&gt;. If true, will highlight the tab as an active tab. If none of the
                &lt;clr-tab-link&gt;s is set as active, then the component will initialize the first one as active.
                Note that while it's possible to set multiple tab links as active, it is discouraged.
            </td>
        </tr>
        <tr>
            <td class="left">
                <b>[clrTabLinkId]</b>
                <div class="hidden-sm-up">Values:<br>&lt;any valid id for html element&gt;</div>
                <div class="hidden-sm-up">Default: auto-generated</div>
            </td>
            <td class="hidden-xs-down">&lt;any valid id for html element&gt;</td>
            <td class="hidden-xs-down">auto-generated</td>
            <td class="left">
                Used on &lt;clr-tab-link&gt;. If explicitly set, will assign the set id as the id for the element. If not set,
                the component will auto-generate the id.
            </td>
        </tr>
        <tr>
            <td class="left">
                <div class="hidden-xs-down"><b>(clrTabsCurrentTabLinkChanged)</b></div>
                <div class="hidden-sm-up"><b>(clrTabsCurrent<br>TabLinkChanged)</b></div>
                <div class="hidden-sm-up">Type: TabLink object</div>
            </td>
            <td class="hidden-xs-down">&lt;TabLink&gt;</td>
            <td class="hidden-xs-down">N/A</td>
            <td class="left">
                When a tab is clicked, an event is emitted with the selected TabLink.
            </td>
        </tr>
        <tr>
            <td class="left">
                <div class="hidden-xs-down"><b>(clrTabsCurrentTabContentChanged)</b></div>
                <div class="hidden-sm-up"><b>(clrTabsCurrent<br>TabContentChanged)</b></div>
                <div class="hidden-sm-up">Type: TabContent object</div>
            </td>
            <td class="hidden-xs-down">&lt;TabContent&gt;</td>
            <td class="hidden-xs-down">N/A</td>
            <td class="left">
                When a tab is clicked, an event  with the TabContent whose index matches the selected TabLink is emitted.
            </td>
        </tr>
        <tr>
            <td class="left">
                <div class="hidden-xs-down"><b>(clrTabsCurrentTabIndexChanged)</b></div>
                <div class="hidden-sm-up"><b>(clrTabsCurrent<br>TabIndexChanged)</b></div>
                <div class="hidden-sm-up">Type: Integer</div>
            </td>
            <td class="hidden-xs-down">&lt;number&gt;</td>
            <td class="hidden-xs-down">N/A</td>
            <td class="left">
                When a tab is clicked, an event with the index of the selected TabLink is emitted .
            </td>
        </tr>
    </tbody>
</table>

{: #guidelines}
### Usage

Use tabs for alternate views within the [sidenav]({{ site.baseurl }}/documentation/sidenav) or main content area.

Don't use tabs to break user interactions into a series of steps.  Serial workflows are best presented in a [wizard]({{ site.baseurl }}/documentation/wizards).

Avoid using tabs in cards and modals.

### Presentation

Tabs appear in a single, non-scrollable row, above their content.  The width of each tab is dependent on its label.  

To ensure that all tabs appear in the container, avoid using more than seven tabs and limit labels to  one or two words.

### Content

While the content within tabs is flexible, follow these guidelines for organization and presentation:

{: .list}
- Ensure that the content in each view is independent of the content in other views.
- Don't force users to navigate back and forth to compare data–keep such content in the same view.
- Avoid cross-linking between tabs.
- If the content within a view is broad, divide it into subsections.

### Labels

{: .list}
- Ensure that the labels show a clear relationship between views.
- Favor nouns over verbs, for example, Settings, Permissions, and Performance.
- Avoid generic labels such as General or Advanced.
- Use title-style caps.
- Avoid using icons in labels.
