import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kairoslingo } from './kairoslingo';

describe('Kairoslingo', () => {
  let component: Kairoslingo;
  let fixture: ComponentFixture<Kairoslingo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kairoslingo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kairoslingo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
