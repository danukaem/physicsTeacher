import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEssay2019Component } from './s-essay2019.component';

describe('SEssay2019Component', () => {
  let component: SEssay2019Component;
  let fixture: ComponentFixture<SEssay2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEssay2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEssay2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
