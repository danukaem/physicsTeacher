import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Essay2019Component } from './essay2019.component';

describe('Essay2019Component', () => {
  let component: Essay2019Component;
  let fixture: ComponentFixture<Essay2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Essay2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Essay2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
