import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroeinterfaces';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [
    `
      mat-card {
        margin: 15px;
      }
    `,
  ],
})
export class HeroetarjetaComponent implements OnInit {
  @Input() heroe!: Heroes;

  constructor() {}

  ngOnInit(): void {}
}
