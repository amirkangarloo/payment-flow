import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { SagaModule } from 'apps/payment/src/saga/saga.module';
import { RepositoryModule } from 'apps/payment/src/repository/repository.module';

@Module({
  imports: [RepositoryModule, SagaModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
