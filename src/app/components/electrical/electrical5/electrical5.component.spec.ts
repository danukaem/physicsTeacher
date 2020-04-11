import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical5Component } from './electrical5.component';

describe('Electrical5Component', () => {
  let component: Electrical5Component;
  let fixture: ComponentFixture<Electrical5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
