import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light7Component } from './light7.component';

describe('Light7Component', () => {
  let component: Light7Component;
  let fixture: ComponentFixture<Light7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
