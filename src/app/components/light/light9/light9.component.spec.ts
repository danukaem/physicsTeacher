import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light9Component } from './light9.component';

describe('Light9Component', () => {
  let component: Light9Component;
  let fixture: ComponentFixture<Light9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
