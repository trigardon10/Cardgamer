import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = JSON.parse(localStorage.getItem('cardgamer_data')) || {games: [], player: []};

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationStart)
      )
      .subscribe(_ => {
        return this.save();
      });
  }

  getData() {
    return this.data;
  }

  getGameById(id) {
    for (let i = 0; i < this.data.games.length; i++) {
      if (this.data.games[i].id === id) {
        return this.data.games[i];
      }
    }
    return null;
  }

  getPlayerById(id) {
    for (let i = 0; i < this.data.player.length; i++) {
      if (this.data.player[i].id === id) {
        return this.data.player[i];
      }
    }
    return null;
  }

  getPlayerAsMap() {
    const playermap = {};
    for (let i = 0; i < this.data.player.length; i++) {
      playermap[this.data.player[i].id] = this.data.player[i];
    }
    return playermap;
  }

  save() {
    localStorage.setItem('cardgamer_data', JSON.stringify(this.data));
  }

  deleteGame(game) {
    const index = this.data.games.indexOf(game);
    if (index >= 0) {
      this.data.games.splice(index, 1);
    }
    this.save();
  }

  deleteRound(game, round) {
    const index = game.rounds.indexOf(round);
    if (index >= 0) {
      game.rounds.splice(index, 1);
    }
    this.save();
  }

  deletePlayer(player) {
    const index = this.data.player.indexOf(player);
    if (index >= 0) {
      this.data.player.splice(index, 1);
    }
    this.save();
  }
}
