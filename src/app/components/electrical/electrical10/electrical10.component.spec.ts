import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical10Component } from './electrical10.component';

describe('Electrical10Component', () => {
  let component: Electrical10Component;
  let fixture: ComponentFixture<Electrical10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
