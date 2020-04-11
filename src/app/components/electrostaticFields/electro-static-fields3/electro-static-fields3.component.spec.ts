import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields3Component } from './electro-static-fields3.component';

describe('ElectroStaticFields3Component', () => {
  let component: ElectroStaticFields3Component;
  let fixture: ComponentFixture<ElectroStaticFields3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
