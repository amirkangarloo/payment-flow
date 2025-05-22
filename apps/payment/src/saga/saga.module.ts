import { ConnectorModule } from '@lib/connector';
import { Module, Provider } from '@nestjs/common';
import { PayInstallmentSagaService } from 'apps/payment/src/saga/pay-installment.saga.service';
import * as stepService from './step/service';

const stepServices: Provider[] = Object.values(stepService);

@Module({
  imports: [ConnectorModule],
  controllers: [],
  providers: [...stepServices, PayInstallmentSagaService],
  exports: [PayInstallmentSagaService],
})
export class SagaModule {}
