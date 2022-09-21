import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroes } from '../../interfaces/heroeinterfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroes;

  constructor(
    private active: ActivatedRoute,
    private heroeService: HeroesService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroeId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  regresar() {
    this.route.navigate(['/heroes/listado']);
  }
}
