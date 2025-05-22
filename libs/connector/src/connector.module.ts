import { Module, Provider } from '@nestjs/common';
import { ConnectorLoanService } from './connector-loan.service';
import { ConnectorPaymentService } from './connector-payment.service';
import { ConnectorDirectDebitService } from './connector-direct-debit.service';

const connectorServices: Provider[] = [
  ConnectorLoanService,
  ConnectorPaymentService,
  ConnectorDirectDebitService,
];
@Module({
  providers: connectorServices,
  exports: connectorServices,
})
export class ConnectorModule {}
