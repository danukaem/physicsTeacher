import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical9Component } from './electrical9.component';

describe('Electrical9Component', () => {
  let component: Electrical9Component;
  let fixture: ComponentFixture<Electrical9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
