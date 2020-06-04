import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPapersDownloadComponent } from './past-papers-download.component';

describe('PastPapersDownloadComponent', () => {
  let component: PastPapersDownloadComponent;
  let fixture: ComponentFixture<PastPapersDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPapersDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPapersDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
