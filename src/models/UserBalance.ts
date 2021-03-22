import {BaseObject} from './BaseObject';
import {Transaction} from './Transaction';

export class UserBalance extends BaseObject {
  name: string;
  balance: number;
  readonly transactions: Transaction[];

  constructor(json: any) {
    super(json?.id);

    this.name = json?.date;
    this.balance = json?.date;

    this.transactions = json?.transactions?.map((x: any) => new Transaction(x));
  }
}
