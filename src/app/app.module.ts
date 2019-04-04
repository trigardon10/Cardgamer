import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';
import { EditGameComponent } from './editgame/editgame.component';
import { EditPlayerComponent } from './editplayer/editplayer.component';
import { EditRoundComponent } from './editround/editround.component';
import { ButtonbarComponent } from './buttonbar/buttonbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    GameComponent,
    EditGameComponent,
    EditPlayerComponent,
    EditRoundComponent,
    ButtonbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
