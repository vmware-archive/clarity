import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperDemoComponent } from './stepper-demo.component';

describe('StepperDemoComponent', () => {
  let component: StepperDemoComponent;
  let fixture: ComponentFixture<StepperDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
