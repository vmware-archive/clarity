/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    name = 'world';
    closeMessage: string = "";
    indeterminateState: boolean = true;

    onClose(): void {
        this.closeMessage = "The alert has been closed";
    }
}
