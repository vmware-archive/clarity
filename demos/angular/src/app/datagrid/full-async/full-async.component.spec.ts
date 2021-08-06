import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAsyncComponent } from './full-async.component';

describe('FullAsyncComponent', () => {
  let component: FullAsyncComponent;
  let fixture: ComponentFixture<FullAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullAsyncComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
