import { BaseSkill } from "./skill.model";

export class Project {
  public company: string;
  public role: string;
  public responsibilities: string;
  public skills: BaseSkill[];
  public description: string;
  public startDate: string;
  public endDate: string;


  constructor(model?:{
    company?: string
    role?: string
    responsibilities?: string
    skills?: BaseSkill[]
    description?: string
    startDate?: string
    endDate?: string

  }) {
    this.company = model.company;
    this.role = model.role;
    this.responsibilities = model.responsibilities;
    this.skills = model.skills ? model.skills : [];
    this.description = model.description;
    this.startDate = model.startDate;
    this.endDate = model.endDate;
  }
}
