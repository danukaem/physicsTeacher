import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics10Component } from './mechanics10.component';

describe('Mechanics10Component', () => {
  let component: Mechanics10Component;
  let fixture: ComponentFixture<Mechanics10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
