import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../_model/Alquiler';
import { VentasService } from './ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  clienteFrecuente: string;
  alquileres: Alquiler[];

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.ventasService.getAllAlquileres().subscribe(
      r => this.alquileres = r
    );

  }

  getClientFrecuente(){
this.clienteFrecuente = 'ES HARRY';
  }

}
