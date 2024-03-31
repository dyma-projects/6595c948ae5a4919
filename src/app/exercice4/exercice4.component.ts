import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrl: './exercice4.component.css',
})
export class Exercice4Component {
  public texts: Array<{ chiffre: String }> = [
    { chiffre: 'un' },
    { chiffre: 'deux' },
    { chiffre: 'trois' },
  ];
}
