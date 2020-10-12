import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../_model/Alquiler';
import { VentasService } from './ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  alquileres: Alquiler[];

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.ventasService.getAllAlquileres().subscribe(
      r => this.alquileres = r
    );

  }

}
