import { Game } from './../interfaces/game.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor( private http: HttpClient) { }

  getNominados(): any {
    if (this.games.length > 0) {
      // Cuando ya tengo los juegos
      console.log('desde cache')
      return of(this.games);
    }
    console.log('desde internet')
    return this.http.get<Game[]>(`${environment.url}/api/goty`)
            .pipe(
              tap(
                games => this.games = games
              )
            );
  }

  votarJuego(id: string): any {
    return this.http.post(`${environment.url}/api/goty/${id}`, {});
  }
}
