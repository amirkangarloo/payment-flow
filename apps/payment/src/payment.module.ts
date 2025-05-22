import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { RepositoryModule } from 'apps/direct-debit/src/repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
