import { ConnectorLoanService } from '@lib/connector';
import { Injectable } from '@nestjs/common';
import { InvoiceRepo } from 'apps/payment/src/repository/invoice.repo';
import { PayInstallmentSagaDto } from 'apps/payment/src/saga/dto';
import { Step } from 'apps/payment/src/saga/step/step';

@Injectable()
export class CreateInvoiceStep extends Step<
  PayInstallmentSagaDto,
  PayInstallmentSagaDto
> {
  name: string = 'CreateInvoiceStep';

  constructor(private readonly repo: InvoiceRepo) {
    super();
  }

  async invoke(payload: PayInstallmentSagaDto): Promise<PayInstallmentSagaDto> {
    const { amount } = payload;
    const res = await this.repo.create(amount);

    return { ...payload, invoiceId: res.id };
  }

  async rollback(
    payload: PayInstallmentSagaDto,
  ): Promise<PayInstallmentSagaDto> {
    const { invoiceId } = payload;
    await this.repo.rollbackCreate(invoiceId);

    return payload;
  }
}
