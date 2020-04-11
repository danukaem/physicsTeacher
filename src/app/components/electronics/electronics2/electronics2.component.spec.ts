import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics2Component } from './electronics2.component';

describe('Electronics2Component', () => {
  let component: Electronics2Component;
  let fixture: ComponentFixture<Electronics2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electronics2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electronics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
