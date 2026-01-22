import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsKairos } from './what-is-kairos';

describe('WhatIsKairos', () => {
  let component: WhatIsKairos;
  let fixture: ComponentFixture<WhatIsKairos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsKairos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsKairos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
