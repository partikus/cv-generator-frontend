import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'landing',
  styleUrls: [ './landing.style.scss' ],
  templateUrl: './landing.template.html'
})
export class Landing {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Landing` component');
  }
}
