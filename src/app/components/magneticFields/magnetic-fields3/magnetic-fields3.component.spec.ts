import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticFields3Component } from './magnetic-fields3.component';

describe('MagneticFields3Component', () => {
  let component: MagneticFields3Component;
  let fixture: ComponentFixture<MagneticFields3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticFields3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticFields3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
