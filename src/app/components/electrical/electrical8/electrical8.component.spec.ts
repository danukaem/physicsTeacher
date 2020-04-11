import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical8Component } from './electrical8.component';

describe('Electrical8Component', () => {
  let component: Electrical8Component;
  let fixture: ComponentFixture<Electrical8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
