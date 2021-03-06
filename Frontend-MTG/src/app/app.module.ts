import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameCreationComponent } from './game-creation/game-creation.component';
import { PlayerCreationComponent } from './player-creation/player-creation.component';
import { WaitingLobbyComponent } from './waiting-lobby/waiting-lobby.component';
import { GameStateComponent } from './game-state/game-state.component';
import { DataService } from './data.service';
import { UserTypeComponent } from './user-type/user-type.component';
import { LoginComponent } from './login/login.component';
import { GuestCreationComponent } from './guest-creation/guest-creation.component';
/**
 * The routes in the app
 */
const appRoutes: Routes = [
  { path: 'GameCreation', component: GameCreationComponent },
  { path: 'PlayerCreation', component: PlayerCreationComponent },
  { path: 'WaitingLobby', component: WaitingLobbyComponent },
  { path: 'GameState', component: GameStateComponent },
  { path: 'UserType', component: UserTypeComponent}, // TODO: Perhaps find a better path?
  { path: 'GuestLogin', component: GuestCreationComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', component: HomeComponent } // TODO: Add a default with a 404 page
];

@NgModule({
  declarations: [ // The components in the app
    AppComponent,
    HomeComponent,
    GameCreationComponent,
    PlayerCreationComponent,
    WaitingLobbyComponent,
    GameStateComponent,
    UserTypeComponent,
    LoginComponent,
    GuestCreationComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}) // Enable tracing for debug
  ],
  providers: [DataService,
    {provide: ErrorHandler, useClass: AppComponent}], // Says to use AppComponent to handle errors in the app
  bootstrap: [AppComponent]
})
export class AppModule { }
