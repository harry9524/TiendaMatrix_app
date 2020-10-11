import { Component, OnInit } from '@angular/core';
import { Cliente } from '../_model/cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {

    this.clienteService.getAllClientes().subscribe(
      r => this.clientes = r
    );

  }


}
