import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields1Component } from './electro-static-fields1.component';

describe('ElectroStaticFields1Component', () => {
  let component: ElectroStaticFields1Component;
  let fixture: ComponentFixture<ElectroStaticFields1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
