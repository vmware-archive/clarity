import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDemoComponent } from './wizard-demo.component';

describe('WizardDemoComponent', () => {
  let component: WizardDemoComponent;
  let fixture: ComponentFixture<WizardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
