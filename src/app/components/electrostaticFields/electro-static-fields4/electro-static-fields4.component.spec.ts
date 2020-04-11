import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields4Component } from './electro-static-fields4.component';

describe('ElectroStaticFields4Component', () => {
  let component: ElectroStaticFields4Component;
  let fixture: ComponentFixture<ElectroStaticFields4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
