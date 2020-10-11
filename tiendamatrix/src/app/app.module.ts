import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { MarcasComponent } from './marcas/marcas.component';
import { GamesComponent } from './games/games.component';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { CreateGameComponent } from './games/create-game/create-game.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'roles', component: RolesComponent },
  {path: 'marcas', component: MarcasComponent },
  {path: 'games', component: GamesComponent },
  {path: 'createGame', component: CreateGameComponent },
  {path: 'createGame/:idJuego', component: CreateGameComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    MarcasComponent,
    GamesComponent,
    MainComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
