import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics4Component } from './electronics4.component';

describe('Electronics4Component', () => {
  let component: Electronics4Component;
  let fixture: ComponentFixture<Electronics4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electronics4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electronics4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
