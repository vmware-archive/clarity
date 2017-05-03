/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE_1 = `
<clr-button-group class="btn-primary">
    <clr-button>Add</clr-button>
    <clr-button>Edit</clr-button>
    <clr-button [clrInMenu]="true">Download</clr-button>
    <clr-button [clrInMenu]="true">Move</clr-button>
    <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
`;

const HTML_EXAMPLE_2 = `
<clr-button-group>
    <clr-button>Add</clr-button>
    <clr-button>Edit</clr-button>
    <clr-button [clrInMenu]="true">Download</clr-button>
    <clr-button [clrInMenu]="true">Move</clr-button>
    <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
`;

const HTML_EXAMPLE_3 = `
&lt;clr-button-group class=&quot;btn-link&quot;&gt;
    &lt;clr-button&gt;Add&lt;/clr-button&gt;
    &lt;clr-button&gt;Edit&lt;/clr-button&gt;
    &lt;clr-button [clrInMenu]=&quot;true&quot;&gt;Download&lt;/clr-button&gt;
    &lt;clr-button [clrInMenu]=&quot;true&quot;&gt;Move&lt;/clr-button&gt;
    &lt;clr-button [clrInMenu]=&quot;true&quot;&gt;Delete&lt;/clr-button&gt;
&lt;/clr-button-group&gt;
`;

@Component({
    selector: "clr-button-group-angular-types-demo",
    templateUrl: "./angular-types.html"
})
export class ButtonGroupAngularTypes {
    htmlExample1 = HTML_EXAMPLE_1;
    htmlExample2 = HTML_EXAMPLE_2;
    htmlExample3 = HTML_EXAMPLE_3;
}
