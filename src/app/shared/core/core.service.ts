import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Employee } from "../models/employee.model";



export interface ICoreService {
  getEmployee(recipeId: number) : Observable<Employee>;
}

@Injectable()
export class CoreService implements ICoreService {
  constructor(private http: Http) {}

  getEmployee(recipeId: number) {
    return this.http.get('http://www.mocky.io/v2/57dd80511100004e01a2def4')
      .map(res => new Employee(res.json()));
  }
}
