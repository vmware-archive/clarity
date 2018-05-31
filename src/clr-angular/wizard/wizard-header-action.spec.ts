/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrWizardHeaderAction } from './wizard-header-action';
import { ClrWizardModule } from './wizard.module';

@Component({
  template: `
        <clr-wizard-header-action #unset></clr-wizard-header-action>
        <clr-wizard-header-action #disabled [clrWizardHeaderActionDisabled]="true"></clr-wizard-header-action>
        <clr-wizard-header-action #identified [id]="myId" title="I have a title"></clr-wizard-header-action>
        <clr-wizard-header-action #projected [id]="'projection'"
            [clrWizardHeaderActionDisabled]="disableMe">{{ projector }}</clr-wizard-header-action>
        <clr-wizard-header-action #clicker id="gotklikz" [title]="titleToUpdate"
            (actionClicked)="click($event)"></clr-wizard-header-action>
    `,
})
class TestComponent {
  projector: string = 'montana';
  myId: string = 'ohai';
  disableMe: boolean = false;

  @ViewChild('unset') plainDefaultHA: ClrWizardHeaderAction;
  @ViewChild('disabled') disabledHA: ClrWizardHeaderAction;
  @ViewChild('identified') idHA: ClrWizardHeaderAction;
  @ViewChild('projected') projectedHA: ClrWizardHeaderAction;
  @ViewChild('clicker') clickedHA: ClrWizardHeaderAction;

  private _lastClickedHeaderAction: string = '';
  public get lastClickedHeaderAction(): string {
    return this._lastClickedHeaderAction;
  }

  public titleToUpdate: string = 'title to update';

  public click(clickedActionId: string) {
    this._lastClickedHeaderAction = clickedActionId;
  }
}

export default function(): void {
  describe('New Wizard Header Action', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;
    let debugEl: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [ClrWizardModule], declarations: [TestComponent] });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      debugEl = fixture.debugElement;
    });

    afterEach(() => {
      fixture.destroy();
    });

    describe('Typescript API', () => {
      describe('id', () => {
        it('should return an indexed id if none is specified', () => {
          const haToTest = testComponent.plainDefaultHA;
          // placement here is important b/c the index updates at a
          // global level to avoid id conflicts...
          expect(haToTest.id).toBe('clr-wizard-header-action-0');
        });

        it('should return expected id', () => {
          const haToTest = testComponent.idHA;
          expect(haToTest.id).toBe('clr-wizard-header-action-ohai', 'id reflects input that is set');
          haToTest._id = 'onoez';
          fixture.detectChanges();
          expect(haToTest.id).toBe('clr-wizard-header-action-onoez', 'id honors internal changes to id');
        });
      });

      describe('click', () => {
        let onClickSpy: any;
        let clicker: ClrWizardHeaderAction;

        beforeEach(() => {
          clicker = testComponent.clickedHA;
          onClickSpy = spyOn(clicker.headerActionClicked, 'emit');
        });

        it('should emit event', () => {
          clicker.click();
          expect(onClickSpy).toHaveBeenCalled();
        });

        it('should not emit event if disabled', () => {
          clicker.disabled = true;
          fixture.detectChanges();
          clicker.click();
          expect(onClickSpy).not.toHaveBeenCalled();
        });
      });
    });

    // Inputs, Outputs, and initialization of component based on content-children
    describe('Template API', () => {
      describe('title', () => {
        it('should be blank by default', () => {
          expect(testComponent.plainDefaultHA.title).toBe('');
        });

        it('should be settable', () => {
          expect(testComponent.idHA.title).toBe('I have a title');
        });

        it('should be able to change via host component', () => {
          const myHA = testComponent.clickedHA;
          expect(myHA.title).toBe('title to update', 'should init with expected value');
          testComponent.titleToUpdate = 'updated title';
          fixture.detectChanges();
          expect(myHA.title).toBe('updated title', 'should update as expected');
        });
      });

      describe('id', () => {
        let haToTest: ClrWizardHeaderAction;
        const haToTestDefaultId = 'clr-wizard-header-action-ohai';

        beforeEach(() => {
          haToTest = testComponent.idHA;
        });

        it('should pass id input to id getter', () => {
          expect(haToTest.id).toBe(haToTestDefaultId);
        });

        it('should update id input as expected', () => {
          testComponent.myId = 'update';
          fixture.detectChanges();
          expect(haToTest.id).toBe('clr-wizard-header-action-update');
        });

        it('should be able to handle a component without an id defined', () => {
          const unsetHA = testComponent.plainDefaultHA;
          expect(unsetHA.id).toBeTruthy('id exists on unset header action');
          expect(unsetHA.id).toContain('clr-wizard-header-action-', 'id should have ' + 'format of header action id');
          testComponent.myId = null;
          fixture.detectChanges();
          expect(haToTest.id).not.toBe(haToTestDefaultId, 'nulling id should change id');
          expect(unsetHA.id).toBeTruthy('id exists on null id header action');
          expect(unsetHA.id).toContain(
            'clr-wizard-header-action-',
            'new id ' + ' on null id should have format of header action id'
          );
          expect(unsetHA.id).not.toContain(
            '-null',
            'new id ' + ' on null id should not contain null keyword in the id'
          );
        });
      });

      describe('disabled', () => {
        it('should default to enabled', () => {
          expect(testComponent.plainDefaultHA.disabled).toBe(false);
        });

        it('should be disabled if set via input', () => {
          expect(testComponent.disabledHA.disabled).toBe(true);
        });

        it('should be able to be enabled/disabled via input', () => {
          const testMe = testComponent.projectedHA;
          expect(testMe.disabled).toBe(false, 'disabled input is initted to false');
          testComponent.disableMe = true;
          fixture.detectChanges();
          expect(testMe.disabled).toBe(true, 'disabled input has been changed to true');
        });
      });

      describe('actionClicked', () => {
        it('should emit event as expected on click', () => {
          testComponent.clickedHA.click();
          expect(testComponent.lastClickedHeaderAction).toBe('gotklikz');
        });

        it('should not emit event when disabled', () => {
          testComponent.clickedHA.disabled = true;
          fixture.detectChanges();
          testComponent.clickedHA.click();
          expect(testComponent.lastClickedHeaderAction).toBe('');
        });
      });

      describe('content', () => {
        let lookupEl: HTMLElement;
        let projectedEl: Element;

        beforeEach(() => {
          lookupEl = debugEl.nativeElement;
          projectedEl = lookupEl.querySelector('#clr-wizard-header-action-projection');
        });
        it('projects as expected', () => {
          expect(projectedEl.textContent.trim()).toBe(testComponent.projector);
        });

        it('should update projected content as expected', () => {
          const newContent = 'rice';
          expect(projectedEl.textContent.trim()).toBe(
            testComponent.projector,
            'verify that projected content is initted properly'
          );
          testComponent.projector = newContent;
          fixture.detectChanges();
          expect(projectedEl.textContent.trim()).toBe(newContent, 'verify that projected content is updated properly');
        });
      });
    });

    describe('View and Behavior', () => {
      describe('id', () => {
        it('should have id', () => {
          const idToCheck = 'clr-wizard-header-action-' + testComponent.myId;
          const lookupEl = debugEl.nativeElement;
          const allHAs = lookupEl.querySelectorAll('.clr-wizard-header-action');
          let myIdWasFound = false;

          for (const ha of allHAs) {
            if (idToCheck === ha.id) {
              myIdWasFound = true;
              break;
            }
          }
          expect(myIdWasFound).toBe(true);
        });
      });

      describe('disabled', () => {
        it('should have .disabled class if set to be disabled', () => {
          let testMe: Element;
          testComponent.disableMe = true;
          fixture.detectChanges();
          expect(testComponent.projectedHA.disabled).toBe(true, 'verify component disabled as expected');
          testMe = debugEl.nativeElement.querySelector('#clr-wizard-header-action-projection');
          expect(testMe.classList.contains('disabled')).toBe(true, 'disabled header action has .disabled');
        });
      });

      describe('title', () => {
        it('should be empty string by default', () => {
          let testMe: Element;
          expect(testComponent.projectedHA.title).toBe('', 'verify inits as empty string');
          testMe = debugEl.nativeElement.querySelector('#clr-wizard-header-action-projection');
          expect(testMe.getAttribute('title')).toBe('', 'verify DOM title is also an empty string');
        });

        it('should be settable', () => {
          let testMe: Element;
          expect(testComponent.idHA.title).toBe('I have a title', 'verify title is set');
          testMe = debugEl.nativeElement.querySelector('#clr-wizard-header-action-ohai');
          expect(testMe.getAttribute('title')).toBe('I have a title', 'verify DOM title is also set');
        });

        it('should update', () => {
          let testMe: Element;
          expect(testComponent.clickedHA.title).toBe('title to update', 'verify title is set');
          testMe = debugEl.nativeElement.querySelector('#clr-wizard-header-action-gotklikz');
          expect(testMe.getAttribute('title')).toBe('title to update', 'verify DOM title updated');
          testComponent.titleToUpdate = 'updated title';
          fixture.detectChanges();
          expect(testMe.getAttribute('title')).toBe('updated title', 'verify DOM title updated');
        });
      });
    });
  });
}
