import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields5Component } from './magnetic-fields5.component';

describe('MagneticFields5Component', () => {
  let component: MagneticFields5Component;
  let fixture: ComponentFixture<MagneticFields5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
