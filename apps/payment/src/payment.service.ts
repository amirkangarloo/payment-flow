import { PayInstallmentReqDto, PayInstallmentResDto } from '@lib/common';
import { Injectable } from '@nestjs/common';
import { PayInstallmentSagaService } from 'apps/payment/src/saga/pay-installment.saga.service';

@Injectable()
export class PaymentService {
  constructor(private readonly saga: PayInstallmentSagaService) {}

  async payInstallment(
    payload: PayInstallmentReqDto,
  ): Promise<PayInstallmentResDto> {
    return this.saga.execute(payload);
  }
}
