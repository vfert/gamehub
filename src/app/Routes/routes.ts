import { Routes } from "@angular/router";
import { GamesComponent } from "../games/games.component";
import { PlayersComponent } from "../players/players.component";
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component'
import { ProfileComponent } from "../profile/profile.component";

export const AppRoutes: Routes = [
    { path: 'games', component: GamesComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'profile', component: ProfileComponent, data: { user: '' }    },
    { path: '',      redirectTo: '',      pathMatch: 'full'    },
    { path: '**', component: PageNotFoundComponent }
  ];