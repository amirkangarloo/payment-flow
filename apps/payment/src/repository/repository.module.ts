import { Global, Module } from '@nestjs/common';
import { InvoiceRepo } from 'apps/payment/src/repository/invoice.repo';

@Global()
@Module({
  providers: [InvoiceRepo],
  exports: [InvoiceRepo],
})
export class RepositoryModule {}
