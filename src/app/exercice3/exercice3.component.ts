import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrl: './exercice3.component.css',
})
export class Exercice3Component {
  statut: boolean = true;
  Exercice3Component() {}

  public changeState(event: Event): void {
    console.log('before:' + this.statut);
    this.statut = !this.statut;
    console.log('after:' + this.statut);
  }
}
