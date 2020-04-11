import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields4Component } from './magnetic-fields4.component';

describe('MagneticFields4Component', () => {
  let component: MagneticFields4Component;
  let fixture: ComponentFixture<MagneticFields4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
