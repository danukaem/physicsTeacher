import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields1Component } from './magnetic-fields1.component';

describe('MagneticFields1Component', () => {
  let component: MagneticFields1Component;
  let fixture: ComponentFixture<MagneticFields1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
