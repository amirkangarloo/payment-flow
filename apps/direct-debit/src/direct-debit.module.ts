import { Module } from '@nestjs/common';
import { DirectDebitController } from './direct-debit.controller';
import { DirectDebitService } from './direct-debit.service';
import { RepositoryModule } from 'apps/direct-debit/src/repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [DirectDebitController],
  providers: [DirectDebitService],
})
export class DirectDebitModule {}
