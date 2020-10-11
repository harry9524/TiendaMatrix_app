import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/_model/juego';
import { GameService } from '../game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  juego: Juego = new Juego();
  titulo = 'Resgitro de Juegos';

  constructor(private gameService: GameService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let idJuego = e['idJuego'];
        if(idJuego){
          this.gameService.getJuegoxId(idJuego).subscribe(
            es => this.juego = es
          );
        }
      }
    )
  }

  createGame(): void{
    console.log('createGame ' + this.juego);
    this.gameService.createUpdateGame(this.juego).subscribe(
      res => this.router.navigate(['games'])
    );
  }

  updateGame(): void{
    console.log('updateGame ' + this.juego);
    this.gameService.createUpdateGame(this.juego).subscribe(
      res => this.router.navigate(['games'])
    );
  }

}
