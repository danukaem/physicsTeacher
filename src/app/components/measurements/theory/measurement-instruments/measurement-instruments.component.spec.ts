import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementInstrumentsComponent } from './measurement-instruments.component';

describe('MeasurementInstrumentsComponent', () => {
  let component: MeasurementInstrumentsComponent;
  let fixture: ComponentFixture<MeasurementInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
