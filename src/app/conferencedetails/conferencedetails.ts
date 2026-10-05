import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-conferencedetails',
  imports: [],
  templateUrl: './conferencedetails.html',
  styleUrl: './conferencedetails.css'
})
export class Conferencedetails {
  conf = input.required<{ name: string; date: string; location: string }>();
  increment = output<void>();

  inc() {
    this.increment.emit();
  }
}
