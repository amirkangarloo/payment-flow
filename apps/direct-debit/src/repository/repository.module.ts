import { Global, Module } from '@nestjs/common';
import { TransactionRepo } from 'apps/direct-debit/src/repository/transaction.service';

@Global()
@Module({
  providers: [TransactionRepo],
  exports: [TransactionRepo],
})
export class RepositoryModule {}
