import { Game } from './../../interfaces/game.interface';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

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
        console.log(resp)
      })
  }

}
