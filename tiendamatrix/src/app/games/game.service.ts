import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../_model/Juego';
import { Marca } from '../_model/Marca';
import { Plataforma } from '../_model/Plataforma';
import { Rol } from '../_model/Rol';
import { Persona } from '../_model/Persona';
import { FiltersJuego } from '../_model/FiltersJuego';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private urlGetGamexId = 'http://localhost:9524/matrixtienda/getGamexId';
  private urlGetGamexFilters = 'http://localhost:9524/matrixtienda/getGamexFilters';
  private urlCreateUpdateGame = 'http://localhost:9524/matrixtienda/createUpdateGame';
  private urlGetMarcas = 'http://localhost:9524/matrixtienda/getMarcas';
  private urlGetRoles = 'http://localhost:9524/matrixtienda/getRoles';
  private urlGetPersonas = 'http://localhost:9524/matrixtienda/getPersonas';
  private urlCreateUpdateMarca = 'http://localhost:9524/matrixtienda/createUpdateMarca';
  private urlGetGameTop = 'http://localhost:9524/matrixtienda/getGameTop';
  private urlGetPlataformasxGame = 'http://localhost:9524/matrixtienda/getPlataformasxGame';

  constructor(private http: HttpClient) { }

  // Obtener Personas
  getAllPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlGetPersonas);
  }

 // Obtener Marcas
 getAllMarcas(): Observable<Marca[]> {
  return this.http.get<Marca[]>(this.urlGetMarcas);
}

// Obtener Roles
getAllRoles(): Observable<Rol[]> {
  return this.http.get<Rol[]>(this.urlGetRoles);
}

 // Obtener Juego Más Rentado
 getGameTop(): Observable<Juego[]> {
  return this.http.get<Juego[]>(this.urlGetGameTop);
}

  getGamexFilters(filterRequest: FiltersJuego): Observable<Juego[]> {
    return this.http.post<Juego[]>(this.urlGetGamexFilters, filterRequest);
  }

 // Obtener Todos los Juegos
 getAllJuegos(): Observable<Juego[]> {
  return this.http.post<Juego[]>(this.urlGetGamexFilters, new FiltersJuego());
}

  // Obtener Juego por Id
  getJuegoxId(idJuego: number): Observable<Juego> {
    return this.http.get<Juego>(this.urlGetGamexId + '/' + idJuego);
  }

  // Obtener Plataformas x Juego
  getPlataformasxGame(idJuego: number): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.urlGetPlataformasxGame + '/' + idJuego);
  }

  // Registrar/Actualizar Juego
  createUpdateGame(gameRequest: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.urlCreateUpdateGame, gameRequest);
  }

  // Registrar/Actualizar Marca
  createUpdateMarca(marcaRequest: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.urlCreateUpdateMarca, marcaRequest);
  }

}
