import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsGateComponent } from './electronics-gate.component';

describe('ElectronicsGateComponent', () => {
  let component: ElectronicsGateComponent;
  let fixture: ComponentFixture<ElectronicsGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
