import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-conferencedetails',
  imports: [],
  templateUrl: './conferencedetails.html',
  styleUrl: './conferencedetails.css',
})
export class Conferencedetails {
  conf = input<any>() 
  increment = output()
  inc(){
    this.increment.emit()
  }
}
