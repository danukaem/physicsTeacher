import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics1Component } from './thermal-physics1.component';

describe('ThermalPhysics1Component', () => {
  let component: ThermalPhysics1Component;
  let fixture: ComponentFixture<ThermalPhysics1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
