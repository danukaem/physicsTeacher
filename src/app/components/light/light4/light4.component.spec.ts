import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light4Component } from './light4.component';

describe('Light4Component', () => {
  let component: Light4Component;
  let fixture: ComponentFixture<Light4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
