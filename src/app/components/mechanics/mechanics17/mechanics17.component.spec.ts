import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics17Component } from './mechanics17.component';

describe('Mechanics17Component', () => {
  let component: Mechanics17Component;
  let fixture: ComponentFixture<Mechanics17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
