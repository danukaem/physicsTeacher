import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical7Component } from './electrical7.component';

describe('Electrical7Component', () => {
  let component: Electrical7Component;
  let fixture: ComponentFixture<Electrical7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
