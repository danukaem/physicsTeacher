import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsICComponent } from './electronics-ic.component';

describe('ElectronicsICComponent', () => {
  let component: ElectronicsICComponent;
  let fixture: ComponentFixture<ElectronicsICComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsICComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
