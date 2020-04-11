import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light3Component } from './light3.component';

describe('Light3Component', () => {
  let component: Light3Component;
  let fixture: ComponentFixture<Light3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
