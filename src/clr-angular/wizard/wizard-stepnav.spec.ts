/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonHubService } from './providers/button-hub.service';
import { PageCollectionService } from './providers/page-collection.service';
import { PageCollectionMock } from './providers/page-collection.service.mock';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { MockPage } from './wizard-page.mock';
import { ClrWizardStepnav } from './wizard-stepnav';
import { ClrWizardModule } from './wizard.module';

let mockPages: MockPage[];

mockPages = resetMockPages();

class StepnavPageCollection extends PageCollectionMock {
  public get pages(): MockPage[] {
    return mockPages;
  }
}

function resetMockPages(): MockPage[] {
  return [new MockPage(0), new MockPage(1), new MockPage(2)];
}

@Component({
  template: `
        <clr-wizard-stepnav></clr-wizard-stepnav>
    `,
})
class TestComponent {
  @ViewChild(ClrWizardStepnav) stepNav: ClrWizardStepnav;
}

export default function(): void {
  describe('New Wizard Stepnav', () => {
    let fixture: ComponentFixture<any>;
    let debugEl: DebugElement;
    let myStepnavEl: HTMLElement;
    const pageCollection = new StepnavPageCollection();

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrWizardModule],
        declarations: [TestComponent],
        providers: [
          WizardNavigationService,
          ButtonHubService,
          { provide: PageCollectionService, useValue: pageCollection },
        ],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      debugEl = fixture.debugElement.query(By.directive(ClrWizardStepnav));
      myStepnavEl = debugEl.nativeElement;
    });

    afterEach(() => {
      fixture.destroy();
      mockPages = resetMockPages();
    });

    // Inputs, Outputs, and initialization of component based on content-children
    describe('Template API', () => {
      describe('Stepnav items', () => {
        it('should list out collection of pages', () => {
          expect(myStepnavEl.querySelectorAll('.clr-wizard-stepnav-item').length).toBe(3);
        });

        it('should keep up with deletions to collection of pages', () => {
          mockPages.splice(1, 1);
          fixture.detectChanges();
          expect(myStepnavEl.querySelectorAll('.clr-wizard-stepnav-item').length).toBe(2);
        });

        it('should keep up with additions to collection of pages', () => {
          mockPages[mockPages.length] = new MockPage(3);
          fixture.detectChanges();
          expect(mockPages.length).toBe(4);
          expect(myStepnavEl.querySelectorAll('.clr-wizard-stepnav-item').length).toBe(4);
        });
      });
    });

    describe('View and Behavior', () => {
      describe('Renders as expected', () => {
        it('list element should have role of tablist', () => {
          let myRole: string;
          const myListElement = myStepnavEl.querySelector('ol');

          expect(myListElement.hasAttribute('role')).toBeTruthy('stepnav list element has role attr');
          myRole = myListElement.getAttribute('role');
          expect(myRole).toBe('tablist');
        });

        it('should have .clr-wizard-stepnav class', () => {
          expect(myStepnavEl.classList.contains('clr-wizard-stepnav')).toBe(true);
        });
      });
    });
  });
}
