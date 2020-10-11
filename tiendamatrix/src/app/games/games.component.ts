import { Component, OnInit } from '@angular/core';
import { Juego } from '../_model/juego';
import { GameService } from './game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Juego[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getAll().subscribe(
      r => this.games = r
    );

  }

}
