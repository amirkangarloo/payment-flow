import { ConnectorService } from '@lib/connector';
import { Injectable } from '@nestjs/common';
import { PayInstallmentReqDto } from 'libs/connector/dto';

@Injectable()
export class AppService {
  constructor(private readonly connectorService: ConnectorService) {}

  payInstallment(payload: PayInstallmentReqDto) {
    return this.connectorService.payInstallment(payload);
  }
}
