import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conferencedetails } from './conferencedetails';

describe('Conferencedetails', () => {
  let component: Conferencedetails;
  let fixture: ComponentFixture<Conferencedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conferencedetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Conferencedetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
