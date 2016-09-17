import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'basic-information',
  styleUrls: [ './basic-information.style.scss' ],
  templateUrl: './basic-information.template.html'
})
export class BasicInformation {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `BasicInformation` component');
  }
}
