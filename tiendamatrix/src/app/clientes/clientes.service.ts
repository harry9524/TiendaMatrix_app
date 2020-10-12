import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../_model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlGetClients         = 'http://localhost:9524/matrixtienda/getClients';
  private urlGetClientxId       = 'http://localhost:9524/matrixtienda/getClientxId';
  private urlCreateUpdateClient = 'http://localhost:9524/matrixtienda/createUpdateClient';

  constructor(private http: HttpClient) { }

// Obtener Todos los Juegos
getAllClients(): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.urlGetClients);
}

// Obtener Cliente por Id
getClientxId(idCliente: number): Observable<Cliente>{
  return this.http.get<Cliente>(this.urlGetClientxId + '/' + idCliente);
}

// Registrar/Actualizar Cliente
createUpdateClient(clientRequest: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.urlCreateUpdateClient, clientRequest);
}

}
