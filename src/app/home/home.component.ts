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
  playermap = this.dataService.getPlayerAsMap();

  constructor(private dataService:DataService, private router: Router) {
  
  }

  newGame():void{
    this.data.games.unshift({
      id:new Date().getTime(),
      name:"Neues Spiel",
      players:[],
      date:new Date()
    });
    this.dataService.save();
  }

  gameClicked(game):void{
    this.router.navigate(["../game", game.id])
  }

  formatDate(date):String{
    date = new Date(date);
    return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
  }
}
