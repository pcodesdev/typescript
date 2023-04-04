export default class Reminder {
  id: number;
  iscomplete: boolean;
  constructor(public title: string) {
    this.id = Date.now();
    this.iscomplete = false;
  }
}
