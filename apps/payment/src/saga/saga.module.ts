import { ConnectorModule } from '@lib/connector';
import { Module, Provider } from '@nestjs/common';
import { PayInstallmentSaga } from 'apps/payment/src/saga/pay-installment.saga';
import * as stepService from './step/service';

const stepServices: Provider[] = Object.values(stepService);

@Module({
  imports: [ConnectorModule],
  controllers: [],
  providers: [...stepServices, PayInstallmentSaga],
  exports: [PayInstallmentSaga],
})
export class SagaModule {}
