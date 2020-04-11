import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields7Component } from './magnetic-fields7.component';

describe('MagneticFields7Component', () => {
  let component: MagneticFields7Component;
  let fixture: ComponentFixture<MagneticFields7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
