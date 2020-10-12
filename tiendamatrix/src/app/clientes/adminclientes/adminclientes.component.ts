import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../_model/Cliente';
import { ClientesService } from '../clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TipoDocumento } from '../../_model/TipoDocumento';


@Component({
  selector: 'app-adminclientes',
  templateUrl: './adminclientes.component.html',
  styleUrls: ['./adminclientes.component.css']
})
export class AdminclientesComponent implements OnInit {

  tiposDocumentos: TipoDocumento[] = [];
  client: Cliente = new Cliente();
  form: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
      this.buildForm();
     }

  ngOnInit(): void {

    this.tiposDocumentos.push(new TipoDocumento('CC', 'CEDULA DE CIUDADANIA'));
    this.tiposDocumentos.push(new TipoDocumento('TI', 'TARJETA DE IDENTIDAD'));
    this.tiposDocumentos.push(new TipoDocumento('CEX', 'CEDULA EXTRANJERA'));
    this.tiposDocumentos.push(new TipoDocumento('PA', 'PASAPORTE'));

    this.cargar();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      documentocliente: ['', [Validators.required, Validators.maxLength(10)]],
      tipoDocumentoCliente: ['', [Validators.required, Validators.maxLength(10)]],
      primerNombreCliente: ['', [Validators.required, Validators.maxLength(50)]],
      segundoNombreCliente: ['', [Validators.maxLength(50)]],
      primerApellidoCliente: ['', [Validators.required, Validators.maxLength(50)]],
      segundoApellidoCliente: ['', [Validators.maxLength(50)]],
      celularCliente: ['', [Validators.required, Validators.maxLength(10)]],
      telefonoCliente: ['', [Validators.maxLength(10)]],
      emailCliente: ['', [Validators.required, Validators.email, Validators.maxLength(20)]],
      edadCliente: ['', [Validators.required, Validators.maxLength(3)]]
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
        let idCliente = e['idCliente'];
        if(idCliente){
          this.clientesService.getClientxId(idCliente).subscribe(
            es => this.client = es
          );
        }
      }
    )
  }

  createUpdateClient(): void{
    console.log(this.client);
    if(this.form.valid){
      this.clientesService.createUpdateClient(this.client).subscribe(
        res => this.router.navigate(['clientes'])
      );
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
