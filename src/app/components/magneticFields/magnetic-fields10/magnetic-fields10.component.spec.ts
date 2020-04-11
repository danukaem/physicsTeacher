import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields10Component } from './magnetic-fields10.component';

describe('MagneticFields10Component', () => {
  let component: MagneticFields10Component;
  let fixture: ComponentFixture<MagneticFields10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
