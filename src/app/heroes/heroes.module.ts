import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroehomeComponent } from './pages/heroehome/heroehome.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HereosRoutingModule } from './hereos-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroetarjetaComponent } from './Components/heroetarjeta/heroetarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './Components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroehomeComponent,
    ListadoComponent,
    HeroetarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HereosRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
