import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInRowComponent } from './drag-in-row.component';

describe('DragInRowComponent', () => {
  let component: DragInRowComponent;
  let fixture: ComponentFixture<DragInRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragInRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragInRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
