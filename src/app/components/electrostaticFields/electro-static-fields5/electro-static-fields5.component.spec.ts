import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields5Component } from './electro-static-fields5.component';

describe('ElectroStaticFields5Component', () => {
  let component: ElectroStaticFields5Component;
  let fixture: ComponentFixture<ElectroStaticFields5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
