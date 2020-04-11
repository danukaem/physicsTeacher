import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light6Component } from './light6.component';

describe('Light6Component', () => {
  let component: Light6Component;
  let fixture: ComponentFixture<Light6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
