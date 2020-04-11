import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics2Component } from './mechanics2.component';

describe('Mechanics2Component', () => {
  let component: Mechanics2Component;
  let fixture: ComponentFixture<Mechanics2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
