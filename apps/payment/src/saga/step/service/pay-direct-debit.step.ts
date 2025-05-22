import { TransactionEnum } from '@lib/common';
import { ConnectorDirectDebitService } from '@lib/connector';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PayInstallmentSagaDto } from 'apps/payment/src/saga/dto';
import { Step } from 'apps/payment/src/saga/step/step';

@Injectable()
export class PayDirectDebitStep extends Step<
  PayInstallmentSagaDto,
  PayInstallmentSagaDto
> {
  name: string = 'PayDirectDebitStep';

  constructor(private readonly connector: ConnectorDirectDebitService) {
    super();
  }

  async invoke(payload: PayInstallmentSagaDto): Promise<PayInstallmentSagaDto> {
    const { amount } = payload;
    const res = await this.connector.pay({
      amount,
    });

    // We can add some logic or validation in this method
    if (res.status !== TransactionEnum.Success) {
      throw new BadRequestException('some error');
    }

    return payload;
  }

  async rollback(
    payload: PayInstallmentSagaDto,
  ): Promise<PayInstallmentSagaDto> {
    return payload;
  }
}
