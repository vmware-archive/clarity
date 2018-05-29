/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonHubService } from './providers/button-hub.service';
import { ButtonHubMock } from './providers/button-hub.service.mock';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { NavServiceMock } from './providers/wizard-navigation.service.mock';
import { ClrWizardButton, CUSTOM_BUTTON_TYPES, DEFAULT_BUTTON_TYPES } from './wizard-button';
import { MockPage } from './wizard-page.mock';
import { ClrWizardModule } from './wizard.module';

@Component({
  template: `
        <clr-wizard-button
            [type]="btnType"
            [clrWizardButtonDisabled]="disableBtn"
            [clrWizardButtonHidden]="hideBtn"
            (clrWizardButtonClicked)="doClick($event)"
            *ngIf="show"
        >hello {{ projector }}</clr-wizard-button>
    `,
})
class ViewTestComponent {
  public show: boolean = true;
  public btnType: string = '';
  public disableBtn: boolean = false;
  public hideBtn: boolean = false;
  public projector: string = 'mundo';
  private _clickCount: number = 0;
  private _lastBtnClicked: string = '';
  public get clickCount(): number {
    return this._clickCount;
  }
  public get lastBtnClicked(): string {
    return this._lastBtnClicked;
  }
  public doClick(btnType: string) {
    this._lastBtnClicked = btnType;
    this._clickCount++;
  }
}

export default function(): void {
  describe('New Wizard Button', () => {
    describe('Typescript API', () => {
      let fixture: ComponentFixture<any>;
      let buttonDebugEl: DebugElement;
      let buttonComponent: ClrWizardButton;
      const navService = new NavServiceMock();
      const buttonHub = new ButtonHubMock();

      @Component({
        template: `
                    <clr-wizard-button></clr-wizard-button>
                `,
      })
      class TestComponent {}

      function runTypeConstantCheck(component: any, fnToTest: any, buttonType: string, typeConstant: any) {
        buttonComponent.type = 'next';
        fixture.detectChanges();
        expect(buttonComponent.isCancel).toBe(false, 'next button type is not cancel');

        for (const key in typeConstant) {
          if (typeConstant.hasOwnProperty(key) && key !== buttonType) {
            const typeToTest = typeConstant[key];
            const testMsg = typeToTest + ' button type is not ' + buttonType;
            component.type = typeToTest;
            fixture.detectChanges();
            expect(fnToTest).toBe(false, testMsg);
          }
        }
      }

      function otherButtonsTestRoutine(component: any, buttonType: string) {
        const EMPTY_BUTTON_TYPE = '';
        const UNKNOWN_BUTTON_TYPE = 'ohai';
        const FUNCTIONS_TO_TEST: any = {
          cancel: 'isCancel',
          previous: 'isPrevious',
          next: 'isNext',
          danger: 'isDanger',
          finish: 'isFinish',
        };
        const myFn: any = component[FUNCTIONS_TO_TEST[buttonType]];

        component.type = EMPTY_BUTTON_TYPE;
        fixture.detectChanges();
        expect(myFn).toBe(false, 'empty button type is not ' + buttonType);

        runTypeConstantCheck(component, myFn, buttonType, DEFAULT_BUTTON_TYPES);
        runTypeConstantCheck(component, myFn, buttonType, CUSTOM_BUTTON_TYPES);

        component.type = UNKNOWN_BUTTON_TYPE;
        fixture.detectChanges();
        expect(myFn).toBe(false, 'unknown button type is not ' + buttonType);
      }

      beforeEach(() => {
        navService.currentPage = new MockPage(0);

        TestBed.configureTestingModule({
          imports: [ClrWizardModule],
          declarations: [TestComponent],
          providers: [
            { provide: WizardNavigationService, useValue: navService },
            { provide: ButtonHubService, useValue: buttonHub },
          ],
        });
        fixture = TestBed.createComponent(TestComponent);
        buttonHub.buttonsReady = true;
        fixture.detectChanges();
        buttonDebugEl = fixture.debugElement.query(By.directive(ClrWizardButton));
        buttonComponent = buttonDebugEl.componentInstance;
      });

      afterEach(() => {
        fixture.destroy();
      });

      describe('isCancel', () => {
        it('returns true for button type cancel', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.cancel;
          fixture.detectChanges();
          expect(buttonComponent.isCancel).toBe(true);
        });

        it('returns true for button type custom-cancel', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.cancel;
          fixture.detectChanges();
          expect(buttonComponent.isCancel).toBe(true);
        });

        it('returns false for button types other than cancel and custom-cancel', () => {
          otherButtonsTestRoutine(buttonComponent, 'cancel');
        });
      });

      describe('isNext', () => {
        it('returns true for button type next', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
          fixture.detectChanges();
          expect(buttonComponent.isNext).toBe(true);
        });

        it('returns true for button type custom-next', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
          fixture.detectChanges();
          expect(buttonComponent.isNext).toBe(true);
        });

        it('returns false for button types other than next and custom-next', () => {
          otherButtonsTestRoutine(buttonComponent, 'next');
        });
      });

      describe('isPrevious', () => {
        it('returns true for button type previous', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.previous;
          fixture.detectChanges();
          expect(buttonComponent.isPrevious).toBe(true);
        });

        it('returns true for button type custom-previous', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.previous;
          fixture.detectChanges();
          expect(buttonComponent.isPrevious).toBe(true);
        });

        it('returns false for button types other than previous and custom-previous', () => {
          otherButtonsTestRoutine(buttonComponent, 'previous');
        });
      });

      describe('isFinish', () => {
        it('returns true for button type finish', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
          fixture.detectChanges();
          expect(buttonComponent.isFinish).toBe(true);
        });

        it('returns true for button type custom-finish', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
          fixture.detectChanges();
          expect(buttonComponent.isFinish).toBe(true);
        });

        it('returns false for button types other than finish and custom-finish', () => {
          otherButtonsTestRoutine(buttonComponent, 'finish');
        });
      });

      describe('isDanger', () => {
        it('returns true for button type danger', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.danger;
          fixture.detectChanges();
          expect(buttonComponent.isDanger).toBe(true);
        });

        it('returns true for button type custom-danger', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.danger;
          fixture.detectChanges();
          expect(buttonComponent.isDanger).toBe(true);
        });

        it('returns false for button types other than danger and custom-danger', () => {
          otherButtonsTestRoutine(buttonComponent, 'danger');
        });
      });

      describe('isPrimaryAction', () => {
        it('returns true for button type next', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(true);
        });

        it('returns true for button type custom-next', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(true);
        });

        it('returns true for button type danger', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.danger;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(true);
        });

        it('returns true for button type custom-danger', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.danger;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(true);
        });

        it('returns true for button type finish', () => {
          buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(true);
        });

        it('returns true for button type custom-finish', () => {
          buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(true);
        });

        it('returns false for all other button types', () => {
          buttonComponent.type = 'custom-custom';
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(false, 'unknown button type is not primary');

          buttonComponent.type = DEFAULT_BUTTON_TYPES.cancel;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(false, 'cancel button is not primary');

          buttonComponent.type = CUSTOM_BUTTON_TYPES.cancel;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(false, 'custom cancel button is not primary');

          buttonComponent.type = DEFAULT_BUTTON_TYPES.previous;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(false, 'previous button is not primary');

          buttonComponent.type = CUSTOM_BUTTON_TYPES.previous;
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(false, 'custom previous button is not primary');

          buttonComponent.type = '';
          fixture.detectChanges();
          expect(buttonComponent.isPrimaryAction).toBe(false, 'empty button type is not primary');
        });
      });

      describe('isDisabled', () => {
        describe('disabled override', () => {
          it('returns true if disabled', () => {
            buttonComponent.disabled = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });
        });

        describe('stopNavigation override', () => {
          it('returns true if stopNavigation is true in navService', () => {
            navService.wizardStopNavigation = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
            // reset here just this once...
            navService.wizardStopNavigation = false;
          });
        });

        describe('...and cancel buttons', () => {
          it('returns false for button of type cancel that is NOT disabled', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it('returns false for button of type custom-cancel that is NOT disabled', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it('returns true for button of type cancel that is disabled', () => {
            buttonComponent.disabled = true;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type custom-cancel that is disabled', () => {
            buttonComponent.disabled = true;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });
        });

        describe('...and danger buttons', () => {
          it('returns false for button of type danger when page is ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.danger;
            navService.currentPage.readyToComplete = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it('returns false for button of type custom-danger when page is ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.danger;
            navService.currentPage.readyToComplete = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it('returns true for button of type danger when page is NOT ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.danger;
            navService.currentPage.readyToComplete = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type custom-danger when page is NOT ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.danger;
            navService.currentPage.readyToComplete = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it(
            'returns true for button of type danger when disabled is true,' + 'even if page is ready to complete',
            () => {
              buttonComponent.disabled = true;
              buttonComponent.type = DEFAULT_BUTTON_TYPES.danger;
              navService.currentPage.readyToComplete = true;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(true);
            }
          );

          it(
            'returns true for button of type custom-danger when disabled is true,' +
              'even if page is ready to complete',
            () => {
              buttonComponent.disabled = true;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.danger;
              navService.currentPage.readyToComplete = true;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(true);
            }
          );
        });

        describe('...and next buttons', () => {
          it('returns false for button of type next when page' + 'is not the last page and ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
            navService.currentPage.readyToComplete = true;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it(
            'returns false for button of type custom-next when page' + 'is not the last page and ready to complete',
            () => {
              buttonComponent.disabled = false;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
              navService.currentPage.readyToComplete = true;
              navService.currentPageIsLast = false;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(false);
            }
          );

          it('returns true for button of type next when page' + 'is the last page', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
            navService.currentPage.readyToComplete = true;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type custom-next when page' + 'is the last page', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
            navService.currentPage.readyToComplete = true;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type next when page' + 'is not ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
            navService.currentPage.readyToComplete = false;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type custom-next when page' + 'is not ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
            navService.currentPage.readyToComplete = false;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it(
            'returns true for button of type next when disabled is true,' +
              'even if page is ready to complete and not the last page',
            () => {
              buttonComponent.disabled = true;
              buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
              navService.currentPage.readyToComplete = true;
              navService.currentPageIsLast = false;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(true);
            }
          );

          it(
            'returns true for button of type custom-next when disabled is true,' +
              'even if page is ready to complete and not the last page',
            () => {
              buttonComponent.disabled = true;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
              navService.currentPage.readyToComplete = true;
              navService.currentPageIsLast = false;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(true);
            }
          );
        });

        describe('...and finish buttons', () => {
          it('returns false for button of type finish when page' + 'is the last page and ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
            navService.currentPage.readyToComplete = true;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it(
            'returns false for button of type custom-finish when page' + 'is the last page and ready to complete',
            () => {
              buttonComponent.disabled = false;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
              navService.currentPage.readyToComplete = true;
              navService.currentPageIsLast = true;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(false);
            }
          );

          it('returns true for button of type finish when page' + 'is NOT the last page', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
            navService.currentPage.readyToComplete = true;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type custom-finish when page' + 'is NOT the last page', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
            navService.currentPage.readyToComplete = true;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type finish when page' + 'is not ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
            navService.currentPage.readyToComplete = false;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it('returns true for button of type custom-finish when page' + 'is not ready to complete', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
            navService.currentPage.readyToComplete = false;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });

          it(
            'returns true for button of type finish when disabled is true,' +
              'even if page is ready to complete and also the last page',
            () => {
              buttonComponent.disabled = true;
              buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
              navService.currentPage.readyToComplete = true;
              navService.currentPageIsLast = true;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(true);
            }
          );

          it(
            'returns true for button of type custom-finish when disabled is true,' +
              'even if page is ready to complete and also the last page',
            () => {
              buttonComponent.disabled = true;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
              navService.currentPage.readyToComplete = true;
              navService.currentPageIsLast = true;
              fixture.detectChanges();
              expect(buttonComponent.isDisabled).toBe(true);
            }
          );
        });

        describe('...and fallthrough', () => {
          it('returns false for button of unknown type that is not set to disabled', () => {
            buttonComponent.disabled = false;
            buttonComponent.type = 'custom-jabberwocky';
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(false);
          });

          it('returns true for button of unknown type that is set to disabled', () => {
            buttonComponent.disabled = true;
            buttonComponent.type = 'custom-jabberwocky';
            fixture.detectChanges();
            expect(buttonComponent.isDisabled).toBe(true);
          });
        });
      });

      describe('isHidden', () => {
        describe('hidden override', () => {
          it('returns true if hidden', () => {
            buttonComponent.hidden = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });
        });

        describe('...and cancel buttons', () => {
          it('always returns false for cancel buttons that are not explicitly hidden', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('always returns false for custom-cancel buttons that are not explicitly hidden', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns true for cancel buttons that are explicitly hidden', () => {
            buttonComponent.hidden = true;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it('always returns true for custom-cancel buttons that are explicitly hidden', () => {
            buttonComponent.hidden = true;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.cancel;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });
        });

        describe('...and previous buttons', () => {
          it('returns false for previous buttons when current page is not first', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.previous;
            navService.currentPageIsFirst = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns false for custom-previous buttons when current page is not first', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.previous;
            navService.currentPageIsFirst = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns true for previous buttons when current page is first', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.previous;
            navService.currentPageIsFirst = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it('returns true for custom-previous buttons when current page is first', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.previous;
            navService.currentPageIsFirst = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it(
            'returns true for previous buttons that are ' +
              'explicitly set to hidden even if current page is not first',
            () => {
              buttonComponent.hidden = true;
              buttonComponent.type = DEFAULT_BUTTON_TYPES.previous;
              navService.currentPageIsFirst = false;
              fixture.detectChanges();
              expect(buttonComponent.isHidden).toBe(true);
            }
          );

          it(
            'returns true for custom-previous buttons that are ' +
              'explicitly set to hidden even if current page is not first',
            () => {
              buttonComponent.hidden = true;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.previous;
              navService.currentPageIsFirst = false;
              fixture.detectChanges();
              expect(buttonComponent.isHidden).toBe(true);
            }
          );
        });

        describe('...and next buttons', () => {
          it('returns false for button of type next when page' + 'is not the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns false for button of type custom-next when page' + 'is not the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns true for button of type next when page' + 'is the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it('returns true for button of type custom-next when page' + 'is the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it('returns true for button of type next when hidden is true,' + 'even if page is not the last page', () => {
            buttonComponent.hidden = true;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.next;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it(
            'returns true for button of type custom-next when hidden is true,' + 'even if page is not the last page',
            () => {
              buttonComponent.hidden = true;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.next;
              navService.currentPageIsLast = false;
              fixture.detectChanges();
              expect(buttonComponent.isHidden).toBe(true);
            }
          );
        });

        describe('...and finish buttons', () => {
          it('returns false for button of type finish when page' + 'is the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns false for button of type custom-finish when page' + 'is the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns true for button of type finish when page' + 'is NOT the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it('returns true for button of type custom-finish when page' + 'is NOT the last page', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
            navService.currentPageIsLast = false;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it('returns true for button of type finish when hidden is true,' + 'even if page is the last page', () => {
            buttonComponent.hidden = true;
            buttonComponent.type = DEFAULT_BUTTON_TYPES.finish;
            navService.currentPageIsLast = true;
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });

          it(
            'returns true for button of type custom-finish when hidden is true,' + 'even if page is the last page',
            () => {
              buttonComponent.hidden = true;
              buttonComponent.type = CUSTOM_BUTTON_TYPES.finish;
              navService.currentPageIsLast = true;
              fixture.detectChanges();
              expect(buttonComponent.isHidden).toBe(true);
            }
          );
        });

        describe('...and fallthrough', () => {
          it('returns false for button of unknown type that is not set to be hidden', () => {
            buttonComponent.hidden = false;
            buttonComponent.type = 'onoez';
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(false);
          });

          it('returns true for button of unknown type that is set to be hidden', () => {
            buttonComponent.hidden = true;
            buttonComponent.type = 'onoez';
            fixture.detectChanges();
            expect(buttonComponent.isHidden).toBe(true);
          });
        });
      });
    });

    // Inputs, Outputs, and initialization of component based on content-children
    describe('Template API', () => {
      let fixture: ComponentFixture<any>;
      let buttonDebugEl: DebugElement;
      let buttonComponent: ClrWizardButton;
      const navService = new NavServiceMock();
      const buttonHub = new ButtonHubMock();
      let myTestComponent: ViewTestComponent;

      beforeEach(() => {
        navService.currentPage = new MockPage(0);

        TestBed.configureTestingModule({
          imports: [ClrWizardModule],
          declarations: [ViewTestComponent],
          providers: [
            { provide: WizardNavigationService, useValue: navService },
            { provide: ButtonHubService, useValue: buttonHub },
          ],
        });
        fixture = TestBed.createComponent(ViewTestComponent);
        buttonHub.buttonsReady = true;
        fixture.detectChanges();
        buttonDebugEl = fixture.debugElement.query(By.directive(ClrWizardButton));
        buttonComponent = buttonDebugEl.componentInstance;
        myTestComponent = fixture.componentInstance;
      });

      afterEach(() => {
        fixture.destroy();
      });

      describe('type input', () => {
        it('should reflect initted type', () => {
          // button is initted with no type
          expect(buttonComponent.isPrimaryAction).toBe(false, 'empty type not primary');
          expect(buttonComponent.isDanger).toBe(false, 'empty type not danger');
          expect(buttonComponent.isPrevious).toBe(false, 'empty type not previous');
          expect(buttonComponent.isCancel).toBe(false, 'empty type not cancel');
          expect(buttonComponent.type).toBe('', 'button type should reflect input value');
        });

        it('should reflect input type it is set to', () => {
          myTestComponent.btnType = 'danger';
          fixture.detectChanges();
          expect(buttonComponent.type).toBe('danger', 'button type should reflect input value');
          expect(buttonComponent.isPrimaryAction).toBe(true, 'danger type is primary');
        });

        it('should update type as required', () => {
          myTestComponent.btnType = 'next';
          fixture.detectChanges();
          expect(buttonComponent.type).toBe('next', 'button type should reflect input value');
          expect(buttonComponent.isPrimaryAction).toBe(true, 'next type is primary');

          myTestComponent.btnType = 'danger';
          fixture.detectChanges();
          expect(buttonComponent.type).toBe('danger', 'button type should reflect input value');
          expect(buttonComponent.isPrimaryAction).toBe(true, 'danger type is primary');
        });

        it("should not error out if type isn't truthy", () => {
          myTestComponent.btnType = null;
          fixture.detectChanges();
          expect(buttonComponent.type).toBe(null, 'button type should reflect input');
          expect(buttonComponent.isPrimaryAction).toBe(false, 'null button type should not be primary');
        });
      });

      describe('disabled input', () => {
        it('should reflect disabled value it is set to', () => {
          // button is initted as not disabled
          expect(buttonComponent.isDisabled).toBe(false);
        });

        it('should update disabled value', () => {
          myTestComponent.disableBtn = true;
          fixture.detectChanges();
          expect(buttonComponent.isDisabled).toBe(true, 'updates when set');
          myTestComponent.disableBtn = false;
          fixture.detectChanges();
          expect(buttonComponent.isDisabled).toBe(false, 'updates when set back');
        });

        it('should render properly even with ngIf is applied', () => {
          // Test when buttons are not ready
          buttonHub.buttonsReady = false;
          expect(buttonComponent.isDisabled).toBe(false, "should always be false if buttons aren't ready");
          // Test with buttons ready.
          buttonHub.buttonsReady = true;
          fixture.detectChanges();
          expect(buttonComponent.isDisabled).toBe(false, 'should be the default value');
          // Test setting to hide
          myTestComponent.disableBtn = true;
          fixture.detectChanges();
          expect(buttonComponent.isDisabled).toBe(true, 'should now be disabled');
        });
      });

      describe('hidden input', () => {
        it('should reflect hidden value it is set to', () => {
          // button is initted as not hidden
          expect(buttonComponent.isHidden).toBe(false);
        });

        it('should update hidden value', () => {
          myTestComponent.hideBtn = true;
          fixture.detectChanges();
          expect(buttonComponent.isHidden).toBe(true, 'updates when set');
          myTestComponent.hideBtn = false;
          fixture.detectChanges();
          expect(buttonComponent.isHidden).toBe(false, 'updates when set back');
        });

        it('binds to the host even with ngIf is applied', () => {
          // Test when buttons are not ready
          buttonHub.buttonsReady = false;
          expect(buttonComponent.isHidden).toBe(false, "should always be false if buttons aren't ready");
          // Test with buttons ready.
          buttonHub.buttonsReady = true;
          fixture.detectChanges();
          expect(buttonComponent.isHidden).toBe(false, 'should be the default value');
          // Test setting to hide
          myTestComponent.hideBtn = true;
          fixture.detectChanges();
          expect(buttonComponent.isHidden).toBe(true, 'should now be hidden');
        });
      });

      describe('button clicked output', () => {
        it('should not emit event on disabled button', () => {
          myTestComponent.disableBtn = true;
          fixture.detectChanges();
          buttonComponent.click();
          expect(myTestComponent.clickCount).toBe(0, 'does not emit click event when set to disabled');

          myTestComponent.disableBtn = false;
          navService.currentPage.readyToComplete = false;
          myTestComponent.btnType = 'next';
          fixture.detectChanges();
          expect(buttonComponent.isDisabled).toBe(true, 'verify that circumstantial disablement occurs');
          buttonComponent.click();
          expect(myTestComponent.clickCount).toBe(0, 'does not emit click event when set to disabled');
        });

        it('should emit event as expected', () => {
          myTestComponent.btnType = 'ohai';
          fixture.detectChanges();
          expect(buttonComponent.type).toBe('ohai', 'verify custom button type is set');
          buttonComponent.click();
          expect(myTestComponent.clickCount).toBe(1, 'emits click event as expected');
          expect(myTestComponent.lastBtnClicked).toBe('ohai', 'sends button type with event');

          myTestComponent.disableBtn = false;
          navService.currentPage.readyToComplete = true;
          myTestComponent.btnType = 'next';
          fixture.detectChanges();
          expect(buttonComponent.isDisabled).toBe(false, 'verify button enabled state');
          buttonComponent.click();
          expect(myTestComponent.clickCount).toBe(2, 'emits click event when circumstances allow');
          expect(myTestComponent.lastBtnClicked).toBe('next', 'sends button type with event');

          myTestComponent.btnType = 'danger';
          fixture.detectChanges();
          navService.currentPage.readyToComplete = false;
          buttonComponent.click();
          expect(myTestComponent.clickCount).toBe(2, 'does not emit click event when' + ' circumstances do not allow');
          expect(myTestComponent.lastBtnClicked).not.toBe('danger', 'did not send button type');
        });
      });
    });

    describe('View and Behavior', () => {
      let fixture: ComponentFixture<any>;
      let buttonDebugEl: DebugElement;
      let buttonComponent: ClrWizardButton;
      const navService = new NavServiceMock();
      const buttonHub = new ButtonHubMock();
      let myTestComponent: ViewTestComponent;
      let buttonElement: HTMLElement;
      let actualButton: HTMLElement;

      beforeEach(() => {
        navService.currentPage = new MockPage(0);

        TestBed.configureTestingModule({
          imports: [ClrWizardModule],
          declarations: [ViewTestComponent],
          providers: [
            { provide: WizardNavigationService, useValue: navService },
            { provide: ButtonHubService, useValue: buttonHub },
          ],
        });
        fixture = TestBed.createComponent(ViewTestComponent);
        buttonHub.buttonsReady = true;
        fixture.detectChanges();
        buttonDebugEl = fixture.debugElement.query(By.directive(ClrWizardButton));
        buttonComponent = buttonDebugEl.componentInstance;
        buttonElement = buttonDebugEl.nativeElement;
        actualButton = buttonElement.querySelector('button');
        myTestComponent = fixture.componentInstance;
      });

      afterEach(() => {
        fixture.destroy();
      });

      describe('Button types render as expected', () => {
        it('cancel buttons should have .btn-link class', () => {
          myTestComponent.btnType = 'cancel';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-link')).toBe(true);
        });

        it('cancel buttons should have .clr-wizard-btn--tertiary class', () => {
          myTestComponent.btnType = 'cancel';
          fixture.detectChanges();
          expect(actualButton.classList.contains('clr-wizard-btn--tertiary')).toBe(true);
        });

        it('previous buttons should have .btn-outline class', () => {
          myTestComponent.btnType = 'previous';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-outline')).toBe(true);
        });

        it('previous buttons should have .clr-wizard-btn--secondary class', () => {
          myTestComponent.btnType = 'previous';
          fixture.detectChanges();
          expect(actualButton.classList.contains('clr-wizard-btn--secondary')).toBe(true);
        });

        it('next buttons should have .btn-primary class', () => {
          myTestComponent.btnType = 'next';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-primary')).toBe(true);
        });

        it('next buttons should have .clr-wizard-btn--primary class', () => {
          myTestComponent.btnType = 'next';
          fixture.detectChanges();
          expect(actualButton.classList.contains('clr-wizard-btn--primary')).toBe(true);
        });

        it('finish buttons should have .btn-primary class', () => {
          myTestComponent.btnType = 'finish';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-primary')).toBe(true);
        });

        it('finish buttons should have .clr-wizard-btn--primary class', () => {
          myTestComponent.btnType = 'finish';
          fixture.detectChanges();
          expect(actualButton.classList.contains('clr-wizard-btn--primary')).toBe(true);
        });

        it('finish buttons should have .btn-success class', () => {
          myTestComponent.btnType = 'finish';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-success')).toBe(true);
        });

        it('danger buttons should have .btn-primary class', () => {
          myTestComponent.btnType = 'danger';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-primary')).toBe(true);
        });

        it('danger buttons should have .clr-wizard-btn--primary class', () => {
          myTestComponent.btnType = 'danger';
          fixture.detectChanges();
          expect(actualButton.classList.contains('clr-wizard-btn--primary')).toBe(true);
        });

        it('danger buttons should have .btn-danger class', () => {
          myTestComponent.btnType = 'danger';
          fixture.detectChanges();
          expect(actualButton.classList.contains('btn-danger')).toBe(true);
        });

        it('disabled buttons should have .disabled class', () => {
          myTestComponent.disableBtn = true;
          fixture.detectChanges();
          expect(actualButton.classList.contains('disabled')).toBe(true);
        });

        it('disabled buttons should have disabled attribute set', () => {
          myTestComponent.disableBtn = true;
          fixture.detectChanges();
          expect(actualButton.getAttribute('disabled')).toBe('');
        });

        it('enabled buttons should not have a disabled attribute', () => {
          // button inits with disabled false
          expect(actualButton.getAttribute('disabled')).toBe(null);
        });

        it('unknown button types should not be primary', () => {
          // button inits as empty type
          expect(actualButton.classList.contains('btn-primary')).toBe(false);
        });

        it('hidden button wrappers should have aria-hidden set to true', () => {
          let myVal: string;
          myTestComponent.hideBtn = true;
          fixture.detectChanges();
          myVal = buttonElement.getAttribute('aria-hidden');
          expect(myVal).toBe('true');
        });
      });

      describe('Buttons project as expected', () => {
        it('projected content should display', () => {
          expect(buttonElement.textContent.trim().toLowerCase()).toBe('hello mundo');
        });

        it('projected content should update', () => {
          expect(buttonElement.textContent.trim().toLowerCase()).toBe('hello mundo');
          myTestComponent.projector = 'world';
          fixture.detectChanges();
          expect(buttonElement.textContent.trim().toLowerCase()).toBe('hello world');
        });
      });

      describe('Buttons emit as expected', () => {
        it('enabled buttons should register a click with the buttonService', () => {
          const buttonHubSpy = spyOn(buttonComponent.buttonService, 'buttonClicked');
          myTestComponent.btnType = 'ohai';
          myTestComponent.disableBtn = false;
          fixture.detectChanges();
          buttonComponent.click();
          expect(buttonHubSpy).toHaveBeenCalledWith('ohai');
        });

        it('disabled buttons should NOT register a click with the buttonService', () => {
          const buttonHubSpy = spyOn(buttonComponent.buttonService, 'buttonClicked');
          myTestComponent.disableBtn = true;
          fixture.detectChanges();
          buttonComponent.click();
          expect(buttonHubSpy).not.toHaveBeenCalled();
        });
      });
    });
  });
}
