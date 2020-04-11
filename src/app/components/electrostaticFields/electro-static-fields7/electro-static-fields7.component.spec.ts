import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroStaticFields7Component } from './electro-static-fields7.component';

describe('ElectroStaticFields7Component', () => {
  let component: ElectroStaticFields7Component;
  let fixture: ComponentFixture<ElectroStaticFields7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroStaticFields7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroStaticFields7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
