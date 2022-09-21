import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/heroeinterfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Heroes[]> {
    return this.httpClient.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeId(id: string): Observable<Heroes> {
    return this.httpClient.get<Heroes>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroes[]> {
    return this.httpClient.get<Heroes[]>(
      `${this.baseUrl}/heroes?q=${termino}&_limit=6`
    );
  }

  agregarHeroe(heroe: Heroes): Observable<Heroes> {
    return this.httpClient.post<Heroes>(`${this.baseUrl}/heroes`, heroe);
  }

  actualizarHeroe(heroe: Heroes): Observable<Heroes> {
    return this.httpClient.put<Heroes>(
      `${this.baseUrl}/heroes/${heroe.id}`,
      heroe
    );
  }
  deleteHeroe(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
