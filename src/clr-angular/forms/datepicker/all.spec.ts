/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {addHelpers} from "../../data/datagrid/helpers.spec";

import CalendarCellSpecs from "./model/calendar-cell.spec";
import CalendarDateSpecs from "./model/calendar-date.spec";
import CalendarMatrixSpecs from "./model/calendar-matrix.spec";
import CalendarViewSpecs from "./model/calendar-view.spec";

fdescribe("Datepicker", function() {
    addHelpers();

    describe("Model", function() {
        CalendarCellSpecs();
        CalendarDateSpecs();
        CalendarViewSpecs();
        CalendarMatrixSpecs();
    });
});
