import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics5Component } from './mechanics5.component';

describe('Mechanics5Component', () => {
  let component: Mechanics5Component;
  let fixture: ComponentFixture<Mechanics5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
