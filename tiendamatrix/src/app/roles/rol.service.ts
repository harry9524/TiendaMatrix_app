import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../_model/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url: string = 'http://localhost:9524/matrixtienda/getRoles';

  constructor(private http: HttpClient) { }

  // Obtener Roles
  getAll(): Observable<Rol[]>{
    return this.http.get<Rol[]>(this.url);
  }

  // Crear Rol
  create(rolRequest: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.url, rolRequest);
  }

  // Obetner un Rol
  get(id: number): Observable<Rol>{
    return this.http.get<Rol>(this.url + '/' + id);
  }

  // Actualizar el Rol
  update(rolRequest: Rol): Observable<Rol>{
    return this.http.put<Rol>(this.url, rolRequest);
  }

  // Eliminar un Rol
  delete(id: number): Observable<Rol>{
    return this.http.delete<Rol>(this.url + '/' + id);
  }

}
