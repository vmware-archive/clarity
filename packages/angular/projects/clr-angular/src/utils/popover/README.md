# ClrPopover

A ClrPopover is a complex unit that contains an anchor element, a content element and an object describing how
they _push_ together. We can think of the anchor and the content elements as _pushing_ together at a specific
point. We describe this point in as simple a way as possible so that we can easily detect viewport violations **and**
also write intelligent rules that describe how to manipulate the content container when the content is outside the
viewport bounds.

The ClrPopover utility organizes and manages a popover trigger and a popover content element with several
directives and services described below. This was developed to solve two issues. In the first Clarity popover solution:

1.  Anchors and Content elements were inside relatively positioned containers. this causes clipping issues when
    the popover component is projected inside a reletively positioned container with `overflow: scroll` on it - e.g as
    happens in the datagrid when there is a height set on it
2.  Position was determined by the implementing component and exposed to consumers as an `@Input`. This meant the
    consumer had to handle determining when placement was not ideal. e.g close to the browser edge where the content
    could be clipped by the viewport etc and change the position.

This implementation addresses those issues in the following way:

1.  It uses a structural directive to move the content element directly onto the body element.
2.  It implements a new way of describing the default (or consumer preferred) position and adds logic that can detect
    and reposition the content on the fly.

## EXAMPLE POPOVER

Components will need to use ClrPopoverPosition to describe the default/preferred position (`contentPosition`).
Optionally they can choose to add the scrollToClose and outsideClickToClose event listeners.
This is what it looks like from the implementing component perspective:

```html
<button class="btn" clrPopoverOpenCloseButton role="button" type="button" [attr.aria-owns]="popoverId" clrPopoverAnchor>
  <clr-icon shape="home"></clr-icon> Popover Anchor
</button>
<div
  [id]="popoverId"
  role="dialog"
  clrFocusTrap
  *clrPopoverContent="openState at contentPosition; outsideClickToClose: true; scrollToClose: true"
>
  <header class="header-4" role="heading">
    Header
    <button role="button" class="btn btn-link" clrPopoverCloseButton>
      <clr-icon shape="close" size="36" class="is-inverse"></clr-icon>
    </button>
  </header>
  <section role="region">
    <!-- body -->
  </section>
  <footer>
    <!-- footer -->
  </footer>
</div>
```

Notice that the Popover Anchor element has two directives on it, the clrPopoverOpenCloseButton and the clrPopoverAnchor
directive that tells our popover complex which element is the anchor.

The content div also has two directives on it. First, we use the existing focus trap to make sure the users focus
stays on the popover until they dismiss it. And, the workhorse of the ClrPopover utility the structural
directive \*clrPopoverContent which takes an input for open state, an input that takes an instance of
ClrPopoverPosition **for the content position**

## ARCHITECTURE

### Services

Services are broken up into area of responsibility.

1.  **ClrPopoverEventsService**: Events are created, added and removed in this service. Popover event listeners
    include escape keypresses, clicking, outside clicks and inside clicks (e.g clicks inside the popover content element).
2.  **ClrPopoverPositionService**: This service holds references to the anchor element, the content element and
    uses
    the popover-position operators to position the content, test it for visibility errors and intelligently change
    the position based on the errors found.
3.  **ClrPopoverToggleService**: manages the open/close state changes for the popover complex and can take into
    account the triggering event that started an open or close change.

### Directives

1.  **ClrPopoverAnchor**: This directive marks the element that is used as a popover trigger. It hands an
    ElementRef to the events service so it can be used for focus management. The element ref is also used by the
    positioning service whenever it needs to calculate the x/y offsets for positioning the content near the anchor onscreen.
2.  **ClrPopoverCloseButton**: Should only be used inside popover content containers. It will call the toggleWithEvent
    method on the toggle service **and, it will set the focus back on the anchor element**.
3.  **ClrPopoverOpenCloseButton**: Handles toggling the popover content open and closed with the popover toggle service.
4.  **ClrPopoverContent**: Structural directive that takes several inputs (open state, position object, click to
    close feature, and scroll to close feature). Using popover complex services it coordinates creating, adding
    positioning and removing the content view from the DOM.

### Enums

1.  **ClrAlignment**: this is the description of the where point of contact is on both the anchor and the content
    element when they are pushed together. START, MIDDLE, END.
2.  **ClrAxis**: This is a description of the orientation for the popover complex and \**the direction that anchor and
    content elements push into each other on. For example if ClrAxis is VERTICAL then pushing occurs along the *Y* axis. If
    ClrAxis is HORIZONTAL then pushing occurs along the *X\* axis.
3.  **ClrSide**: The location that content will orient to BEFORE or AFTER in relation to the anchor. When ClrAxis is
    VERTICAL, BEFORE is _above_ the anchor and AFTER is *below the anchor. When ClrAxis is HORIZONTAL, BEFORE is *left*
    of the anchor and AFTER is *right\* of the anchor.
4.  **ClrViewportViolation**: This is a description of the four possible viewport violations that can occur when
    popover content is offscreen. Violations are collected into an array when content positions are evaluated and
    used to determine if the default position is valid as well as which position to switch to when there are violations.

### Interfaces

1.  **ClrPopoverContentOffset**: A description of the object used to position content. It describes the number of px
    content needs to move from the origin (0,0) top left of the viewport along both the x and the y axis.
2.  **ClrPopoverPosition**: An object that can describe the relationship between anchor to content positions. It
    eliminates any invalid positions for content and based on the enum values it makes the math needed to determine how
    viewport violations are handled as simple as possible.
3.  **ClrVisibilityCoords**: This is an object used to create a virtual position for content that can be tested
    without adding the content to the DOM and then testing it for visibility violations.

### Operators

What are the operators? And why have them?

1.  **ClrTransform**: A type that describes a function that can take a ClrPopoverPosition argument and an optional
    boolean for forward (I couldn't figure out an elegant way to compose the booleans without this arg too). This
    function type returns a ClrPopoverPosition. It enables us to functionally compose descriptive functions that can
    perform multiple transformations on a position so that a new ClrPopoverOffset can be calculated for positioning.
2.  **flipSides**: A function that takes a position and flips the sides.
3.  **flipAxis**: A function that takes a position and flips the axises.
4.  **nudgeContent**: a function that takes a position and an optional boolean argument. It nudges its content forward
    or backward depending on current position and the optional boolean argument.
    backward)
5.  **flipSidesAndNudgeContent**: A composed function takes a flip function (could be flipSides or flipAxis) and a
    nudge function (could be nudgeContent or nudgeAnchor if that ever gets implemented) and the optional arg for which
    way to nudge and returns a ClrPopoverPosition.
6.  **align**: An exported function that is used by the ClrPopoverPositionService to calculate ClrPopoverContentOffset
    before rendering ClrPopoverContent onscreen. It takes a ClrPopoverPosition object and a ClientRect for both the
    anchor and the content.
7.  **alignHorizontal**: A private function that the align method may use when calculating offset values. It returns
    a number.
8.  **alignVertical**: A private function that the align method may use when calculating offset values. It returns
    a number.
9.  **testVisibility**: An exported function that can take the ClrPopoverContentOffset object and its associated
    content ClientRect and test it to see if it will be clipped offscreen.
