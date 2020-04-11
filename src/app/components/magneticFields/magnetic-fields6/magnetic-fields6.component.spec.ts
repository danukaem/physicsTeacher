import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields6Component } from './magnetic-fields6.component';

describe('MagneticFields6Component', () => {
  let component: MagneticFields6Component;
  let fixture: ComponentFixture<MagneticFields6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
