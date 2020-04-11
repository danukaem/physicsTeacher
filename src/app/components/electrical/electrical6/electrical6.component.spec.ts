import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical6Component } from './electrical6.component';

describe('Electrical6Component', () => {
  let component: Electrical6Component;
  let fixture: ComponentFixture<Electrical6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
