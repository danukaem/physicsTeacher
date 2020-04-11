import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics8Component } from './mechanics8.component';

describe('Mechanics8Component', () => {
  let component: Mechanics8Component;
  let fixture: ComponentFixture<Mechanics8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
