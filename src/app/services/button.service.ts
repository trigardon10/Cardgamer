import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  buttonSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  headlineSubject: BehaviorSubject<String> = new BehaviorSubject('');

  constructor() {
  }

  getButtonObservable(): Observable<any[]> {
    return this.buttonSubject.asObservable();
  }

  setButtons(arr: any[]): void {
    this.buttonSubject.next(arr);
  }

  getHeadlineObservable(): Observable<String> {
    return this.headlineSubject.asObservable();
  }

  setHeadline(str: String): void {
    this.headlineSubject.next(str);
  }
}
