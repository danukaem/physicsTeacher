import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsDiodeComponent } from './electronics-diode.component';

describe('ElectronicsDiodeComponent', () => {
  let component: ElectronicsDiodeComponent;
  let fixture: ComponentFixture<ElectronicsDiodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsDiodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsDiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
