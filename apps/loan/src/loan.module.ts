import { Module } from '@nestjs/common';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { RepositoryModule } from 'apps/loan/src/repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoanModule {}
