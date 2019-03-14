import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = {games:[], player:[]};

  constructor() {}
  
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

  getPlayerAsMap(){
    var playermap = {};
    for(var i:number = 0; i < this.data.player.length; i++){
      playermap[this.data.player[i].id] = this.data.player[i];
    }
    return playermap;
  }
}
