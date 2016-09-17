import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'create-cv',
  styleUrls: [ './create-cv.style.scss' ],
  templateUrl: './create-cv.template.html'
})
export class CreateCv {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `CreateCv` component');
  }
}
