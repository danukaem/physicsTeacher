import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationalFields2Component } from './gravitational-fields2.component';

describe('GravitationalFields2Component', () => {
  let component: GravitationalFields2Component;
  let fixture: ComponentFixture<GravitationalFields2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravitationalFields2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitationalFields2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
