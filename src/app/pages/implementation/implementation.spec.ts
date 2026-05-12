import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Implementation } from './implementation';

describe('Implementation', () => {
  let component: Implementation;
  let fixture: ComponentFixture<Implementation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Implementation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Implementation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
