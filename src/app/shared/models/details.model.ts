import { Skill } from "./skill.model";

export class Details {
  public experience: string;
  public education: string;
  public hobbies: string;

  constructor(model?:{
    experience?: string
    education?: string
    hobbies?: string

  }) {
    this.experience = model.experience;
    this.education = model.education;
    this.hobbies = model.hobbies;
  }
}
