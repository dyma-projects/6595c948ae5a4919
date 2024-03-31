import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.css',
})
export class Exercice1Component {
  title: String;
  inputText: String;
  color: String;
  constructor() {
    this.title = 'title exercice 1';
    this.inputText = 'text';
    this.color = 'green';
  }
  public clickButton(event: Event): void {
    console.log('hello');
  }
  /*
  public changeColor(color: String): void {
    this.color = color;
  }*/
}
