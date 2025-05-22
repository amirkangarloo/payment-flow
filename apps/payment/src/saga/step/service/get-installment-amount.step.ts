import { ConnectorLoanService } from '@lib/connector';
import { Injectable } from '@nestjs/common';
import { PayInstallmentSagaDto } from 'apps/payment/src/saga/dto';
import { Step } from 'apps/payment/src/saga/step/step';

@Injectable()
export class GetInstallmentAmountStep extends Step<
  PayInstallmentSagaDto,
  PayInstallmentSagaDto
> {
  name: string = 'GetInstallmentAmountStep';

  constructor(private readonly connector: ConnectorLoanService) {
    super();
  }

  async invoke(payload: PayInstallmentSagaDto): Promise<PayInstallmentSagaDto> {
    const { installmentId } = payload;
    const res = await this.connector.getAmountAndBlockInstallment({
      installmentId,
    });

    return { ...payload, amount: res.amount };
  }

  async rollback(
    payload: PayInstallmentSagaDto,
  ): Promise<PayInstallmentSagaDto> {
    const { installmentId } = payload;
    await this.connector.rollbackGetAmountAndBlockInstallment({
      installmentId,
    });

    return payload;
  }
}
