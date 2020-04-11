import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields11Component } from './magnetic-fields11.component';

describe('MagneticFields11Component', () => {
  let component: MagneticFields11Component;
  let fixture: ComponentFixture<MagneticFields11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
