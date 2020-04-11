import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics4Component } from './mechanics4.component';

describe('Mechanics4Component', () => {
  let component: Mechanics4Component;
  let fixture: ComponentFixture<Mechanics4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
