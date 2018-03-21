/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Subscription} from "rxjs/Subscription";

import {ClrDragEvent} from "../interfaces/drag-event";
import {ClrDragAndDropEventBus} from "./drag-and-drop-event-bus";
import {ClrDragEventListener} from "./drag-event-listener";

type DragTransfer = {
    data: any
};

const emulateEventOn =
    (eventName: string, pageX: number = 0, pageY: number = 0, element: Document|Node = document.body): void => {
        const emulatedEvent: any = new CustomEvent(eventName, {bubbles: true});
        if (eventName.startsWith("touch")) {
            emulatedEvent.changedTouches = [{pageX: pageX, pageY: pageY}];
        } else {
            emulatedEvent.pageX = pageX;
            emulatedEvent.pageY = pageY;
        }

        element.dispatchEvent(emulatedEvent);
    };

const expectEventPropValues = <T>(event: ClrDragEvent<T>) => {
    return {
        toBe: (element: Node, pageX: number, pageY: number, dragTransfer?: T, group?: string|string[]) => {
            expect(event.draggableElement).toBe(element);
            expect(event.dragPosition.pageX).toBe(pageX);
            expect(event.dragPosition.pageY).toBe(pageY);

            if (group) {
                expect(event.group).toEqual(group);
            } else {
                expect(event.group).toBeUndefined();
            }

            if (dragTransfer) {
                expect(event.dragDataTransfer).toEqual(dragTransfer);
            } else {
                expect(event.dragDataTransfer).toBeUndefined();
            }
        }
    };
};

export default function(): void {
    describe("Drag Event Listener", function() {
        let dragEventListenerService: ClrDragEventListener<DragTransfer>;
        let dragAndDropEventBusService: ClrDragAndDropEventBus<DragTransfer>;

        let fixture: ComponentFixture<any>;
        let testComponent: TestComponent;

        let draggableButton: Node;

        beforeEach(function() {
            TestBed.configureTestingModule({declarations: [TestComponent], providers: [ClrDragAndDropEventBus]});

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;

            fixture.detectChanges();

            dragEventListenerService =
                <ClrDragEventListener<DragTransfer>>fixture.debugElement.injector.get(ClrDragEventListener);
            dragAndDropEventBusService = TestBed.get(ClrDragAndDropEventBus);

            draggableButton = testComponent.draggableButtonRef.nativeElement;
        });

        afterEach(() => {
            fixture.destroy();
        });

        function testCases(startEvent: string, moveEvent: string, endEvent: string) {
            it(`shouldn't broadcast any drag events on single ${startEvent}`, function() {
                emulateEventOn(startEvent, 0, 0, draggableButton);
                expect(testComponent.dragStartFired).toBeFalsy();
                expect(testComponent.dragMoveFired).toBeFalsy();
                expect(testComponent.dragEndFired).toBeFalsy();
            });

            it(`should broadcast dragstart on ${startEvent} and first ${moveEvent}`, function() {
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 22, 33);

                expect(testComponent.dragStartFired).toBeTruthy();
                expectEventPropValues(testComponent.dragEvent).toBe(draggableButton, 22, 33, null);

                expect(testComponent.dragMoveFired).toBeFalsy();
                expect(testComponent.dragEndFired).toBeFalsy();
            });

            it(`should broadcast consecutive dragmove events on ${moveEvent} after dragstart`, function() {
                const testPositions = [[11, 22], [33, 44], [55, 66], [77, 88], [99, 0]];
                const nbDragMoveFired = testPositions.length;

                // dragstart
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 0, 0);

                expect(testComponent.dragStartFired).toBeTruthy();

                // consecutive dragmove events
                while (testPositions.length > 0) {
                    const testPosition = testPositions.pop();
                    emulateEventOn(moveEvent, testPosition[0], testPosition[1]);
                    expectEventPropValues(testComponent.dragEvent)
                        .toBe(draggableButton, testPosition[0], testPosition[1], null);
                }

                expect(testComponent.nbDragMoveFired).toBe(nbDragMoveFired);
                expect(testComponent.dragEndFired).toBeFalsy();
            });

            it(`shouldn't broadcast any dragmove events on ${moveEvent} after ${startEvent} and ${endEvent}`,
               function() {
                   // mousedown+mouseup means it just ended prematurely before firing dragstart
                   emulateEventOn(startEvent, 0, 0, draggableButton);
                   emulateEventOn(endEvent, 0, 0);

                   emulateEventOn(moveEvent, 0, 0);

                   expect(testComponent.dragStartFired).toBeFalsy();
                   expect(testComponent.dragMoveFired).toBeFalsy();
                   expect(testComponent.dragEndFired).toBeFalsy();
               });

            it(`can broadcast proper dragstart and dragmove events after ${startEvent} and ${endEvent}`, function() {
                const testPositions = [[11, 22], [33, 44], [55, 66], [77, 88], [99, 0]];
                const nbDragMoveFired = testPositions.length;

                // mousedown+mouseup means it just ended prematurely
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(endEvent, 0, 0);

                // mousedown+mousemove should fire dragstart
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 0, 0);

                expect(testComponent.nbDragMoveFired).toBe(0);

                expect(testComponent.dragStartFired).toBeTruthy();

                while (testPositions.length > 0) {
                    const testPosition = testPositions.pop();
                    emulateEventOn(moveEvent, testPosition[0], testPosition[1]);
                    expectEventPropValues(testComponent.dragEvent)
                        .toBe(draggableButton, testPosition[0], testPosition[1], null);
                }
                expect(testComponent.nbDragMoveFired).toBe(nbDragMoveFired);

                emulateEventOn(endEvent, 22, 33);
                expect(testComponent.dragEndFired).toBeTruthy();
            });

            it("can broadcast dragend event on " + endEvent + " after dragstart registered", function() {
                // dragstart
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 0, 0);

                // dragend
                emulateEventOn(endEvent, 22, 33);

                expect(testComponent.dragStartFired).toBeTruthy();
                expect(testComponent.dragMoveFired).toBeFalsy();
                expect(testComponent.dragEndFired).toBeTruthy();
            });

            it("can broadcast dragend event on " + endEvent + " after dragstart and dragmove registered", function() {
                // dragstart
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 0, 0);

                // dragmove
                emulateEventOn(moveEvent, 44, 55);

                // dragend
                emulateEventOn(endEvent, 22, 33);

                expect(testComponent.dragStartFired).toBeTruthy();
                expect(testComponent.dragMoveFired).toBeTruthy();
                expect(testComponent.dragEndFired).toBeTruthy();
            });

            it("can transfer data on each drag events", function() {
                const dataOnDragStart = {data: {test: "dataOnDragStart"}};
                const dataOnDragMove = {data: {test: "dataOnDragMove"}};
                const dataOnDragEnd = {data: {test: "dataOnDragEnd"}};

                const groupOnDragStart = "one";
                const groupOnDragMove = ["one", "two"];
                const groupOnDragEnd = ["one", "two", "three"];

                dragEventListenerService.dragDataTransfer = dataOnDragStart;
                dragEventListenerService.group = groupOnDragStart;
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 11, 22);

                expectEventPropValues(testComponent.dragEvent)
                    .toBe(draggableButton, 11, 22, dataOnDragStart, groupOnDragStart);

                dragEventListenerService.dragDataTransfer = dataOnDragMove;
                dragEventListenerService.group = groupOnDragMove;
                emulateEventOn(moveEvent, 33, 44);

                expectEventPropValues(testComponent.dragEvent)
                    .toBe(draggableButton, 33, 44, dataOnDragMove, groupOnDragMove);

                dragEventListenerService.dragDataTransfer = dataOnDragEnd;
                dragEventListenerService.group = groupOnDragEnd;
                emulateEventOn(endEvent, 55, 66);
                expectEventPropValues(testComponent.dragEvent)
                    .toBe(draggableButton, 55, 66, dataOnDragEnd, groupOnDragEnd);
            });

            it("should dispatch to Event Bus on each drag events", function() {
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 0, 0);
                emulateEventOn(moveEvent, 0, 0);
                emulateEventOn(endEvent, 0, 0);

                expect(testComponent.dragStartDispatched).toBeTruthy();
                expect(testComponent.dragMoveDispatched).toBeTruthy();
                expect(testComponent.dragEndDispatched).toBeTruthy();
            });

            it("should detach native event handlers if detachDragListeners is called", function() {
                dragEventListenerService.detachDragListeners();

                // dragstart shouldn't fire
                emulateEventOn(startEvent, 0, 0, draggableButton);
                emulateEventOn(moveEvent, 0, 0);

                // dragmove shouldn't fire
                emulateEventOn(moveEvent, 0, 0);

                // dragend shouldn't fire
                emulateEventOn(endEvent, 0, 0);

                expect(testComponent.dragStartFired).toBeFalsy();
                expect(testComponent.dragMoveFired).toBeFalsy();
                expect(testComponent.dragEndFired).toBeFalsy();
            });
        }

        describe("from mouse events", function() {
            testCases("mousedown", "mousemove", "mouseup");
        });

        describe("from touch events", function() {
            testCases("touchstart", "touchmove", "touchend");
        });
    });
}

@Component({
    providers: [
        ClrDragEventListener
    ],  // Should be declared here in a component level, not in the TestBed because Renderer2 wouldn't be present
    template: `<button #draggableButton></button>`
})
class TestComponent implements OnInit, OnDestroy {
    dragStartDispatched = false;
    dragMoveDispatched = false;
    dragEndDispatched = false;

    dragStartFired = false;
    dragMoveFired = false;
    dragEndFired = false;

    dragEvent: ClrDragEvent<DragTransfer>;

    nbDragMoveFired = 0;

    constructor(renderer: Renderer2, ngZone: NgZone, private dragEventListener: ClrDragEventListener<DragTransfer>,
                private eventBus: ClrDragAndDropEventBus<DragTransfer>) {}

    @ViewChild("draggableButton") draggableButtonRef: ElementRef;

    private subscriptions: Subscription[] = [];

    ngOnInit() {
        this.dragEventListener.attachDragListeners(this.draggableButtonRef.nativeElement);

        this.subscriptions.push(this.dragEventListener.dragStarted.subscribe((event: ClrDragEvent<DragTransfer>) => {
            this.dragEvent = event;
            this.dragStartFired = true;
        }));
        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe((event: ClrDragEvent<DragTransfer>) => {
            this.dragEvent = event;
            this.dragMoveFired = true;
            this.nbDragMoveFired++;
        }));
        this.subscriptions.push(this.dragEventListener.dragEnded.subscribe((event: ClrDragEvent<DragTransfer>) => {
            this.dragEvent = event;
            this.dragEndFired = true;
        }));

        this.subscriptions.push(this.eventBus.dragStarted.subscribe((event: ClrDragEvent<DragTransfer>) => {
            this.dragStartDispatched = true;
        }));
        this.subscriptions.push(this.eventBus.dragMoved.subscribe((event: ClrDragEvent<DragTransfer>) => {
            this.dragMoveDispatched = true;
        }));
        this.subscriptions.push(this.eventBus.dragEnded.subscribe((event: ClrDragEvent<DragTransfer>) => {
            this.dragEndDispatched = true;
        }));
    }

    ngOnDestroy() {
        this.dragEventListener.detachDragListeners();
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
