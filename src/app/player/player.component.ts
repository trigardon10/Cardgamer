import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {
  data = this.dataService.getData();

  constructor(private dataService:DataService, private router: Router) {
  
  }

  addPlayer():void{
    this.data.player.unshift({
      id:new Date().getTime(),
      name:"Neuer Spieler"
    })
    this.dataService.save();
  }

  playerClicked(player){
    this.router.navigate(["../editplayer", player.id])
  }
}
