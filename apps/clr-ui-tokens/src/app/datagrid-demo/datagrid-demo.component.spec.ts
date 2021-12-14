import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridDemoComponent } from './datagrid-demo.component';

describe('DatagridDemoComponent', () => {
  let component: DatagridDemoComponent;
  let fixture: ComponentFixture<DatagridDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagridDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
