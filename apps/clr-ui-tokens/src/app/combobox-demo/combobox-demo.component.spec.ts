import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxDemoComponent } from './combobox-demo.component';

describe('ComboboxDemoComponent', () => {
  let component: ComboboxDemoComponent;
  let fixture: ComponentFixture<ComboboxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboboxDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
