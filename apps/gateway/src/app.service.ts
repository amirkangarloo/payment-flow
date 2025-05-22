import { PayInstallmentReqDto } from '@lib/common';
import { ConnectorService } from '@lib/connector';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly connectorService: ConnectorService) {}

  payInstallment(payload: PayInstallmentReqDto) {
    return this.connectorService.payInstallment(payload);
  }
}
