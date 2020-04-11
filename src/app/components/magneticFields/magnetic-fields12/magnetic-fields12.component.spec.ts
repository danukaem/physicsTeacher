import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields12Component } from './magnetic-fields12.component';

describe('MagneticFields12Component', () => {
  let component: MagneticFields12Component;
  let fixture: ComponentFixture<MagneticFields12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
