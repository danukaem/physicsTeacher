import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq2019Component } from './mcq2019.component';

describe('Mcq2019Component', () => {
  let component: Mcq2019Component;
  let fixture: ComponentFixture<Mcq2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mcq2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mcq2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
