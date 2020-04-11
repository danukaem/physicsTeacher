import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalProperties3Component } from './mechanical-properties3.component';

describe('MechanicalProperties3Component', () => {
  let component: MechanicalProperties3Component;
  let fixture: ComponentFixture<MechanicalProperties3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalProperties3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalProperties3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
