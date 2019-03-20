import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private dataService:DataService, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.game = this.dataService.getGameById(parseInt(params['gameid']));
          this.round = this.game.rounds[params['roundindex']]
        }
      );
    };
}
