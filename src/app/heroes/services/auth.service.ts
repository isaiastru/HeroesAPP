import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interfaces/authinterfaces';
import { map, Observable, of, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private httpClient: HttpClient) {}

  verificaAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.httpClient.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }

  login(): Observable<Auth> {
    return this.httpClient.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((resp) => localStorage.setItem('token', resp.id)),
      tap((resp) => (this._auth = resp))
    );
  }
}
