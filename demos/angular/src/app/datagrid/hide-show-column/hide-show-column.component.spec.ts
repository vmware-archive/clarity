import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowColumnComponent } from './hide-show-column.component';

describe('HideShowColumnComponent', () => {
  let component: HideShowColumnComponent;
  let fixture: ComponentFixture<HideShowColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideShowColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideShowColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
