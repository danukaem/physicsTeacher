import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics7Component } from './mechanics7.component';

describe('Mechanics7Component', () => {
  let component: Mechanics7Component;
  let fixture: ComponentFixture<Mechanics7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
