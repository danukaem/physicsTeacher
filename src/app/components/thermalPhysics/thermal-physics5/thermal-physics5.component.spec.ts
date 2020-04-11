import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics5Component } from './thermal-physics5.component';

describe('ThermalPhysics5Component', () => {
  let component: ThermalPhysics5Component;
  let fixture: ComponentFixture<ThermalPhysics5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
