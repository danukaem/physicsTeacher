import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics3Component } from './thermal-physics3.component';

describe('ThermalPhysics3Component', () => {
  let component: ThermalPhysics3Component;
  let fixture: ComponentFixture<ThermalPhysics3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
