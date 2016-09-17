import { Component, Input } from '@angular/core';
import { Skill } from "../../shared/models/skill.model";

@Component({
  selector: 'qualifications',
  styleUrls: [ './qualifications.style.scss' ],
  templateUrl: './qualifications.template.html'
})
export class Qualifications {
  @Input() skills: Skill[];
  constructor() {

  }

  ngOnInit() {

  }
}
