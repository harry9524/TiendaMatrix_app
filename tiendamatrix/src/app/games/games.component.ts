import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../_model/Juego';
import { GameService } from './game.service';
import { Rol } from '../_model/Rol';
import { Persona } from '../_model/Persona';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Juego[];
  listaRoles: Rol[];
  listaPersonas: Persona[];
  persona: Persona = new Persona();
  form: FormGroup;

  constructor(
    private gameService: GameService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
      this.buildForm();
    }
    private buildForm(){
      this.form = this.formBuilder.group({
        idRol: ['', [Validators.maxLength(2)]],
        idPersona: ['', [Validators.maxLength(2)]],
        idMarca: ['', [Validators.maxLength(2)]]
      });

      this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        console.log(value);
      });
    }
  ngOnInit(): void {
    this.showAllGames();
    this.getAllPersonas();
    this.getAllRoles();
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

  getAllRoles(): void {
    this.gameService.getAllRoles().subscribe(
      r => this.listaRoles = r
    );
  }

  getAllPersonas(): void {
    this.gameService.getAllPersonas().subscribe(
      r => this.listaPersonas = r
    );
  }

  getGamexRolyPersona(): void {
    this.gameService.getGamexRolyPersona(this.persona).subscribe(
      r => this.games = r
    );
  }

}
