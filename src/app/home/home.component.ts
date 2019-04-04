import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  data = this.dataService.getData();
  playermap = this.dataService.getPlayerAsMap();

  constructor(private dataService: DataService, private buttonService: ButtonService, private router: Router) {
    this.buttonService.setButtons(this.getButtons());
    this.buttonService.setHeadline('Cardgamer');
  }

  getButtons() {
    const games = this.data.games;
    const router = this.router;
    const newGame = this.newGame;
    return [
      {name: '+', click: function() {newGame(games); }},
      {name: 'Spieler', click: function() {router.navigate(['./players']); }}
    ];
  }

  newGame(games): void {
    games.unshift({
      id: new Date().getTime(),
      name: 'Neues Spiel',
      players: [],
      date: new Date()
    });
  }

  gameClicked(game): void {
    this.router.navigate(['../game', game.id]);
  }

  formatDate(date): String {
    date = new Date(date);
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  }
}
