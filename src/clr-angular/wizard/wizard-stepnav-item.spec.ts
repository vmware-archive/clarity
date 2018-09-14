/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AfterContentInit, Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonHubService } from './providers/button-hub.service';
import { PageCollectionService } from './providers/page-collection.service';
import { PageCollectionMock } from './providers/page-collection.service.mock';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardPageNavTitle } from './wizard-page-navtitle';
import { MockPage } from './wizard-page.mock';
import { ClrWizardStepnavItem } from './wizard-stepnav-item';
import { ClrWizardModule } from './wizard.module';

const pageIndex = 0;
const fakeOutPage = new MockPage(pageIndex);

@Component({
  template: `
        <div clr-wizard-stepnav-item [page]="page"></div>
        <ng-template clrPageNavTitle>This is my {{ projector }}</ng-template>
    `,
})
class TestComponent implements AfterContentInit {
  constructor() {
    this.page = fakeOutPage;
  }
  page: MockPage;
  projector: string = 'foo';

  @ViewChild(ClrWizardStepnavItem) stepNavItem: ClrWizardStepnavItem;
  @ViewChild(ClrWizardPageNavTitle) navTitleRef: ClrWizardPageNavTitle;

  public ngAfterContentInit(): void {
    this.page.navTitle = this.navTitleRef.pageNavTitleTemplateRef;
  }
}

export default function(): void {
  describe('New Wizard Stepnav Item', () => {
    let fixture: ComponentFixture<any>;
    let testItemComponent: ClrWizardStepnavItem;
    let debugEl: DebugElement;
    let myStepnavItem: HTMLElement;
    const pageCollection = new PageCollectionMock();

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
      testItemComponent = fixture.componentInstance.stepNavItem;
      debugEl = fixture.debugElement.query(By.directive(ClrWizardStepnavItem));
      myStepnavItem = debugEl.nativeElement;
    });

    afterEach(() => {
      fakeOutPage.reset();
      fixture.destroy();
    });

    describe('Typescript API', () => {
      describe('id', () => {
        it('should call page collection service for step item id', () => {
          const pageCollectionSpy = spyOn(testItemComponent.pageCollection, 'getStepItemIdForPage');
          testItemComponent.page._id = 'try-a-different-id';
          fixture.detectChanges();
          expect(pageCollectionSpy).toHaveBeenCalledWith(testItemComponent.page);
        });

        it('should throw an error if page is not present', () => {
          testItemComponent.page = null;
          expect(() => {
            fixture.detectChanges();
          }).toThrow();
        });
      });

      describe('click', () => {
        let navServiceSpy: any;

        beforeEach(() => {
          fakeOutPage.reset();
          navServiceSpy = spyOn(testItemComponent.navService, 'goTo');
        });

        it('should not call to navService if disabled', () => {
          fakeOutPage.disabled = true;
          testItemComponent.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should not call to navService if stopNavigation is true on navService', () => {
          testItemComponent.navService.wizardStopNavigation = true;
          fixture.detectChanges();
          testItemComponent.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should not call to navService if disableStepnav is true on navService', () => {
          testItemComponent.navService.wizardDisableStepnav = true;
          fixture.detectChanges();
          testItemComponent.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should not call to navService if current', () => {
          fakeOutPage.current = true;
          testItemComponent.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it("should pass the page to the navService to navigate to the stepnav item's page", () => {
          testItemComponent.click();
          expect(navServiceSpy).toHaveBeenCalledWith(testItemComponent.page);
        });

        it('should throw an error if page is not present', () => {
          testItemComponent.page = null;
          expect(() => {
            testItemComponent.click();
          }).toThrow();
        });
      });

      describe('isDisabled', () => {
        it('should update false/true when page is updated', () => {
          // mock inits/resets with all false
          expect(testItemComponent.isDisabled).toBe(false, 'inits as false');
          fakeOutPage.disabled = true;
          fixture.detectChanges();
          expect(testItemComponent.isDisabled).toBe(true, 'updates when page is updated');
          fakeOutPage.reset();
          fixture.detectChanges();
          expect(testItemComponent.isDisabled).toBe(false, 'resets when page is reset');
        });

        it('should return true if navService is set to stop navigation', () => {
          testItemComponent.navService.wizardStopNavigation = true;
          fixture.detectChanges();
          expect(testItemComponent.isDisabled).toBe(true);
        });

        it('should return true if navService has disabled stepnav', () => {
          testItemComponent.navService.wizardDisableStepnav = true;
          fixture.detectChanges();
          expect(testItemComponent.isDisabled).toBe(true);
        });

        it('should throw an error if page is not present', () => {
          testItemComponent.page = null;
          expect(() => {
            testItemComponent.click();
          }).toThrow();
        });
      });

      describe('isCurrent', () => {
        it('should update false/true when page is updated', () => {
          // mock inits/resets with all false
          expect(testItemComponent.isCurrent).toBe(false, 'inits as false');
          fakeOutPage.current = true;
          fixture.detectChanges();
          expect(testItemComponent.isCurrent).toBe(true, 'updates when page is updated');
          fakeOutPage.reset();
          fixture.detectChanges();
          expect(testItemComponent.isCurrent).toBe(false, 'resets when page is reset');
        });

        it('should throw an error if page is not present', () => {
          testItemComponent.page = null;
          expect(() => {
            testItemComponent.click();
          }).toThrow();
        });
      });

      describe('isComplete', () => {
        it('should update false/true when page is updated', () => {
          // mock inits/resets with all false
          expect(testItemComponent.isComplete).toBe(false, 'inits as false');
          fakeOutPage.completed = true;
          fixture.detectChanges();
          expect(testItemComponent.isComplete).toBe(true, 'updates when page is updated');
          fakeOutPage.reset();
          fixture.detectChanges();
          expect(testItemComponent.isComplete).toBe(false, 'resets when page is reset');
        });

        it('should throw an error if page is not present', () => {
          testItemComponent.page = null;
          expect(() => {
            testItemComponent.click();
          }).toThrow();
        });
      });

      describe('canNavigate', () => {
        it('should update false/true when previous page is updated', () => {
          // default in the mock returns true
          expect(testItemComponent.canNavigate).toBe(true, 'inits as true');
          pageCollection._previousPageIsCompleted = false;
          expect(testItemComponent.canNavigate).toBe(false, 'changed to false, returns false');
        });

        it('should throw an error if page is not present', () => {
          testItemComponent.page = null;
          expect(() => {
            testItemComponent.click();
          }).toThrow();
        });
      });
    });

    // Inputs, Outputs, and initialization of component based on content-children
    describe('Template API', () => {
      describe('nav title', () => {
        const expectedInitialTitle = 'This is my foo';
        const expectedUpdatedTitle = 'This is my bar';

        it('projects page nav title as expected', () => {
          expect(myStepnavItem.textContent.trim()).toBe(expectedInitialTitle, 'projects initial value');
          fixture.componentInstance.projector = 'bar';
          fixture.detectChanges();
          expect(myStepnavItem.textContent.trim()).toBe(expectedUpdatedTitle, 'projects updated value');
        });
      });
    });

    describe('View and Behavior', () => {
      describe('Renders as expected', () => {
        it('should have id', () => {
          let myId: string;
          expect(myStepnavItem.hasAttribute('id')).toBeTruthy('stepnav item should have an id');
          myId = myStepnavItem.getAttribute('id');
          expect(myId).toBe(testItemComponent.id, 'stepnav item id should contain id');
        });

        it('should have aria-controls attribute', () => {
          let myAriaControls: string;
          const stepNavItemId = testItemComponent.id;

          expect(myStepnavItem.hasAttribute('aria-controls')).toBeTruthy('stepnav item should have aria-controls attr');
          myAriaControls = myStepnavItem.getAttribute('aria-controls');
          expect(myAriaControls).toBe(stepNavItemId, 'aria-controls should contain id');
        });

        it('should have role of tab', () => {
          let myRole: string;

          expect(myStepnavItem.hasAttribute('role')).toBeTruthy('stepnav item should have role attr');
          myRole = myStepnavItem.getAttribute('role');
          expect(myRole).toBe('tab', 'aria role should be tab');
        });

        it('should have clr-nav-link and nav-item classes', () => {
          expect(myStepnavItem.classList.contains('nav-item')).toBe(true, 'stepnav item has .nav-item class');
          expect(myStepnavItem.classList.contains('clr-nav-link')).toBe(true, 'stepnav item has .clr-nav-link class');
        });

        it('aria-selected should be false if page is not current', () => {
          expect(myStepnavItem.hasAttribute('aria-selected')).toBeTruthy('stepnav item has aria-selected attr');
          expect(myStepnavItem.getAttribute('aria-selected')).toBe(
            'false',
            'aria-selected should be false if page not current'
          );
        });

        it('aria-selected should be true if page is current', () => {
          fakeOutPage.current = true;
          fixture.detectChanges();
          expect(myStepnavItem.hasAttribute('aria-selected')).toBeTruthy('stepnav item has aria-selected attr');
          expect(myStepnavItem.getAttribute('aria-selected')).toBe(
            'true',
            'aria-selected should be true if page is current'
          );
        });

        it('aria-selected should update with page current state', () => {
          expect(myStepnavItem.hasAttribute('aria-selected')).toBeTruthy('stepnav item has aria-selected attr');
          expect(myStepnavItem.getAttribute('aria-selected')).toBe(
            'false',
            'aria-selected should be false if page not current'
          );
          fakeOutPage.current = true;
          fixture.detectChanges();
          expect(myStepnavItem.hasAttribute('aria-selected')).toBeTruthy('stepnav item has aria-selected attr');
          expect(myStepnavItem.getAttribute('aria-selected')).toBe(
            'true',
            'aria-selected should be true if page is current'
          );
        });

        it('should not have .active class if page is not current', () => {
          expect(myStepnavItem.classList.contains('active')).toBe(
            false,
            'stepnav item does not have .active class when page is not current'
          );
        });

        it('aria-selected have .active class if page is current', () => {
          fakeOutPage.current = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('active')).toBe(
            true,
            'stepnav item has .active class when page is current'
          );
        });

        it('should toggle .active class with page current state', () => {
          expect(myStepnavItem.classList.contains('active')).toBe(
            false,
            'stepnav item does not have .active class when page is not current'
          );
          fakeOutPage.current = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('active')).toBe(
            true,
            'stepnav item has .active class when page is current'
          );
        });

        it('should not have .disabled class if page is not disabled', () => {
          expect(myStepnavItem.classList.contains('disabled')).toBe(
            false,
            'stepnav item does not have .disabled class when page is not disabled'
          );
        });

        it('should have .disabled class if page is disabled', () => {
          fakeOutPage.disabled = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('disabled')).toBe(
            true,
            'stepnav item has .disabled class when page is disabled'
          );
        });

        it('should have .disabled class if navService is set to stop navigation', () => {
          testItemComponent.navService.wizardStopNavigation = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('disabled')).toBe(
            true,
            'stepnav item has .disabled class when page is disabled'
          );
        });

        it('should toggle .disabled class with page disabled state', () => {
          expect(myStepnavItem.classList.contains('disabled')).toBe(
            false,
            'stepnav item does not have .disabled class when page is not disabled'
          );
          fakeOutPage.disabled = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('disabled')).toBe(
            true,
            'stepnav item has .disabled class when page is disabled'
          );
        });

        it('should not have .complete class if page is not completed', () => {
          expect(myStepnavItem.classList.contains('complete')).toBe(
            false,
            'stepnav item does not have .complete class when page is not completed'
          );
        });

        it('aria-selected have .complete class if page is completed', () => {
          fakeOutPage.completed = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('complete')).toBe(
            true,
            'stepnav item has .complete class when page is completed'
          );
        });

        it('should toggle .complete class with page completed state', () => {
          expect(myStepnavItem.classList.contains('complete')).toBe(
            false,
            'stepnav item does not have .complete class when page is not completed'
          );
          fakeOutPage.completed = true;
          fixture.detectChanges();
          expect(myStepnavItem.classList.contains('complete')).toBe(
            true,
            'stepnav item has .complete class when page is completed'
          );
        });
      });
      describe('Behavior', () => {
        let navServiceSpy: any;
        let myClickTarget: HTMLElement;

        beforeEach(() => {
          fakeOutPage.reset();
          fixture.detectChanges();
          navServiceSpy = spyOn(testItemComponent.navService, 'goTo');
          myClickTarget = myStepnavItem.querySelector('button');
        });

        it('should not register the click action if disabled', () => {
          fakeOutPage.disabled = true;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should not register the click action if navService is set to stop navigation', () => {
          testItemComponent.navService.wizardStopNavigation = true;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should not register the click action if navService is set to disable the stepnav', () => {
          testItemComponent.navService.wizardDisableStepnav = true;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should not register the click action if current', () => {
          fakeOutPage.current = true;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
        });

        it('should register a click action if not current and not disabled', () => {
          // mock inits as !current and !disabled, being explicit here tho
          fakeOutPage.current = false;
          fakeOutPage.disabled = false;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).toHaveBeenCalledWith(fakeOutPage);
        });

        it('should be able to click an item that was current and was then made not current', () => {
          fakeOutPage.current = true;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
          fakeOutPage.current = false;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).toHaveBeenCalledWith(fakeOutPage);
        });

        it('should be able to click an item that was disabled and was then made not disabled', () => {
          fakeOutPage.disabled = true;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).not.toHaveBeenCalled();
          fakeOutPage.disabled = false;
          fixture.detectChanges();
          myClickTarget.click();
          expect(navServiceSpy).toHaveBeenCalledWith(fakeOutPage);
        });
      });
    });
  });
}
