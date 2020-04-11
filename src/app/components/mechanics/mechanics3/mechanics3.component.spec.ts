import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics3Component } from './mechanics3.component';

describe('Mechanics3Component', () => {
  let component: Mechanics3Component;
  let fixture: ComponentFixture<Mechanics3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
