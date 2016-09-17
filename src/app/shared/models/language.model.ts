export class Language {
  public name: string;
  public iso3: string;
  public level: number;

  constructor(model?:{
    name?: string
    iso3?: string
    level?: number
  }) {
    this.name = model.name;
    this.iso3 = model.iso3;
    this.level = model.level;
  }
}
