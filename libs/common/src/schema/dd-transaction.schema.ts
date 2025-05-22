import { TransactionEnum } from '@lib/common/enum';

export class TransactionSchema {
  id: number;
  amount: number;
  status: TransactionEnum;
}
