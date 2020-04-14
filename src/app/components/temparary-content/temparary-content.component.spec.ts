import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempararyContentComponent } from './temparary-content.component';

describe('TempararyContentComponent', () => {
  let component: TempararyContentComponent;
  let fixture: ComponentFixture<TempararyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempararyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempararyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
