/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {browser, by, element} from "protractor";

export class KsAppPage {
    navigateTo() {
        return browser.get("/");
    }

    getParagraphText() {
        return element(by.css("KS-root h1")).getText();
    }
}
