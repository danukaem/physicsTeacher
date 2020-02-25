import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionSideBarComponent } from './filter-option-side-bar.component';

describe('FilterOptionSideBarComponent', () => {
  let component: FilterOptionSideBarComponent;
  let fixture: ComponentFixture<FilterOptionSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOptionSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
