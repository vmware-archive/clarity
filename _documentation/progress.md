---
title: Progress Bars
permalink: /documentation/progress
layout: documentation
---

{: .component-summary }
#### A progress bar is a linear indicator for providing feedback about an ongoing, user-initiated process.

Progress bars consist of an HTML5 progress element inside the block-level element with the <code class="clr-code">.progress</code> classname. The block-level container is necessary due to cross-browser constraints with styling HTML5 progress elements. As browsers improve, the intent is for this container to go away.

<clr-progress-bar-examples-demo></clr-progress-bar-examples-demo>

### Indeterminate (Looping) Progress Bars

When the amount of time a task will take is not known, use an indeterminate (or looping) progress bar. These progress bars feature a recurring animation that continues until the task is complete and the progress bar is no longer needed.

<clr-progress-bar-loop-demo></clr-progress-bar-loop-demo>

### Color

The default color of the fill bar is Action Blue.  You can change the color as follows:

{: .list}
- Green for success
- Red to indicate danger or warning

<clr-progress-bar-colors-demo></clr-progress-bar-colors-demo>

### Animation

Progress bars have options for animation.

{: .list}
- Use fade animation when you want the progress bar to disappear with a fade.
- Use flash animation to draw the user's attention when the process has completed.

<clr-progress-bar-animations-demo></clr-progress-bar-animations-demo>

### Variations
The animation, color, and type of a progress bar can be changed by adding or removing CSS classes from the following list of class names.

{: .list}
- **labeled:** A progress container with the <code class="clr-code">labeled</code> classname will show the percent complete as a numerical percentage to the far right of the progress bar. Note that this requires a <code class="clr-code">&lt;span&gt;</code> element be placed within the container after the <code class="clr-code">&lt;progress&gt;</code>. You will also need to update the contents of the span programmatically.
- **progress-fade:** A progress container with the <code class="clr-code">progress-fade</code> classname will fade out after it reaches 100%.
- **flash:** A progress container with the <code class="clr-code">flash</code> classname will have the bar color change to green after it reaches 100%. This can be combined with the <code class="clr-code">progress-fade</code> classname to have the bar change color to green and then fade out.
- **flash-danger:** A progress container with the <code class="clr-code">flash-danger</code> classname will have the bar color change to red after it reaches 100%. This classname can also be combined with the <code class="clr-code">progress-fade</code> classname.
- **loop:** A progress container with the <code class="clr-code">loop</code> classname will show a progress bar that loops across infinitely. This is the style for our indeterminate progress bar.
- **danger:** A progress container with the <code class="clr-code">danger</code> classname will show up as red.
- **warning:** A progress container with the <code class="clr-code">warning</code> classname will also show up as red.
- **success:** A progress container with the <code class="clr-code">success</code> classname will show up as green.


###### Progress Bar in Cards

<clr-progress-bar-cards-demo></clr-progress-bar-cards-demo>

###### Static Progress Bar in Cards

<clr-progress-bar-static-cards-demo></clr-progress-bar-static-cards-demo>

###### Progress Bar in Sidebar Navigation

<clr-progress-bar-sidenav-demo></clr-progress-bar-sidenav-demo>

### Static Progress Bars

Some applications use progress bars inside other widgets that re-render repeatedly in the DOM. While this is not a pattern that Clarity promotes, we have implemented a “static” progress bar to assist in these uses.

A normal progress bar will animate from its starting point to the defined ending point. When widgets that contain progress bars are re-rendered in the DOM, this results in Clarity’s progress bars continually growing from zero to the defined value.

A static progress bar just shows the defined value. It does not animate and lend itself to these sorts of DOM refreshes.

Because there was no way to turn off the animation in IE/Edge’s implementation of the HTML5 progress element, there is a related, though separate, component for static progress bars.

<clr-progress-bar-static-demo></clr-progress-bar-static-demo>

{: .list}
- Instead of a <code>.progress</code> container <code>div</code>, the static progress bar has a <code>.progress-static</code> container <code>div</code>.
- Instead of a <code>progress</code> element inside the container, there is a <code>div</codeAtom> with the class of <code>.progress-meter</code> applied to it.
- A <code>div</code> cannot have a value attribute, so the <code>.progress-meter</code> element has <code>data-value</code> attribute. The completion value must be dynamically inserted in the <code>data-value</code> attribute.
- The <code>data-value</code> attribute must contain an integer between 0 and 100.

### Progress Bar Blocks and Groups

Progress bar blocks allow for <code class="clr-code">label</code> and <code class="clr-code">span</code> elements to be placed alongside the <code class="clr-code">.progress</code> and <code class="clr-code">.progress-static</code> element. The progress bar block is a wrapper element with the <code class="clr-code">.progress-block</code> classname applied to it.

Progress bar groups allow for vertical stacking of elements above and below the progress bar. To create a progress bar group, wrap the <code class="clr-code">.progress</code> and <code class="clr-code">.progress-static</code> element with a <code class="clr-code">.progress-group</code> element.

<clr-progress-bar-inline-demo></clr-progress-bar-inline-demo>

Progress bar blocks are also available for use inside of Clarity cards.

<clr-progress-bar-inline-cards-demo></clr-progress-bar-inline-cards-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Clarity has two types of progress bars:

{: .list}
- A determinate progress bar, which shows process completion from 0 to 100%.  Use this progress bar for a process of known duration.
- An indeterminate progress bar, which animates continuously until the process is complete.  Use this progress bar for a process for which there is no estimate of the end time.



### Placement

Progress bars are designed for use in the main content area, [header]({{ site.baseurl }}/documentation/header),  [cards]({{ site.baseurl }}/documentation/cards), and [modals]({{ site.baseurl }}/documentation/modals).  The size of the progress bar adjusts to its container.  Indicate which process is being monitored through placement of the progress bar in the container.


### Messaging

 Use messaging as follows:

{: .list}
- For a determinate progress bar, use a label to show percentage complete.
- For an indeterminate progress indicator, add messaging to let the user know the operation is in progress, for example, "Working...," or "Loading update 3 of 7."
- Keep the messaging minimal and use sentence-style caps.

Clarity places the label on the right of the progress bar because the bar fills from left to right.

### Progress Bar Versus Spinner

Clarity also has a circular progress indicator, called a [spinner]({{ site.baseurl }}/documentation/spinners), which serves the same use case as an indeterminate progress bar.  Using a spinner or an indeterminate progress bar is a matter of available space and activation point. In many cases, spinners are best because they occupy less space.
