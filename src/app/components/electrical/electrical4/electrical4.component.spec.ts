import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical4Component } from './electrical4.component';

describe('Electrical4Component', () => {
  let component: Electrical4Component;
  let fixture: ComponentFixture<Electrical4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
