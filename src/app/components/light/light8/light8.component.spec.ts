import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light8Component } from './light8.component';

describe('Light8Component', () => {
  let component: Light8Component;
  let fixture: ComponentFixture<Light8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
