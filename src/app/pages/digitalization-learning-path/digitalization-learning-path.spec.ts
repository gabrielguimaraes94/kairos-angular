import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalizationLearningPath } from './digitalization-learning-path';

describe('DigitalizationLearningPath', () => {
  let component: DigitalizationLearningPath;
  let fixture: ComponentFixture<DigitalizationLearningPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalizationLearningPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalizationLearningPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
