import { Component, OnInit } from '@angular/core';
import { Juego } from '../_model/Juego';
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
    this.showAllGames();
  }

  getGameTop(): void {
    this.gameService.getGameTop().subscribe(
      r => this.games = r
    );
  }

  showAllGames(): void {
    this.gameService.getAllJuegos().subscribe(
      r => this.games = r
    );
  }

}
