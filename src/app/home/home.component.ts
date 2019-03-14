import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  data = this.dataService.getData();
  index:number = 0;

  constructor(private dataService:DataService, private router: Router) {
  
  }

  newGame():void{
    this.data.games.push({
      id:this.index,
      name:"Neues Spiel",
      players:[],
      date:new Date()
    });
    this.index++;
  }

  gameClicked(game):void{
    this.router.navigate(["../game", game.id])
  }
}
