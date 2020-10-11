import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../_model/juego';
import { Marca } from '../_model/Marca';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private urlGetGames         = 'http://localhost:9524/matrixtienda/getGames';
  private urlgetGamexId       = 'http://localhost:9524/matrixtienda/getGamexId';
  private urlCreateUpdateGame = 'http://localhost:9524/matrixtienda/createUpdateGame';
  private urlGetMarcas        = 'http://localhost:9524/matrixtienda/getMarcas';

  constructor(private http: HttpClient) { }

  // Obtener Marcas
  getAllMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.urlGetMarcas);
  }

  // Obtener Todos los Juegos
  getAllJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(this.urlGetGames);
  }

  // Obtener Juego por Id
  getJuegoxId(idJuego: number): Observable<Juego>{
    return this.http.get<Juego>(this.urlgetGamexId + '/' + idJuego);
  }

  // Registrar/Actualizar Juego
  createUpdateGame(gameRequest: Juego): Observable<Juego>{
    return this.http.post<Juego>(this.urlCreateUpdateGame, gameRequest);
  }

}
