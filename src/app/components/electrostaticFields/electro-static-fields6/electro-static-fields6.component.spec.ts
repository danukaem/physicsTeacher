import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields6Component } from './electro-static-fields6.component';

describe('ElectroStaticFields6Component', () => {
  let component: ElectroStaticFields6Component;
  let fixture: ComponentFixture<ElectroStaticFields6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
