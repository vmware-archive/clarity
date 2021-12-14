import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoComponent } from './modal-demo.component';

describe('ModalDemoComponent', () => {
  let component: ModalDemoComponent;
  let fixture: ComponentFixture<ModalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
