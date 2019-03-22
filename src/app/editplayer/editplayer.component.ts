import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditPlayerComponent implements OnInit {
  player = null;

  constructor(private dataService:DataService, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(
        params => {
          this.player = this.dataService.getPlayerById(parseInt(params['playerid']));
        }
      );
  };

  delete(){
    this.dataService.deletePlayer(this.player);
    history.back();
  }
}
