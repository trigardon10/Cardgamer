import {Component, ViewEncapsulation} from '@angular/core';
import { ButtonService } from '../services/button.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonbarComponent {

  $buttons: Observable<any[]>;
  $headline: Observable<String>;

  constructor(private buttonService: ButtonService) {
    this.$buttons = this.buttonService.getButtonObservable();
    this.$headline = this.buttonService.getHeadlineObservable();
  }

}
