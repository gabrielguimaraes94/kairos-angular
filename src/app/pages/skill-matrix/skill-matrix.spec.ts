import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMatrix } from './skill-matrix';

describe('SkillMatrix', () => {
  let component: SkillMatrix;
  let fixture: ComponentFixture<SkillMatrix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillMatrix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMatrix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
