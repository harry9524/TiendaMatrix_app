import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/_model/Juego';
import { GameService } from '../game.service';
import { Marca } from '../../_model/Marca';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  juego: Juego = new Juego();
  marcas: Marca[];

  form: FormGroup;

  constructor(
    private gameService: GameService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
      this.buildForm();
    }

  ngOnInit(): void {
    this.cargar();

    this.gameService.getAllMarcas().subscribe(
      r => this.marcas = r
    );

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nombreJuego: ['', [Validators.required, Validators.maxLength(30)]],
      descripcionJuego: ['', [Validators.required, Validators.maxLength(30)]],
      precioJuego: ['', [Validators.required, Validators.maxLength(10)]],
      precioAlquilerJuego: ['', [Validators.required, Validators.maxLength(10)]],
      fechaLanzamientoJuego: ['', [Validators.required]],
      idMarca: ['', [Validators.required]]
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

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
