import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {
  playermap = this.dataService.getPlayerAsMap();
  game = null;

  constructor(
    private dataService: DataService, private buttonService: ButtonService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.game = this.dataService.getGameById(parseInt(params['gameid'], 10));
          this.buttonService.setHeadline(this.game.name);
          this.buttonService.setButtons(this.getButtons());
          if (!this.game.rounds) {
            this.game.rounds = [];
          }
        }
      );
  }

  getButtons() {
    const game = this.game;
    const router = this.router;
    return [
      {name: '<', click: function() {history.back(); }},
      {name: 'Bearbeiten', click: function() {router.navigate(['./editgame', game.id]); }}
    ];
  }

  addRound(): void {
    const roundobj = {};
    // for(var i = 0; i < this.game.players.length; i++){
    //   roundobj[this.game.players[i]] = 0;
    // }
    this.game.rounds.push(roundobj);
    this.dataService.save();
  }

  roundClicked(index) {
    this.router.navigate(['../editround', this.game.id, index]);
  }

  getPoints(id): number {
    let points = 0;
    for (let i = 0; i < this.game.rounds.length; i++) {
      points += this.game.rounds[i][id] || 0;
    }
    return points;
  }
}
