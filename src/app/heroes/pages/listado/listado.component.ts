import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroeinterfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [],
})
export class ListadoComponent implements OnInit {
  heroes: Heroes[] = [];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((resp) => {
      this.heroes = resp;
    });
  }
}
