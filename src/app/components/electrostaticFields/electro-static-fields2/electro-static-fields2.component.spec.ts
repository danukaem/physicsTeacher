import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields2Component } from './electro-static-fields2.component';

describe('ElectroStaticFields2Component', () => {
  let component: ElectroStaticFields2Component;
  let fixture: ComponentFixture<ElectroStaticFields2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
