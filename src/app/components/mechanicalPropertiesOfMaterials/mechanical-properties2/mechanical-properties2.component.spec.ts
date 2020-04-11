import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalProperties2Component } from './mechanical-properties2.component';

describe('MechanicalProperties2Component', () => {
  let component: MechanicalProperties2Component;
  let fixture: ComponentFixture<MechanicalProperties2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalProperties2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalProperties2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
