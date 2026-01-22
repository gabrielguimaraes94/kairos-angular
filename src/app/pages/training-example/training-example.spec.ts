import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExample } from './training-example';

describe('TrainingExample', () => {
  let component: TrainingExample;
  let fixture: ComponentFixture<TrainingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
