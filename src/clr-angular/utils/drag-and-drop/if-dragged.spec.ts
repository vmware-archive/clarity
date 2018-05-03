/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";

import {ClrIfDragged} from "./if-dragged";
import {ClrDragEventListener} from "./providers/drag-event-listener";
import {MOCK_DRAG_EVENT_LISTENER_PROVIDER} from "./providers/drag-event-listener.mock";

export default function(): void {
    describe("ClrIfDragged", function() {
        describe("Without ClrDragEventListener", function() {
            it("should throw an error with a message", function() {
                TestBed.configureTestingModule({declarations: [NoDragEventListener, ClrIfDragged]});

                expect(function() {
                    this.fixture = TestBed.createComponent(NoDragEventListener);
                }).toThrowError("The *clrIfDragged directive can only be used inside of a `clrDraggable` directive.");
            });
        });
        describe("With ClrDragEventListener", function() {
            beforeEach(function() {
                TestBed.configureTestingModule(
                    {declarations: [IfDraggedTest, ClrIfDragged], providers: [MOCK_DRAG_EVENT_LISTENER_PROVIDER]});

                this.fixture = TestBed.createComponent(IfDraggedTest);
                this.fixture.detectChanges();

                this.dragEventListener = TestBed.get(ClrDragEventListener);
                this.testElement = this.fixture.nativeElement;
            });

            afterEach(function() {
                this.fixture.destroy();
            });

            it("should not display anything on normal state", function() {
                expect(this.testElement.textContent.trim()).toBe("");
            });

            it("should instantiate its template only during dragging", function() {
                // on dragstart event
                this.dragEventListener.dragStarted.next();
                expect(this.testElement.textContent.trim()).toBe("Test");

                // on dragend event
                this.dragEventListener.dragEnded.next();
                expect(this.testElement.textContent.trim()).toBe("");
            });
        });
    });
}

@Component({template: `<div *clrIfDragged>Test</div>`})
class IfDraggedTest {}

@Component({template: `<div *clrIfDragged>Test</div>`})
class NoDragEventListener {}
