import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/_model/juego';
import { GameService } from '../game.service';
import { Marca } from '../../_model/Marca';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  juego: Juego = new Juego();
  titulo = 'Resgitro de Juegos';
  marcas: Marca[];

  form: FormGroup;

  constructor(
    private gameService: GameService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();

    this.gameService.getAllMarcas().subscribe(
      r => this.marcas = r
    );

  }

 private buildForm(){
   this.form = new FormGroup({
     nombre: new FormControl('',[Validators.required]),
     descripcion: new FormControl('',[Validators.required]),
     precioJuego: new FormControl('',[Validators.required]),
     precioAlquiler: new FormControl('',[Validators.required])
   });

   this.form.valueChanges
   .pipe(
     debounceTime(500)
   )
   .subscribe(value => {
     console.log(value);
   });
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

  createUpdateGame(): void{
    console.log(this.juego);
    this.gameService.createUpdateGame(this.juego).subscribe(
      res => this.router.navigate(['games'])
    );
  }

  atras(): void{
    this.router.navigate(['games']);
  }

}
