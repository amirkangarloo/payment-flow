import { Injectable } from '@nestjs/common';
import {
  TransactionRepo,
  TransactionSchema,
} from 'apps/direct-debit/src/repository/transaction.repo';

@Injectable()
export class DirectDebitService {
  constructor(private readonly repo: TransactionRepo) {}

  pay(amount: number): TransactionSchema {
    return this.repo.create(amount);
  }
}
