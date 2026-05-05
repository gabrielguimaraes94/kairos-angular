import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryLearningPath } from './industry-learning-path';

describe('IndustryLearningPath', () => {
  let component: IndustryLearningPath;
  let fixture: ComponentFixture<IndustryLearningPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryLearningPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryLearningPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
