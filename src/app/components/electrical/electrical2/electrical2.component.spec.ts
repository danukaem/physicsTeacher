import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical2Component } from './electrical2.component';

describe('Electrical2Component', () => {
  let component: Electrical2Component;
  let fixture: ComponentFixture<Electrical2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
