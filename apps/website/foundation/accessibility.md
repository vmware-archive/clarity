---
toc: true
---

# Accessibility

Clarity tries to cover as many best practices for accessibility out of the box. However, some things are too application specific for Clarity to provide and we've provided some tools to make it easier when you need to implement custom accessibility.

## Aria live region

When content changed dynamically on the page outside of the current focus, a screen reader user would not be aware of those changes. In these scenarios, the browser supports the `aria-live` attribute to make important announcements. You might announce errors in a form, status updates for long running tasks, or alert messages.

There are limitations to how different screen readers and assistive technologies support `aria-live`, and we've provided a service `ClrAriaLiveService` for your Angular application to use anytime you need to make an announcement in a fully compatible way.

Clarity will not make any announcements by default in version 4, it is up to the application to do this when it makes sense. Here are a few examples of how the service works and could be used.

<DocDemo toggle="false">

```typescript
import { Component, AfterViewInit, ClrAriaLiveService } from '@angular/core';

@Component({
  selector: 'my-component',
  providers: [ClrAriaLiveService],
  template: '...',
})
class MyComponent implements AfterViewInit {
  constructor(public ariaLiveService: ClrAriaLiveService) {}

  ngAfterViewInit() {
    this.ariaLiveService.announce('Message to broadcast to screen reader');
  }
}
```

</DocDemo>

Aria live regions have three levels, `off` to disable it, `polite` to announce to the user at the next opportunity (default), and `assertive` to alert the user immediately and interrupt any other announcements in progress.

<DocDemo toggle="false">

```typescript
import { ClrAriaLiveService, ClrAriaLivePoliteness } from '@clr/angular';

// ...
this.ariaLiveService.announce('Message to broadcast to screen reader', ClrAriaLivePoliteness.assertive);
```

</DocDemo>

### Integration

A working example of using `ClrAriaLiveService` with a download, asynchronous process is below. You start by injecting the service, and based on changes in the progress state it will announce updates of the percentage updates. You might also want to debounce messages if you expect to get them very quickly so you don't have too many rapid announcements and annoy the users.

<DocDemo toggle="false">

```typescript
import { Component, AfterViewInit, ClrAriaLiveService } from '@angular/core';
import { download } from 'my-code';

@Component({
  selector: 'download-progress',
  providers: [ClrAriaLiveService],
  template: `
    <button (click)="startDownload()">Start download</button>
    <clr-progress-bar *ngIf="progressValue > 0" clrValue="progressValue" clrMax="100"></clr-progress-bar>
  `,
})
class MyComponent implements AfterViewInit {
  public progressValue: number = 0;

  constructor(public ariaLiveService: ClrAriaLiveService) {}

  startDownload() {
    // Do some work and return progress value as number.
    download().then(progress => {
      this.progressValue = progress;
      this.ariaLiveService.announce(`Download progress is ${progress} proccent done.`);
    });
  }
}
```

</DocDemo>

The following guidelines are our interpretation of the official WCAG guidelines. Clarity aims to implement against the WCAG 2.1 AA guideline requirements.

## WCAG 1.3.2 Meaningful sequence

::: danger
No content provided.
:::

## WCAG 2.1.1 Keyboard

[WCAG Guideline 2.2.1](https://www.w3.org/TR/WCAG21/#keyboard)

### Requirement

Every component and action (even hidden ones) needs to be reachable from the keyboard.

### Reasons

Not everyone can use a mouse.

### Details

1.  Swipe only behavior is specifically disallowed. It doesn't matter that you've seen it elsewhere, they are either a) out of compliance or b) the compliance rules don't apply that app/website.
1.  Hover information cannot contain any content that isn't available elsewhere since it is not possible to make it keyboard accessible.
1.  Swipe left to delete hidden actions must also have a keyboard equivalent
1.  Minimum keys that must be conditionally supported include:
    - **Tab** - Using the tab key, the keyboard focus should move through all interactive elements on the page.
    - **Shift + Tab** - Does the same as using the tab key, but you’re driving in reverse with the shift key.
    - **Enter/Return** - Follows a link, activates (presses) a button or selects an item from a list.
    - **Spacebar** - Toggles checkbox values, activates buttons.
    - **Arrow Keys** - Scrolls content, moves/selects radio buttons within a group, sometimes moves between interactive menu items or tab panels, navigates to next or previous item on a combo box.

### Also Related To

- No keyboard traps
- Keyboard shortcuts

## WCAG Guideline 2.4.1 Bypass blocks

[WCAG Guideline 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks)

### Requirement

Every page needs a "Skip to Content" link if the first action after page load is a tab press. The skip to content link needs to follow the link, keyboard focus, and color requirements.

### Reasons

It takes a long time for written text to announce, 3X longer than the average visual reader. This allows a screen reader user to quickly hop into the center of the page, bypassing all the navigation.

### Details

1.  Minimum required is "Skip to Content". You can also add "Skip to wherever" such as "skip to footer".
2.  Should be hidden if the tab key is not pressed after page load.

### Also Related To

- Keyboard
- Color
- Keyboard focus indicator
