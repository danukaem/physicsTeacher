import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics3Component } from './electronics3.component';

describe('Electronics3Component', () => {
  let component: Electronics3Component;
  let fixture: ComponentFixture<Electronics3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electronics3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electronics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
