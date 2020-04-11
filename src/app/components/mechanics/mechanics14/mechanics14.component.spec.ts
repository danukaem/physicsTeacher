import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics14Component } from './mechanics14.component';

describe('Mechanics14Component', () => {
  let component: Mechanics14Component;
  let fixture: ComponentFixture<Mechanics14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
