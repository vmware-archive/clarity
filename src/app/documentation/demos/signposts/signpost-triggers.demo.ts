/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import{ Component }from"@angular/core";
import{ ClarityDocComponent }from"../clarity-doc";

@Component({
    selector: "clr-signpost-triggers-demo",
    templateUrl: "./signpost-triggers.demo.html",
    styleUrls: [ "./signpost.demo.scss" ],
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class SignpostTriggersDemo extends ClarityDocComponent {
    constructor() {
        super("signposts");
    }

    html: string = `
<div class="signpost-triggers-wrapper">
    <div class="signpost-trigger-demo">
        <div class="signpost-item">
            <h6>Clarity Icon</h6>
            <clr-signpost>
                <clr-icon shape="avatar" 
                          class="is-solid has-badge-info" 
                          clrSignpostTrigger>
                </clr-icon>
                <clr-signpost-content [clrPosition]="'bottom-middle'" *clrIfOpen>
                    Lorem ipsum...
                </clr-signpost-content>
            </clr-signpost>
        </div>
        <div class="signpost-item">
            <h6>Button Link</h6>
            <div class="trigger-item">
                <clr-signpost>
                    <button class="btn btn-link" 
                            clrSignpostTrigger>
                                Button Link Trigger
                    </button>
                    <clr-signpost-content [clrPosition]="'top-middle'" *clrIfOpen>
                        Lorem ipsum...
                    </clr-signpost-content>
                </clr-signpost>
            </div>
        </div>
        <div class="signpost-item">
            <h6>Button Link w/ Clarity Icon</h6>
            <div class="trigger-item">
                <clr-signpost>
                    <button class="btn btn-link" 
                            clrSignpostTrigger>
                                Button Link 
                                <clr-icon shape="help-info"></clr-icon>
                    </button>
                    <clr-signpost-content [clrPosition]="'bottom-middle'" *clrIfOpen>
                        Lorem ipsum...
                    </clr-signpost-content>
                </clr-signpost>
            </div>
        </div>
    </div>
</div>
`;
}
