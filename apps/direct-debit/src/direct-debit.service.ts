import { PayDirectDebitResDto } from '@lib/common';
import { Injectable } from '@nestjs/common';
import { TransactionRepo } from 'apps/direct-debit/src/repository/transaction.repo';

@Injectable()
export class DirectDebitService {
  constructor(private readonly repo: TransactionRepo) {}

  pay(amount: number): PayDirectDebitResDto {
    // Call bank API for debit

    const res = this.repo.create(amount);

    return { status: res.status };
  }
}
