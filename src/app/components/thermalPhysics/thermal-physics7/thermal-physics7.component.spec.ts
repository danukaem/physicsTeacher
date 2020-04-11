import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics7Component } from './thermal-physics7.component';

describe('ThermalPhysics7Component', () => {
  let component: ThermalPhysics7Component;
  let fixture: ComponentFixture<ThermalPhysics7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
