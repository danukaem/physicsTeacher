import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics4Component } from './thermal-physics4.component';

describe('ThermalPhysics4Component', () => {
  let component: ThermalPhysics4Component;
  let fixture: ComponentFixture<ThermalPhysics4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
