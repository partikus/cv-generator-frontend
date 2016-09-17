import { Component, Input } from '@angular/core';
import { Employee } from "../../shared/models/employee.model";

@Component({
  selector: 'basic-information',
  styleUrls: [ './basic-information.style.scss' ],
  templateUrl: './basic-information.template.html'
})
export class BasicInformation {
  @Input() employee: Employee;
  constructor() {
  }

  ngOnInit() {
    console.log('hello `BasicInformation` component');
  }
}
