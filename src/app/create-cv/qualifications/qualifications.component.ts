import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'qualifications',
  styleUrls: [ './qualifications.style.scss' ],
  templateUrl: './qualifications.template.html'
})
export class Qualifications {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Qualifications` component');
  }
}
