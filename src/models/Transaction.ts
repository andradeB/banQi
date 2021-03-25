import {BaseObject} from './BaseObject';

export class Transaction extends BaseObject {
  date: string;

  description: string;

  amount: number;

  constructor(json: any) {
    super(json.id);

    this.date = json?.date;
    this.description = json?.description;
    this.amount = json?.amount;
  }
}
