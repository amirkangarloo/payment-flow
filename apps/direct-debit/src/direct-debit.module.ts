import { Module } from '@nestjs/common';
import { DirectDebitController } from './direct-debit.controller';
import { DirectDebitService } from './direct-debit.service';

@Module({
  imports: [],
  controllers: [DirectDebitController],
  providers: [DirectDebitService],
})
export class DirectDebitModule {}
