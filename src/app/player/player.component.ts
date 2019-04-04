import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {
  data = this.dataService.getData();

  constructor(private dataService: DataService, private buttonService: ButtonService, private router: Router) {
    this.buttonService.setHeadline('Spielerliste');
    this.buttonService.setButtons(this.getButtons());
  }

  getButtons() {
    const router = this.router;
    const player = this.data.player;
    const addPlayer = this.addPlayer;
    return [
      {name: '<', click: function() {history.back(); }},
      {name: '+', click: function() {addPlayer(player); }}
    ];
  }

  addPlayer(player): void {
    player.unshift({
      id: new Date().getTime(),
      name: 'Neuer Spieler'
    });
  }

  playerClicked(player) {
    this.router.navigate(['../editplayer', player.id]);
  }
}
