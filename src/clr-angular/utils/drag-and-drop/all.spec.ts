/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import ClrIfDraggedSpecs from "./if-dragged.spec";
import ClrDragAndDropEventBusSpecs from "./providers/drag-and-drop-event-bus.spec";
import ClrDragEventListenerSpecs from "./providers/drag-event-listener.spec";

describe("Drag And Drop", function() {
    describe("Providers", function() {
        ClrDragAndDropEventBusSpecs();
        ClrDragEventListenerSpecs();
    });
    describe("Components And Directives", function() {
        ClrIfDraggedSpecs();
    });
});
