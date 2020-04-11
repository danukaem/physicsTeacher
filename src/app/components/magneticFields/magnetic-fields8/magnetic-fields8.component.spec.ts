import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields8Component } from './magnetic-fields8.component';

describe('MagneticFields8Component', () => {
  let component: MagneticFields8Component;
  let fixture: ComponentFixture<MagneticFields8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
