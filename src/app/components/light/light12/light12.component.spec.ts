import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light12Component } from './light12.component';

describe('Light12Component', () => {
  let component: Light12Component;
  let fixture: ComponentFixture<Light12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
