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

```javascript
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

```javascript
import { ClrAriaLiveService, ClrAriaLivePoliteness } from '@clr/angular';

// ...
this.ariaLiveService.announce('Message to broadcast to screen reader', ClrAriaLivePoliteness.assertive);
```

</DocDemo>

### Integration

A working example of using `ClrAriaLiveService` with a download, asynchronous process is below. You start by injecting the service, and based on changes in the progress state it will announce updates of the percentage updates. You might also want to debounce messages if you expect to get them very quickly so you don't have too many rapid announcements and annoy the users.

<DocDemo toggle="false">

```javascript
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
