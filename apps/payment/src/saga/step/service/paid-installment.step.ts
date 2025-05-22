import { ConnectorLoanService } from '@lib/connector';
import { Injectable } from '@nestjs/common';
import { PayInstallmentSagaDto } from 'apps/payment/src/saga/dto';
import { Step } from 'apps/payment/src/saga/step/step';

@Injectable()
export class PaidInstallmentStep extends Step<
  PayInstallmentSagaDto,
  PayInstallmentSagaDto
> {
  name: string = 'PaidInstallmentStep';

  constructor(private readonly connector: ConnectorLoanService) {
    super();
  }

  async invoke(payload: PayInstallmentSagaDto): Promise<PayInstallmentSagaDto> {
    const { installmentId } = payload;
    await this.connector.payInstallmentAndUnblock({
      installmentId,
    });

    return payload;
  }

  async rollback(
    payload: PayInstallmentSagaDto,
  ): Promise<PayInstallmentSagaDto> {
    const { installmentId } = payload;
    await this.connector.rollbackPayInstallmentAndUnblock({
      installmentId,
    });

    return payload;
  }
}
