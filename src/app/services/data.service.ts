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
}
