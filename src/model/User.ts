import { v4 as uuidv4} from 'uuid';
import Technology from './Technology';

export default class User{
  private id!: string;
  private name!: string;
  private username!: string;
  private technologies!: Technology[];

  constructor (name: string, username: string){
    this.id = uuidv4();
    this.name = name;
    this.username = username;
    this.technologies = [];
  }

  public addTech(tech: Technology){
    this.technologies.push(tech);
  }

  public toJSON() {
    return {
      id:this.id,
      name: this.name,
      username: this.username,
      technologies: this.technologies
    };
  }
    
  public getUsername(): string {
    return this.username;
  }
    
  public getTechs() {
    return this.technologies;    
  }
}