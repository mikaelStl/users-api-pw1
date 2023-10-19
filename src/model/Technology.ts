import { v4 as uuidv4 } from 'uuid';

export default class Technology {
  private id!: string;
  private title!: string;
  private studied!: boolean;
  private deadline!: Date;
  private created_at!: Date;

  constructor(title: string, deadline: string) {
    this.id = uuidv4();
    this.title = title;
    this.studied = false;
    this.deadline = new Date(deadline);
    this.created_at = new Date();
  }

  public done(){
    this.studied = true;
  }

  public update(title: string, deadline: string){
    this.title = title;
    this.deadline = new Date(deadline);
  }

  public getID() {
    return this.id;    
  }
}