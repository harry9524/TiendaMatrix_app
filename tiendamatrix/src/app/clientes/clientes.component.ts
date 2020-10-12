import { Component, OnInit } from '@angular/core';
import { Cliente } from '../_model/Cliente';
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
    this.showAllClient();
  }


  getClientFrecuente(): void{
    this.clienteService.getClientFrecuentyer().subscribe(
      r => this.clientes = r
    );
  }

  showAllClient(): void{
    this.clienteService.getAllClients().subscribe(
      r => this.clientes = r
    );
  }


}
