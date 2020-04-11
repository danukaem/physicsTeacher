import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics13Component } from './mechanics13.component';

describe('Mechanics13Component', () => {
  let component: Mechanics13Component;
  let fixture: ComponentFixture<Mechanics13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
