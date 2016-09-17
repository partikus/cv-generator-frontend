import { Component } from '@angular/core';
import { Employee } from "../shared/models/employee.model";
import { Details } from "../shared/models/details.model";
import {Skill} from "../shared/models/skill.model";
import {CoreService} from "../shared/core/core.service";

@Component({
  selector: 'create-cv',
  styleUrls: [ './create-cv.style.scss' ],
  templateUrl: './create-cv.template.html'
})
export class CreateCv {
  employee: Employee = new Employee({});
  constructor(public coreService: CoreService) {

  }

  ngOnInit() {
      this.coreService.getEmployee(2)
        .subscribe(
          employee => {
            this.employee = employee;
          }
        );
  }
}
