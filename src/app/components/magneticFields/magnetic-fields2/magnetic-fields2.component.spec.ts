import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields2Component } from './magnetic-fields2.component';

describe('MagneticFields2Component', () => {
  let component: MagneticFields2Component;
  let fixture: ComponentFixture<MagneticFields2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
