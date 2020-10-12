import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { GameService } from 'src/app/games/game.service';
import { Juego } from 'src/app/_model/Juego';
import { Alquiler } from '../../_model/Alquiler';
import { Plataforma } from '../../_model/Plataforma';
import { VentasService } from '../ventas.service';
import { ClientesService } from '../../clientes/clientes.service';
import { GenericoResponse } from 'src/app/_model/GenricoResponse';

@Component({
  selector: 'app-alquilarjuego',
  templateUrl: './alquilarjuego.component.html',
  styleUrls: ['./alquilarjuego.component.css']
})
export class AlquilarjuegoComponent implements OnInit {

  alquilar: Alquiler = new Alquiler();
  listaGames: Juego[];
  listaPlataformas: Plataforma[];
  mensajeControlado: string;
  genericoResponse: GenericoResponse = new GenericoResponse();
  form: FormGroup;

  constructor(
    private ventasService: VentasService,
    private gamesService: GameService,
    private clientesService: ClientesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit(): void {

    this.gamesService.getAllJuegos().subscribe(
      r => this.listaGames = r
    );

    this.genericoResponse = new GenericoResponse();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      idJuego: ['', [Validators.required]],
      idPlataforma: ['', [Validators.required]],
      documentoCliente: ['', [Validators.required, Validators.maxLength(30)]],
      fechaFinPrestamo: ['', [Validators.required]],
      valorPagado: ['', [Validators.required]]
    });

    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        console.log(value);
      });
  }

  createUpdateAlquiler(): void {
    console.log(this.alquilar);
    this.ventasService.createUpdateAlquiler(this.alquilar).subscribe(
      res => this.router.navigate(['ventas'])
    );
  }

  getPlataformaxGame(): void {
    this.gamesService.getPlataformasxGame(this.alquilar.idJuego).subscribe(
      r => this.listaPlataformas = r
    );
  }

  calculateValorPagar(): void {

    if (!this.genericoResponse.exitoso) {
      this.mensajeControlado = 'DEBE VALIDAR PRIMERO EL CLIENTE';
      return;
    } else {
      this.mensajeControlado = '';
    }

    this.ventasService.getValueAlquiler(this.alquilar).subscribe(
      r => this.alquilar = r
    );

  }

  validateClient(): void {

    this.clientesService.validateClient(this.alquilar.documentoCliente).subscribe(
      r => this.genericoResponse = r
    );

    console.log('Exitoso ' + this.genericoResponse.exitoso);

    if (!this.genericoResponse.exitoso) {
      this.mensajeControlado = this.genericoResponse.mensajeError;
    } else {
      this.mensajeControlado = '';
    }
  }


}
