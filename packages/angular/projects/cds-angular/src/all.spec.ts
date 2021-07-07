import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// eslint-disable-next-line clarity/no-barrel-imports
import {
  CdsAccordionContentDirective,
  CdsAccordionHeaderDirective,
  CdsAccordionSectionDirective,
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

describe('CDS Accordion Content', () => {
  let fixture: ComponentFixture<any>;
  let instance: AccordionContentTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AccordionContentTestComponent],
    });

    fixture = TestBed.createComponent(AccordionContentTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-accordion-content should be defined', () => {
    expect(instance.vcCdsAccordionContentDirective).toBeDefined();
  });
});

describe('CDS Accordion Header', () => {
  let fixture: ComponentFixture<any>;
  let instance: AccordionHeaderTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AccordionHeaderTestComponent],
    });

    fixture = TestBed.createComponent(AccordionHeaderTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-accordion-header should be defined', () => {
    expect(instance.vcCdsAccordionHeaderDirective).toBeDefined();
  });
});

describe('CDS Accordion Section', () => {
  let fixture: ComponentFixture<any>;
  let instance: AccordionPanelTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AccordionPanelTestComponent],
    });

    fixture = TestBed.createComponent(AccordionPanelTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-accordion-section should be defined', () => {
    expect(instance.vcCdsAccordionSectionDirective).toBeDefined();
  });
});

describe('CDS Accordion', () => {
  let fixture: ComponentFixture<any>;
  let instance: AccordionTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AccordionTestComponent],
    });

    fixture = TestBed.createComponent(AccordionTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-accordion should be defined', () => {
    expect(instance.vcCdsAccordionDirective).toBeDefined();
  });
});

describe('CDS Alert Actions', () => {
  let fixture: ComponentFixture<any>;
  let instance: AlertActionsTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AlertActionsTestComponent],
    });

    fixture = TestBed.createComponent(AlertActionsTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-alert-actions should be defined', () => {
    expect(instance.vcCdsAlertActionsDirective).toBeDefined();
  });
});

describe('CDS Alert Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: AlertGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AlertGroupTestComponent],
    });

    fixture = TestBed.createComponent(AlertGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-alert-group should be defined', () => {
    expect(instance.vcCdsAlertGroupDirective).toBeDefined();
  });
});

describe('CDS Alert', () => {
  let fixture: ComponentFixture<any>;
  let instance: AlertTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [AlertTestComponent],
    });

    fixture = TestBed.createComponent(AlertTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-alert should be defined', () => {
    expect(instance.vcCdsAlertDirective).toBeDefined();
  });
});

describe('CDS Badge', () => {
  let fixture: ComponentFixture<any>;
  let instance: BadgeTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [BadgeTestComponent],
    });

    fixture = TestBed.createComponent(BadgeTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-badge should be defined', () => {
    expect(instance.vcCdsBadgeDirective).toBeDefined();
  });
});

describe('CDS Button', () => {
  let fixture: ComponentFixture<any>;
  let instance: ButtonTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ButtonTestComponent],
    });

    fixture = TestBed.createComponent(ButtonTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-button should be defined', () => {
    expect(instance.vcCdsButtonDirective).toBeDefined();
  });
});

describe('CDS Icon Button', () => {
  let fixture: ComponentFixture<any>;
  let instance: IconButtonTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [IconButtonTestComponent],
    });

    fixture = TestBed.createComponent(IconButtonTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-icon-button should be defined', () => {
    expect(instance.vcCdsIconButtonDirective).toBeDefined();
  });
});

describe('CDS Inline Button', () => {
  let fixture: ComponentFixture<any>;
  let instance: InlineButtonTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [InlineButtonTestComponent],
    });

    fixture = TestBed.createComponent(InlineButtonTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-inline-button should be defined', () => {
    expect(instance.vcCdsInlineButtonDirective).toBeDefined();
  });
});

describe('CDS Checkbox', () => {
  let fixture: ComponentFixture<any>;
  let instance: CheckboxGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [CheckboxGroupTestComponent],
    });

    fixture = TestBed.createComponent(CheckboxGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-checkbox should be defined', () => {
    expect(instance.vcCdsCheckboxGroupDirective).toBeDefined();
  });
});

describe('CDS Checkbox Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: CheckboxGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [CheckboxGroupTestComponent],
    });

    fixture = TestBed.createComponent(CheckboxGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-checkbox-group should be defined', () => {
    expect(instance.vcCdsCheckboxGroupDirective).toBeDefined();
  });
});

describe('CDS Datalist', () => {
  let fixture: ComponentFixture<any>;
  let instance: DatalistTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [DatalistTestComponent],
    });

    fixture = TestBed.createComponent(DatalistTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-datalist should be defined', () => {
    expect(instance.vcCdsDatalistDirective).toBeDefined();
  });
});

describe('CDS Date', () => {
  let fixture: ComponentFixture<any>;
  let instance: DateTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [DateTestComponent],
    });

    fixture = TestBed.createComponent(DateTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-date should be defined', () => {
    expect(instance.vcCdsDateDirective).toBeDefined();
  });
});

describe('CDS Divider', () => {
  let fixture: ComponentFixture<any>;
  let instance: DividerTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [DividerTestComponent],
    });

    fixture = TestBed.createComponent(DividerTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-divider should be defined', () => {
    expect(instance.vcCdsDividerDirective).toBeDefined();
  });
});

describe('CDS File', () => {
  let fixture: ComponentFixture<any>;
  let instance: FileTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [FileTestComponent],
    });

    fixture = TestBed.createComponent(FileTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-file should be defined', () => {
    expect(instance.vcCdsFileDirective).toBeDefined();
  });
});

describe('CDS Control Action', () => {
  let fixture: ComponentFixture<any>;
  let instance: ControlActionTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ControlActionTestComponent],
    });

    fixture = TestBed.createComponent(ControlActionTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-control-action should be defined', () => {
    expect(instance.vcCdsControlActionDirective).toBeDefined();
  });
});

describe('CDS Internal Control Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: InternalControlGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [InternalControlGroupTestComponent],
    });

    fixture = TestBed.createComponent(InternalControlGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-internal-control-group should be defined', () => {
    expect(instance.vcCdsInternalControlGroupDirective).toBeDefined();
  });
});

describe('CDS Internal Control Label', () => {
  let fixture: ComponentFixture<any>;
  let instance: InternalControlLabelTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [InternalControlLabelTestComponent],
    });

    fixture = TestBed.createComponent(InternalControlLabelTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-internal-control-label should be defined', () => {
    expect(instance.vcCdsInternalControlLabelDirective).toBeDefined();
  });
});

describe('CDS Control Message', () => {
  let fixture: ComponentFixture<any>;
  let instance: ControlMessageTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ControlMessageTestComponent],
    });

    fixture = TestBed.createComponent(ControlMessageTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-control-message should be defined', () => {
    expect(instance.vcCdsControlMessageDirective).toBeDefined();
  });
});

describe('CDS Form Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: FormGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [FormGroupTestComponent],
    });

    fixture = TestBed.createComponent(FormGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-form-group should be defined', () => {
    expect(instance.vcCdsFormGroupDirective).toBeDefined();
  });
});

describe('CDS Control', () => {
  let fixture: ComponentFixture<any>;
  let instance: ControlTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ControlTestComponent],
    });

    fixture = TestBed.createComponent(ControlTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-control should be defined', () => {
    expect(instance.vcCdsControlDirective).toBeDefined();
  });
});

describe('CDS Internal Control Inline', () => {
  let fixture: ComponentFixture<any>;
  let instance: InternalControlInlineTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [InternalControlInlineTestComponent],
    });

    fixture = TestBed.createComponent(InternalControlInlineTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-internal-control-inline should be defined', () => {
    expect(instance.vcCdsInternalControlInlineDirective).toBeDefined();
  });
});

describe('CDS Icon', () => {
  let fixture: ComponentFixture<any>;
  let instance: IconTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [IconTestComponent],
    });

    fixture = TestBed.createComponent(IconTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-icon should be defined', () => {
    expect(instance.vcCdsIconDirective).toBeDefined();
  });
});

describe('CDS Input Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: InputGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [InputGroupTestComponent],
    });

    fixture = TestBed.createComponent(InputGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-input-group should be defined', () => {
    expect(instance.vcCdsInputGroupDirective).toBeDefined();
  });
});

describe('CDS Input', () => {
  let fixture: ComponentFixture<any>;
  let instance: InputTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [InputTestComponent],
    });

    fixture = TestBed.createComponent(InputTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-input should be defined', () => {
    expect(instance.vcCdsInputDirective).toBeDefined();
  });
});

describe('CDS Modal Actions', () => {
  let fixture: ComponentFixture<any>;
  let instance: ModalActionsTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ModalActionsTestComponent],
    });

    fixture = TestBed.createComponent(ModalActionsTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-modal-actions should be defined', () => {
    expect(instance.vcCdsModalActionsDirective).toBeDefined();
  });
});

describe('CDS Modal Content', () => {
  let fixture: ComponentFixture<any>;
  let instance: ModalContentTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ModalContentTestComponent],
    });

    fixture = TestBed.createComponent(ModalContentTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-modal-content should be defined', () => {
    expect(instance.vcCdsModalContentDirective).toBeDefined();
  });
});

describe('CDS Modal Header Actions', () => {
  let fixture: ComponentFixture<any>;
  let instance: ModalHeaderActionsTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ModalHeaderActionsTestComponent],
    });

    fixture = TestBed.createComponent(ModalHeaderActionsTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-modal-header-actions should be defined', () => {
    expect(instance.vcCdsModalHeaderActionsDirective).toBeDefined();
  });
});

describe('CDS Modal Header', () => {
  let fixture: ComponentFixture<any>;
  let instance: ModalHeaderTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ModalHeaderTestComponent],
    });

    fixture = TestBed.createComponent(ModalHeaderTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-modal-header should be defined', () => {
    expect(instance.vcCdsModalHeaderDirective).toBeDefined();
  });
});

describe('CDS Modal', () => {
  let fixture: ComponentFixture<any>;
  let instance: ModalTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ModalTestComponent],
    });

    fixture = TestBed.createComponent(ModalTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-modal should be defined', () => {
    expect(instance.vcCdsModalDirective).toBeDefined();
  });
});

describe('CDS Password', () => {
  let fixture: ComponentFixture<any>;
  let instance: PasswordTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [PasswordTestComponent],
    });

    fixture = TestBed.createComponent(PasswordTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-password should be defined', () => {
    expect(instance.vcCdsPasswordDirective).toBeDefined();
  });
});

describe('CDS Progress Circle', () => {
  let fixture: ComponentFixture<any>;
  let instance: ProgressCircleTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ProgressCircleTestComponent],
    });

    fixture = TestBed.createComponent(ProgressCircleTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-progress-circle should be defined', () => {
    expect(instance.vcCdsProgressCircleDirective).toBeDefined();
  });
});

describe('CDS Radio Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: RadioGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [RadioGroupTestComponent],
    });

    fixture = TestBed.createComponent(RadioGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-radio-group should be defined', () => {
    expect(instance.vcCdsRadioGroupDirective).toBeDefined();
  });
});

describe('CDS Radio', () => {
  let fixture: ComponentFixture<any>;
  let instance: RadioTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [RadioTestComponent],
    });

    fixture = TestBed.createComponent(RadioTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-radio should be defined', () => {
    expect(instance.vcCdsRadioDirective).toBeDefined();
  });
});

describe('CDS Range', () => {
  let fixture: ComponentFixture<any>;
  let instance: RangeTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [RangeTestComponent],
    });

    fixture = TestBed.createComponent(RangeTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-range should be defined', () => {
    expect(instance.vcCdsRangeDirective).toBeDefined();
  });
});

describe('CDS Search', () => {
  let fixture: ComponentFixture<any>;
  let instance: SearchTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [SearchTestComponent],
    });

    fixture = TestBed.createComponent(SearchTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-search should be defined', () => {
    expect(instance.vcCdsSearchDirective).toBeDefined();
  });
});

describe('Select', () => {
  let fixture: ComponentFixture<any>;
  let instance: SelectTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [SelectTestComponent],
    });

    fixture = TestBed.createComponent(SelectTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-select should be defined', () => {
    expect(instance.vcCdsSelectDirective).toBeDefined();
  });
});

describe('CDS Tag', () => {
  let fixture: ComponentFixture<any>;
  let instance: TagTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [TagTestComponent],
    });

    fixture = TestBed.createComponent(TagTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-tag should be defined', () => {
    expect(instance.vcCdsTagDirective).toBeDefined();
  });
});

describe('CDS Test Dropdown', () => {
  let fixture: ComponentFixture<any>;
  let instance: TestDropdownTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [TestDropdownTestComponent],
    });

    fixture = TestBed.createComponent(TestDropdownTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-test-dropdown should be defined', () => {
    expect(instance.vcCdsTestDropdownDirective).toBeDefined();
  });
});

describe('CDS Textarea', () => {
  let fixture: ComponentFixture<any>;
  let instance: TextareaTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [TextareaTestComponent],
    });

    fixture = TestBed.createComponent(TextareaTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-textarea should be defined', () => {
    expect(instance.vcCdsTextareaDirective).toBeDefined();
  });
});

describe('CDS Time', () => {
  let fixture: ComponentFixture<any>;
  let instance: TimeTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [TimeTestComponent],
    });

    fixture = TestBed.createComponent(TimeTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-time should be defined', () => {
    expect(instance.vcCdsTimeDirective).toBeDefined();
  });
});

describe('CDS Toggle Group', () => {
  let fixture: ComponentFixture<any>;
  let instance: ToggleGroupTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ToggleGroupTestComponent],
    });

    fixture = TestBed.createComponent(ToggleGroupTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-toggle-group should be defined', () => {
    expect(instance.vcCdsToggleGroupDirective).toBeDefined();
  });
});

describe('CDS Toggle', () => {
  let fixture: ComponentFixture<any>;
  let instance: ToggleTestComponent;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [CdsModule],
      declarations: [ToggleTestComponent],
    });

    fixture = TestBed.createComponent(ToggleTestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('cds-toggle should be defined', () => {
    expect(instance.vcCdsToggleDirective).toBeDefined();
  });
});

@Component({
  template: ` <cds-accordion-content></cds-accordion-content> `,
})
class AccordionContentTestComponent {
  @ViewChild(CdsAccordionContentDirective) vcCdsAccordionContentDirective: CdsAccordionContentDirective;
}

@Component({
  template: ` <cds-accordion-header></cds-accordion-header> `,
})
class AccordionHeaderTestComponent {
  @ViewChild(CdsAccordionHeaderDirective) vcCdsAccordionHeaderDirective: CdsAccordionHeaderDirective;
}

@Component({
  template: `
    <cds-accordion-section>
      <cds-accordion-header></cds-accordion-header>
      <cds-accordion-content></cds-accordion-content>
    </cds-accordion-section>
  `,
})
class AccordionPanelTestComponent {
  @ViewChild(CdsAccordionSectionDirective) vcCdsAccordionSectionDirective: CdsAccordionSectionDirective;
}

@Component({
  template: `
    <cds-accordion>
      <cds-accordion-section expanded>
        <cds-accordion-header></cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-section>
    </cds-accordion>
  `,
})
class AccordionTestComponent {
  @ViewChild(CdsAccordionDirective) vcCdsAccordionDirective: CdsAccordionDirective;
}

@Component({
  template: ` <cds-alert-actions></cds-alert-actions> `,
})
class AlertActionsTestComponent {
  @ViewChild(CdsAlertActionsDirective) vcCdsAlertActionsDirective: CdsAlertActionsDirective;
}

@Component({
  template: ` <cds-alert-group></cds-alert-group> `,
})
class AlertGroupTestComponent {
  @ViewChild(CdsAlertGroupDirective) vcCdsAlertGroupDirective: CdsAlertGroupDirective;
}

@Component({
  template: ` <cds-alert></cds-alert> `,
})
class AlertTestComponent {
  @ViewChild(CdsAlertDirective) vcCdsAlertDirective: CdsAlertDirective;
}

@Component({
  template: `
    <cds-badge>
      <label></label>
      <input />
    </cds-badge>
  `,
})
class BadgeTestComponent {
  @ViewChild(CdsBadgeDirective) vcCdsBadgeDirective: CdsBadgeDirective;
}

@Component({
  template: `
    <cds-button>
      <label></label>
      <input />
    </cds-button>
  `,
})
class ButtonTestComponent {
  @ViewChild(CdsButtonDirective) vcCdsButtonDirective: CdsButtonDirective;
}

@Component({
  template: ` <cds-icon-button></cds-icon-button> `,
})
class IconButtonTestComponent {
  @ViewChild(CdsIconButtonDirective) vcCdsIconButtonDirective: CdsIconButtonDirective;
}

@Component({
  template: ` <cds-inline-button></cds-inline-button> `,
})
class InlineButtonTestComponent {
  @ViewChild(CdsInlineButtonDirective) vcCdsInlineButtonDirective: CdsInlineButtonDirective;
}

@Component({
  template: `
    <cds-checkbox-group>
      <label></label>
      <cds-checkbox>
        <label></label>
        <input type="checkbox" />
      </cds-checkbox>
    </cds-checkbox-group>
  `,
})
class CheckboxGroupTestComponent {
  @ViewChild(CdsCheckboxGroupDirective) vcCdsCheckboxGroupDirective: CdsCheckboxGroupDirective;
}

@Component({
  template: `
    <cds-checkbox>
      <label></label>
      <input type="checkbox" />
    </cds-checkbox>
  `,
})
class CheckboxTestComponent {
  @ViewChild(CdsCheckboxDirective) vcCdsCheckboxDirective: CdsCheckboxDirective;
}

@Component({
  template: `
    <cds-datalist>
      <label></label>
      <input type="text" />
      <datalist></datalist>
    </cds-datalist>
  `,
})
class DatalistTestComponent {
  @ViewChild(CdsDatalistDirective) vcCdsDatalistDirective: CdsDatalistDirective;
}

@Component({
  template: `
    <cds-date>
      <label></label>
      <input type="date" />
    </cds-date>
  `,
})
class DateTestComponent {
  @ViewChild(CdsDateDirective) vcCdsDateDirective: CdsDateDirective;
}

@Component({
  template: ` <cds-divider></cds-divider> `,
})
class DividerTestComponent {
  @ViewChild(CdsDividerDirective) vcCdsDividerDirective: CdsDividerDirective;
}

@Component({
  template: `
    <cds-file>
      <label>file</label>
      <input type="file" />
    </cds-file>
  `,
})
class FileTestComponent {
  @ViewChild(CdsFileDirective) vcCdsFileDirective: CdsFileDirective;
}

@Component({
  template: `
    <cds-control-action>
      <label></label>
    </cds-control-action>
  `,
})
class ControlActionTestComponent {
  @ViewChild(CdsControlActionDirective) vcCdsControlActionDirective: CdsControlActionDirective;
}

@Component({
  template: `
    <cds-internal-control-group>
      <label></label>
      <cds-control>
        <label></label>
        <input type="radio" />
      </cds-control>
    </cds-internal-control-group>
  `,
})
class InternalControlGroupTestComponent {
  @ViewChild(CdsInternalControlGroupDirective) vcCdsInternalControlGroupDirective: CdsInternalControlGroupDirective;
}

@Component({
  template: `
    <cds-internal-control-label>
      <label></label>
    </cds-internal-control-label>
  `,
})
class InternalControlLabelTestComponent {
  @ViewChild(CdsInternalControlLabelDirective) vcCdsInternalControlLabelDirective: CdsInternalControlLabelDirective;
}

@Component({
  template: ` <cds-control-message></cds-control-message> `,
})
class ControlMessageTestComponent {
  @ViewChild(CdsControlMessageDirective) vcCdsControlMessageDirective: CdsControlMessageDirective;
}

@Component({
  template: `
    <cds-form-group>
      <cds-input>
        <label></label>
        <input type="text" />
      </cds-input>
    </cds-form-group>
  `,
})
class FormGroupTestComponent {
  @ViewChild(CdsFormGroupDirective) vcCdsFormGroupDirective: CdsFormGroupDirective;
}

@Component({
  template: `
    <cds-control>
      <label></label>
      <input type="text" />
    </cds-control>
  `,
})
class ControlTestComponent {
  @ViewChild(CdsControlDirective) vcCdsControlDirective: CdsControlDirective;
}

@Component({
  template: `
    <cds-internal-control-inline>
      <label></label>
      <input type="radio" />
    </cds-internal-control-inline>
  `,
})
class InternalControlInlineTestComponent {
  @ViewChild(CdsInternalControlInlineDirective) vcCdsInternalControlInlineDirective: CdsInternalControlInlineDirective;
}

@Component({
  template: ` <cds-icon></cds-icon> `,
})
class IconTestComponent {
  @ViewChild(CdsIconDirective) vcCdsIconDirective: CdsIconDirective;
}

@Component({
  template: `
    <cds-input-group>
      <label></label>
      <cds-input>
        <label></label>
        <input />
      </cds-input>
    </cds-input-group>
  `,
})
class InputGroupTestComponent {
  @ViewChild(CdsInputGroupDirective) vcCdsInputGroupDirective: CdsInputGroupDirective;
}

@Component({
  template: `
    <cds-input>
      <label></label>
      <input />
    </cds-input>
  `,
})
class InputTestComponent {
  @ViewChild(CdsInputDirective) vcCdsInputDirective: CdsInputDirective;
}

@Component({
  template: ` <cds-modal-actions></cds-modal-actions>k `,
})
class ModalActionsTestComponent {
  @ViewChild(CdsModalActionsDirective) vcCdsModalActionsDirective: CdsModalActionsDirective;
}

@Component({
  template: ` <cds-modal-content></cds-modal-content> `,
})
class ModalContentTestComponent {
  @ViewChild(CdsModalContentDirective) vcCdsModalContentDirective: CdsModalContentDirective;
}

@Component({
  template: ` <cds-modal-header-actions></cds-modal-header-actions> `,
})
class ModalHeaderActionsTestComponent {
  @ViewChild(CdsModalHeaderActionsDirective) vcCdsModalHeaderActionsDirective: CdsModalHeaderActionsDirective;
}

@Component({
  template: ` <cds-modal-header></cds-modal-header> `,
})
class ModalHeaderTestComponent {
  @ViewChild(CdsModalHeaderDirective) vcCdsModalHeaderDirective: CdsModalHeaderDirective;
}

@Component({
  template: ` <cds-modal></cds-modal> `,
})
class ModalTestComponent {
  @ViewChild(CdsModalDirective) vcCdsModalDirective: CdsModalDirective;
}

@Component({
  template: `
    <cds-password>
      <label></label>
      <input type="password" />
    </cds-password>
  `,
})
class PasswordTestComponent {
  @ViewChild(CdsPasswordDirective) vcCdsPasswordDirective: CdsPasswordDirective;
}

@Component({
  template: ` <cds-progress-circle></cds-progress-circle> `,
})
class ProgressCircleTestComponent {
  @ViewChild(CdsProgressCircleDirective) vcCdsProgressCircleDirective: CdsProgressCircleDirective;
}

@Component({
  template: `
    <cds-radio-group>
      <label></label>
      <cds-radio>
        <label></label>
        <input type="radio" />
      </cds-radio>
    </cds-radio-group>
  `,
})
class RadioGroupTestComponent {
  @ViewChild(CdsRadioGroupDirective) vcCdsRadioGroupDirective: CdsRadioGroupDirective;
}

@Component({
  template: `
    <cds-radio>
      <label></label>
      <input type="radio" />
    </cds-radio>
  `,
})
class RadioTestComponent {
  @ViewChild(CdsRadioDirective) vcCdsRadioDirective: CdsRadioDirective;
}

@Component({
  template: `
    <cds-range>
      <label></label>
      <input type="range" />
    </cds-range>
  `,
})
class RangeTestComponent {
  @ViewChild(CdsRangeDirective) vcCdsRangeDirective: CdsRangeDirective;
}

@Component({
  template: `
    <cds-search>
      <label></label>
      <input type="search" />
    </cds-search>
  `,
})
class SearchTestComponent {
  @ViewChild(CdsSearchDirective) vcCdsSearchDirective: CdsSearchDirective;
}

@Component({
  template: `
    <cds-select>
      <label></label>
      <select></select>
    </cds-select>
  `,
})
class SelectTestComponent {
  @ViewChild(CdsSelectDirective) vcCdsSelectDirective: CdsSelectDirective;
}

@Component({
  template: ` <cds-tag></cds-tag> `,
})
class TagTestComponent {
  @ViewChild(CdsTagDirective) vcCdsTagDirective: CdsTagDirective;
}

@Component({
  template: ` <cds-test-dropdown></cds-test-dropdown> `,
})
class TestDropdownTestComponent {
  @ViewChild(CdsTestDropdownDirective) vcCdsTestDropdownDirective: CdsTestDropdownDirective;
}

@Component({
  template: `
    <cds-textarea>
      <label></label>
      <textarea></textarea>
    </cds-textarea>
  `,
})
class TextareaTestComponent {
  @ViewChild(CdsTextareaDirective) vcCdsTextareaDirective: CdsTextareaDirective;
}

@Component({
  template: `
    <cds-time>
      <label></label>
      <input type="time" />
    </cds-time>
  `,
})
class TimeTestComponent {
  @ViewChild(CdsTimeDirective) vcCdsTimeDirective: CdsTimeDirective;
}

@Component({
  template: `
    <cds-toggle-group>
      <label></label>
      <cds-toggle>
        <label></label>
        <input type="toggle" />
      </cds-toggle>
    </cds-toggle-group>
  `,
})
class ToggleGroupTestComponent {
  @ViewChild(CdsToggleGroupDirective) vcCdsToggleGroupDirective: CdsToggleGroupDirective;
}

@Component({
  template: `
    <cds-toggle>
      <label></label>
      <input type="toggle" />
    </cds-toggle>
  `,
})
class ToggleTestComponent {
  @ViewChild(CdsToggleDirective) vcCdsToggleDirective: CdsToggleDirective;
}
