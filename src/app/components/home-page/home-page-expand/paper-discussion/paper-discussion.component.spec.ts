import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperDiscussionComponent } from './paper-discussion.component';

describe('PaperDiscussionComponent', () => {
  let component: PaperDiscussionComponent;
  let fixture: ComponentFixture<PaperDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
