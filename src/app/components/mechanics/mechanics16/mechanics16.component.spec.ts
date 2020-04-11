import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics16Component } from './mechanics16.component';

describe('Mechanics16Component', () => {
  let component: Mechanics16Component;
  let fixture: ComponentFixture<Mechanics16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
