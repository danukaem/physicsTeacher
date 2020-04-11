import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics6Component } from './thermal-physics6.component';

describe('ThermalPhysics6Component', () => {
  let component: ThermalPhysics6Component;
  let fixture: ComponentFixture<ThermalPhysics6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
