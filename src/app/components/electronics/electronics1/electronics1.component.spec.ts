import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics1Component } from './electronics1.component';

describe('Electronics1Component', () => {
  let component: Electronics1Component;
  let fixture: ComponentFixture<Electronics1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electronics1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electronics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
