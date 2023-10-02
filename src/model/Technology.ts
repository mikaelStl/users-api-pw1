import { v4 as uuidv4 } from 'uuid';

export default class Technology {
  private id!: string;
  private title!: string;
  private done!: boolean;
  private deadline!: Date;
  private created_at!: Date;

  constructor(title: string, deadline: string) {
    this.id = uuidv4();
    this.title = title;
    this.done = false;
    this.deadline = new Date(deadline);
    this.created_at = new Date();
  }
}