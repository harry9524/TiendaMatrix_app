import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../_model/Alquiler';
import { FilersAlquiler } from '../_model/FiltersAlquiler';
import { VentasService } from './ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  clienteFrecuente: string;
  alquileres: Alquiler[];
  alquiler: Alquiler = new Alquiler();
  filtersAlquiler: FilersAlquiler = FilersAlquiler();

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.getAllAlquileres();

  }

  getAllAlquileres(): void{
    this.ventasService.getAllAlquileres().subscribe(
      r => this.alquileres = r
    );
  }

  getVentasDay(): void {
    this.filtersAlquiler = new FilersAlquiler();
    this.filtersAlquiler.soloVentasDia = 'S';
    this.ventasService.getAlquileresxFiltro(this.filtersAlquiler).subscribe(
      r => this.alquileres = r
    );
  }

}
