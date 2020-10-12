import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../_model/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private urlGetAlquileres = 'http://localhost:9524/matrixtienda/getAlquileres';
  private urlCreateUpdateAlquiler = 'http://localhost:9524/matrixtienda/createUpdateAlquiler';
  private urlGetValueAlquiler = 'http://localhost:9524/matrixtienda/getValueAlquiler';

  constructor(private http: HttpClient) { }

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
