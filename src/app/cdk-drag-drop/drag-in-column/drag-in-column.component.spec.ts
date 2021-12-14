import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInColumnComponent } from './drag-in-column.component';

describe('DragInColumnComponent', () => {
  let component: DragInColumnComponent;
  let fixture: ComponentFixture<DragInColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragInColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragInColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
