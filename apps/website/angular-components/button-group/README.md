---
title: Overview
toc: true
---

Button groups are for creating collections of similar type action buttons.

## Usage

Button groups follow normal Button design guidelines. All Button options regarding classes and sizes apply to Button Groups. All features below are available with Solid, Outline and Flat in normal and small sizes.

Button groups can be also used as alternatives for checkboxes and radio buttons.

### Button Groups as Checkboxes

Use when a small list of options can be selected from, similar to the Checkbox component

- blue indicates an option is selected, white (outline) indicates an unselected option
- user can click the button to select, and click again to deselect
- can be configured with preselected options

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group">
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-1">
    <label for="btn-demo-check-1">Apples</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-2" checked>
    <label for="btn-demo-check-2">Oranges</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-3">
    <label for="btn-demo-check-3">Kiwis</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-4" checked>
    <label for="btn-demo-check-4">Pears</label>
  </div>
</div>

</div>
Use option labels that are 1-3 short words.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group">
  <div class="checkbox btn">
    <input type="checkbox" id="cb-4" checked class="btn" />
    <label for="cb-4">Apples</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="cb-5" class="btn" />
    <label for="cb-5">Fresh Local Gold Kiwis</label>
  </div>
</div>

</div>
Use option labels that are long or more than 3 words.
</div>

</div>

### Button Groups as Radio Buttons

Use when selecting one option from a small list of options, similar to the Radio component

- blue indicates an option is selected, white (outline) indicates an unselected option
- user can click the button to select, and click again to deselect
- can be configured with preselected options

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group">
  <div class="radio btn">
    <input type="radio" name="btn-group-radios" id="btn-radio-1" checked>
    <label for="btn-radio-1">Pears</label>
  </div>
  <div class="radio btn">
    <input type="radio" name="btn-group-radios" id="btn-radio-2">
    <label for="btn-radio-2">Kiwis</label>
  </div>
  <div class="radio btn">
    <input type="radio" name="btn-group-radios" id="btn-radio-3">
    <label for="btn-radio-3">Oranges</label>
  </div>
</div>

</div>
Use option labels that are 1-3 short words.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group">
  <div class="radio btn">
    <input type="radio" name="btn-group-radios-1" id="btn-radio-4" checked>
    <label for="btn-radio-4">Pears</label>
  </div>
  <div class="radio btn">
    <input type="radio" name="btn-group-radios-1" id="btn-radio-5">
    <label for="btn-radio-5">Fresh Local Gold Kiwis</label>
  </div>
</div>

</div>
Use option labels that are long or more than 3 words.
</div>

</div>

## Types

<div class="clr-row">

::: col Solid button groups direct the user's attention to the **primary actions** the application is suggesting the user take.

<div class="btn-group btn-primary">
  <button class="btn">Solid</button>
  <button class="btn">Group</button>
</div>
:::

::: col Outline groups are used to indicate a set of **secondary actions** or to reduce the visual noise on a page.

<div class="btn-group">
  <button class="btn">Outline</button>
  <button class="btn">Group</button>
</div>
:::

::: col Flat button groups are used as a set of **tertiary actions**. They are also typically used in Cards and above Datagrids.

<div class="btn-group btn-link">
  <button class="btn">Flat</button>
  <button class="btn">Group</button>
</div>
:::

</div>

### Mixed Classes

#### Button Arrangement

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group btn-primary">
  <button class="btn">Favorite</button>
  <button class="btn btn-success">Add</button>
  <button class="btn btn-danger">Delete</button>
</div>

</div>

Arrange **primary** actions on the left, followed by **secondary** actions, and **warning** actions as the last button in a group.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group btn-primary">
  <button class="btn btn-danger">Delete</button>
  <button class="btn btn-success">Add</button>
  <button class="btn">Favorite</button>
</div>

</div>

Arrange **warning** actions as the first button in a group or have **secondary** actions before **primary** actions.

</div>

</div>

#### Group Style

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group btn-primary">
  <button class="btn">Create</button>
  <button class="btn">Favorite</button>
  <button class="btn" disabled>Download</button>
</div>

</div>

Mix similar styled classes together to suit the solution's needs.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group btn-primary">
  <button class="btn">Create</button>
  <button class="btn">Favorite</button>
  <button class="btn btn-outline-success" disabled>Download</button>
</div>

</div>
Mix differently styled classes together, like solid and outlined.
</div>

</div>

## Antomy

There are several layout options for button groups, including icon button groups, and button groups with overflow.

### Icon Button Groups

#### Types & Sizes

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group btn-primary btn-icon">
  <button class="btn">
    <cds-icon inverse shape="check" title="check"></cds-icon>
  </button>
  <button class="btn">
    <cds-icon inverse shape="home" title="home"></cds-icon>
  </button>
  <button class="btn">
    <cds-icon inverse shape="user" title="user"></cds-icon>
  </button>
</div>

</div>
Icon button groups are available in the solid, outline, and flat types. It’s also best to use the normal (36px) sized ones. This makes them easier to recognize and to click.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group btn-primary btn-sm btn-icon">
  <button class="btn">
    <cds-icon inverse shape="check" title="check"></cds-icon>
  </button>
  <button class="btn">
    <cds-icon inverse shape="home" title="home"></cds-icon>
  </button>
  <button class="btn">
    <cds-icon inverse shape="user" title="user"></cds-icon>
  </button>
</div>

</div>
Use small icon buttons in most cases. They are difficult to see and distinguish what the icon is or represents. They also create smaller click targets, making them harder to click.

</div>

</div>

#### With Text

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group btn-primary">
  <button class="btn">
    <cds-icon inverse shape="check"></cds-icon> Check
  </button>
  <button class="btn">
    <cds-icon inverse shape="home"></cds-icon> Home
  </button>
  <button class="btn">
    <cds-icon inverse shape="user"></cds-icon> User Profile
  </button>
</div>

</div>
If you have the space, adding text helps users understand the action. Start icon buttons with icons and follow with text.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group btn-primary">
  <button class="btn">
    Check <cds-icon inverse shape="check"></cds-icon>
  </button>
  <button class="btn">
    Home <cds-icon inverse shape="home"></cds-icon>
  </button>
  <button class="btn">
    User Profile <cds-icon inverse shape="user"></cds-icon>
  </button>
</div>

</div>
Start icon buttons with text and follow with icon. This makes them more difficult to scan quickly.

</div>

</div>

### Button Groups with Overflow

Overflow is used when the button group is larger than its containing space, or used to preserve space. The overflow is configurable so you can assign button actions to the dropdown menu.

- Overflow button is shown below as an ellipsis button in the button group and is the last position to the right
- Clicking on the ellipsis will show the overflow dropdown menu

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example" style="padding: 40px 0 130px 0">

<div class="btn-group btn-primary">
  <button class="btn">Create</button>
  <button class="btn">Favorite</button>
  <div class="btn-group-overflow open">
    <button class="btn dropdown-toggle">
      <cds-icon inverse shape="ellipsis-horizontal" title="Expand dropdown"></cds-icon>
    </button>
    <div class="dropdown-menu">
      <button class="btn">Download</button>
      <button class="btn">Delete</button>
    </div>
  </div>
</div>

</div>
</div>

</div>

#### Icons

- Button groups with text and icons, or just icons, will have text show in the dropdown menu
- Text for each action icon is needed for overflow to work properly

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example" style="padding: 40px 0 130px 0">

<div class="btn-group btn-primary">
  <button class="btn">Create</button>
  <button class="btn">Favorite</button>
  <div class="btn-group-overflow open">
    <button class="btn dropdown-toggle">
      <cds-icon inverse shape="ellipsis-horizontal" title="Expand dropdown"></cds-icon>
    </button>
    <div class="dropdown-menu">
      <button class="btn">Download</button>
      <button class="btn">Delete</button>
    </div>
  </div>
</div>

</div>

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example" style="padding: 40px 0 130px 0">

<div class="btn-group btn-primary btn-icon">
  <button class="btn">
    <cds-icon inverse shape="check" title="Add"></cds-icon>
  </button>
  <button class="btn">
    <cds-icon inverse shape="folder" title="Folder"></cds-icon>
  </button>
  <div class="btn-group-overflow open">
    <button class="btn dropdown-toggle">
      <cds-icon inverse shape="ellipsis-horizontal" title="Expand dropdown"></cds-icon>
    </button>
    <div class="dropdown-menu">
      <button class="btn">
        <cds-icon inverse shape="download"></cds-icon>
        <span class="cds-icon-title">Download</span>
      </button>
      <button class="btn">
        <cds-icon inverse shape="refresh"></cds-icon>
        <span class="cds-icon-title">Refresh</span>
      </button>
    </div>
  </div>
</div>

</div>

</div>

</div>

### Multiple Groups

Use when you want similar actions to be grouped together and separated from others.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example">

<div class="btn-group btn-primary" style="margin-right: 0.6rem">
  <button class="btn">Create</button>
  <button class="btn">Edit</button>
</div>
<div class="btn-group btn-danger">
  <button class="btn">Delete</button>
  <button class="btn">Stop</button>
</div>

</div>
Lead with primary actions followed by secondary actions.

</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example">

<div class="btn-group btn-danger" style="margin-right: 0.6rem">
  <button class="btn">Delete</button>
  <button class="btn">Stop</button>
</div>
<div class="btn-group btn-primary">
  <button class="btn">Create</button>
  <button class="btn">Edit</button>
</div>

</div>
Lead with secondary actions followed by primary actions.

</div>

</div>

<!-- ## Placement -->

## Code & Examples

### Menu overflow

Use the clrInMenu input to determine if a button belongs in the overflow menu or not.

#### Default position

<doc-code>

```html
<clr-button-group class="btn-primary">
  <clr-button>Create</clr-button>
  <clr-button>Favorite</clr-button>
  <clr-button [clrInMenu]="true">Assign</clr-button>
  <clr-button [clrInMenu]="true">Download</clr-button>
  <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
```

</doc-code>

### Menu Position

<doc-code>

```html
<clr-button-group class="btn-primary" [clrMenuPosition]="'bottom-right'">
  <clr-button>Create</clr-button>
  <clr-button>Favorite</clr-button>
  <clr-button [clrInMenu]="true">Assign</clr-button>
  <clr-button [clrInMenu]="true">Download</clr-button>
  <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
```

</doc-code>

## Accessibility

If your icon button has no text, we recommend adding the **title="" attribute** to your icon buttons. This adds some
additional context for users unfamiliar with what action your icon button might produce. The text should reflect the
action.

<doc-demo>
!!!include(.vuepress/code/demos/button-group/accessibility.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/accessibility.html
</doc-code>

## Code & Examples

Clarity defines three button group types:

- Solid. A solid background with light text. These buttons are prominent on the page.
- Outline. A transparent background with colored border and text. On hover, the button fills with color.
- Flat. Text in Action Blue, used to indicate an action.

Clarity [Buttons](/angular-components/button) primary, outline and flat classes can be used along with the .btn-group class to style the buttons in a Button Group.

### Basic Structure

<doc-demo>
!!!include(.vuepress/code/demos/button-group/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/basic-css.html
</doc-code>

### Overflow

<doc-demo style="height: 6rem;">
!!!include(.vuepress/code/demos/button-group/overflow-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/overflow-css.html
</doc-code>

### Primary

<doc-demo>
!!!include(.vuepress/code/demos/button-group/primary-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/primary-css.html
</doc-code>

### Outline

<doc-demo>
!!!include(.vuepress/code/demos/button-group/outline-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/outline-css.html
</doc-code>

### Flat

<doc-demo>
!!!include(.vuepress/code/demos/button-group/flat-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/flat-css.html
</doc-code>

### Small

<doc-demo>
!!!include(.vuepress/code/demos/button-group/small-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/small-css.html
</doc-code>

### Mixed

Override a Button type in a Button Group by extending the Button type class directly on the corresponding Button.

<doc-demo>
!!!include(.vuepress/code/demos/button-group/mixed-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/mixed-css.html
</doc-code>

### Icons

Text wrapped in `.clr-icon-title` is only displayed in the Overflow Menu.

<doc-demo style="min-height: 7rem">
!!!include(.vuepress/code/demos/button-group/icons-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/icons-css.html
</doc-code>

### Icons with text

<doc-demo style="min-height: 7rem">
!!!include(.vuepress/code/demos/button-group/icons-with-text-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/icons-with-text-css.html
</doc-code>

### Checkbox

<doc-demo>
!!!include(.vuepress/code/demos/button-group/checkbox-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/checkbox-css.html
</doc-code>

### Radio

<doc-demo>
!!!include(.vuepress/code/demos/button-group/radio-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/radio-css.html
</doc-code>

### Angular component

Use the `clrInMenu` input to determine if a Button belongs in the Overflow Menu or not
<doc-demo>
!!!include(.vuepress/code/demos/button-group/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/button-group/basic-ng.html
</doc-code>
