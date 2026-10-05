import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Conferencedetails } from './conferencedetails';

describe('Conferencedetails', () => {
  let component: Conferencedetails;
  let fixture: ComponentFixture<Conferencedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conferencedetails]
    }).compileComponents();

    fixture = TestBed.createComponent(Conferencedetails);
    fixture.componentRef.setInput('conf', {
      name: 'Conference Test',
      date: '2026-10-06',
      location: 'Tunis'
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
