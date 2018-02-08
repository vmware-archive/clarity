/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {StackViewNgDemo} from "./stack-view-ng-demo";

const EXAMPLE = `
<clr-stack-view>
    <clr-stack-header>
        Modal editor
        <button 
            class="stack-action btn btn-sm btn-link" 
            (click)="editModal = true" 
            type="button">Edit</button>
    </clr-stack-header>

    <clr-stack-block *ngFor="let block of blocks">
        <clr-stack-label>{{block.title}}</clr-stack-label>
        <clr-stack-content>{{block.content}}</clr-stack-content>

        <clr-stack-block *ngFor="let child of block.children">
            <clr-stack-label>{{child.title}}</clr-stack-label>
            <clr-stack-content>{{child.content}}</clr-stack-content>
        </clr-stack-block>
    </clr-stack-block>
</clr-stack-view>

<clr-modal [(clrModalOpen)]="editModal">
    <h3 class="modal-title">Edit mode</h3>
    <div class="modal-body">
        <clr-stack-view>
            <clr-stack-block 
                *ngFor="let block of blocks; let blockIndex = index" 
                [clrSbNotifyChange]="block.content!=='Content '+ (blockIndex+1)">
                <clr-stack-label>{{block.title}}</clr-stack-label>
                <clr-stack-content>
                    <input type="text" [(ngModel)]="block.content" />
                </clr-stack-content>

                <clr-stack-block 
                    *ngFor="let child of block.children; let blockChildIndex = index" 
                    [clrSbNotifyChange]="child.content!=='Sub-content '+ (blockChildIndex+1)">
                    <clr-stack-label>{{child.title}}</clr-stack-label>
                    <clr-stack-content>
                        <input type="text" [(ngModel)]="child.content" />
                    </clr-stack-content>
                </clr-stack-block>
            </clr-stack-block>
        </clr-stack-view>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="editModal = false">Done</button>
    </div>
</clr-modal>
`;

@Component({
    selector: "clr-stack-view-angular-modal-edit-demo",
    templateUrl: "./stack-view-angular-modal-edit.html",
    styleUrls: ["./stack-view.demo.scss"]
})
export class StackViewAngularModalEditDemo extends StackViewNgDemo {
    example = EXAMPLE;
}
