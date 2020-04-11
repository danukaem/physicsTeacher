import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationalFields5Component } from './gravitational-fields5.component';

describe('GravitationalFields5Component', () => {
  let component: GravitationalFields5Component;
  let fixture: ComponentFixture<GravitationalFields5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravitationalFields5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitationalFields5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
