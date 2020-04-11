import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light14Component } from './light14.component';

describe('Light14Component', () => {
  let component: Light14Component;
  let fixture: ComponentFixture<Light14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
