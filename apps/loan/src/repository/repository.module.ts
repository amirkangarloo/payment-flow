import { Global, Module } from '@nestjs/common';
import { InstallmentRepo } from 'apps/loan/src/repository/installment.repo';

@Global()
@Module({
  providers: [InstallmentRepo],
  exports: [InstallmentRepo],
})
export class RepositoryModule {}
