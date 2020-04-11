import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics6Component } from './mechanics6.component';

describe('Mechanics6Component', () => {
  let component: Mechanics6Component;
  let fixture: ComponentFixture<Mechanics6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
