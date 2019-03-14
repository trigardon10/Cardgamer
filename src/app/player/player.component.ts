import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {
  data = this.dataService.getData();
  index:number = 0;

  constructor(private dataService:DataService) {
  
  }

  addPlayer():void{
    this.data.player.push({
      id:this.index++,
      name:"Neuer Spieler"
    })
  }
}
