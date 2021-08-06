import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiActionComponent } from './multi-action.component';

describe('MultiActionComponent', () => {
  let component: MultiActionComponent;
  let fixture: ComponentFixture<MultiActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
