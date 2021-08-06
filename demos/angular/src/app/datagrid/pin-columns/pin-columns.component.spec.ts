import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinColumnsComponent } from './pin-columns.component';

describe('PinColumnsComponent', () => {
  let component: PinColumnsComponent;
  let fixture: ComponentFixture<PinColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
