import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EslintIntroBlockComponent } from './eslint-intro-block.component';

describe('EslintIntroBlockComponent', () => {
  let component: EslintIntroBlockComponent;
  let fixture: ComponentFixture<EslintIntroBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EslintIntroBlockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EslintIntroBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
