import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Radiation1Component } from './radiation1.component';

describe('Radiation1Component', () => {
  let component: Radiation1Component;
  let fixture: ComponentFixture<Radiation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Radiation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Radiation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
