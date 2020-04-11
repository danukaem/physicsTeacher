import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalPhysics8Component } from './thermal-physics8.component';

describe('ThermalPhysics8Component', () => {
  let component: ThermalPhysics8Component;
  let fixture: ComponentFixture<ThermalPhysics8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalPhysics8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalPhysics8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
