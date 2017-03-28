/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DatagridRenderOrganizer} from "./render-organizer";

/**
 * Having a little fun with Typescript just to see how it goes.
 */
interface UserContext {
    organizer: DatagridRenderOrganizer;
}

export default function(): void {
    describe("DatagridRenderOrganizer", function() {
        beforeEach(function(this: UserContext) {
            this.organizer = new DatagridRenderOrganizer();
        });

        it("follows the correct rendering order", function(this: UserContext) {
            let step = 0;
            this.organizer.clearWidths.subscribe(() => expect(step++).toBe(0));
            this.organizer.tableMode.subscribe(on => expect(step++).toBe(on ? 1 : 3));
            this.organizer.computeWidths.subscribe(() => expect(step++).toBe(2));
            this.organizer.alignColumns.subscribe(() => expect(step++).toBe(4));
            this.organizer.scrollbar.subscribe(() => expect(step++).toBe(5));
            this.organizer.resize();
        });

        it("clears the widths when when resizing", function(this: UserContext) {
            this.organizer.widths = [{px: 1, strict: false}, {px: 2, strict: true}];
            this.organizer.resize();
            expect(this.organizer.widths).toEqual([]);
        });

    });
};