import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light11Component } from './light11.component';

describe('Light11Component', () => {
  let component: Light11Component;
  let fixture: ComponentFixture<Light11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
