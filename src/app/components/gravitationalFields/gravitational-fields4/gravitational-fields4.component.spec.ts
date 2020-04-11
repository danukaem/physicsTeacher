import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationalFields4Component } from './gravitational-fields4.component';

describe('GravitationalFields4Component', () => {
  let component: GravitationalFields4Component;
  let fixture: ComponentFixture<GravitationalFields4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravitationalFields4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitationalFields4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
