import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationalFields1Component } from './gravitational-fields1.component';

describe('GravitationalFields1Component', () => {
  let component: GravitationalFields1Component;
  let fixture: ComponentFixture<GravitationalFields1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravitationalFields1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitationalFields1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
