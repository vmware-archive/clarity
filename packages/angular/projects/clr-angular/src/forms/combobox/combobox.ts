/**
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  Injector,
  Self,
  Optional,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
  Inject,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';

import { OptionSelectionService } from './providers/option-selection.service';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrComboboxContainer } from './combobox-container';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { ClrOptionSelected } from './option-selected.directive';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

import { AriaService } from '../../utils/aria/aria.service';
import { IF_ACTIVE_ID_PROVIDER } from '../../utils/conditional/if-active.service';
import { MultiSelectComboboxModel } from './model/multi-select-combobox.model';
import { SingleSelectComboboxModel } from './model/single-select-combobox.model';
import { COMBOBOX_FOCUS_HANDLER_PROVIDER, ComboboxFocusHandler } from './providers/combobox-focus-handler.service';
import { FOCUS_SERVICE_PROVIDER } from '../../utils/focus/focus.service';
import { BACKSPACE } from '../../utils/key-codes/key-codes';

import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrAxis } from '../../utils/popover/enums/axis.enum';
import { ClrAlignment } from '../../utils/popover/enums/alignment.enum';
import { ClrSide } from '../../utils/popover/enums/side.enum';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ComboboxContainerService } from './providers/combobox-container.service';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { ClrLoadingState } from '../../utils/loading/loading';
import { ComboboxModel } from './model/combobox.model';
import { IfControlStateService, CONTROL_STATE } from '../common/if-control-state/if-control-state.service';

@Component({
  selector: 'clr-combobox',
  templateUrl: './combobox.html',
  providers: [
    ClrPopoverToggleService,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    OptionSelectionService,
    { provide: LoadingListener, useExisting: ClrCombobox },
    IF_ACTIVE_ID_PROVIDER,
    AriaService,
    FOCUS_SERVICE_PROVIDER,
    COMBOBOX_FOCUS_HANDLER_PROVIDER,
    ClrPopoverToggleService,
    ClrPopoverEventsService,
    ClrPopoverPositionService,
  ],
  host: {
    '[class.aria-required]': 'true',
    '[class.clr-combobox]': 'true',
    '[class.clr-combobox-disabled]': 'control?.disabled',
  },
})
export class ClrCombobox<T> extends WrappedFormControl<ClrComboboxContainer>
  implements ControlValueAccessor, LoadingListener, AfterContentInit {
  @ViewChild('textboxInput') textbox: ElementRef;
  @ViewChild('trigger') trigger: ElementRef;
  @ContentChild(ClrOptionSelected) optionSelected: ClrOptionSelected<T>;

  private onChangeCallback: (model: T | T[]) => any;
  private unlisten: VoidFunction;

  protected index = 1;

  invalid = false;
  focused = false;

  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    @Self()
    @Optional()
    public control: NgControl,
    protected renderer: Renderer2,
    protected el: ElementRef,
    public optionSelectionService: OptionSelectionService<T>,
    public commonStrings: ClrCommonStringsService,
    private toggleService: ClrPopoverToggleService,
    private positionService: ClrPopoverPositionService,
    @Optional() private controlStateService: IfControlStateService,
    @Optional() private containerService: ComboboxContainerService,
    @Inject(PLATFORM_ID) private platformId: any,
    private ariaService: AriaService,
    private focusHandler: ComboboxFocusHandler<T>,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    super(vcr, ClrComboboxContainer, injector, control, renderer, el);
    if (control) {
      control.valueAccessor = this;
    }
    // default to SingleSelectComboboxModel, in case the optional input [ClrMulti] isn't used
    this.optionSelectionService.selectionModel = new SingleSelectComboboxModel<T>();
    this.updateControlValue();
    this.setupKeyDownListener();
  }

  focusedPill: any;

  // Override the id of WrappedFormControl, as we want to move it to the embedded input.
  // Otherwise the label/component connection does not work and screen readers do not read the label.
  get id() {
    return this.controlIdService.id + '-combobox';
  }

  set id(id: string) {
    super.id = id;
  }

  inputId(): string {
    return this.controlIdService.id;
  }

  get openState(): boolean {
    return this.toggleService.open;
  }

  private _searchText = '';

  set searchText(text: string) {
    // if input text has changed since last time, fire a change event so application can react to it
    if (text !== this._searchText) {
      this._searchText = text;
      this.clrInputChange.emit(this.searchText);
      this.optionSelectionService.currentInput = this.searchText;
    }
  }

  get searchText(): string {
    return this._searchText;
  }

  get multiSelectModel(): T[] {
    if (!this.multiSelect) {
      throw Error('multiSelectModel is not available in single selection context');
    }
    return (this.optionSelectionService.selectionModel as MultiSelectComboboxModel<T>).model;
  }

  public smartPosition: ClrPopoverPosition = {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.START,
    content: ClrAlignment.START,
  };

  loadingStateChange(state: ClrLoadingState): void {
    this.optionSelectionService.loading = state === ClrLoadingState.LOADING;
    this.positionService.realign();
    if (state !== ClrLoadingState.LOADING && isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.focusFirstActive();
      });
    }
  }

  private get disabled() {
    return this.control && this.control.disabled;
  }

  unselect(item: T) {
    if (!this.disabled) {
      this.optionSelectionService.unselect(item);
    }
  }

  @Input('placeholder') placeholder = '';

  @Input('clrMulti')
  set multiSelect(value: boolean | string) {
    if (value) {
      this.optionSelectionService.selectionModel = new MultiSelectComboboxModel<T>();
    } else {
      // in theory, setting this again should not cause errors even though we already set it in constructor,
      // since the initial call to writeValue (caused by [ngModel] input) should happen after this
      this.optionSelectionService.selectionModel = new SingleSelectComboboxModel<T>();
    }
    this.updateControlValue();
  }

  get multiSelect() {
    return this.optionSelectionService.multiselectable;
  }

  get ariaControls(): string {
    return this.ariaService.ariaControls;
  }

  get ariaOwns(): string {
    return this.ariaService.ariaOwns;
  }

  get ariaDescribedBySelection(): string {
    return 'selection-' + this.id;
  }

  get displayField(): string {
    return this.optionSelectionService.displayField;
  }

  onBlur() {
    this.onTouchedCallback();
    if (this.control.control.updateOn === 'blur') {
      this.control.control.updateValueAndValidity();
    }
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  getSelectionAriaLabel() {
    if (this.containerService && this.containerService.labelText) {
      return `${this.containerService.labelText} ${this.commonStrings.keys.comboboxSelection}`;
    }
    return this.commonStrings.keys.comboboxSelection;
  }

  @Output('clrInputChange') public clrInputChange: EventEmitter<string> = new EventEmitter<string>(false);

  @Output('clrOpenChange') public clrOpenChange: Observable<boolean> = this.toggleService.openChange;

  // This output should be used to set up a live region using aria-live and populate it with updates that reflect each combobox change
  @Output('clrSelectionChange') public clrSelectionChange: Observable<ComboboxModel<T>> = this.optionSelectionService
    .selectionChanged;

  private initializeSubscriptions(): void {
    this.subscriptions.push(
      this.optionSelectionService.selectionChanged.subscribe((newSelection: ComboboxModel<T>) => {
        this.updateInputValue(newSelection);
        if (this.multiSelect) {
          this.positionService.realign();
        }
        if (!this.multiSelect && newSelection && !newSelection.isEmpty()) {
          this.toggleService.open = false;
        }
        this.updateControlValue();
      })
    );

    this.subscriptions.push(
      this.toggleService.openChange.subscribe(open => {
        if (open) {
          this.focusFirstActive();
        }
        if (this.multiSelect) {
          this.searchText = '';
        } else {
          this.searchText = this.getDisplayNames(this.optionSelectionService.selectionModel.model)[0] || '';
        }
      })
    );

    this.subscriptions.push(
      this.toggleService.popoverAligned.subscribe(popoverNode => {
        // When used outside a combobox container
        if (!this.containerService) {
          return;
        }
        const popover: HTMLElement = popoverNode as HTMLElement;
        // Update position if popover hides the label
        if (popover.getBoundingClientRect().top < this.el.nativeElement.getBoundingClientRect().top) {
          this.renderer.setStyle(popoverNode, 'top', `${popover.offsetTop + this.containerService.labelOffset}px`);
        }
      })
    );

    if (this.controlStateService) {
      this.subscriptions.push(
        this.controlStateService.statusChanges.subscribe(invalid => {
          this.invalid = invalid === CONTROL_STATE.INVALID;
        })
      );
    }
  }

  private setupKeyDownListener(): void {
    this.ngZone.runOutsideAngular(() => {
      this.unlisten = this.renderer.listen(this.el.nativeElement, 'keydown', (event: KeyboardEvent) => {
        // if BACKSPACE in multiselect mode, delete the last pill if text is empty
        if (event.keyCode !== BACKSPACE || !this.multiSelect || this._searchText.length !== 0) {
          return;
        }

        const multiModel = this.optionSelectionService.selectionModel.model as T[];

        if (!multiModel || multiModel.length === 0) {
          return;
        }

        // We'll run change detection only when the `Backspace` button has been pressed, and the multiselect mode is on.
        this.ngZone.run(() => {
          // Caretaker note: the `Zone.prototype.run` will only notify the `ApplicationRef` to run the `tick()`.
          // Angular will run change detection but the component won't have the `ChecksEnabled` state (e.g. if it's
          // inside some `OnPush` component).
          // This is done to be backwards-compatible with `HostListener` since `HostListener` calls `markDirty()` internally.
          this.cdr.markForCheck();
          const lastItem: T = multiModel[multiModel.length - 1];
          this.control.control.markAsTouched();
          this.optionSelectionService.unselect(lastItem);
        });
      });
    });
  }

  focusFirstActive() {
    this.focusHandler.focusFirstActive();
  }

  private updateInputValue(model: ComboboxModel<T>) {
    if (!this.multiSelect) {
      this.searchText = model.model ? this.getDisplayNames(model.model)[0] : '';
      if (this.searchText) {
        this.optionSelectionService.currentInput = this.searchText;
      }
    }
  }

  private updateControlValue() {
    if (this.onChangeCallback) {
      this.onChangeCallback(this.optionSelectionService.selectionModel.model);
    }
  }

  // ControlValueAccessor implementation methods
  writeValue(value: T | T[]): void {
    this.optionSelectionService.selectionModel.model = value;
    this.updateInputValue(this.optionSelectionService.selectionModel);
  }

  registerOnChange(onChange: any): void {
    this.onChangeCallback = onChange;
  }

  getActiveDescendant() {
    const model = this.focusHandler.pseudoFocus.model;
    return model ? model.id : null;
  }

  private onTouchedCallback: () => any;

  registerOnTouched(onTouched: any): void {
    this.onTouchedCallback = onTouched;
  }

  setDisabledState(): void {
    // do nothing
  }

  focusInput() {
    this.focusHandler.focusInput();
  }

  private getDisplayNames(model: T | T[]) {
    if (this.displayField) {
      if (!Array.isArray(model)) {
        model = [model];
      }
      return model.map(item => (item ? (item as any)[this.displayField] : null));
    }
    return [this.optionSelectionService.selectionModel.model];
  }

  // Lifecycle methods
  ngAfterContentInit() {
    this.initializeSubscriptions();

    // Initialize with preselected value
    if (!this.optionSelectionService.selectionModel.isEmpty()) {
      this.updateInputValue(this.optionSelectionService.selectionModel);
    }
  }

  ngAfterViewInit() {
    this.focusHandler.componentCdRef = this.cdr;
    this.focusHandler.textInput = this.textbox.nativeElement;
    this.focusHandler.trigger = this.trigger.nativeElement;
    // The text input is the actual element we are wrapping
    // This assignment is needed by the wrapper, so it can set
    // the aria properties on the input element, not on the component.
    this.el = this.textbox;
  }

  ngOnDestroy() {
    this.unlisten();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
