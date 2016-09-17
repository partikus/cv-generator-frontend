class BaseSkill {
  public name: string;
  public description: string;
  public url: string;

  constructor(model?:{
    name?: string
    description?: string
    url?: string
  }) {
    this.name = model.name;
    this.description = model.description;
    this.url = model.url;
  }
}


export class Skill {
  public skill: BaseSkill[];
  public startDate: string;
  public lastUsage: string;
  public level: number;

  constructor(model?:{
    skill?: BaseSkill[]
    startDate?: string
    lastUsage?: string
    level?: number
  }) {
    this.skill = model.skill;
    this.startDate = model.startDate;
    this.lastUsage = model.lastUsage;
    this.level = model.level;
  }
}
