import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroeinterfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroe: Heroes[] = [];
  heroeSeleccionado!: Heroes | undefined;

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroeService
      .getSugerencias(this.termino.trim())
      .subscribe((heroe) => (this.heroe = heroe));
  }

  optionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;

    this.heroeService
      .getHeroeId(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
