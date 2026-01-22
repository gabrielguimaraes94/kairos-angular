import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KairoslingoSession } from './kairoslingo-session';

describe('KairoslingoSession', () => {
  let component: KairoslingoSession;
  let fixture: ComponentFixture<KairoslingoSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KairoslingoSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KairoslingoSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
