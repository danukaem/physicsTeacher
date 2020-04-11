import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalProperties1Component } from './mechanical-properties1.component';

describe('MechanicalProperties1Component', () => {
  let component: MechanicalProperties1Component;
  let fixture: ComponentFixture<MechanicalProperties1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalProperties1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalProperties1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
