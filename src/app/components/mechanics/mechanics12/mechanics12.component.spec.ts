import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics12Component } from './mechanics12.component';

describe('Mechanics12Component', () => {
  let component: Mechanics12Component;
  let fixture: ComponentFixture<Mechanics12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
