import { Game } from './../../interfaces/game.interface';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor( private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe( resp => {
        this.games = resp;
        // console.log(resp)
      })
  }

  votar(juegos: Game): any {
    console.log(juegos);
    this.gameService.votarJuego(juegos.id)
      .subscribe( (resp: {ok: boolean, mensaje: string}) => {
        if ( resp.ok ) {
          Swal.fire({
            title: 'Gracias!',
            text: resp.mensaje,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Opps!',
            text: resp.mensaje,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      })
  }

}
