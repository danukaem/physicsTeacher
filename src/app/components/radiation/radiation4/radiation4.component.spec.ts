import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Radiation4Component } from './radiation4.component';

describe('Radiation4Component', () => {
  let component: Radiation4Component;
  let fixture: ComponentFixture<Radiation4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Radiation4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Radiation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
