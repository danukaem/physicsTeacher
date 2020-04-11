import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics18Component } from './mechanics18.component';

describe('Mechanics18Component', () => {
  let component: Mechanics18Component;
  let fixture: ComponentFixture<Mechanics18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
