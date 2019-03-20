import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';
import { EditGameComponent } from './editgame/editgame.component';
import { EditPlayerComponent } from './editplayer/editplayer.component';
import { EditRoundComponent } from './editround/editround.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayerComponent
  },
  {
    path: 'editplayer/:playerid',
    component: EditPlayerComponent
  },
  {
    path: 'game/:gameid',
    component: GameComponent
  },
  {
    path: 'editgame/:gameid',
    component: EditGameComponent
  },
  {
    path: 'editround/:gameid/:roundindex',
    component: EditRoundComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
