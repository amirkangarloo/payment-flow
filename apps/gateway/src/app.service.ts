import { PayInstallmentReqDto } from '@lib/common';
import { ConnectorPaymentService } from '@lib/connector';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly connectorService: ConnectorPaymentService) {}

  payInstallment(payload: PayInstallmentReqDto) {
    return this.connectorService.payInstallment(payload);
  }
}
