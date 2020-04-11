import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Measurement1Component } from './measurement1.component';

describe('Measurement1Component', () => {
  let component: Measurement1Component;
  let fixture: ComponentFixture<Measurement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Measurement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Measurement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
