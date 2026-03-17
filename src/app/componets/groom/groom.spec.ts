import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groom } from './groom';

describe('Groom', () => {
  let component: Groom;
  let fixture: ComponentFixture<Groom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Groom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Groom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
