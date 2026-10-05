import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  nom = 'ons';
  imgurl = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png';
  nom1 = 'amen';
  students = ['Ahmed', 'Ali', 'Amine', 'Aymen', 'Anis'];
  students2 = [
    { name: 'Ahmed', age: 20 },
    { name: 'Ali', age: 21 },
    { name: 'Amine', age: 22 },
    { name: 'Aymen', age: 23 },
    { name: 'Anis', age: 24 }
  ];
  count = 0;
  counts = signal(0);

  bonjour() {
    alert('Bonjour ' + this.nom1);
  }

  incrementsimple() {
    this.count++;
  }

  increment() {
    this.counts.update((value) => value + 1);
  }
}
