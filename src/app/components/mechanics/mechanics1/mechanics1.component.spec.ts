import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics1Component } from './mechanics1.component';

describe('Mechanics1Component', () => {
  let component: Mechanics1Component;
  let fixture: ComponentFixture<Mechanics1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
