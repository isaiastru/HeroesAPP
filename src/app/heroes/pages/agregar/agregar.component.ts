import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroeinterfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../Components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 8px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroeId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardar() {
    if (this.heroe.superhero.trim().length == 0) {
      return;
    }

    if (this.heroe.id) {
      //Si el heroe tiene una id vamos a Actualizar
      this.heroeService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) => this.mensaje('El registro ha sido actualizado'));
    } else {
      //si el heroe no tiene un id vamos a Guardar
      this.heroeService.agregarHeroe(this.heroe).subscribe((resp) => {
        this.router.navigate(['/heroes/editar', resp.id]);
        this.mensaje('El registro ha sido guardado exitosamente');
      });
    }
  }

  borrar() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroeService.deleteHeroe(this.heroe.id!).subscribe((resp) => {
          this.router.navigate(['/heroes/listado']);
        });
      }
    });
  }

  mensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 2500,
    });
  }
}
