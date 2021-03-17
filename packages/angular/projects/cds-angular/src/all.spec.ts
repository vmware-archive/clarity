import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// eslint-disable-next-line clarity/no-barrel-imports
import {
  CdsAccordionContentDirective,
  CdsAccordionHeaderDirective,
  CdsAccordionPanelDirective,
  CdsAccordionDirective,
  CdsAlertActionsDirective,
  CdsAlertGroupDirective,
  CdsAlertDirective,
  CdsBadgeDirective,
  CdsButtonDirective,
  CdsIconButtonDirective,
  CdsInlineButtonDirective,
  CdsCheckboxGroupDirective,
  CdsCheckboxDirective,
  CdsDatalistDirective,
  CdsDateDirective,
  CdsDividerDirective,
  CdsFileDirective,
  CdsControlActionDirective,
  CdsInternalControlGroupDirective,
  CdsInternalControlLabelDirective,
  CdsControlMessageDirective,
  CdsFormGroupDirective,
  CdsControlDirective,
  CdsInternalControlInlineDirective,
  CdsIconDirective,
  CdsInputGroupDirective,
  CdsInputDirective,
  CdsModalActionsDirective,
  CdsModalContentDirective,
  CdsModalHeaderActionsDirective,
  CdsModalHeaderDirective,
  CdsModalDirective,
  CdsPasswordDirective,
  CdsProgressCircleDirective,
  CdsRadioGroupDirective,
  CdsRadioDirective,
  CdsRangeDirective,
  CdsSearchDirective,
  CdsSelectDirective,
  CdsTagDirective,
  CdsTestDropdownDirective,
  CdsTextareaDirective,
  CdsTimeDirective,
  CdsToggleGroupDirective,
  CdsToggleDirective,
  CdsModule,
} from './cds/components';

describe('Cds Components', () => {
  let fixture: ComponentFixture<any>;
  let instance: TestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-accordion-content should be defined', () => {
    expect(instance.vcCdsAccordionContentDirective).toBeDefined();
  });

  it('cds-accordion-header should be defined', () => {
    expect(instance.vcCdsAccordionHeaderDirective).toBeDefined();
  });

  it('cds-accordion-panel should be defined', () => {
    expect(instance.vcCdsAccordionPanelDirective).toBeDefined();
  });

  it('cds-accordion should be defined', () => {
    expect(instance.vcCdsAccordionDirective).toBeDefined();
  });

  it('cds-alert-actions should be defined', () => {
    expect(instance.vcCdsAlertActionsDirective).toBeDefined();
  });

  it('cds-alert-group should be defined', () => {
    expect(instance.vcCdsAlertGroupDirective).toBeDefined();
  });

  it('cds-alert should be defined', () => {
    expect(instance.vcCdsAlertDirective).toBeDefined();
  });

  it('cds-badge should be defined', () => {
    expect(instance.vcCdsBadgeDirective).toBeDefined();
  });

  it('cds-button should be defined', () => {
    expect(instance.vcCdsButtonDirective).toBeDefined();
  });

  it('cds-icon-button should be defined', () => {
    expect(instance.vcCdsIconButtonDirective).toBeDefined();
  });

  it('cds-inline-button should be defined', () => {
    expect(instance.vcCdsInlineButtonDirective).toBeDefined();
  });

  it('cds-checkbox-group should be defined', () => {
    expect(instance.vcCdsCheckboxGroupDirective).toBeDefined();
  });

  it('cds-checkbox should be defined', () => {
    expect(instance.vcCdsCheckboxDirective).toBeDefined();
  });

  it('cds-datalist should be defined', () => {
    expect(instance.vcCdsDatalistDirective).toBeDefined();
  });

  it('cds-date should be defined', () => {
    expect(instance.vcCdsDateDirective).toBeDefined();
  });

  it('cds-divider should be defined', () => {
    expect(instance.vcCdsDividerDirective).toBeDefined();
  });

  it('cds-file should be defined', () => {
    expect(instance.vcCdsFileDirective).toBeDefined();
  });

  it('cds-control-action should be defined', () => {
    expect(instance.vcCdsControlActionDirective).toBeDefined();
  });

  it('cds-internal-control-group should be defined', () => {
    expect(instance.vcCdsInternalControlGroupDirective).toBeDefined();
  });

  it('cds-internal-control-label should be defined', () => {
    expect(instance.vcCdsInternalControlLabelDirective).toBeDefined();
  });

  it('cds-control-message should be defined', () => {
    expect(instance.vcCdsControlMessageDirective).toBeDefined();
  });

  it('cds-form-group should be defined', () => {
    expect(instance.vcCdsFormGroupDirective).toBeDefined();
  });

  it('cds-control should be defined', () => {
    expect(instance.vcCdsControlDirective).toBeDefined();
  });

  it('cds-internal-control-inline should be defined', () => {
    expect(instance.vcCdsInternalControlInlineDirective).toBeDefined();
  });

  it('cds-icon should be defined', () => {
    expect(instance.vcCdsIconDirective).toBeDefined();
  });

  it('cds-input-group should be defined', () => {
    expect(instance.vcCdsInputGroupDirective).toBeDefined();
  });

  it('cds-input should be defined', () => {
    expect(instance.vcCdsInputDirective).toBeDefined();
  });

  it('cds-modal-actions should be defined', () => {
    expect(instance.vcCdsModalActionsDirective).toBeDefined();
  });

  it('cds-modal-content should be defined', () => {
    expect(instance.vcCdsModalContentDirective).toBeDefined();
  });

  it('cds-modal-header-actions should be defined', () => {
    expect(instance.vcCdsModalHeaderActionsDirective).toBeDefined();
  });

  it('cds-modal-header should be defined', () => {
    expect(instance.vcCdsModalHeaderDirective).toBeDefined();
  });

  it('cds-modal should be defined', () => {
    expect(instance.vcCdsModalDirective).toBeDefined();
  });

  it('cds-password should be defined', () => {
    expect(instance.vcCdsPasswordDirective).toBeDefined();
  });

  it('cds-progress-circle should be defined', () => {
    expect(instance.vcCdsProgressCircleDirective).toBeDefined();
  });

  it('cds-radio-group should be defined', () => {
    expect(instance.vcCdsRadioGroupDirective).toBeDefined();
  });

  it('cds-radio should be defined', () => {
    expect(instance.vcCdsRadioDirective).toBeDefined();
  });

  it('cds-range should be defined', () => {
    expect(instance.vcCdsRangeDirective).toBeDefined();
  });

  it('cds-search should be defined', () => {
    expect(instance.vcCdsSearchDirective).toBeDefined();
  });

  it('cds-select should be defined', () => {
    expect(instance.vcCdsSelectDirective).toBeDefined();
  });

  it('cds-tag should be defined', () => {
    expect(instance.vcCdsTagDirective).toBeDefined();
  });

  it('cds-test-dropdown should be defined', () => {
    expect(instance.vcCdsTestDropdownDirective).toBeDefined();
  });

  it('cds-textarea should be defined', () => {
    expect(instance.vcCdsTextareaDirective).toBeDefined();
  });

  it('cds-time should be defined', () => {
    expect(instance.vcCdsTimeDirective).toBeDefined();
  });

  it('cds-toggle-group should be defined', () => {
    expect(instance.vcCdsToggleGroupDirective).toBeDefined();
  });

  it('cds-toggle should be defined', () => {
    expect(instance.vcCdsToggleDirective).toBeDefined();
  });
});

@Component({
  template: `
    <cds-accordion-content></cds-accordion-content>
    <cds-accordion-header>Header</cds-accordion-header>
    <cds-accordion-panel>
      <cds-accordion-header></cds-accordion-header>
      <cds-accordion-content></cds-accordion-content>
    </cds-accordion-panel>
    <cds-accordion>
      <cds-accordion-panel expanded>
        <cds-accordion-header></cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
    <cds-alert-actions></cds-alert-actions>
    <cds-alert-group></cds-alert-group>
    <cds-alert></cds-alert>
    <cds-badge>
      <label></label>
      <input />
    </cds-badge>
    <cds-button>
      <label></label>
      <input />
    </cds-button>
    <cds-icon-button></cds-icon-button>
    <cds-inline-button></cds-inline-button>
    <cds-checkbox-group>
      <label></label>
      <cds-checkbox>
        <label></label>
        <input type="checkbox" />
      </cds-checkbox>
    </cds-checkbox-group>
    <cds-checkbox>
      <label></label>
      <input type="checkbox" />
    </cds-checkbox>
    <cds-datalist>
      <label></label>
      <datalist></datalist>
    </cds-datalist>
    <cds-date>
      <label></label>
      <input type="date" />
    </cds-date>
    <cds-divider></cds-divider>
    <cds-file>
      <label>file</label>
      <input type="file" />
    </cds-file>
    <cds-control-action>
      <label></label>
    </cds-control-action>
    <cds-internal-control-group>
      <label></label>
      <cds-control>
        <label></label>
        <input type="radio" />
      </cds-control>
    </cds-internal-control-group>
    <cds-internal-control-label></cds-internal-control-label>
    <cds-control-message></cds-control-message>
    <cds-form-group>
      <cds-input>
        <label></label>
        <input type="text" />
      </cds-input>
    </cds-form-group>
    <cds-control></cds-control>
    <cds-internal-control-inline>
      <label></label>
      <input type="radio" />
    </cds-internal-control-inline>
    <cds-icon></cds-icon>
    <cds-input-group>
      <label></label>
      <cds-input>
        <label></label>
        <input />
      </cds-input>
    </cds-input-group>
    <cds-input></cds-input>
    <cds-modal-actions></cds-modal-actions>
    <cds-modal-content></cds-modal-content>
    <cds-modal-header-actions></cds-modal-header-actions>
    <cds-modal-header></cds-modal-header>
    <cds-modal></cds-modal>
    <cds-password>
      <label></label>
      <input type="password" />
    </cds-password>
    <cds-progress-circle></cds-progress-circle>
    <cds-radio-group>
      <label></label>
      <cds-radio>
        <label></label>
        <input type="radio" />
      </cds-radio>
    </cds-radio-group>
    <cds-radio>
      <label></label>
      <input type="radio" />
    </cds-radio>
    <cds-range>
      <label></label>
      <input type="range" />
    </cds-range>
    <cds-search>
      <label></label>
      <input type="search" />
    </cds-search>
    <cds-select>
      <label></label>
      <select></select>
    </cds-select>
    <cds-tag></cds-tag>
    <cds-test-dropdown></cds-test-dropdown>
    <cds-textarea>
      <label></label>
      <textarea></textarea>
    </cds-textarea>
    <cds-time></cds-time>
    <cds-toggle-group>
      <label></label>
      <cds-toggle>
        <label></label>
        <input type="checkbox" />
      </cds-toggle>
    </cds-toggle-group>
    <cds-toggle>
      <label></label>
      <input type="toggle" />
    </cds-toggle>
  `,
})
class TestComponent {
  @ViewChild(CdsAccordionContentDirective) vcCdsAccordionContentDirective: CdsAccordionContentDirective;
  @ViewChild(CdsAccordionHeaderDirective) vcCdsAccordionHeaderDirective: CdsAccordionHeaderDirective;
  @ViewChild(CdsAccordionPanelDirective) vcCdsAccordionPanelDirective: CdsAccordionPanelDirective;
  @ViewChild(CdsAccordionDirective) vcCdsAccordionDirective: CdsAccordionDirective;
  @ViewChild(CdsAlertActionsDirective) vcCdsAlertActionsDirective: CdsAlertActionsDirective;
  @ViewChild(CdsAlertGroupDirective) vcCdsAlertGroupDirective: CdsAlertGroupDirective;
  @ViewChild(CdsAlertDirective) vcCdsAlertDirective: CdsAlertDirective;
  @ViewChild(CdsBadgeDirective) vcCdsBadgeDirective: CdsBadgeDirective;
  @ViewChild(CdsButtonDirective) vcCdsButtonDirective: CdsButtonDirective;
  @ViewChild(CdsIconButtonDirective) vcCdsIconButtonDirective: CdsIconButtonDirective;
  @ViewChild(CdsInlineButtonDirective) vcCdsInlineButtonDirective: CdsInlineButtonDirective;
  @ViewChild(CdsCheckboxGroupDirective) vcCdsCheckboxGroupDirective: CdsCheckboxGroupDirective;
  @ViewChild(CdsCheckboxDirective) vcCdsCheckboxDirective: CdsCheckboxDirective;
  @ViewChild(CdsDatalistDirective) vcCdsDatalistDirective: CdsDatalistDirective;
  @ViewChild(CdsDateDirective) vcCdsDateDirective: CdsDateDirective;
  @ViewChild(CdsDividerDirective) vcCdsDividerDirective: CdsDividerDirective;
  @ViewChild(CdsFileDirective) vcCdsFileDirective: CdsFileDirective;
  @ViewChild(CdsControlActionDirective) vcCdsControlActionDirective: CdsControlActionDirective;
  @ViewChild(CdsInternalControlGroupDirective) vcCdsInternalControlGroupDirective: CdsInternalControlGroupDirective;
  @ViewChild(CdsInternalControlLabelDirective) vcCdsInternalControlLabelDirective: CdsInternalControlLabelDirective;
  @ViewChild(CdsControlMessageDirective) vcCdsControlMessageDirective: CdsControlMessageDirective;
  @ViewChild(CdsFormGroupDirective) vcCdsFormGroupDirective: CdsFormGroupDirective;
  @ViewChild(CdsControlDirective) vcCdsControlDirective: CdsControlDirective;
  @ViewChild(CdsInternalControlInlineDirective) vcCdsInternalControlInlineDirective: CdsInternalControlInlineDirective;
  @ViewChild(CdsIconDirective) vcCdsIconDirective: CdsIconDirective;
  @ViewChild(CdsInputGroupDirective) vcCdsInputGroupDirective: CdsInputGroupDirective;
  @ViewChild(CdsInputDirective) vcCdsInputDirective: CdsInputDirective;
  @ViewChild(CdsModalActionsDirective) vcCdsModalActionsDirective: CdsModalActionsDirective;
  @ViewChild(CdsModalContentDirective) vcCdsModalContentDirective: CdsModalContentDirective;
  @ViewChild(CdsModalHeaderActionsDirective) vcCdsModalHeaderActionsDirective: CdsModalHeaderActionsDirective;
  @ViewChild(CdsModalHeaderDirective) vcCdsModalHeaderDirective: CdsModalHeaderDirective;
  @ViewChild(CdsModalDirective) vcCdsModalDirective: CdsModalDirective;
  @ViewChild(CdsPasswordDirective) vcCdsPasswordDirective: CdsPasswordDirective;
  @ViewChild(CdsProgressCircleDirective) vcCdsProgressCircleDirective: CdsProgressCircleDirective;
  @ViewChild(CdsRadioGroupDirective) vcCdsRadioGroupDirective: CdsRadioGroupDirective;
  @ViewChild(CdsRadioDirective) vcCdsRadioDirective: CdsRadioDirective;
  @ViewChild(CdsRangeDirective) vcCdsRangeDirective: CdsRangeDirective;
  @ViewChild(CdsSearchDirective) vcCdsSearchDirective: CdsSearchDirective;
  @ViewChild(CdsSelectDirective) vcCdsSelectDirective: CdsSelectDirective;
  @ViewChild(CdsTagDirective) vcCdsTagDirective: CdsTagDirective;
  @ViewChild(CdsTestDropdownDirective) vcCdsTestDropdownDirective: CdsTestDropdownDirective;
  @ViewChild(CdsTextareaDirective) vcCdsTextareaDirective: CdsTextareaDirective;
  @ViewChild(CdsTimeDirective) vcCdsTimeDirective: CdsTimeDirective;
  @ViewChild(CdsToggleGroupDirective) vcCdsToggleGroupDirective: CdsToggleGroupDirective;
  @ViewChild(CdsToggleDirective) vcCdsToggleDirective: CdsToggleDirective;
}
