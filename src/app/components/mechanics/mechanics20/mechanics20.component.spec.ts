import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics20Component } from './mechanics20.component';

describe('Mechanics20Component', () => {
  let component: Mechanics20Component;
  let fixture: ComponentFixture<Mechanics20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
