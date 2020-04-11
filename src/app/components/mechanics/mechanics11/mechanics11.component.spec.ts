import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics11Component } from './mechanics11.component';

describe('Mechanics11Component', () => {
  let component: Mechanics11Component;
  let fixture: ComponentFixture<Mechanics11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
