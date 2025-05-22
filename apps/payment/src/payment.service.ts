import {
  PayInstallmentReqDto,
  PayInstallmentResDto,
  PayInstallmentStatusEnum,
} from '@lib/common';
import { Injectable } from '@nestjs/common';
import { PayInstallmentSaga } from 'apps/payment/src/saga/pay-installment.saga';

@Injectable()
export class PaymentService {
  constructor(private readonly payInstallmentSaga: PayInstallmentSaga) {}

  payInstallment(payload: PayInstallmentReqDto): PayInstallmentResDto {
    console.log('payload: ', JSON.stringify(payload));

    return { status: PayInstallmentStatusEnum.Success };
  }
}
