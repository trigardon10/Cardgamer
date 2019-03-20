import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = JSON.parse(localStorage.getItem('cardgamer_data')) || {games:[], player:[]};

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationStart)
      )
      .subscribe(_ => {
        return this.save();
      });
  }

  getData(){
    return this.data;
  }

  getGameById(id){
    for(var i = 0; i < this.data.games.length; i++){
      if(this.data.games[i].id == id){
        return this.data.games[i];
      }
    }
    return null;
  }

  getPlayerById(id){
    for(var i = 0; i < this.data.player.length; i++){
      if(this.data.player[i].id == id){
        return this.data.player[i];
      }
    }
    return null;
  }

  getPlayerAsMap(){
    var playermap = {};
    for(var i:number = 0; i < this.data.player.length; i++){
      playermap[this.data.player[i].id] = this.data.player[i];
    }
    return playermap;
  }

  save(){
    localStorage.setItem('cardgamer_data', JSON.stringify(this.data))
  }
}
