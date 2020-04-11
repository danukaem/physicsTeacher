import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitationalFields3Component } from './gravitational-fields3.component';

describe('GravitationalFields3Component', () => {
  let component: GravitationalFields3Component;
  let fixture: ComponentFixture<GravitationalFields3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravitationalFields3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravitationalFields3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
