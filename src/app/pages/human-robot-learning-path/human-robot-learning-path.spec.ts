import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanRobotLearningPath } from './human-robot-learning-path';

describe('HumanRobotLearningPath', () => {
  let component: HumanRobotLearningPath;
  let fixture: ComponentFixture<HumanRobotLearningPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanRobotLearningPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanRobotLearningPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
