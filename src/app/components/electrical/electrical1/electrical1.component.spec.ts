import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical1Component } from './electrical1.component';

describe('Electrical1Component', () => {
  let component: Electrical1Component;
  let fixture: ComponentFixture<Electrical1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
