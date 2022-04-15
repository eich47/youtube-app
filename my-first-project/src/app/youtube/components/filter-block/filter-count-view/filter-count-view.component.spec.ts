import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountViewComponent } from './filter-count-view.component';

describe('FilterCountViewComponent', () => {
  let component: FilterCountViewComponent;
  let fixture: ComponentFixture<FilterCountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
