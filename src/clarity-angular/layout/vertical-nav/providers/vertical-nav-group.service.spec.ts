/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {VerticalNavGroup} from "../vertical-nav-group";

import {VerticalNavGroupService} from "./vertical-nav-group.service";

export default function(): void {
    describe(("Vertical Nav Icon Service"), function() {
        let vertNavGroupService: VerticalNavGroupService;
        let vertNavGroup1: VerticalNavGroup;
        let vertNavGroup2: VerticalNavGroup;
        let vertNavGroup3: VerticalNavGroup;

        function registerGroups() {
            vertNavGroupService.registerNavGroup(vertNavGroup1);
            vertNavGroupService.registerNavGroup(vertNavGroup2);
            vertNavGroupService.registerNavGroup(vertNavGroup3);
        }

        beforeEach(() => {
            vertNavGroupService = new VerticalNavGroupService();
            vertNavGroup1 = null;
            vertNavGroup2 = null;
            vertNavGroup3 = null;
        });

        afterEach(() => {
            vertNavGroupService = null;
        });

        it("supports registration of nav groups", () => {
            expect(vertNavGroupService.navGroups.length).toBe(0);

            vertNavGroupService.registerNavGroup(vertNavGroup1);

            expect(vertNavGroupService.navGroups.length).toBe(1);

            vertNavGroupService.registerNavGroup(vertNavGroup2);

            expect(vertNavGroupService.navGroups.length).toBe(2);

            vertNavGroupService.registerNavGroup(vertNavGroup3);

            expect(vertNavGroupService.navGroups.length).toBe(3);
        });

        it("supports unregisration of icons", () => {
            registerGroups();

            expect(vertNavGroupService.navGroups.length).toBe(3);

            vertNavGroupService.unregisterNavGroup(vertNavGroup1);

            expect(vertNavGroupService.navGroups.length).toBe(2);

            vertNavGroupService.unregisterNavGroup(vertNavGroup2);

            expect(vertNavGroupService.navGroups.length).toBe(1);

            vertNavGroupService.unregisterNavGroup(vertNavGroup3);

            expect(vertNavGroupService.navGroups.length).toBe(0);
        });
    });
}
