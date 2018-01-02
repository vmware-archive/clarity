/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {KsAppPage} from "./app.po";

describe("ks-app App", () => {
    let page: KsAppPage;

    beforeEach(() => {
        page = new KsAppPage();
    });

    it("should display welcome message", () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual("Welcome to KS!");
    });
});
