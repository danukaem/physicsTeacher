import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade13QuestionDiscussionComponent } from './grade13-question-discussion.component';

describe('Grade13QuestionDiscussionComponent', () => {
  let component: Grade13QuestionDiscussionComponent;
  let fixture: ComponentFixture<Grade13QuestionDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grade13QuestionDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grade13QuestionDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
