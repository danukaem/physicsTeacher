import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics5Component } from './electronics5.component';

describe('Electronics5Component', () => {
  let component: Electronics5Component;
  let fixture: ComponentFixture<Electronics5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electronics5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electronics5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
