import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-editround',
  templateUrl: './editround.component.html',
  styleUrls: ['./editround.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditRoundComponent implements OnInit {
  player = this.dataService.getData().player;
  game = null;
  round = null;

  constructor(private dataService: DataService, private buttonService: ButtonService, private route: ActivatedRoute) {
    this.buttonService.setHeadline('Runde Bearbeiten');
    this.buttonService.setButtons(this.getButtons());
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.game = this.dataService.getGameById(parseInt(params['gameid'], 10));
          this.round = this.game.rounds[params['roundindex']];
        }
      );
  }

  getButtons() {
    return [
      {name: '<', click: function() {history.back(); }}
    ];
  }

  delete() {
    this.dataService.deleteRound(this.game, this.round);
    history.back();
  }
}
