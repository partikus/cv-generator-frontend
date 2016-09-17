import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'employment-history',
  styleUrls: [ './employment-history.style.scss' ],
  templateUrl: './employment-history.template.html'
})
export class EmploymentHistory {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `EmploymentHistory` component');
  }
}
