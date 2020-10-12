import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../_model/Alquiler';
import { FilersAlquiler } from '../_model/FiltersAlquiler';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private urlGetAlquileres        = 'http://localhost:9524/matrixtienda/getAlquileres';
  private urlCreateUpdateAlquiler = 'http://localhost:9524/matrixtienda/createUpdateAlquiler';
  private urlGetValueAlquiler     = 'http://localhost:9524/matrixtienda/getValueAlquiler';
  private urlGetAlquileresxFiltro = 'http://localhost:9524/matrixtienda/getAlquileresxFiltro';

  constructor(private http: HttpClient) { }

  // Obtener Alquileres por Filtro
  getAlquileresxFiltro(filters: FilersAlquiler): Observable<Alquiler[]> {
    return this.http.post<Alquiler[]>(this.urlGetAlquileresxFiltro, filters);
  }

  // Obtener Todos los Alquileres
  getAllAlquileres(): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(this.urlGetAlquileres);
  }

  // Registrar/Actualizar Alquiler
  createUpdateAlquiler(alquilerRequest: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler>(this.urlCreateUpdateAlquiler, alquilerRequest);
  }

  // Obtener Valor
  getValueAlquiler(alquilerRequest: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler>(this.urlGetValueAlquiler, alquilerRequest);
  }

}
