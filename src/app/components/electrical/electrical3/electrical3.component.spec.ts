import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrical3Component } from './electrical3.component';

describe('Electrical3Component', () => {
  let component: Electrical3Component;
  let fixture: ComponentFixture<Electrical3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electrical3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electrical3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
