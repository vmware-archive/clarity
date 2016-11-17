---
title: Dropdowns
permalink: /documentation/dropdowns
layout: documentation
---

{: .component-summary }
##### A dropdown menu lists actions that users can perform within an application or on a selected object.

###### .dropdown:

This class is a wrapper class around the <code>.dropdown-toggle</code> and the <code>.dropdown-menu</code>

###### .dropdown-toggle:

Extend this class on a button, icon or text link clicking on which the dropdown menu will be activated

###### .dropdown-menu:


A required wrapper intended to contain the dropdown menu. Items in the menu should extend the <code>.dropdown-header</code> or <code>.dropdown-item</code> class. <code>.dropdown-divider</code> can be on a block element used to seperate item groups. <code>.active</code> class with <code>.dropdown-item</code> adds a different styling for selected elements. Add the <code>.disabled</code> class to dropdown items to style them as disabled.

###### .open:

A class to open the dropdown menu. Must be applied with <code>.dropdown</code>

The following classes when extended along with <code>.dropdown</code> will open the menu in the respective directions:

{: .list }
- .bottom-left
- .bottom-right
- .top-left
- .top-right
- .left-bottom
- .left-top
- .right-top
- .right-bottom

#### Examples

###### 1. Default dropdown (bottom-left):

<clr-dropdown-static-default-demo></clr-dropdown-static-default-demo>

###### 2. Bottom-right

<clr-dropdown-static-positioning-demo></clr-dropdown-static-positioning-demo>

###### 3. Clarity icon as the dropdown toggle

<clr-dropdown-static-icon-toggle-demo></clr-dropdown-static-icon-toggle-demo>

###### 4. Link Button as the dropdown toggle

<clr-dropdown-static-buttonlink-toggle-demo></clr-dropdown-static-buttonlink-toggle-demo>

## Angular Component

### Summary of Options

<table class="table">
    <thead>
        <tr>
            <th class="left">Input</th>
            <th class="left">Values</th>
            <th class="left">Default</th>
            <th class="left">Effect</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">clrMenuPosition</td>
            <td class="left">
                CSS dropdown menu direction classnames.
            </td>
            <td class="left">Bottom-left</td>
            <td class="left">Sets the direction in which the menu will open.</td>
        </tr>
        <tr>
            <td class="left">clrCloseMenuOnItemClick</td>
            <td class="left">
                Boolean
            </td>
            <td class="left">true</td>
            <td class="left">If true, the menu will close when a dropdown item is clicked</td>
        </tr>
    </tbody>
</table>

#### Example

###### 1. clrMenuPosition is set to top-left. Default is bottom-left

<clr-dropdown-angular-positioning-demo></clr-dropdown-angular-positioning-demo>

###### 2. clrCloseMenuOnItemClick is set to false. Default is true.

<clr-dropdown-angular-close-item-false-demo></clr-dropdown-angular-close-item-false-demo>

{: #guidelines}
### Usage

Use a dropdown menu in a header or other area of the UI, such as a column within a datagrid, to present a set of actions.  Often, these actions navigate to a new location.  For example, you might have a Settings dropdown that changes context to provide logout, account settings, and so on.

Don't confuse dropdowns with [select boxes]({{ site.baseurl }}/documentation/select-boxes), which also present a list of choices.  Select boxes are for data input within forms whereas dropdowns are for navigating outside of the existing context.

#### Behavior

Users open a dropdown by clicking its toggle. By default, selecting a menu item or clicking outside the menu dismisses the menu.  You can change this behavior so that the menu remains open on item selection.

#### Placement

By default, a dropdown opens from the bottom of the toggle, along the left side.  You can change the placement by using one of the eight direction classes.

#### Menu Toggle

Clarity recommends that you use a button for the toggle. The button can contain either text or an icon.

#### Menu Items

Order menu items by usage, except for destructive actions, which belong at the bottom.   Keep the text short and concise.  Long menu items are truncated from the end and an ellipsis added.

#### Disabled

Disable a menu item if:

{: .list}
- It can apply in a different context.
- The user doesn't have permissions for the action.
- An appropriate object is not currently selected.
