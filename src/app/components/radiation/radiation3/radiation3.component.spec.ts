import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Radiation3Component } from './radiation3.component';

describe('Radiation3Component', () => {
  let component: Radiation3Component;
  let fixture: ComponentFixture<Radiation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Radiation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Radiation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
