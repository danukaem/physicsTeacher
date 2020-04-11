import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light10Component } from './light10.component';

describe('Light10Component', () => {
  let component: Light10Component;
  let fixture: ComponentFixture<Light10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
