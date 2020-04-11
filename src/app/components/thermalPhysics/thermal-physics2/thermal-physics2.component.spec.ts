import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics2Component } from './thermal-physics2.component';

describe('ThermalPhysics2Component', () => {
  let component: ThermalPhysics2Component;
  let fixture: ComponentFixture<ThermalPhysics2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
