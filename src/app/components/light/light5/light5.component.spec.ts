import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light5Component } from './light5.component';

describe('Light5Component', () => {
  let component: Light5Component;
  let fixture: ComponentFixture<Light5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
