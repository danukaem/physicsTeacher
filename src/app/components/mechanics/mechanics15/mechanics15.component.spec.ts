import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics15Component } from './mechanics15.component';

describe('Mechanics15Component', () => {
  let component: Mechanics15Component;
  let fixture: ComponentFixture<Mechanics15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
