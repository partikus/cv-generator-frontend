import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'navbar',
  styleUrls: [ './navbar.style.scss' ],
  templateUrl: './navbar.template.html'
})
export class Navbar {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Navbar` component');
  }
}
