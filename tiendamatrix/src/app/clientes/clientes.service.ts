import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../_model/Cliente';
import { GenericoResponse } from '../_model/GenricoResponse';
import { Alquiler } from '../_model/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlGetClients           = 'http://localhost:9524/matrixtienda/getClients';
  private urlGetClientxId         = 'http://localhost:9524/matrixtienda/getClientxId';
  private urlCreateUpdateClient   = 'http://localhost:9524/matrixtienda/createUpdateClient';
  private urlGetClientFrecuentyer = 'http://localhost:9524/matrixtienda/getClientFrecuentyer';
  private urlValidateClient       = 'http://localhost:9524/matrixtienda/validateClient';

  constructor(private http: HttpClient) { }

// Obtener Todos los Clientes
getAllClients(): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.urlGetClients);
}

getClientFrecuentyer(): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.urlGetClientFrecuentyer);
}

// Obtener Cliente por Id
getClientxId(idCliente: number): Observable<Cliente>{
  return this.http.get<Cliente>(this.urlGetClientxId + '/' + idCliente);
}

// Registrar/Actualizar Cliente
createUpdateClient(clientRequest: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.urlCreateUpdateClient, clientRequest);
}

// Validar Cliente
validateClient(documentoCliente: string): Observable<GenericoResponse>{
  return this.http.get<GenericoResponse>(this.urlValidateClient + '/' + documentoCliente);
}

}
