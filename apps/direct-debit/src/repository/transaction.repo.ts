import { TransactionEnum, TransactionSchema } from '@lib/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionRepo {
  private data: TransactionSchema[] = [];

  constructor() {}

  create(amount: number): TransactionSchema {
    const newData = {
      id: this.data.length + 1,
      amount,
      status: TransactionEnum.Success,
    };

    this.data.push(newData);

    return newData;
  }
}
