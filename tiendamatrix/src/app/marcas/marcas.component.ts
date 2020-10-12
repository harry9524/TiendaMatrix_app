import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { GameService } from '../games/game.service';
import { Marca } from '../_model/Marca';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marca: Marca = new Marca();
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
        nombremarca: ['', [Validators.required, Validators.maxLength(20)]],
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
  }

  createUpdateMarca(): void{
    console.log(this.marca);
    if(this.form.valid){
      this.gameService.createUpdateMarca(this.marca).subscribe(
        res => this.router.navigate(['createGame'])
      );
    }
  }

}
