import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsTransistorComponent } from './electronics-transistor.component';

describe('ElectronicsTransistorComponent', () => {
  let component: ElectronicsTransistorComponent;
  let fixture: ComponentFixture<ElectronicsTransistorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsTransistorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsTransistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
