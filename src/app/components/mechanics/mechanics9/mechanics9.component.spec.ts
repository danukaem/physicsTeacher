import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics9Component } from './mechanics9.component';

describe('Mechanics9Component', () => {
  let component: Mechanics9Component;
  let fixture: ComponentFixture<Mechanics9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
