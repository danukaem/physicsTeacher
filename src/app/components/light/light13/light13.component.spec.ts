import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light13Component } from './light13.component';

describe('Light13Component', () => {
  let component: Light13Component;
  let fixture: ComponentFixture<Light13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
