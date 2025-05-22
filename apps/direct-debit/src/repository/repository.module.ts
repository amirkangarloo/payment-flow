import { Global, Module } from '@nestjs/common';
import { TransactionRepo } from 'apps/direct-debit/src/repository/transaction.repo';

@Global()
@Module({
  providers: [TransactionRepo],
  exports: [TransactionRepo],
})
export class RepositoryModule {}
