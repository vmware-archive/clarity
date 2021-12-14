import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDemoComponent } from './accordion-demo.component';

describe('AccordionDemoComponent', () => {
  let component: AccordionDemoComponent;
  let fixture: ComponentFixture<AccordionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
