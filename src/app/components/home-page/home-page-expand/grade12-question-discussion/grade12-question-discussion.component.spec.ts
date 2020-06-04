import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade12QuestionDiscussionComponent } from './grade12-question-discussion.component';

describe('Grade12QuestionDiscussionComponent', () => {
  let component: Grade12QuestionDiscussionComponent;
  let fixture: ComponentFixture<Grade12QuestionDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade12QuestionDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade12QuestionDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
