import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics9Component } from './thermal-physics9.component';

describe('ThermalPhysics9Component', () => {
  let component: ThermalPhysics9Component;
  let fixture: ComponentFixture<ThermalPhysics9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
