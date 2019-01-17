/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

/*
* Consolidate the things ApstractPopover and Popover did into one class that gets extended by
* Components that have a child element with the ClrSmartOpen directive on it.
*
* AbstractPopover ( @Injectable() )
* 1. Handles adding, removing and ignoring escape and click handlers
* 2. holds a reference to the popover instance (it creates) so it can ignore clicks as needed
* 3. keeps track of all the positioning coordinates
* 4. handles non *clrIfOpen with an @HostBinding
* 5. state for if it closes on click
*
* Popover
* 1. Properties for position and positioning coordinates
* 2. A scroll event listener to close on scroll
* 3. Line 258 - binds a subject to the scroll events
*
* */

export class ClrSmartPopover {
  constructor(name) {
    console.log(name, 'extended smart popover');
  }
}
