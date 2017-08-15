/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Directive, TemplateRef} from "@angular/core";

@Directive({selector: "[clrPageButtons]"})
export class WizardPageButtonsDirective {
    constructor(public pageButtonsTemplateRef: TemplateRef<any>) {}
}
