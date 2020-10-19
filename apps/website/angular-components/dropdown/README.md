---
title: Overview
toc: true
---

## Usage

- Default line height is 30 px; 36 px for x-small breakpoint (<544px) touch targets
- Headers and or dividers may be used to organize a longer list of items
- Menu width: Minimum 168 px; Maximum 336 px
- Items in the list have hover and click states

A dropdown menu is a contextual list that allows the user to choose an option that take an immediate action or navigate the user to another view. The source of the dropdown is usually a button.

<ClrImage src="/images/angular-components/dropdown/order_details.png" />

### Dropdown vs Select

<div class="clr-row custom-block">
<div class="clr-col">
<DocInset >
<ClrImage src="/images/angular-components/dropdown/basic-dropdown.png" />
</DocInset>

**Dropdown menus** present a list of options that take an immediate action or navigate the user outside of the current context.

</div>

<div class="clr-col">
<DocInset :height="231">
<ClrImage src="/images/angular-components/dropdown/select.png" />
<ClrImage src="/images/angular-components/dropdown/select-options.png" />
</DocInset>

**Select boxes** present a list of options that the user can choose from and apply to an input field.

</div>
</div>

## Behavior

- Clicking on the toggle opens the dropdown
- By default, selecting a menu item or clicking outside the menu dismisses the menu. You can change this behavior to keep the menu open on item selection

## Placement

By default, a dropdown opens from the bottom of the toggle, along the left side. You can change the placement by using one of the eight direction classes.

<ClrImage src="/images/angular-components/dropdown/img_menu_placement.png" />

## Recommendations

- Use a button for the toggle. The button can contain either text or an icon
- Order menu items by usage, except for destructive actions, which belong at the bottom
- Keep the text short and concise. Long menu items are truncated from the end and an ellipsis added
- Nested menus may be used to organize long lists of items into categories
- Limit menus to three levels: Root menu plus up to two levels of nested menus
- Disable a menu item if:
  - It can apply in a different context
  - The user doesn’t have permissions for the action
  - An applicable object is not currently selected

## Nested Menu

Nested menus are an extension of dropdown menus. They save screen space by organizing a long list of items into categories that the user can click to reveal deeper levels.

### Description

- With mouse: Click group name to reveal nested menus. Group name stays in selected state to serve as a breadcrumb
- Clicking outside of the menu dismisses all menus

<ClrImage src="/images/angular-components/dropdown/img_nested_levels.png" />

### Placement

<div class="clr-row custom-block">
<div class="clr-col">
<DocInset>
<ClrImage src="/images/angular-components/dropdown/img_placement_default.png" />
</DocInset>

#### Default placement and stack order

By default a nested menu pops up on the right side of its root menu.

</div>

<div class="clr-col">
<DocInset>
<ClrImage src="/images/angular-components/dropdown/img_placement_resp.png" />
</DocInset>

#### Small screen / responsive placement and stack order (<544px)

If screen space isn’t available to the right of the root menu, the nested menu appears on the left side. If there is a second nested menu, it appears to the right of the first nested menu, creating a zig-zag pattern.

</div>
</div>

## Accessibility

<div class="alert alert-warning" role="alert">
    <div class="alert-items">
      <div class="alert-item static">
        <div class="alert-icon-wrapper">
          <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
        </div>
        <span class="alert-text">
          Clarity static (HTML/CSS) component does not come pre-baked with all the necessary ARIA attributes. The application developer should follow the guidelines below in their implementation.
        </span>
      </div>
    </div>
</div>

Clarity Angular component follows these guidelines:

- A dropdown menu should have an element with the role `button` that opens the menu.
- The element with the `button` role should also have an `aria-expanded` attribute which is set to true when the dropdown menu is open.
- The items should be inside an element with the role `menu`, and have the role `menuitem`.
- If the menu uses headings, the heading should be used as an accessible description for each related item.
- A visual element with role `separator` may be used between groups of items within a menu. The separator is not focusable or interactive.
- An element that is not a menu item inside the menu should have the `aria-hidden` attribute set to `true`.
- A menu item should not use the `disabled` attribute so [disabled items can be focusable](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_disabled_controls). Instead, use `[clrDisabled]` to add the disabled visual style and ARIA attribute when needed. It is up to the application to ensure that the [disabled item is not activatable](https://www.w3.org/TR/wai-aria-practices-1.1/#menu).

### Interaction

<table class="table table-vertical ">
    <tbody>
        <tr>
            <th class="left">Enter, Space, Down Arrow on the menu button</th>
            <td class="left">Opens the menu and focuses on the first item</td>
        </tr>
        <tr>
            <th class="left">Up Arrow on menu</th>
            <td class="left">Focus on the previous item, or the last item if currently on the first one
</td>
        </tr>
        <tr>
            <th class="left">Down Arrow on menu</th>
            <td class="left">Focus on the next item, or the first item if currently on the first one</td>
        </tr>
        <tr>
            <th class="left">Right Arrow on a menu item with submenu</th>
            <td class="left">Opens the submenu and focuses on the first item</td>
        </tr>
        <tr>
            <th class="left">Left Arrow on a submenu</th>
            <td class="left">Closes the submenu and focuses on its parent item</td>
        </tr>
        <tr>
            <th class="left">Esc</th>
            <td class="left">Closes the menu and focuses on the trigger (in the case of submenu the trigger is its parent item).</td>
        </tr>
    </tbody>
</table>

## Code & Examples

### Clarity UI Component

#### Default (bottom-left)

<doc-demo>
!!!include(.vuepress/public/demos/dropdown/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/dropdown/basic-ng.html
</doc-code>

#### Bottom-right

<doc-demo>
!!!include(.vuepress/public/demos/dropdown/bottom-right-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/dropdown/bottom-right-ng.html
</doc-code>

#### Icon toggle

<doc-demo>
!!!include(.vuepress/public/demos/dropdown/icon-toggle-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/dropdown/icon-toggle-ng.html
</doc-code>

### CSS Classes

#### .dropdown

This class is a wrapper class around the `.dropdown-toggle` and th `.dropdown-menu`

#### .dropdown-toggle

Extend this class on a button, icon or text link clicking on which the dropdown menu will be activated

#### .dropdown-menu

A required wrapper intended to contain the dropdown menu. Items in the menu should extend the `.dropdown-header` or `.dropdown-item` class. `.dropdown-divider` can be on a block element used to separate item groups. `.active` class with `.dropdown-item` adds a different styling for selected elements. Add the `.disabled` class to dropdown items to style them as disabled.

#### .open

A class to open the dropdown menu. Must be applied with .dropdown

The following classes when extended along with .dropdown will open the menu in the respective directions:

- .bottom-left
- .bottom-right
- .top-left
- .top-right
- .left-bottom
- .left-top
- .right-top
- .right-bottom

If used in one of the nested menus (that is, not the root level .dropdown), only the following classes are valid:

- .bottom-left
- .bottom-right
- .top-left
- .top-right

### Angular Component

The dropdown component uses the `*clrIfOpen` structural directive (detailed documentation coming soon) on the menu to indicate clearly that the menu is only present in the DOM when open. We heavily recommend using it for many reasons: better performance, making the intent clear in your own templates, and following a more natural lifecycle for any directives or components inside of the menu.

If for some reason this behavior was not the one you wanted, we also support the dropdown menu without a `*clrIfOpen` directive on it. It will be created eagerly when the dropdown itself initializes, and will not be destroyed or recreated until the dropdown itself is. Please make sure you know exactly why you are omitting this directive if you end up doing so.

#### Basic

<doc-demo>
!!!include(.vuepress/public/demos/dropdown/basic-angular-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/dropdown/basic-angular-ng.html
</doc-code>

#### Icon

<doc-demo>
!!!include(.vuepress/public/demos/dropdown/icon-toggle-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/dropdown/icon-angular-ng.html
</doc-code>
