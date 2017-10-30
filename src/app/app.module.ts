import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './profile/profile.component';
import { RankingComponent } from './ranking/ranking.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayerComponent } from './players/player/player.component';
import { GameComponent } from './games/game/game.component';
import { AppRoutes } from './Routes/routes'

const appRoutes: Routes = AppRoutes;

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    PlayersComponent,
    ProfileComponent,
    RankingComponent,
    PlayerComponent,
    GameComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
