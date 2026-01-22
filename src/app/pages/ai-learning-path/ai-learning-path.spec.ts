import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLearningPath } from './ai-learning-path';

describe('AiLearningPath', () => {
  let component: AiLearningPath;
  let fixture: ComponentFixture<AiLearningPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiLearningPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiLearningPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
