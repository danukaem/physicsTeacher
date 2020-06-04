import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialQustionComponent } from './special-qustion.component';

describe('SpecialQustionComponent', () => {
  let component: SpecialQustionComponent;
  let fixture: ComponentFixture<SpecialQustionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialQustionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
