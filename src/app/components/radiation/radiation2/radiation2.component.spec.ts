import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Radiation2Component } from './radiation2.component';

describe('Radiation2Component', () => {
  let component: Radiation2Component;
  let fixture: ComponentFixture<Radiation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Radiation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Radiation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
