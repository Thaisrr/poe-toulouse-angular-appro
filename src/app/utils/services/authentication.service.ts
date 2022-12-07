import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {TokenResponse, UserAuth} from "../types/UserAuth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api_url = 'https://reqres.in/api/login'

  constructor(private http: HttpClient) { }

  login(user_info: UserAuth): Observable<boolean> {
    return this.http.post<TokenResponse>(this.api_url, user_info).pipe(
      tap(res => console.log('Tap : affichage du token', res.token)),
      tap(res => localStorage.setItem('token', res.token)), // Agir sur la donnée avant le subscribe
      map(() => true), // Modifier le retour de l'observable ( doit retourner quelque chose )
      catchError(err => {
        console.warn(err?.error?.error || 'Nope, impossible de se connecter')
        // Ici 2 possibilités :
        // 1. renvoie une nouvelle erreur
        //throw new Error('Nouveau message d\'erreur');
        // 2. on renvoie un nouvel Observable
        return of(false); // Retourne un Observable<boolean>
        // Côté composant, il n'y aura jamais d'erreur
      })
    )
  }

  getToken() {
    return localStorage.getItem('token'); // retourne le token ( string ) ou null
  }

  isLogged() {
    return !!localStorage.getItem('token'); // retourne true si il y a un token enregistré
  }

  logout() {
    // localStorage.clear(); // Supprime TOUT ce qu'il y a dans le local storage de cette application
    localStorage.removeItem('token');
  }

}
