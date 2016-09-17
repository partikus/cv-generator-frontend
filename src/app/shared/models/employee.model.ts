import { Skill } from "./skill.model";
import { Details } from "./details.model";
import { Language } from "./language.model";
import { Project } from "./project.model";

export class Employee {
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public details: Details;
  public skills: Skill[];
  public languages: Language[];
  public projects: Project[];


  constructor(model?:{
    firstName?: string
    lastName?: string
    username?: string
    email?: string
    details?: Details
    skills?: Skill[]
    languages?: Language[]
    projects?: Project[]
  }) {
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.username = model.username;
    this.email = model.email;
    this.details = model.details ? model.details : new Details({});
    this.skills = model.skills;
    this.languages = model.languages;
    this.projects = model.projects ? model.projects : [];
  }
}
