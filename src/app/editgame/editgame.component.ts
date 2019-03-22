import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditGameComponent implements OnInit {
  player = this.dataService.getData().player;
  game = null;

  constructor(private dataService:DataService, private route: ActivatedRoute, private router: Router) {
  
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.game = this.dataService.getGameById(parseInt(params['gameid']));
        }
      );
    };

  togglePlayer(player){
    var index = this.game.players.indexOf(player.id);
    if(index >= 0){
      this.game.players.splice(index, 1);
    }
    else{
      this.game.players.push(player.id);
    }
    this.dataService.save();
  }

  delete(){
    this.dataService.deleteGame(this.game);
    this.router.navigate(["/"]);
  }
}
