import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields9Component } from './magnetic-fields9.component';

describe('MagneticFields9Component', () => {
  let component: MagneticFields9Component;
  let fixture: ComponentFixture<MagneticFields9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
