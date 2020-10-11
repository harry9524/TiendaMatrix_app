import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { MarcasComponent } from './marcas/marcas.component';
import { GamesComponent } from './games/games.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './games/create-game/create-game.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AdminclientesComponent } from './clientes/adminclientes/adminclientes.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'roles', component: RolesComponent },
  {path: 'marcas', component: MarcasComponent },
  {path: 'games', component: GamesComponent },
  {path: 'createGame', component: CreateGameComponent },
  {path: 'createGame/:idJuego', component: CreateGameComponent },
  {path: 'clientes', component: ClientesComponent },
  {path: 'adminclientes', component: AdminclientesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    MarcasComponent,
    GamesComponent,
    MainComponent,
    CreateGameComponent,
    ClientesComponent,
    AdminclientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
