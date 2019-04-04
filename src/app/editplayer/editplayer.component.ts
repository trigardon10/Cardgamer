import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditPlayerComponent implements OnInit {
  player = null;

  constructor(private dataService: DataService, private buttonService: ButtonService, private route: ActivatedRoute) {
    this.buttonService.setHeadline('Spiel Bearbeiten');
    this.buttonService.setButtons(this.getButtons());
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.player = this.dataService.getPlayerById(parseInt(params['playerid'], 10));
        }
      );
  }

  getButtons() {
    return [
      {name: '<', click: function() {history.back(); }}
    ];
  }

  delete() {
    this.dataService.deletePlayer(this.player);
    history.back();
  }
}
