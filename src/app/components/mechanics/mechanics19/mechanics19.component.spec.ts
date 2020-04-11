import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mechanics19Component } from './mechanics19.component';

describe('Mechanics19Component', () => {
  let component: Mechanics19Component;
  let fixture: ComponentFixture<Mechanics19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mechanics19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mechanics19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
