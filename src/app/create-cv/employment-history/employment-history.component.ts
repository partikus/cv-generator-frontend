import { Component Input } from '@angular/core';
import { Project } from "../../shared/models/project.model";

@Component({
  selector: 'employment-history',
  styleUrls: [ './employment-history.style.scss' ],
  templateUrl: './employment-history.template.html'
})
export class EmploymentHistory {
  @Input() projects: Project[];
  constructor() {

  }

  ngOnInit() {
    console.log('hello `EmploymentHistory` component');
  }
}
