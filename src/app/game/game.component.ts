import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {
  playermap = this.dataService.getPlayerAsMap();
  index:number = 0;
  game = null;

  constructor(private dataService:DataService, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.game = this.dataService.getGameById(params['gameid']);
          if(!this.game.rounds){
            this.game.rounds = [];
          }
        }
      );
    };

  addRound():void{
    this.game.rounds.push({

    })
  }
}
